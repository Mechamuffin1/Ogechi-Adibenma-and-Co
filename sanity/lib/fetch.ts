import type { PortableTextBlock } from "@portabletext/react";
import { getClient } from "./client";
import {
  allArticlesQuery,
  articleBySlugQuery,
  allLawyersQuery,
  lawyerBySlugQuery,
} from "./queries";

export type SanityImage = {
  asset?: { _ref: string; _type: string };
  alt?: string;
  caption?: string;
};

export type ArticlePreview = {
  _id: string;
  title: string;
  slug: string;
  coverImage?: SanityImage;
  publishedAt: string;
  practiceArea?: string;
  excerpt?: string;
  authorName?: string;
  authorRole?: string;
};

export type Article = ArticlePreview & {
  body?: PortableTextBlock[];
  authorSlug?: string;
};

export type LawyerPreview = {
  _id: string;
  name: string;
  slug: string;
  photo?: SanityImage;
  role?: string;
  lede?: string;
  summary?: string;
  practiceAreas?: string[];
  credentials?: string;
};

export type Lawyer = LawyerPreview & {
  bio?: string;
  email?: string;
  articles?: { title: string; slug: string; publishedAt: string }[];
};

/* Published edits appear on the site within a minute, without a redeploy. */
const REVALIDATE = { next: { revalidate: 60 } };

export async function getAllArticles(): Promise<ArticlePreview[]> {
  const client = getClient();
  if (!client) return [];
  return client.fetch(allArticlesQuery, {}, REVALIDATE);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const client = getClient();
  if (!client) return null;
  return client.fetch(articleBySlugQuery, { slug }, REVALIDATE);
}

export async function getAllLawyers(): Promise<LawyerPreview[]> {
  const client = getClient();
  if (!client) return [];
  return client.fetch(allLawyersQuery, {}, REVALIDATE);
}

export async function getLawyerBySlug(slug: string): Promise<Lawyer | null> {
  const client = getClient();
  if (!client) return null;
  return client.fetch(lawyerBySlugQuery, { slug }, REVALIDATE);
}
