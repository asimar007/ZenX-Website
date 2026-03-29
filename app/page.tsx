import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeedMockup } from "@/components/FeedMockup";
import { Features } from "@/components/Features";
import { Filters } from "@/components/Filters";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <Navbar />
      <Hero />
      <FeedMockup />
      <Features />
      <Filters />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
