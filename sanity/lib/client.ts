import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId, sanityConfigured } from "../env";

let _client: SanityClient | null = null;

/* Created lazily: with no NEXT_PUBLIC_SANITY_PROJECT_ID configured the site
   still builds and renders (content pages are simply empty). */
export function getClient(): SanityClient | null {
  if (!sanityConfigured) return null;
  if (!_client) {
    _client = createClient({ projectId, dataset, apiVersion, useCdn: true });
  }
  return _client;
}
