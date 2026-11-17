import type { Metadata } from "next";
import { PricingSection } from "@/components/pricing/PricingSection";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export const metadata: Metadata = {
  title: "Paket Harga",
  description:
    "Pilihan paket pembuatan undangan pernikahan digital KundanganBali — Pratama, Madya, dan Utama.",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF6EE] text-[#241D15]">
      <SiteHeader />
      <main className="flex-1">
        <PricingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
