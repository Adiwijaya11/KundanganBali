import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi KundanganBali (VizzioCraft Studio) di Denpasar, Bali melalui WhatsApp 083114592416, email vizziocraft@gmail.com, atau Instagram @vizziocraft.",
};

export default function KontakPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F6F2] text-zinc-900">
      <SiteHeader />
      <main className="flex-1">
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
