"use client";

import { useEffect, useState, useRef } from "react";
import { computeSessionDelta, formatCount } from "@/lib/counter";

export function SessionCounter() {
  // Lock the session start time on first render, never update it.
  const sessionStartRef = useRef<number>(Date.now());

  const [delta, setDelta] = useState(() =>
    computeSessionDelta(sessionStartRef.current)
  );

  useEffect(() => {
    const rafRef = { current: 0 };
    const tick = () => {
      setDelta(computeSessionDelta(sessionStartRef.current));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const { bornInSession, deceasedInSession, elapsedSeconds } = delta;

  // Don't show until at least 2 seconds have passed — feels silly with "0 people"
  if (elapsedSeconds < 2) {
    return (
      <section className="bg-[#FAFAF7] px-6 py-16 text-[#0A0A0A]">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
            Since you arrived
          </p>
          <p className="mt-6 text-center font-serif text-2xl text-[#0A0A0A]/30 sm:text-3xl">
            Counting…
          </p>
        </div>
      </section>
    );
  }

  const elapsedLabel = formatElapsed(elapsedSeconds);

  return (
    <section className="bg-[#FAFAF7] px-6 py-16 text-[#0A0A0A]">
      <div className="mx-auto max-w-4xl">
        <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
          Since you arrived — {elapsedLabel}
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-12">
          <div className="text-center">
            <p className="font-serif text-4xl tabular-nums sm:text-5xl md:text-6xl">
              {formatCount(bornInSession)}
            </p>
            <p className="mt-2 font-sans text-sm uppercase tracking-wider text-[#0A0A0A]/60">
              born
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl tabular-nums sm:text-5xl md:text-6xl">
              {formatCount(deceasedInSession)}
            </p>
            <p className="mt-2 font-sans text-sm uppercase tracking-wider text-[#0A0A0A]/60">
              died
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatElapsed(seconds: number): string {
  if (seconds < 60) {
    return `${Math.floor(seconds)} seconds`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  if (minutes < 60) {
    return `${minutes} min ${remainingSeconds}s`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}
