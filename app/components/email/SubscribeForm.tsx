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
        toast.error(data.message || 'Something went wrong.');
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
        className="bg-orange-500 text-white px-4 py-2 rounded-full disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </form>
  );
}
