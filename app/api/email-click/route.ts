import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { ref, email } = await req.json();

    if (!ref) {
      return NextResponse.json({ message: "Missing ref" }, { status: 400 });
    }

    // Log into email_events
    const { error } = await supabase.from("email_events").insert([
      {
        email: email || null, // you may not always have this
        template: "welcome-email",
        event: "clicked",
        meta: { ref },
      },
    ]);

    if (error) {
      console.error("Error logging click:", error);
      return NextResponse.json({ message: "Error logging click" }, { status: 500 });
    }

    return NextResponse.json({ message: "Click logged" }, { status: 200 });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
