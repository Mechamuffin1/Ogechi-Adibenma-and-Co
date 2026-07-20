/* The project id and dataset are public identifiers (they appear in every
   content URL), so hardcoded fallbacks are safe and let both the Next.js
   site and the hosted Studio build without environment configuration. */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "0w2zc4re";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2026-07-01";

export const sanityConfigured = Boolean(projectId);
