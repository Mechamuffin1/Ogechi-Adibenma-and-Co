export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2026-07-01";

/* True once the Sanity project id has been configured; content pages fall
   back to nothing (and the studio shows a notice) until then. */
export const sanityConfigured = Boolean(projectId);
