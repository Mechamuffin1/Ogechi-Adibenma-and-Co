/* One-time content migration: pushes the original 4 articles and 4 lawyer
   profiles (extracted from the old static HTML into seed-data.json) into
   Sanity, uploading the partner photos as image assets.

   Usage:
     1. Put these in .env.local (see .env.local.example):
          NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
          SANITY_WRITE_TOKEN  (Editor token from sanity.io/manage -> API)
     2. node scripts/seed-sanity.mjs

   Idempotent: documents use fixed ids (article-<slug>, lawyer-<slug>), so
   re-running replaces the seeded documents without duplicating them. */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "next-sanity";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

// Minimal .env.local loader (no extra dependency).
const envFile = path.join(ROOT, ".env.local");
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_WRITE_TOKEN (set them in .env.local).");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2026-07-01", token, useCdn: false });

const { articles, profiles } = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts/seed-data.json"), "utf8"));

async function uploadPhoto(relPath, label) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) {
    console.warn(`  ! photo not found, skipping: ${relPath}`);
    return null;
  }
  const asset = await client.assets.upload("image", fs.createReadStream(abs), {
    filename: path.basename(abs),
  });
  console.log(`  uploaded photo for ${label}: ${asset._id}`);
  return asset._id;
}

async function main() {
  console.log(`Seeding project ${projectId} / dataset ${dataset}\n`);

  console.log("Team profiles:");
  for (const p of profiles) {
    const photoAssetId = await uploadPhoto(p.photo, p.slug);
    await client.createOrReplace({
      _id: p._id,
      _type: "lawyerProfile",
      name: p.name,
      slug: { _type: "slug", current: p.slug },
      ...(photoAssetId
        ? { photo: { _type: "image", asset: { _type: "reference", _ref: photoAssetId }, alt: p.name } }
        : {}),
      role: p.role,
      lede: p.lede,
      summary: p.summary,
      bio: p.bio,
      practiceAreas: p.practiceAreas,
      credentials: p.credentials,
      ...(p.email ? { email: p.email } : {}),
      order: p.order,
    });
    console.log(`  ✓ ${p.name}`);
  }

  console.log("\nArticles:");
  for (const a of articles) {
    await client.createOrReplace({
      _id: a._id,
      _type: "article",
      title: a.title,
      slug: { _type: "slug", current: a.slug },
      author: { _type: "reference", _ref: `lawyer-${a.authorSlug}` },
      publishedAt: a.publishedAt,
      practiceArea: a.practiceArea,
      excerpt: a.excerpt,
      body: a.body,
    });
    console.log(`  ✓ ${a.title}`);
  }

  console.log("\nDone. Open /studio to review the content.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
