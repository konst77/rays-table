'use client'

import { useState } from 'react';

export default function SubscribeForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const res = await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        setMessage(data.message);
    }

    return (
        <form onSubmit={handleSubmit} className="my-4 md:mt-10 flex flex-row gap-4 text-[14px] md:text-[16px]">
            <p>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="border border-[#767676] bg-[#000] p-2 px-4 rounded-full w-full md:w-[400px]"
                />
            </p>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-full">
                <p>
                    Subscribe
                </p>
            </button>
            {message && <p>{message}</p>}
        </form>
    );
}
