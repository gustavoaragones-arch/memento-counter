import type { Metadata } from "next";
import { FAQSchema } from "@/components/FAQSchema";
import { Footer } from "@/components/Footer";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://mementocount.com",
  },
};

export default function Home() {
  return (
    <>
      <FAQSchema />
      <HomeClient />
      <Footer />
    </>
  );
}
