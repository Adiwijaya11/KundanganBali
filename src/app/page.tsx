import { CtaSection } from "@/components/landing/CtaSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { InvitationShowcase3D } from "@/components/landing/InvitationShowcase3D";
import { LandingHero } from "@/components/landing/LandingHero";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F6F2] text-zinc-900">
      <SiteHeader />
      <main className="flex-1">
        <LandingHero />
        <InvitationShowcase3D />
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
