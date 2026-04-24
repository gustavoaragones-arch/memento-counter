import Link from "next/link";
import { Footer } from "./Footer";

interface CompanionPageLayoutProps {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export function CompanionPageLayout({
  eyebrow,
  title,
  children,
}: CompanionPageLayoutProps) {
  return (
    <>
    <main className="min-h-screen bg-[#FAFAF7] px-6 py-20 text-[#0A0A0A]">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50 hover:text-[#0A0A0A]"
        >
          ← Memento
        </Link>

        <p className="mt-12 font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>

        <div className="prose-custom mt-10 font-sans text-base leading-relaxed text-[#0A0A0A]/80 [&>p]:mb-5 [&>h2]:mb-3 [&>h2]:mt-10 [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:text-[#0A0A0A] [&>ul]:mb-5 [&>ul]:list-disc [&>ul]:space-y-1 [&>ul]:pl-5 [&>ul]:marker:text-[#0A0A0A]/40 [&_a]:text-[#0A0A0A] [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-[#0A0A0A]/30 [&_a:hover]:decoration-[#0A0A0A]">
          {children}
        </div>

        <div className="mt-16 border-t border-[#0A0A0A]/10 pt-8">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
            Related
          </p>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            <li>
              <Link href="/" className="underline underline-offset-4 decoration-[#0A0A0A]/30 hover:decoration-[#0A0A0A]">
                The live counter →
              </Link>
            </li>
            <li>
              <Link href="/births-per-second" className="underline underline-offset-4 decoration-[#0A0A0A]/30 hover:decoration-[#0A0A0A]">
                Births per second →
              </Link>
            </li>
            <li>
              <Link href="/deaths-per-second" className="underline underline-offset-4 decoration-[#0A0A0A]/30 hover:decoration-[#0A0A0A]">
                Deaths per second →
              </Link>
            </li>
            <li>
              <Link href="/ratio-living-to-dead" className="underline underline-offset-4 decoration-[#0A0A0A]/30 hover:decoration-[#0A0A0A]">
                Ratio of living to dead →
              </Link>
            </li>
            <li>
              <Link href="/methodology" className="underline underline-offset-4 decoration-[#0A0A0A]/30 hover:decoration-[#0A0A0A]">
                Methodology →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
