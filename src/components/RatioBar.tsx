"use client";

import { useLiveCounter } from "@/lib/useLiveCounter";

export function RatioBar() {
  const { born, living } = useLiveCounter();
  const livingPct = (living / born) * 100;
  const deceasedPct = 100 - livingPct;

  // Living-per-deceased ratio, as "1 in every N"
  const oneInN = Math.round(born / living);

  return (
    <section className="border-y border-[#0A0A0A]/10 bg-[#FAFAF7] px-6 py-12 text-[#0A0A0A]">
      <div className="mx-auto max-w-4xl">
        <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
          The ratio
        </p>
        <p className="mt-4 text-center font-serif text-2xl leading-snug sm:text-3xl md:text-4xl">
          1 in every {oneInN} humans who ever lived is alive right now.
        </p>

        {/* The bar */}
        <div className="mt-10" role="img" aria-label={`${deceasedPct.toFixed(1)} percent deceased, ${livingPct.toFixed(1)} percent living`}>
          <div className="flex h-3 w-full overflow-hidden rounded-full border border-[#0A0A0A]/10">
            <div
              className="h-full bg-[#0A0A0A]"
              style={{ width: `${deceasedPct}%` }}
            />
            <div
              className="h-full bg-[#FAFAF7]"
              style={{ width: `${livingPct}%` }}
            />
          </div>

          {/* Labels */}
          <div className="mt-3 flex justify-between font-sans text-xs uppercase tracking-wider text-[#0A0A0A]/60">
            <span>
              {deceasedPct.toFixed(1)}% deceased
            </span>
            <span>
              {livingPct.toFixed(1)}% living
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
