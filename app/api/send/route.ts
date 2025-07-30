import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
import WelcomeEmail from '@/app/components/email/WelcomeEmail'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // 1. Read incoming request
    const body = await req.json();

    const { email } = body;

    // 2. Validate email
    if (!email || typeof email !== 'string') {
      console.error('❌ Invalid or missing email:', email);
      return NextResponse.json({ message: 'Invalid email provided' }, { status: 400 });
    }

    // 3. Insert into Supabase
    const { error: dbError } = await supabase
      .from('email_list') // ✅ Confirm table name exactly matches Supabase
      .insert([{ email }]);

    if (dbError) {
      if (dbError.code === '23505') { // unique_violation in PostgreSQL
        console.warn('⚠️ Email already exists in database:', email);
        return NextResponse.json({ message: 'Email already subscribed.' }, { status: 409 }); // 409 Conflict
      }

      console.error('🔥 Supabase insert error:', dbError);
      return NextResponse.json({ message: 'Database error' }, { status: 500 });
    }

    // 4. Send confirmation email via Resend
    const emailResponse = await resend.emails.send({
      from: `Ray's Table <ray@tablebyray.com>`, // ✅ Use this if konstdesignstudio@gmail.com is not verified
      to: email,
      subject: `Welcome to the Table`,
      react: WelcomeEmail(),
    });

    return NextResponse.json(
      { message: 'Subscribed and confirmation email sent!' },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('💥 Internal server error:', err.message, err.stack);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
