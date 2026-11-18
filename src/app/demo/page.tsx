import type { Metadata } from "next";
import { DemoCatalog } from "@/components/demo/DemoCatalog";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { getAllInvitations, getInvitationPath } from "@/lib/invitations";

export const metadata: Metadata = {
  title: "Demo Undangan",
  description:
    "Katalog demo undangan digital KundanganBali untuk Upacara Otonan, Pawiwahan, Telubulanan, Metatah, dan lainnya.",
};

export default function DemoPage() {
  const catalogItems = getAllInvitations().map((item) => ({
    slug: item.slug,
    category: item.category,
    themeLabel: item.themeLabel,
    title: item.hero.displayTitle,
    subtitle: item.hero.subtitle,
    dateLocationSummary: item.hero.dateLocationSummary,
    coverImage: item.hero.coverImage,
    coverImageAlt: item.hero.coverImageAlt,
    path: getInvitationPath(item),
  }));

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F6F2] text-zinc-900">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <DemoCatalog items={catalogItems} />
      </main>

      <SiteFooter />
    </div>
  );
}
