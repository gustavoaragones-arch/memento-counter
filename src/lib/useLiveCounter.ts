"use client";

import { useEffect, useState, useRef } from "react";
import { computeSnapshot, type CounterSnapshot } from "./counter";

/**
 * Ticks at ~60fps via requestAnimationFrame. Reads Date.now() each frame
 * rather than incrementing, so values stay correct across tab backgrounding.
 */
export function useLiveCounter(): CounterSnapshot {
  const [snapshot, setSnapshot] = useState<CounterSnapshot>(() =>
    computeSnapshot()
  );
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      setSnapshot(computeSnapshot());
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return snapshot;
}
