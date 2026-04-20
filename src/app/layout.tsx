import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memento — Are there more dead people than alive?",
  description:
    "A live counter of every human who has ever lived, split between the living and the deceased. Approximately 93% of all humans ever born are now deceased.",
  metadataBase: new URL("https://mementocount.com"),
  openGraph: {
    title: "Memento — The Humanity Counter",
    description:
      "A live ledger of every human who has ever lived. Approximately 93% are now deceased.",
    url: "https://mementocount.com",
    siteName: "Memento",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memento — The Humanity Counter",
    description: "A live ledger of every human who has ever lived.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${garamond.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
