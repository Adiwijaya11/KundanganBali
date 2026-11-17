import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InvitationTemplate } from "@/components/invitation/InvitationTemplate";
import { getAllTelubulanSlugs, getTelubulanBySlug } from "@/lib/invitations";

type TelubulanPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTelubulanSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: TelubulanPageProps): Promise<Metadata> {
  const { slug } = await params;
  const invitation = getTelubulanBySlug(slug);

  if (!invitation) {
    return {
      title: "Undangan Telubulanan Tidak Ditemukan",
    };
  }

  return {
    title: `${invitation.hero.subtitle}: ${invitation.hero.displayTitle}`,
    description: `${invitation.hero.subtitle} ${invitation.hero.displayTitle} — ${invitation.hero.dateLocationSummary}`,
  };
}

async function TelubulanContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const invitation = getTelubulanBySlug(slug);

  if (!invitation) {
    notFound();
  }

  return <InvitationTemplate invitation={invitation} />;
}

export default function TelubulanPage({ params }: TelubulanPageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#FAF6EE] text-sm text-[#5C4F3E]">
          Memuat undangan...
        </div>
      }
    >
      <TelubulanContent params={params} />
    </Suspense>
  );
}
