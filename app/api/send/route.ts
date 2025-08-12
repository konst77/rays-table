// app/api/subscribe/route.ts
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render"
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import RaysTableWelcome from "@/app/components/email/Welcome";

const resend = new Resend(process.env.RESEND_API_KEY!);

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // server-only secret
  { auth: { persistSession: false } }
);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: "Invalid email" }, { status: 400 });
    }
    const normalized = email.toLowerCase();

    // 1) Check if already subscribed (avoid duplicate sends)
    const { data: existing, error: lookupErr } = await supabaseAdmin
      .from("email_list")
      .select("id, email, status")
      .eq("email", normalized)
      .maybeSingle();

    if (lookupErr) {
      console.error("Lookup error:", lookupErr);
      return NextResponse.json({ message: "Database error" }, { status: 500 });
    }

    if (existing?.status === "subscribed") {
      return NextResponse.json({ message: "Email already subscribed." }, { status: 409 });
    }

    // 2) Upsert FIRST with status 'pending'. If this fails, DO NOT SEND.
    // - If row exists (unsubscribed/bounced/etc.), keep row but set status to 'pending'
    const { data: upsertData, error: upsertErr } = await supabaseAdmin
      .from("email_list")
      .upsert(
        {
          email: normalized,
          status: "pending",          // <- important: send only if DB write OK
          source: "site_form",
        },
        { onConflict: "email" }
      )
      .select("id")                   // get id if you want for logging FK
      .maybeSingle();

    if (upsertErr) {
      console.error("Upsert failed (no send):", upsertErr);
      return NextResponse.json({ message: "Database error" }, { status: 500 });
    }

    const textFallback: string = await render(RaysTableWelcome(), { plainText: true });

    // 3) Send the welcome email (only after DB success)
    const { data: sendData, error: sendErr } = await resend.emails.send({
      from: `Ray from Ray's Table <ray@tablebyray.com>`,
      to: normalized,
      subject: "Welcome to Ray’s Table 🍽️",
      react: RaysTableWelcome(),
      text: textFallback,  
      tags: [
        { name: "list", value: "rays-table" },
        { name: "template", value: "welcome-email" },
        { name: "type", value: "transactional" },
      ],
    });

    if (sendErr) {
      console.error("Send failed, rolling back status:", sendErr);

      // Optional rollback: either delete the pending row or mark as 'send_failed'
      // A) delete:
      // await supabaseAdmin.from("email_list").delete().eq("email", normalized);

      // B) mark as failed (preferred to keep audit trail):
      await supabaseAdmin
        .from("email_list")
        .update({ status: "send_failed" })
        .eq("email", normalized);

      return NextResponse.json({ message: "Email send failed" }, { status: 502 });
    }

    // 4) Mark subscribed + log 'sent' event
    const [{ error: statusErr }, { error: eventErr }] = await Promise.all([
      supabaseAdmin
        .from("email_list")
        .update({ status: "subscribed" })
        .eq("email", normalized),
      supabaseAdmin.from("email_events").insert([
        {
          email: normalized,
          template: "welcome-email",
          event: "sent",
          provider_id: sendData?.id ?? null,
          meta: null,
        },
      ]),
    ]);

    if (statusErr) {
      console.error("Status flip error (sent but not marked):", statusErr);
      // We won't fail the request; the user got the email. You can fix status later via webhook or a job.
    }
    if (eventErr) {
      console.warn("Event log warning:", eventErr);
    }

    return NextResponse.json(
      { message: "Subscribed and welcome email sent!" },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Internal server error:", err?.message || err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
