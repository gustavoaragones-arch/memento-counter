import type { Metadata } from "next";
import { CompanionPageLayout } from "@/components/CompanionPageLayout";

export const metadata: Metadata = {
  title: "How many people die every second? | Memento",
  description:
    "Approximately 2.0 humans die every second worldwide, based on United Nations World Population Prospects data. That's about 120 per minute and 63 million per year.",
  alternates: { canonical: "https://mementocount.com/deaths-per-second" },
};

export default function DeathsPerSecondPage() {
  return (
    <CompanionPageLayout
      eyebrow="Deaths per second"
      title="How many people die every second?"
    >
      <p>
        Approximately <strong>2.0 humans die every second</strong> worldwide. The figure comes from the United Nations Department of Economic and Social Affairs, Population Division, drawn from the World Population Prospects 2024 revision.
      </p>

      <p>Across larger units of time, the global death rate works out to:</p>
      <ul>
        <li>About 120 deaths per minute</li>
        <li>About 7,200 deaths per hour</li>
        <li>About 173,000 deaths per day</li>
        <li>About 1.2 million deaths per week</li>
        <li>Roughly 63 million deaths per year</li>
      </ul>

      <h2>Why deaths rise even as life expectancy rises</h2>
      <p>
        Global life expectancy has climbed dramatically over the last century, from about 32 years in 1900 to roughly 73 years today. Yet the absolute number of deaths per year continues to rise. The reason is simply that the global population is still growing and aging: more people alive, and a larger share of them in older age brackets, produces more deaths in aggregate even as any individual&apos;s chance of dying young has fallen sharply.
      </p>

      <h2>How this feeds the counter</h2>
      <p>
        Memento uses 2.0 deaths per second as the multiplier applied to elapsed time since the baseline. Every second, the cumulative &ldquo;ever deceased&rdquo; figure increases by 2.0. Because the birth rate (4.3/sec) is more than double the death rate, the currently living population grows by about 2.3 people per second — even though both the ever-born and ever-deceased counters climb without pause.
      </p>

      <p>
        See the <a href="/ratio-living-to-dead">ratio of living to dead</a> for how these two rates combine over time, or return to the <a href="/">live counter</a>.
      </p>
    </CompanionPageLayout>
  );
}
