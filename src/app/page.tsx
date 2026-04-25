"use client";

import { Hero } from "@/components/Hero";
import { RatioBar } from "@/components/RatioBar";
import { SessionCounter } from "@/components/SessionCounter";
import { ShareButtons } from "@/components/ShareButtons";
import { Methodology } from "@/components/Methodology";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FAQSchema />
      <Hero />
      <RatioBar />
      <SessionCounter />
      <ShareButtons />
      <Methodology />
      <FAQ />
      <Footer />
    </>
  );
}
