import type { Metadata } from "next";
import { CompanionPageLayout } from "@/components/CompanionPageLayout";

export const metadata: Metadata = {
  title: "How many people are born every second? | Memento",
  description:
    "Approximately 4.3 humans are born every second worldwide, based on United Nations World Population Prospects data. That's about 258 per minute and 385 million per year.",
  alternates: { canonical: "https://mementocount.com/births-per-second" },
};

export default function BirthsPerSecondPage() {
  return (
    <CompanionPageLayout
      eyebrow="Births per second"
      title="How many people are born every second?"
    >
      <p>
        Approximately <strong>4.3 humans are born every second</strong> worldwide. That figure is the current global average from the United Nations Department of Economic and Social Affairs, Population Division, drawn from the World Population Prospects 2024 revision.
      </p>

      <p>Broken down across larger units of time, the global birth rate works out to:</p>
      <ul>
        <li>About 258 births per minute</li>
        <li>About 15,500 births per hour</li>
        <li>About 372,000 births per day</li>
        <li>About 2.6 million births per week</li>
        <li>Roughly 385 million births per year</li>
      </ul>

      <h2>Why the rate is not constant</h2>
      <p>
        The 4.3 per second figure is a global average. Real births do not arrive at a steady tick — they cluster by time zone, season, and population distribution. The figure also reflects a long-running decline in the global total fertility rate, which has fallen from about 5 children per woman in 1960 to about 2.3 today. Birth rates remain highest in sub-Saharan Africa and lowest in East Asia and parts of Europe.
      </p>

      <h2>How this feeds the counter</h2>
      <p>
        Memento uses 4.3 births per second as the multiplier applied to elapsed time since the baseline. Every second that passes, the cumulative &ldquo;ever born&rdquo; figure increases by 4.3. Over an hour of keeping the page open, the counter will climb by roughly 15,500. Over a day, by about 372,000 — a small town&apos;s worth of new humans, every 24 hours.
      </p>

      <p>
        See the <a href="/methodology">methodology page</a> for the full baseline values, or return to the <a href="/">live counter</a> to watch the number climb.
      </p>
    </CompanionPageLayout>
  );
}
