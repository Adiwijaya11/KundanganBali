import { CtaSection } from "@/components/landing/CtaSection";
import { FAQ_ITEMS, FaqSection } from "@/components/landing/FaqSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { InvitationShowcase3D } from "@/components/landing/InvitationShowcase3D";
import { LandingHero } from "@/components/landing/LandingHero";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kundanganbali.com";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "KundanganBali — VizzioCraft Studio",
    alternateName: ["Kundangan Bali", "Undangan Bali", "Undangan Digital Bali"],
    url: SITE_URL,
    image: `${SITE_URL}/images/landing/hero-bg.jpg`,
    telephone: "+6283114592416",
    email: "vizziocraft@gmail.com",
    priceRange: "Rp199.000 - Rp599.000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Denpasar",
      addressRegion: "Bali",
      addressCountry: "ID",
    },
    sameAs: ["https://www.instagram.com/vizziocraft/"],
    description:
      "Layanan pembuatan undangan digital modern di Denpasar, Bali untuk Pernikahan, Pawiwahan, Otonan, Ulang Tahun, dan Syukuran.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F6F2] text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <LandingHero />
        <InvitationShowcase3D />
        <FeaturesSection />
        <HowItWorksSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
