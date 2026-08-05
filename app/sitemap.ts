import type { MetadataRoute } from "next";
import { researchAreas } from "@/data/research-areas";

const BASE_URL = "https://www.alle-et-al.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/research`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const researchRoutes: MetadataRoute.Sitemap = researchAreas.map((area) => ({
    url: `${BASE_URL}/research/${area.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...researchRoutes];
}
