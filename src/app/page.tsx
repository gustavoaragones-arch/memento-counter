"use client";

import { Hero } from "@/components/Hero";
import { RatioBar } from "@/components/RatioBar";
import { SessionCounter } from "@/components/SessionCounter";
import { Methodology } from "@/components/Methodology";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export default function Home() {
  return (
    <>
      <FAQSchema />
      <Hero />
      <RatioBar />
      <SessionCounter />
      <Methodology />
      <FAQ />
    </>
  );
}
