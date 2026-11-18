import { kuruBayaInvitation } from "@/data/invitations/otonan/kuru-baya";
import type { InvitationData } from "@/types/invitation";

/**
 * Registry of wedding invitations (accessed at `/pernikahan/<slug>`).
 * Currently empty until the first wedding client is onboarded.
 */
const WEDDING_INVITATIONS: Record<string, InvitationData> = {};

/**
 * Registry of Otonan invitations (accessed at `/otonan/<slug>`).
 */
const OTONAN_INVITATIONS: Record<string, InvitationData> = {
  [kuruBayaInvitation.slug]: kuruBayaInvitation,
};

export function getWeddingBySlug(slug: string): InvitationData | null {
  const normalized = slug.trim().toLowerCase();
  return WEDDING_INVITATIONS[normalized] ?? null;
}

export function getAllWeddingSlugs(): string[] {
  return Object.keys(WEDDING_INVITATIONS);
}

export function getOtonanBySlug(slug: string): InvitationData | null {
  const normalized = slug.trim().toLowerCase();
  return OTONAN_INVITATIONS[normalized] ?? null;
}

export function getAllOtonanSlugs(): string[] {
  return Object.keys(OTONAN_INVITATIONS);
}

export function getInvitationPath(invitation: InvitationData): string {
  return invitation.category === "otonan"
    ? `/otonan/${invitation.slug}`
    : `/pernikahan/${invitation.slug}`;
}
