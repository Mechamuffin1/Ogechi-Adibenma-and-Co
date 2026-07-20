import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConsultBand from "@/components/ConsultBand";
import { getAllLawyers, getLawyerBySlug } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const lawyers = await getAllLawyers();
  return lawyers.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = await getLawyerBySlug(slug);
  if (!person) return {};
  return {
    title: `${person.name}: ${person.role || "Counsel"} | Ogechi Adibenma & Co`,
    description: person.lede || person.summary,
    alternates: { canonical: `https://www.ogechiadibenma.com/people/${person.slug}.html` },
    openGraph: {
      type: "profile",
      title: `${person.name}${person.role ? `: ${person.role}` : ""}`,
      description: person.lede || person.summary || "",
    },
  };
}

function monthYear(iso?: string) {
  return iso ? new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" }) : "";
}

/* Sidebar rows come from plain-text conventions non-technical editors can
   manage: credentials as "Label: detail" lines, practice areas as a list. */
function credentialRows(credentials?: string) {
  if (!credentials) return [];
  return credentials
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const i = line.indexOf(":");
      return i > 0 ? { label: line.slice(0, i).trim(), value: line.slice(i + 1).trim() } : { label: "Credentials", value: line };
    });
}

export default async function LawyerProfilePage({ params }: Props) {
  const { slug } = await params;
  const person = await getLawyerBySlug(slug);
  if (!person) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name.replace(/,\s*Esq\.?$/, ""),
    honorificSuffix: person.name.match(/Esq\.?$/) ? "Esq." : undefined,
    jobTitle: person.role,
    worksFor: { "@type": "Organization", name: "Ogechi Adibenma & Co Legal Chambers" },
    ...(person.practiceAreas?.length ? { knowsAbout: person.practiceAreas } : {}),
    url: `https://www.ogechiadibenma.com/people/${person.slug}.html`,
  };

  const bioParagraphs = (person.bio || "").split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container profile-layout">
        <aside className="profile-side reveal">
          <div className="person-photo">
            {person.photo?.asset && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={urlForImage(person.photo, 640)} alt={person.photo.alt || person.name} />
            )}
          </div>
          <dl>
            {person.role && (
              <>
                <dt>Position</dt>
                <dd>{person.role}</dd>
              </>
            )}
            {person.practiceAreas && person.practiceAreas.length > 0 && (
              <>
                <dt>Practices</dt>
                <dd>{person.practiceAreas.join(" · ")}</dd>
              </>
            )}
            {credentialRows(person.credentials).map((row, i) => (
              <React.Fragment key={i}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </React.Fragment>
            ))}
            {person.email && (
              <>
                <dt>Contact</dt>
                <dd><a href={`mailto:${person.email}`}>{person.email}</a></dd>
              </>
            )}
          </dl>
        </aside>

        <div className="profile-main">
          <p className="breadcrumb reveal"><Link href="/people">Meet Our Team</Link>{person.role ? ` / ${person.role}` : ""}</p>
          <h1 className="reveal" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>{person.name}</h1>
          {person.lede && <p className="lede reveal" data-delay="1">{person.lede}</p>}

          {bioParagraphs.length > 0 && (
            <div className="reveal" data-delay="2">
              <h2>About</h2>
              {bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          {person.articles && person.articles.length > 0 && (
            <div className="reveal">
              <h2>Selected writing</h2>
              <ul>
                {person.articles.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/insights/${a.slug}`}>{a.title}</Link>, Chambers Notes, {monthYear(a.publishedAt)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <ConsultBand />
    </main>
  );
}

