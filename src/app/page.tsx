import { CtaSection } from "@/components/landing/CtaSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { LandingHero } from "@/components/landing/LandingHero";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF6EE] text-[#241D15]">
      <SiteHeader />
      <main className="flex-1">
        <LandingHero />
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
