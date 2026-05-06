import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Services from "@/components/home/Services";
import InvestmentValue from "@/components/home/InvestmentValue";
import Vision2030 from "@/components/home/Vision2030";
import HomeCTA from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "نواة التطوير العقاري | Nawah Real Estate Development",
  description:
    "نواة التطوير العقاري | Nawah Real Estate Development — Crafting Luxury… Building Lifestyles | نصنع الفخامة… ونبني أسلوب حياة",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Services />
      <InvestmentValue />
      {/* AmmarLord comment it return soon */}
      {/* <Statistics /> */}
      <Vision2030 />
      <HomeCTA />
    </>
  );
}
