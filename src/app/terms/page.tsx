import type { Metadata } from "next";
import { CompanionPageLayout } from "@/components/CompanionPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Memento",
  description:
    "Terms governing the use of mementocount.com, operated by Albor Digital LLC.",
  alternates: { canonical: "https://mementocount.com/terms" },
};

export default function TermsPage() {
  return (
    <CompanionPageLayout eyebrow="Terms of Service" title="Terms of Service">
      <p>
        <strong>Effective date: April 25, 2026.</strong> Last updated April 25,
        2026.
      </p>

      <p>
        These Terms of Service govern your use of mementocount.com (the
        &ldquo;Site&rdquo;), operated by Albor Digital LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;), an
        independent digital product studio registered in the State of Wyoming,
        United States. By accessing or using the Site, you agree to these
        Terms. If you do not agree, do not use the Site.
      </p>

      <h2>What the Site is</h2>
      <p>
        Memento is a single-page informational tool that displays a live,
        cumulative estimate of the total number of humans who have ever lived
        and the total who have ever died, drawn from publicly available
        demographic data. The Site is offered free of charge, without
        registration, and is intended for general interest, education, and
        reflection.
      </p>

      <h2>No professional advice</h2>
      <p>
        Information presented on the Site is for general informational
        purposes only. It is not statistical research, demographic consulting,
        scientific advice, or professional guidance of any kind. The figures
        shown are estimates derived from third-party demographic models and
        carry meaningful uncertainty. See the{" "}
        <a href="/disclaimer">disclaimer</a> for further detail.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Site to violate any law or regulation</li>
        <li>
          Attempt to gain unauthorized access to systems, infrastructure, or
          data associated with the Site
        </li>
        <li>
          Scrape, harvest, or programmatically extract content from the Site
          at a volume or rate that materially burdens its operation
        </li>
        <li>
          Interfere with the operation, integrity, or security of the Site
        </li>
        <li>
          Reproduce or redistribute substantial portions of the Site as part
          of a competing product without our written consent
        </li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The design, layout, original written content, source code, and
        compiled visual outputs of the Site (including the typography,
        composition of the split-screen interface, and the design of the
        share snapshot images) are the intellectual property of Albor Digital
        LLC.
      </p>

      <p>
        The underlying demographic figures and source publications cited in
        the methodology are not our work; they belong to the Population
        Reference Bureau, the United Nations Population Division, and other
        organizations credited on the methodology page. We do not claim
        ownership of those underlying data.
      </p>

      <p>
        You are granted a limited, non-exclusive, non-transferable, revocable
        license to access and use the Site for personal, non-commercial
        purposes. Saving, downloading, or sharing snapshot images for personal
        and casual social use is encouraged. Repackaging the Site or its
        snapshot output as part of a commercial product or service requires
        prior written consent.
      </p>

      <h2>Share links and snapshots</h2>
      <p>
        The &ldquo;Copy shareable link&rdquo; and &ldquo;Download image&rdquo; features are provided
        to facilitate personal sharing on social platforms, messaging apps,
        and similar contexts. The image generated and the URL produced reflect
        the timestamp at which they were requested and are not represented as
        precise scientific records. They are illustrative.
      </p>

      <h2>Third-party services and links</h2>
      <p>
        The Site links to third-party reference sources (the Population
        Reference Bureau, the United Nations, and others) for context. We do
        not control or endorse the content of those external sites. The Site
        is hosted on infrastructure provided by Vercel Inc., subject to
        Vercel&apos;s terms.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        THE SITE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF
        ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, OR
        NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE
        UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALBOR DIGITAL LLC
        SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE.
        OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM RELATED TO THE SITE SHALL NOT
        EXCEED FIFTY US DOLLARS (USD $50).
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Albor Digital LLC from any
        claims, damages, liabilities, or expenses (including reasonable legal
        fees) arising from your misuse of the Site or your violation of these
        Terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of Wyoming, United
        States, without regard to its conflict-of-law provisions. Any dispute
        arising from these Terms or your use of the Site shall first be
        addressed through good-faith negotiation. Unresolved disputes shall be
        submitted to binding arbitration under the rules of the American
        Arbitration Association. Notwithstanding the foregoing, we may seek
        injunctive relief in any court of competent jurisdiction.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms as the Site evolves. Updates will be posted
        on this page with a revised effective date. Continued use of the Site
        after changes constitutes acceptance of the revised Terms.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these Terms, contact us at{" "}
        <a href="mailto:contact@mementocount.com">contact@mementocount.com</a>.
      </p>
    </CompanionPageLayout>
  );
}
