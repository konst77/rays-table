// app/api/resend/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    // Resend event shape (tolerant parsing)
    const type = payload?.type || payload?.event;          // 'delivered', 'bounced', 'opened', etc.
    const msgId = payload?.data?.id || payload?.id || null;
    const to =
      payload?.data?.to?.[0] ||
      payload?.data?.recipient ||
      payload?.to ||
      null;

    if (!type || !to) return NextResponse.json({ ok: true });

    const email = String(to).toLowerCase();

    // Always log the event
    await supabaseAdmin.from("email_events").insert([{
      email,
      template: "welcome-email",
      event: type,
      provider_id: msgId,
      meta: payload
    }]);

    // State transitions
    if (type === "delivered") {
      await supabaseAdmin
        .from("email_list")
        .update({ status: "subscribed" })
        .eq("email", email);
    } else if (type === "bounced" || type === "complained") {
      await supabaseAdmin
        .from("email_list")
        .update({ status: type })
        .eq("email", email);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Webhook error:", e);
    // Return 200 so Resend doesn't retry forever. Log & alert on failures.
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
