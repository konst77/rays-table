import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const { email } = await req.json();
    if (!email || typeof email !== 'string') {
        return NextResponse.json({ message: 'Invalid email provided' }, { status: 400 });
    }

    try {
        const data = await resend.emails.send({
            from: 'Your Newsletter <onboarding@resend.dev>',
            to: email,
            subject: 'Welcome to Our Newsletter!',
            html: '<p>Thank you for subscribing! 🎉</p>',
        });

        return NextResponse.json({ message: 'Subscription email sent', data });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
