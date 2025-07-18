import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// 1) ensure you have a "newsletter_schedules" table in Supabase with:
//    id (bigint, identity), content text, send_at timestamptz
export async function POST(req: NextRequest) {
    const { content, sendAt } = await req.json();
    if (!content || !sendAt) {
        return NextResponse.json({ message: 'Missing content or sendAt' }, { status: 400 });
    }

    // 2) store the schedule
    const { error } = await supabase
        .from('newsletter_schedules')
        .insert([{ content, send_at: sendAt }]);

    if (error) {
        console.error('Schedule insert error:', error);
        return NextResponse.json({ message: 'Failed to schedule' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Scheduled successfully' });
}
