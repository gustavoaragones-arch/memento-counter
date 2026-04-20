"use client";

import { useLiveCounter } from "@/lib/useLiveCounter";
import { formatCount } from "@/lib/counter";

export default function Home() {
  const { born, deceased } = useLiveCounter();

  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      {/* Born panel — light */}
      <section className="flex flex-1 flex-col items-center justify-center bg-[#FAFAF7] px-6 py-16 text-[#0A0A0A]">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-[#0A0A0A]/60">
          Ever born
        </p>
        <p
          className="mt-6 font-serif text-5xl tabular-nums sm:text-6xl md:text-7xl lg:text-8xl"
          aria-live="off"
        >
          {formatCount(born)}
        </p>
        <p className="mt-6 max-w-xs text-center font-sans text-sm text-[#0A0A0A]/60">
          Total humans who have ever lived, from the earliest recorded
          populations to this moment.
        </p>
      </section>

      {/* Deceased panel — dark */}
      <section className="flex flex-1 flex-col items-center justify-center bg-[#0A0A0A] px-6 py-16 text-[#FAFAF7]">
        <p className="font-sans text-sm uppercase tracking-[0.2em] text-[#FAFAF7]/60">
          Ever deceased
        </p>
        <p
          className="mt-6 font-serif text-5xl tabular-nums sm:text-6xl md:text-7xl lg:text-8xl"
          aria-live="off"
        >
          {formatCount(deceased)}
        </p>
        <p className="mt-6 max-w-xs text-center font-sans text-sm text-[#FAFAF7]/60">
          Approximately 93% of every human who has ever lived is no longer
          alive.
        </p>
      </section>
    </main>
  );
}
