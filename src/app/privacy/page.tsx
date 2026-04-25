import type { Metadata } from "next";
import { CompanionPageLayout } from "@/components/CompanionPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Memento",
  description:
    "How Memento collects, uses, and protects information. We do not require accounts, do not collect personal data, and use privacy-friendly analytics that do not set cookies.",
  alternates: { canonical: "https://mementocount.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <CompanionPageLayout eyebrow="Privacy Policy" title="Privacy Policy">
      <p>
        <strong>Effective date: April 25, 2026.</strong> Last updated April 25,
        2026.
      </p>

      <p>
        Memento is operated by Albor Digital LLC, an independent digital
        product studio registered in the State of Wyoming, United States. This
        Privacy Policy explains what information we collect when you use
        mementocount.com, how we use it, and the choices available to you.
      </p>

      <h2>What this site collects</h2>
      <p>
        Memento is a single-page informational tool. It does not require
        accounts, sign-ups, or any form of registration. It does not process
        payments. It does not collect names, addresses, phone numbers,
        identification documents, or any directly identifying personal
        information.
      </p>

      <p>
        The site uses <a href="https://vercel.com/docs/analytics" rel="noopener noreferrer">Vercel Analytics</a>, a
        privacy-friendly analytics service that does not use cookies, does not
        fingerprint your device, and does not assign persistent identifiers.
        Vercel Analytics records aggregate, anonymized information including:
      </p>
      <ul>
        <li>Number of visits to each page</li>
        <li>Country-level location (derived from IP, then discarded)</li>
        <li>Browser and operating system family</li>
        <li>Referring website (where you arrived from)</li>
        <li>Page load performance metrics</li>
      </ul>

      <p>
        These data points are used to understand aggregate site traffic and
        improve performance. They are not used to identify individual visitors,
        build profiles, or serve targeted advertising.
      </p>

      <h2>Cookies</h2>
      <p>
        Memento does not set tracking cookies, advertising cookies, or
        cross-site tracking pixels. Your browser may store small technical
        items required for the site to function (for example, dark-mode
        preference if your operating system signals one), but these are not
        used for tracking.
      </p>

      <h2>Share links and snapshots</h2>
      <p>
        When you click &ldquo;Copy shareable link&rdquo; or &ldquo;Download image&rdquo; on the home
        page, your browser requests a server-rendered image based on the
        current timestamp. The timestamp is included in the URL itself; no
        information about your device, identity, or session is recorded with
        the request beyond standard server access logs (IP address, request
        time, user agent), which Vercel retains in line with its operational
        logging policy. We do not store, analyze, or correlate these logs.
      </p>

      <h2>Third parties</h2>
      <p>
        The site is hosted by <a href="https://vercel.com" rel="noopener noreferrer">Vercel Inc.</a> Vercel processes
        traffic on our behalf and applies its own privacy practices to
        operational data such as access logs. The site is registered through a
        domain registrar; standard WHOIS records for mementocount.com are kept
        private through registrar privacy services.
      </p>

      <p>
        Memento does not integrate with social networks, advertising networks,
        data brokers, or any third party that would receive your information
        for purposes outside operating the site.
      </p>

      <h2>Children</h2>
      <p>
        Memento is not directed at children under 13. We do not knowingly
        collect personal information from children. Because we do not collect
        identifying information from anyone, the site can be used by visitors
        of any age, but the philosophical content is intended for general
        audiences.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access,
        correct, delete, or port personal data held about you. Because Memento
        does not maintain user accounts or persistent records linked to
        individuals, the practical scope of these rights on this site is
        limited — there is no profile to access or delete. If you have a
        specific concern, contact us at{" "}
        <a href="mailto:contact@mementocount.com">contact@mementocount.com</a>{" "}
        and we will respond within 30 days.
      </p>

      <h2>International transfers</h2>
      <p>
        Memento is operated from the United States and Canada. If you visit
        from outside these regions, the limited operational data described
        above is processed on infrastructure located in regions chosen by our
        hosting provider. We rely on standard contractual safeguards offered
        by Vercel for cross-border processing.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy as the site evolves. Updates will
        be posted on this page with a revised effective date. Material
        changes will be reflected at the top of the page.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions or requests, contact us at{" "}
        <a href="mailto:contact@mementocount.com">contact@mementocount.com</a>.
      </p>
    </CompanionPageLayout>
  );
}
