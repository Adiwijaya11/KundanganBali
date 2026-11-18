import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InvitationTemplate } from "@/components/invitation/InvitationTemplate";
import { getAllOtonanSlugs, getOtonanBySlug } from "@/lib/invitations";

type OtonanPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllOtonanSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: OtonanPageProps): Promise<Metadata> {
  const { slug } = await params;
  const invitation = getOtonanBySlug(slug);

  if (!invitation) {
    return {
      title: "Undangan Otonan Tidak Ditemukan",
    };
  }

  return {
    title: `${invitation.hero.subtitle}: ${invitation.hero.displayTitle}`,
    description: `${invitation.hero.subtitle} ${invitation.hero.displayTitle} — ${invitation.hero.dateLocationSummary}`,
    openGraph: {
      title: `${invitation.hero.subtitle}: ${invitation.hero.displayTitle}`,
      description: `${invitation.hero.subtitle} ${invitation.hero.displayTitle} — ${invitation.hero.dateLocationSummary}`,
      images: [
        {
          url: invitation.hero.coverImage,
          alt: invitation.hero.coverImageAlt,
        },
      ],
    },
  };
}

async function OtonanContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const invitation = getOtonanBySlug(slug);

  if (!invitation) {
    notFound();
  }

  return <InvitationTemplate invitation={invitation} />;
}

export default function OtonanPage({ params }: OtonanPageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#FAF6EE] text-sm text-[#5C4F3E]">
          Memuat undangan...
        </div>
      }
    >
      <OtonanContent params={params} />
    </Suspense>
  );
}
