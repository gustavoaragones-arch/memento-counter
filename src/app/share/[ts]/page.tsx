import type { Metadata } from "next";
import Link from "next/link";
import { computeSnapshot, formatCount } from "@/lib/counter";
import { Footer } from "@/components/Footer";

interface SharePageProps {
  params: { ts: string };
}

function parseTimestamp(raw: string): number {
  const n = parseInt(raw, 10);
  if (isNaN(n) || n <= 0 || n > 9_999_999_999_999) {
    return Date.now();
  }
  return n;
}

export async function generateMetadata({
  params,
}: SharePageProps): Promise<Metadata> {
  const ts = parseTimestamp(params.ts);
  const imageUrl = `https://mementocount.com/api/share?ts=${ts}`;
  const when = new Date(ts).toUTCString();

  return {
    title: `Memento — the count at ${when}`,
    description: `A frozen snapshot of humanity's ledger at ${when}. See the live count at mementocount.com.`,
    openGraph: {
      title: "Memento — a moment in the ledger",
      description: `A frozen snapshot of humanity's ledger at ${when}.`,
      url: `https://mementocount.com/share/${ts}`,
      siteName: "Memento",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Memento — a moment in the ledger",
      description: `A frozen snapshot of humanity's ledger at ${when}.`,
      images: [imageUrl],
    },
  };
}

export default function SharePage({ params }: SharePageProps) {
  const ts = parseTimestamp(params.ts);
  const snapshot = computeSnapshot(ts);
  const when = new Date(ts).toUTCString();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF7] px-6 py-20 text-[#0A0A0A]">
        <div className="mx-auto w-full max-w-3xl">
          <Link
            href="/"
            className="font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50 hover:text-[#0A0A0A]"
          >
            ← Memento
          </Link>

          <p className="mt-12 font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
            A moment in the ledger
          </p>
          <h1 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            {when}
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="border border-[#0A0A0A]/10 p-8">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
                Ever born
              </p>
              <p className="mt-3 font-serif text-3xl tabular-nums sm:text-4xl">
                {formatCount(snapshot.born)}
              </p>
            </div>
            <div className="border border-[#0A0A0A]/10 p-8">
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
                Ever deceased
              </p>
              <p className="mt-3 font-serif text-3xl tabular-nums sm:text-4xl">
                {formatCount(snapshot.deceased)}
              </p>
            </div>
          </div>

          <p className="mt-10 font-sans text-base leading-relaxed text-[#0A0A0A]/70">
            This page shows the cumulative count of humans ever born and ever
            deceased at a single frozen moment. The live counter continues at{" "}
            <Link
              href="/"
              className="underline underline-offset-4 decoration-[#0A0A0A]/30 hover:decoration-[#0A0A0A]"
            >
              mementocount.com
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
