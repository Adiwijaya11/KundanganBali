import { kuruBayaInvitation } from "@/data/invitations/telubulan/kuru-baya";
import type { InvitationData } from "@/types/invitation";

/**
 * Registry of wedding invitations (accessed at `/pernikahan/<slug>`).
 * Currently empty until the first wedding client is onboarded.
 */
const WEDDING_INVITATIONS: Record<string, InvitationData> = {};

/**
 * Registry of Telubulanan (3-bulanan) invitations (accessed at `/telubulan/<slug>`).
 */
const TELUBULAN_INVITATIONS: Record<string, InvitationData> = {
  [kuruBayaInvitation.slug]: kuruBayaInvitation,
};

export function getWeddingBySlug(slug: string): InvitationData | null {
  const normalized = slug.trim().toLowerCase();
  return WEDDING_INVITATIONS[normalized] ?? null;
}

export function getAllWeddingSlugs(): string[] {
  return Object.keys(WEDDING_INVITATIONS);
}

export function getTelubulanBySlug(slug: string): InvitationData | null {
  const normalized = slug.trim().toLowerCase();
  return TELUBULAN_INVITATIONS[normalized] ?? null;
}

export function getAllTelubulanSlugs(): string[] {
  return Object.keys(TELUBULAN_INVITATIONS);
}

export function getInvitationPath(invitation: InvitationData): string {
  return invitation.category === "telubulanan"
    ? `/telubulan/${invitation.slug}`
    : `/pernikahan/${invitation.slug}`;
}
