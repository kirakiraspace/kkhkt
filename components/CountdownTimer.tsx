'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  seconds: number;
  onComplete: () => void;
  isPaused?: boolean;
}

export default function CountdownTimer({ seconds, onComplete, isPaused }: CountdownTimerProps) {
  const [remaining, setRemaining] = useState(seconds);
  const onCompleteRef = useRef(onComplete);
  const firedRef = useRef(false);
  onCompleteRef.current = onComplete;

  // Reset when key/seconds change (component remounts via key prop)
  useEffect(() => {
    setRemaining(seconds);
    firedRef.current = false;
  }, [seconds]);

  // Countdown tick
  useEffect(() => {
    if (isPaused || remaining <= 0) return;
    const timer = setTimeout(() => {
      setRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isPaused, remaining]);

  // Fire onComplete when reaching 0 — use setTimeout to escape React commit phase
  useEffect(() => {
    if (remaining !== 0 || firedRef.current) return;
    firedRef.current = true;
    const handle = window.setTimeout(() => {
      onCompleteRef.current();
    }, 50);
    return () => window.clearTimeout(handle);
  }, [remaining]);

  const progress = remaining / seconds;
  const isUrgent = remaining <= 2;
  const circumference = 2 * Math.PI * 40;

  return (
    <div className="relative w-24 h-24 mx-auto">
      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r="40" fill="none" stroke="#F1E6DD" strokeWidth="6" />
        <motion.circle
          cx="48"
          cy="48"
          r="40"
          fill="none"
          stroke={isUrgent ? '#C06A6A' : '#F6B88F'}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          animate={isUrgent ? { scale: [1, 1.05, 1] } : {}}
          transition={isUrgent ? { repeat: Infinity, duration: 0.5 } : {}}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-2xl font-bold ${isUrgent ? 'text-status-error-text' : 'text-ink'}`}>
          {remaining}
        </span>
      </div>
    </div>
  );
}
