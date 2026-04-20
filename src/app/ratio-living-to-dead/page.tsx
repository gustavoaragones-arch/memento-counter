import type { Metadata } from "next";
import { CompanionPageLayout } from "@/components/CompanionPageLayout";

export const metadata: Metadata = {
  title: "What is the ratio of living to dead humans? | Memento",
  description:
    "About 7% of all humans ever born are alive today — roughly 8.1 billion out of 117 billion. That means 1 in every 14 humans who ever lived is alive right now.",
  alternates: { canonical: "https://mementocount.com/ratio-living-to-dead" },
};

export default function RatioLivingToDeadPage() {
  return (
    <CompanionPageLayout
      eyebrow="Ratio of living to dead"
      title="What is the ratio of living to dead humans?"
    >
      <p>
        About <strong>7% of all humans ever born are alive today</strong>. Roughly 8.1 billion people are currently alive, out of approximately 117 billion who have ever been born. That means about <strong>1 in every 14 humans who ever lived is alive right now</strong>, and about 13 in every 14 are deceased.
      </p>

      <h2>Why this surprises people</h2>
      <p>
        A common assumption — frequently repeated online — is that the living now outnumber all humans who came before. That was never true, but the guess is understandable: the global population has grown dramatically in the last two centuries, from about 1 billion in 1800 to more than 8 billion today. What that rapid growth obscures is the long tail of human history. For roughly 200,000 years of anatomically modern humans, and 12,000 years of agricultural societies, billions of people lived and died at lower densities. Those billions accumulate.
      </p>

      <h2>The math in one line</h2>
      <p>
        Total ever born, minus the currently living, equals the total ever deceased. About 117 billion minus 8.1 billion leaves approximately 108.9 billion who have died across the span of human history. Dividing 108.9 by 117 gives roughly 93% — the deceased share.
      </p>

      <h2>Will this ratio change?</h2>
      <p>
        The ratio shifts slowly in favor of the deceased. Each second adds 4.3 to the &ldquo;ever born&rdquo; total and 2.0 to the &ldquo;ever deceased&rdquo; total, which moves the living share down by a vanishingly small amount. Absent a catastrophic mortality event or a dramatic change in birth rates, the 93%-deceased figure is stable to the first decimal place for years at a time.
      </p>

      <p>
        Related: <a href="/births-per-second">births per second</a>, <a href="/deaths-per-second">deaths per second</a>, or return to the <a href="/">live counter</a>.
      </p>
    </CompanionPageLayout>
  );
}
