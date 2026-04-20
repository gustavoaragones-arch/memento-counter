"use client";

import { Hero } from "@/components/Hero";
import { RatioBar } from "@/components/RatioBar";
import { SessionCounter } from "@/components/SessionCounter";
import { Methodology } from "@/components/Methodology";

export default function Home() {
  return (
    <>
      <Hero />
      <RatioBar />
      <SessionCounter />
      <Methodology />
    </>
  );
}
