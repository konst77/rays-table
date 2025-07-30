import { useEffect, useState, useRef } from 'react';

export default function SeattleTime() {
  const [time, setTime] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const retryTimeout = useRef<NodeJS.Timeout | null>(null);

  const fetchTime = async () => {
    try {
      const res = await fetch('https://worldtimeapi.org/api/timezone/America/Los_Angeles');
      if (!res.ok) throw new Error('Failed to fetch time');

      const data = await res.json();
      const date = new Date(data.datetime);
      const formatted = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      setTime(formatted);
      setError(null); // clear error state on success
    } catch (err: any) {
      console.error('Time fetch failed:', err);
      setError('Time unavailable. Retrying...');

      // Retry after 15 seconds if failed
      retryTimeout.current = setTimeout(fetchTime, 15000);
    }
  };

  useEffect(() => {
    fetchTime(); // Initial fetch

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchTime(); // Re-fetch on tab focus
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (retryTimeout.current) clearTimeout(retryTimeout.current);
    };
  }, []);

  if (error && !time) {
    return <p className="text-[14px]">{error}</p>;
  }

  if (!time) return null;

  return (
    <div className="text-[14px]">
      <p>Seattle, WA, {time}</p>
    </div>
  );
}
