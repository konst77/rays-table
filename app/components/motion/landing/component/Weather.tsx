import { useEffect, useState } from 'react';

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
}

export default function SeattleWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY // Replace this
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Seattle,US&units=imperial&appid=${apiKey}`;
        const res = await fetch(url);
        console.log('Weather API Key:', process.env.NEXT_PUBLIC_OPENWEATHER_KEY);
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }

        const data = await res.json();
        console.log('Weather API response:', data); // 👈 check this in console

        // Defensive checks
        if (!data?.main?.temp || !data.weather || !data.weather[0]) {
          throw new Error('Missing expected weather data');
        }

        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        setWeather({ temp, description, icon });
      } catch (err: any) {
        console.error('Weather fetch failed:', err);
        setError(err.message || 'Unknown error');
      }
    };

    fetchWeather();
  }, []);

  if (error) {
    return <p className="text-sm text-gray-400">Weather unavailable: {error}</p>;
  }

  if (!weather) return null;

  return (
    <div className="flex items-center text-[14px] gap-2">
      <img src={weather.icon} alt={weather.description} className="w-6 h-6" />
      <p>{weather.temp}°F</p>
      <p className="capitalize">{weather.description}</p>
    </div>
  );
}

