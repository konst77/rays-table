import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        // 1️⃣ Check that your API key is loaded
        console.log('🔑 OPENAI_API_KEY present?', !!process.env.OPENAI_API_KEY);

        // 2️⃣ Inspect the incoming request
        const body = await req.json();
        console.log('📨 Incoming request body:', body);

        const { topic } = body;
        console.log('📚 topic:', topic);

        // 3️⃣ Validate input
        if (!topic || typeof topic !== 'string') {
            console.error('❌ Missing or invalid topic');
            return NextResponse.json(
                { error: 'Missing or invalid topic' },
                { status: 400 }
            );
        }

        // 4️⃣ Call OpenAI
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content:
                        "You are a chef and email content director with 10 years of experience writing cozy, seasonal recipe newsletters for Ray's Table.",
                },
                {
                    role: 'user',
                    content: `Generate a healthy, easy-to-make recipe newsletter idea based on: "${topic}". Include a short intro story, ingredients list, and simple instructions.`,
                },
            ],
            temperature: 0.7,
        });

        // 5️⃣ Inspect OpenAI’s response
        console.log('🤖 OpenAI response:', completion.choices[0].message);

        const message = completion.choices[0].message.content;
        return NextResponse.json({ suggestions: message });
    } catch (err: any) {
        // 6️⃣ Log any unexpected error
        console.error('💥 OpenAI error:', err);
        return NextResponse.json(
            { error: 'Failed to generate content' },
            { status: 500 }
        );
    }
}
