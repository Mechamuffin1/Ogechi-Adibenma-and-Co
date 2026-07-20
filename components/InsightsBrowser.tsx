"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ArticlePreview } from "@/sanity/lib/fetch";

/* Area keys mirror the original static page's section ids; each maps a
   practice-area label (as entered in the CMS) to its practice page. */
const AREAS: { key: string; label: string; practiceHref: string }[] = [
  { key: "surrogacy", label: "Surrogacy & Fertility Law", practiceHref: "/practice-areas/surrogacy-and-fertility-law" },
  { key: "commercial", label: "Corporate & Commercial", practiceHref: "/practice-areas/commercial-and-corporate" },
  { key: "family", label: "Family Law", practiceHref: "/practice-areas/family-law" },
  { key: "property", label: "Property & Real Estate", practiceHref: "/practice-areas/property-and-real-estate" },
  { key: "dispute", label: "Dispute Resolution", practiceHref: "/practice-areas/dispute-resolution" },
  { key: "maritime", label: "Maritime Law", practiceHref: "/practice-areas/maritime-law" },
  { key: "tech", label: "Tech & AI Law", practiceHref: "/practice-areas/tech-and-ai-law" },
  { key: "ip", label: "Intellectual Property", practiceHref: "/practice-areas/intellectual-property" },
  { key: "immigration", label: "Immigration Law", practiceHref: "/practice-areas/immigration-law" },
];

function areaFor(practiceArea?: string) {
  const label = (practiceArea || "").toLowerCase();
  return (
    AREAS.find((a) => a.label.toLowerCase() === label) ||
    AREAS.find((a) => label.includes(a.key)) ||
    null
  );
}

function monthYear(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

export default function InsightsBrowser({ articles }: { articles: ArticlePreview[] }) {
  const [area, setArea] = useState("all");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [query, setQuery] = useState("");
  const [openMenu, setOpenMenu] = useState<"area" | "sort" | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".filter-dd")) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const sections = useMemo(() => {
    const q = query.trim().toLowerCase();
    const dir = sort === "oldest" ? 1 : -1;

    const matches = articles.filter((art) => {
      const artArea = areaFor(art.practiceArea);
      if (area !== "all" && artArea?.key !== area) return false;
      if (!q) return true;
      const hay = `${art.title} ${art.excerpt || ""} ${art.authorName || ""} ${art.practiceArea || ""}`.toLowerCase();
      return hay.includes(q);
    });

    const grouped = new Map<string, { label: string; practiceHref?: string; key: string; entries: ArticlePreview[] }>();
    for (const art of matches) {
      const a = areaFor(art.practiceArea);
      const key = a?.key || art.practiceArea || "other";
      const label = a?.label || art.practiceArea || "Other";
      if (!grouped.has(key)) grouped.set(key, { key, label, practiceHref: a?.practiceHref, entries: [] });
      grouped.get(key)!.entries.push(art);
    }
    for (const g of grouped.values()) {
      g.entries.sort((x, y) => (x.publishedAt < y.publishedAt ? -dir : x.publishedAt > y.publishedAt ? dir : 0));
    }
    // Keep the canonical practice-area order, unknown labels last.
    return [...grouped.values()].sort((x, y) => {
      const xi = AREAS.findIndex((a) => a.key === x.key);
      const yi = AREAS.findIndex((a) => a.key === y.key);
      return (xi === -1 ? 99 : xi) - (yi === -1 ? 99 : yi);
    });
  }, [articles, area, sort, query]);

  const areaLabel = area === "all" ? "All areas of law" : AREAS.find((a) => a.key === area)?.label || "All areas of law";

  return (
    <div ref={rootRef}>
      <section className="section--tight" style={{ paddingTop: "clamp(2rem, 4vw, 3rem)", paddingBottom: 0 }}>
        <div className="container">
          <div className="insights-toolbar reveal">
            <div className="insights-controls">
              <div className="filter-dd">
                <button
                  type="button"
                  className={"filter-dd-btn" + (openMenu === "area" ? " is-open" : "")}
                  aria-haspopup="true"
                  aria-expanded={openMenu === "area"}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === "area" ? null : "area");
                  }}
                >
                  <span>{areaLabel}</span>
                  <svg width="11" height="7" viewBox="0 0 12 8" fill="none" aria-hidden="true"><path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                </button>
                <div className="filter-menu" role="menu" hidden={openMenu !== "area"}>
                  <span className="filter-menu-label">Area of law</span>
                  <button type="button" className={"filter-menu-item" + (area === "all" ? " is-active" : "")} role="menuitemradio" aria-checked={area === "all"} onClick={() => { setArea("all"); setOpenMenu(null); }}>All areas of law</button>
                  {AREAS.map((a) => (
                    <button key={a.key} type="button" className={"filter-menu-item" + (area === a.key ? " is-active" : "")} role="menuitemradio" aria-checked={area === a.key} onClick={() => { setArea(a.key); setOpenMenu(null); }}>
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="filter-dd">
                <button
                  type="button"
                  className={"filter-dd-btn" + (openMenu === "sort" ? " is-open" : "")}
                  aria-haspopup="true"
                  aria-expanded={openMenu === "sort"}
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenu(openMenu === "sort" ? null : "sort");
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h13M4 8h8M6.5 12.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                  <span>Filter</span>
                </button>
                <div className="filter-menu" role="menu" hidden={openMenu !== "sort"}>
                  <span className="filter-menu-label">Sort by</span>
                  <button type="button" className={"filter-menu-item" + (sort === "newest" ? " is-active" : "")} role="menuitemradio" aria-checked={sort === "newest"} onClick={() => { setSort("newest"); setOpenMenu(null); }}>Newest first</button>
                  <button type="button" className={"filter-menu-item" + (sort === "oldest" ? " is-active" : "")} role="menuitemradio" aria-checked={sort === "oldest"} onClick={() => { setSort("oldest"); setOpenMenu(null); }}>Oldest first</button>
                </div>
              </div>
            </div>
            <div className="insights-search">
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search…" aria-label="Search notes" />
              <span className="insights-search-icon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.5" /><path d="m11 11 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </span>
            </div>
          </div>
          <p className="insights-empty" hidden={sections.length > 0}>
            No notes in this area yet.{" "}
            <button type="button" className="insights-reset" onClick={() => { setArea("all"); setQuery(""); }}>Clear filters</button>
          </p>
        </div>
      </section>

      <div className="container" style={{ marginTop: "clamp(2.5rem, 5vw, 4rem)" }}>
        {sections.map((section) => (
          <section className="journal-section" id={section.key} key={section.key}>
            <div className="journal-rail reveal is-visible">
              <span className="eyebrow">Subject</span>
              <h2>{section.label}</h2>
              {section.practiceHref && <Link className="text-link" href={section.practiceHref}>Visit the Practice</Link>}
            </div>
            <div className="journal-entries">
              {section.entries.map((art) => (
                <Link className="journal-entry reveal is-visible" href={`/insights/${art.slug}`} key={art._id}>
                  <div className="meta">{monthYear(art.publishedAt)}</div>
                  <h3>{art.title}</h3>
                  {art.excerpt && <p>{art.excerpt}</p>}
                  {art.authorName && (
                    <div className="byline">{art.authorName}{art.authorRole ? ` · ${art.authorRole}` : ""}</div>
                  )}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
