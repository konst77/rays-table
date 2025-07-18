'use client';

import { useState } from 'react';
import { toast } from 'sonner';

interface ScheduledItem {
    content: string;
    sendAt: string;
}

export default function NewsletterGenerator() {
    const [topic, setTopic] = useState('');
    const [draft, setDraft] = useState('');           // the generated content
    const [loading, setLoading] = useState(false);
    const [sendAt, setSendAt] = useState('');         // ISO datetime
    const [scheduled, setScheduled] = useState<ScheduledItem[]>([]);

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

    // 2. schedule the newsletter
    async function scheduleSend() {
        if (!draft || !sendAt) {
            toast.error('Please generate a draft and pick a send date/time.');
            return;
        }

        try {
            const res = await fetch('/api/scheduler', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: draft, sendAt }),
            });
            const body = await res.json();
            if (!res.ok) throw new Error(body.message || 'Schedule failed');
            toast.success('Newsletter scheduled! 🎉');
            setScheduled((s) => [...s, { content: draft, sendAt }]);
            setDraft('');
            setSendAt('');
        } catch (err: any) {
            toast.error(err.message);
        }
    }

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-6">
            <h2 className="text-2xl font-bold">✍️ Newsletter Editor</h2>

            {/* Topic input & generate */}
            <div className="space-y-2">
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

            {/* Date/time picker & schedule */}
            {draft && (
                <div className="space-y-2">
                    <label className="font-medium">Schedule Send</label>
                    <input
                        type="datetime-local"
                        value={sendAt}
                        onChange={(e) => setSendAt(e.target.value)}
                        className="border p-2 rounded"
                    />
                    <button
                        onClick={scheduleSend}
                        className="px-4 py-2 bg-purple-600 text-white rounded"
                    >
                        Schedule Newsletter
                    </button>
                </div>
            )}

            {/* List of scheduled items */}
            {scheduled.length > 0 && (
                <div>
                    <h3 className="font-semibold">Scheduled Items</h3>
                    <ul className="space-y-1">
                        {scheduled.map((item, i) => (
                            <li key={i} className="bg-gray-100 p-2 rounded">
                                <strong>Send At:</strong> {new Date(item.sendAt).toLocaleString()}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
