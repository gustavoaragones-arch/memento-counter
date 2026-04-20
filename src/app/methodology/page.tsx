import type { Metadata } from "next";
import { CompanionPageLayout } from "@/components/CompanionPageLayout";

export const metadata: Metadata = {
  title: "Methodology and sources | Memento",
  description:
    "How Memento calculates cumulative human births and deaths in real time — the baseline values, the rates, the sources, and the uncertainties.",
  alternates: { canonical: "https://mementocount.com/methodology" },
};

export default function MethodologyPage() {
  return (
    <CompanionPageLayout eyebrow="Methodology" title="How the count works">
      <p>
        Memento displays a real-time estimate of the total number of humans who have ever been born and the total who have ever died. These are <strong>cumulative historical totals</strong>, not current population figures. The counter does not reset, does not measure only the living, and does not restart on page refresh.
      </p>

      <h2>The baseline</h2>
      <p>
        All values are anchored to a single calibrated baseline: April 19, 2026 at 00:00 UTC. At that moment:
      </p>
      <ul>
        <li>Total humans ever born: approximately 117.03 billion</li>
        <li>Currently living: approximately 8.12 billion</li>
        <li>Total humans ever deceased: approximately 108.91 billion</li>
      </ul>

      <h2>The rates</h2>
      <p>
        From the baseline forward, the counter adds elapsed time multiplied by global average rates:
      </p>
      <ul>
        <li>Births: approximately 4.3 per second</li>
        <li>Deaths: approximately 2.0 per second</li>
      </ul>

      <h2>How the counter computes its values</h2>
      <p>
        Every frame, the counter reads the current time, computes seconds elapsed since the baseline, and adds the expected births and deaths. This means the value is deterministic: two people opening the page at the same moment on opposite sides of the world see the same numbers, and refreshing the page does not reset or falsify the count.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          Population Reference Bureau (2024). <em>How Many People Have Ever Lived on Earth?</em> The foundational estimate of cumulative human births, beginning from approximately 50,000 BCE.
        </li>
        <li>
          United Nations, Department of Economic and Social Affairs, Population Division (2024). <em>World Population Prospects 2024</em>. Source for the current-population and per-second rate figures.
        </li>
        <li>
          CIA World Factbook. Cross-reference for global birth and death rate figures.
        </li>
      </ul>

      <h2>Uncertainty</h2>
      <p>
        All cumulative-historical figures are estimates. Demographic models for prehistoric and ancient populations carry meaningful uncertainty; different models produce totals ranging from roughly 100 billion to 125 billion. Memento uses the Population Reference Bureau&apos;s 2024 midpoint as its anchor. The tool is designed for illustration and reflection, not for statistical research.
      </p>

      <p>
        Return to the <a href="/">live counter</a>.
      </p>
    </CompanionPageLayout>
  );
}
