import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
        return NextResponse.json({ message: 'Invalid email provided' }, { status: 400 });
    }

    try {
        // 1. Store email in Supabase
        const { data, error } = await supabase
            .from('subscribers')
            .insert([{ email }]);

        if (error) {
            console.error('Supabase Insert Error:', error.message);
            return NextResponse.json({ message: 'Email already subscribed or error occurred' }, { status: 400 });
        }

        // 2. Send confirmation email via Resend
        await resend.emails.send({
            from: `Ray's Table <konstdesignstudio@gmail.com>`,
            to: email,
            subject: 'Thanks for Subscribing!',
            html: '<p>Welcome to our newsletter. 🎉</p>',
        });

        return NextResponse.json({ message: 'Subscribed and confirmation email sent!' });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ message: 'Subscription failed' }, { status: 500 });
    }
}
