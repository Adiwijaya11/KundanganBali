import type { MetadataRoute } from "next";
import { getAllOtonanSlugs, getAllWeddingSlugs } from "@/lib/invitations";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kundanganbali.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/demo`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/pricing`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/kontak`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const otonanRoutes: MetadataRoute.Sitemap = getAllOtonanSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/otonan/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  const weddingRoutes: MetadataRoute.Sitemap = getAllWeddingSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/pernikahan/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...otonanRoutes, ...weddingRoutes];
}
