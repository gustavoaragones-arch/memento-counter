"use client";

import { useLiveCounter } from "@/lib/useLiveCounter";
import { formatCount, formatApproxScale } from "@/lib/counter";

export function Hero() {
  const { born, deceased } = useLiveCounter();

  return (
    <section className="relative flex h-screen flex-col md:flex-row">
      {/* Born panel — light */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#FAFAF7] px-6 py-12 text-[#0A0A0A]">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-[#0A0A0A]/60">
          Ever born
        </p>
        <p className="mt-6 font-serif text-5xl tabular-nums sm:text-6xl md:text-7xl lg:text-8xl">
          {formatCount(born)}
        </p>
        <p className="mt-3 font-sans text-xs uppercase tracking-[0.15em] text-[#0A0A0A]/40">
          {formatApproxScale(born)}
        </p>
        <p className="mt-6 max-w-xs text-center font-sans text-sm leading-relaxed text-[#0A0A0A]/60">
          Total humans who have ever lived, from the earliest recorded
          populations to this moment.
        </p>
      </div>

      {/* Deceased panel — dark */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#0A0A0A] px-6 py-12 text-[#FAFAF7]">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-[#FAFAF7]/60">
          Ever deceased
        </p>
        <p className="mt-6 font-serif text-5xl tabular-nums sm:text-6xl md:text-7xl lg:text-8xl">
          {formatCount(deceased)}
        </p>
        <p className="mt-3 font-sans text-xs uppercase tracking-[0.15em] text-[#FAFAF7]/50">
          {formatApproxScale(deceased)}
        </p>
        <p className="mt-6 max-w-xs text-center font-sans text-sm leading-relaxed text-[#FAFAF7]/60">
          Approximately 93% of every human who has ever lived is no longer
          alive.
        </p>
      </div>

      {/* Scroll affordance */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs uppercase tracking-[0.3em] text-[#0A0A0A]/40 mix-blend-difference">
        ↓ More below
      </div>
    </section>
  );
}
