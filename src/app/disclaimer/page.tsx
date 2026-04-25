import type { Metadata } from "next";
import { CompanionPageLayout } from "@/components/CompanionPageLayout";

export const metadata: Metadata = {
  title: "Disclaimer | Memento",
  description:
    "Memento displays demographic estimates for general interest and reflection. The figures are not statistical research and carry meaningful uncertainty.",
  alternates: { canonical: "https://mementocount.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <CompanionPageLayout eyebrow="Disclaimer" title="Disclaimer">
      <p>
        <strong>Effective date: April 25, 2026.</strong>
      </p>

      <p>
        Memento is provided by Albor Digital LLC for general informational and
        practical-utility purposes only. The Site presents estimates of the
        cumulative number of humans who have ever lived and the cumulative
        number who have ever died, derived from publicly available demographic
        models.
      </p>

      <h2>The numbers are estimates</h2>
      <p>
        The figures shown are not the result of original statistical research.
        They are calibrated against published estimates from the Population
        Reference Bureau (2024) and the United Nations World Population
        Prospects (2024 revision), then advanced in real time using global
        average birth and death rates from the same sources. Demographic
        models for prehistoric and ancient populations carry meaningful
        uncertainty; different reasonable models produce cumulative-births
        totals ranging from approximately 100 billion to 125 billion. Memento
        uses a midpoint anchor for illustration. See the{" "}
        <a href="/methodology">methodology page</a> for full detail.
      </p>

      <h2>Not professional advice</h2>
      <p>
        Nothing on Memento constitutes professional advice of any kind —
        scientific, demographic, statistical, philosophical, medical, legal,
        financial, or otherwise. The Site is designed for reflection and
        general curiosity, not for citation in research, policy work, or
        formal analysis. Researchers and journalists are encouraged to consult
        the original sources directly.
      </p>

      <h2>Use at your own risk</h2>
      <p>
        While we strive for accuracy and transparency, we make no
        representations or warranties about the completeness or fitness of
        any figure shown for any particular purpose. Any decision or
        interpretation based on the Site is your own.
      </p>

      <h2>External sources</h2>
      <p>
        Memento links to external organizations including the Population
        Reference Bureau and the United Nations. These references are provided
        for transparency about our sources. We do not control or endorse the
        full content of those external sites and are not responsible for
        their availability or accuracy.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Albor Digital LLC is not
        liable for any direct, indirect, incidental, consequential, or
        punitive damages arising from reliance on or use of the Site or its
        content.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about the methodology, the figures shown, or this
        disclaimer can be sent to{" "}
        <a href="mailto:contact@mementocount.com">contact@mementocount.com</a>.
      </p>
    </CompanionPageLayout>
  );
}
