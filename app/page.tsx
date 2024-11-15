import React from "react";
import  Hero  from "../components/hero/Hero";
import  Features  from "../components/features/Features";
import  FAQ  from "../components/faq/FAQ";
import  CTA  from "../components/calltoact/CTA";

export default function HomePage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8 space-y-24">
      <Hero />
      <Features />
      <FAQ />
      <CTA />
    </main>
  );
}
