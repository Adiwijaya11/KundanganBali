import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InvitationTemplate } from "@/components/invitation/InvitationTemplate";
import { getWeddingBySlug } from "@/lib/invitations";

type PernikahanPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PernikahanPageProps): Promise<Metadata> {
  const { slug } = await params;
  const invitation = getWeddingBySlug(slug);

  if (!invitation) {
    return {
      title: "Undangan Pernikahan Tidak Ditemukan",
    };
  }

  return {
    title: `${invitation.hero.subtitle}: ${invitation.hero.displayTitle}`,
    description: `${invitation.hero.subtitle} ${invitation.hero.displayTitle} — ${invitation.hero.dateLocationSummary}`,
  };
}

async function PernikahanContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const invitation = getWeddingBySlug(slug);

  if (!invitation) {
    notFound();
  }

  return <InvitationTemplate invitation={invitation} />;
}

export default function PernikahanPage({ params }: PernikahanPageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#FAF6EE] text-sm text-[#5C4F3E]">
          Memuat undangan...
        </div>
      }
    >
      <PernikahanContent params={params} />
    </Suspense>
  );
}
