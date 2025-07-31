'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function NewsletterGenerator() {
    const [topic, setTopic] = useState('');
    const [draft, setDraft] = useState('');           // the generated content
    const [loading, setLoading] = useState(false);

    // 1. generate or regenerate draft
    async function generate(contentPrompt: string) {
        setLoading(true);
        try {
            const res = await fetch('/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ topic: contentPrompt }),
            });
            const body = await res.json();
            if (!res.ok) throw new Error(body.error || 'Failed to generate');
            setDraft(body.suggestions);
        } catch (err: any) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="my-10 p-4 md:p-10 flex flex-col gap-4 md:gap-10 md:grid md:grid-cols-2 text-white">
            {/* Topic input & generate */}
            <div className="md:min-h-[600px] space-y-2">
                <h2 className="text-2xl">Chat</h2>
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter a topic…"
                    className="w-full border p-2 rounded"
                    disabled={loading}
                />
                <button
                    onClick={() => generate(topic)}
                    disabled={loading || !topic.trim()}
                    className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
                >
                    {loading ? 'Generating…' : 'Generate Draft'}
                </button>
            </div>

            {/* Draft editor & regenerate */}
            {draft && (
                <div className="space-y-2">
                    <label className="font-medium">Draft Content</label>
                    <textarea
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        rows={10}
                        className="w-full border p-2 rounded font-mono"
                    />
                    <button
                        onClick={() => generate(draft)}
                        disabled={loading}
                        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
                    >
                        {loading ? 'Regenerating…' : 'Regenerate from Edits'}
                    </button>
                </div>
            )}
        </div>
    );
}
