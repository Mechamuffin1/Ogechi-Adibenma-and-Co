import type { MetadataRoute } from "next";
import { getAllArticles, getAllLawyers } from "@/sanity/lib/fetch";

const BASE = "https://www.ogechiadibenma.com";

const STATIC_PATHS: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/practice-areas", priority: 0.9 },
  { path: "/practice-areas/surrogacy-and-fertility-law", priority: 0.9 },
  { path: "/practice-areas/commercial-and-corporate", priority: 0.8 },
  { path: "/practice-areas/family-law", priority: 0.8 },
  { path: "/practice-areas/property-and-real-estate", priority: 0.8 },
  { path: "/practice-areas/dispute-resolution", priority: 0.9 },
  { path: "/practice-areas/maritime-law", priority: 0.7 },
  { path: "/practice-areas/tech-and-ai-law", priority: 0.7 },
  { path: "/practice-areas/intellectual-property", priority: 0.7 },
  { path: "/practice-areas/immigration-law", priority: 0.7 },
  { path: "/insights", priority: 0.8 },
  { path: "/people", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-conditions", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, lawyers] = await Promise.all([getAllArticles(), getAllLawyers()]);

  return [
    ...STATIC_PATHS.map((p) => ({ url: `${BASE}${p.path}`, priority: p.priority })),
    ...articles.map((a) => ({
      url: `${BASE}/insights/${a.slug}`,
      lastModified: a.publishedAt,
      priority: 0.6,
    })),
    ...lawyers.map((l) => ({ url: `${BASE}/people/${l.slug}`, priority: 0.5 })),
  ];
}
