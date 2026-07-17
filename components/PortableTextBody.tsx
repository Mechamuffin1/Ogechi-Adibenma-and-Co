import { PortableText, type PortableTextBlock, type PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/lib/fetch";

/* Renders CMS article bodies with the same plain markup the static site's
   article CSS was written for (h2, p, ul, blockquote, a.text links). */
const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset) return null;
      return (
        <figure style={{ margin: "2rem 0" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlForImage(value, 1200)}
            alt={value.alt || ""}
            style={{ maxWidth: "100%", height: "auto", display: "block" }}
          />
          {value.caption && (
            <figcaption style={{ marginTop: "0.6rem", fontSize: "0.85rem", opacity: 0.75 }}>{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href || "";
      const internal = href.startsWith("/") || href.includes("ogechiadibenma.com");
      if (internal) {
        const path = href.replace(/^https?:\/\/(www\.)?ogechiadibenma\.com/, "") || "/";
        return <Link href={path}>{children}</Link>;
      }
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
