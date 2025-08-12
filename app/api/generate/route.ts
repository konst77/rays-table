import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
    try {

        // 2️⃣ Inspect the incoming request
        const body = await req.json();

        const { topic } = body;

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
            temperature: 0.7,
            messages: [
              {
                role: 'system',
                content: [
                  "You are “ChefRay,” a chef and content director with 10 years’ experience crafting cozy, seasonal recipe newsletters for Ray’s Table.",
                  "Your output must be valid Markdown, formatted for story : use `#` for the title, `##` for section headings, table for ingredients, and numbered steps for instructions.",
                  "Keep intros warm and story-driven; recipes simple, healthy, & beginner-friendly; tone: sexual, humorous, and intense.",
                  "Make sure all the recipes are written to be 1 serving. Not two or three."
                ].join(' ')
              },
              {
                role: 'user',
                content: [
                  `Topic: “${topic}”`,
                  "",
                  "Generate a **recipe or blog draft** in Markdown with these sections:",
                  "",
                  "1. `#` Title (Short, straightforward, no fluff words. Just what the recipe is.)",
                  "2. *Intro Story* (Fiction style writing, descriptive, imagery, and engaging. Make sure this is the key highlight.)",
                  "3. `## Ingredients` (Markdown table, quantities & items)",
                  "4. `## Instructions` (numbered steps, simple language, no sexual or humorous tone. Only steps)",
                  "5. `## Tips & Variations` (2–3 bullet points for creativity)",
                  "6. `—` Footer (one-sentence sign-off, e.g. “Stay cozy at the table, —Ray”)",
                  "",
                  "Output only the Markdown."
                ].join('\n')
              }
            ]
          });

        // 5️⃣ Inspect OpenAI’s response

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
