"use client";

import { useState } from "react";

export function Methodology() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-t border-[#0A0A0A]/10 bg-[#0A0A0A] px-6 py-16 text-[#FAFAF7]">
      <div className="mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-center justify-between text-left"
          aria-expanded={open}
        >
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#FAFAF7]/60 group-hover:text-[#FAFAF7]">
            Methodology & Sources
          </span>
          <span
            className="font-sans text-xs uppercase tracking-[0.2em] text-[#FAFAF7]/60 group-hover:text-[#FAFAF7]"
            aria-hidden="true"
          >
            {open ? "— Close" : "+ Read"}
          </span>
        </button>

        {open && (
          <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-[#FAFAF7]/80">
            <p>
              Memento displays a live estimate of the total number of humans
              who have ever been born and the total who have ever died. These
              are cumulative historical totals, not current population figures.
            </p>

            <p>
              The baseline values are calibrated to{" "}
              <span className="text-[#FAFAF7]">April 19, 2026 at 00:00 UTC</span>
              . From that moment forward, the counters increment in real time
              using global average birth and death rates published by the
              United Nations World Population Prospects.
            </p>

            <div>
              <p className="mb-2 text-[#FAFAF7]">Baseline values</p>
              <ul className="space-y-1 pl-5 [&>li]:list-disc [&>li]:marker:text-[#FAFAF7]/40">
                <li>Total humans ever born: approximately 117.03 billion</li>
                <li>Currently living: approximately 8.12 billion</li>
                <li>Total humans ever deceased: approximately 108.91 billion</li>
              </ul>
            </div>

            <div>
              <p className="mb-2 text-[#FAFAF7]">Live rates (global)</p>
              <ul className="space-y-1 pl-5 [&>li]:list-disc [&>li]:marker:text-[#FAFAF7]/40">
                <li>Births: approximately 4.3 per second</li>
                <li>Deaths: approximately 2.0 per second</li>
              </ul>
            </div>

            <div>
              <p className="mb-2 text-[#FAFAF7]">Sources</p>
              <ul className="space-y-2 pl-5 [&>li]:list-disc [&>li]:marker:text-[#FAFAF7]/40">
                <li>
                  Population Reference Bureau (2024). <em>How Many People Have
                  Ever Lived on Earth?</em> — the foundational estimate of
                  cumulative human births, beginning from approximately 50,000
                  BCE.
                </li>
                <li>
                  United Nations, Department of Economic and Social Affairs,
                  Population Division (2024). <em>World Population Prospects
                  2024</em>.
                </li>
                <li>
                  CIA World Factbook — global birth and death rate reference
                  figures.
                </li>
              </ul>
            </div>

            <p className="text-[#FAFAF7]/60">
              All cumulative-historical figures are estimates. Demographic
              models for prehistoric and ancient populations carry meaningful
              uncertainty; different models produce totals ranging from
              roughly 100 to 125 billion. Memento uses the Population
              Reference Bureau&apos;s 2024 midpoint as its anchor. The tool is
              designed for illustration and reflection, not for statistical
              research.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
