import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amuse-alpha.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: "2026-03-05",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
