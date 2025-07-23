'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function SubscribeForm() {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success('You got yourself a seat on the table 🎉', {
          description: "🥳 Let's create a memory together.",
        });
        setEmail('');
      } else {
        toast.error(data.message || 'Uh oh, something went wrong 😓');
      }
    } catch (error) {
      console.error('Network error:', error);
      toast.error('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 md:mt-10 flex flex-row gap-4 text-[14px] md:text-[16px]"
    >
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="border border-[#767676] bg-[#000] p-2 px-4 rounded-full w-full md:w-[400px]"
        disabled={isLoading}
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded-full disabled:opacity-50 flex items-center justify-center gap-2 transition duration-150"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <svg
              className="w-6 h-6 animate-spin text-white"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="8"
              />

              {/* Orbiting inner circle (placed on the edge of the ring) */}
              <circle
                cx="50"
                cy="10"
                r="6"
                fill="currentColor"
              />
            </svg>
            Subscribing
          </>
        ) : (
          'Subscribe'
        )}
      </button>
    </form>
  );
}
