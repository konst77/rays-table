import {OpenAI} from 'openai';
import {NextRequest, NextResponse} from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    const {topic} = await req.json();

    const completion = await openai.chat.completion.create({
        model: 'gpt-4',
        message: [
            {
                role: 'system',
                content: 'You are a chef and a email content director, with 10 years of experiene with writing recipe newsletter stories.'
            },
            {
                role: 'user',
content: "Generate a simple and healthy recipe that suits the branding and core values of Ray's Table for our email subscribers."
            }
        ]
    })

    const suggestions = completion.choices[0].message.content;
    return NextResponse.json({ suggestions };)
}