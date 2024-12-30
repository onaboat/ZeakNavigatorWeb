'use client';
import { useEffect, useState } from 'react';

export default function LaunchPromo() {
  const launchDate = new Date('2025-01-15T00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="launch-promo" className="py-6 sm:py-10">
      <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-secondary">
          Launch
        </h2>
        <div className="flex justify-center items-center gap-3 sm:gap-8 text-primary">
          <span className="countdown font-mono text-3xl sm:text-5xl lg:text-7xl">
            <span style={{ '--value': timeLeft.days } as { [key: string]: number }}></span>d
          </span>

          <div className="h-12 sm:h-16 lg:h-20 w-[1px] bg-primary opacity-20"></div>

          <span className="countdown font-mono text-3xl sm:text-5xl lg:text-7xl">
            <span style={{ '--value': timeLeft.hours } as { [key: string]: number }}></span>h
          </span>

          <div className="h-12 sm:h-16 lg:h-20 w-[1px] bg-primary opacity-20"></div>

          <span className="countdown font-mono text-3xl sm:text-5xl lg:text-7xl">
            <span style={{ '--value': timeLeft.minutes } as { [key: string]: number }}></span>m
          </span>

          <div className="h-12 sm:h-16 lg:h-20 w-[1px] bg-primary opacity-20"></div>

          <span className="countdown font-mono text-3xl sm:text-5xl lg:text-7xl">
            <span style={{ '--value': timeLeft.seconds } as { [key: string]: number }}></span>s
          </span>
        </div>
      </div>
    </section>
  );
} 