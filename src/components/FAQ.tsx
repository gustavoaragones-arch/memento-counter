"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/faq";

export function FAQ() {
  return (
    <section className="border-t border-[#0A0A0A]/10 bg-[#FAFAF7] px-6 py-16 text-[#0A0A0A]">
      <div className="mx-auto max-w-3xl">
        <p className="text-center font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
          Frequently asked
        </p>
        <h2 className="mt-4 text-center font-serif text-3xl sm:text-4xl">
          Questions about the count
        </h2>

        <div className="mt-12 space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <FAQRow key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQRow({ item }: { item: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#0A0A0A]/10 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-lg leading-snug sm:text-xl">
          {item.question}
        </span>
        <span
          className="mt-1 flex-shrink-0 font-sans text-xs uppercase tracking-wider text-[#0A0A0A]/50"
          aria-hidden="true"
        >
          {open ? "—" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-6 font-sans text-base leading-relaxed text-[#0A0A0A]/80">
          {item.answer}
        </p>
      )}
    </div>
  );
}
