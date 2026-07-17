import type { Metadata } from "next";
import Link from "next/link";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";
import { getAllArticles, getAllLawyers } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Ogechi Adibenma & Co Legal Chambers — Surrogacy, Fertility & Commercial Law, Abuja",
  description:
    "Ogechi Adibenma & Co Legal Chambers advises families formed through surrogacy and assisted reproduction, and businesses built to last. Considered counsel in surrogacy, commercial, family, property and dispute resolution law.",
  alternates: { canonical: "https://www.ogechiadibenma.com/" },
  openGraph: {
    type: "website",
    title: "Ogechi Adibenma & Co Legal Chambers",
    description: "Considered counsel for families formed through assisted reproduction and businesses that intend to endure.",
    url: "https://www.ogechiadibenma.com/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Ogechi Adibenma & Co Legal Chambers",
  url: "https://www.ogechiadibenma.com/",
  description:
    "Legal chambers advising on surrogacy and fertility law, commercial and corporate law, family law, property and real estate, and dispute resolution.",
  areaServed: "Nigeria",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 101 Brightview Estate, Lugbe",
    addressLocality: "Abuja",
    addressRegion: "FCT",
    addressCountry: "NG",
  },
  email: "chambers@ogechiadibenma.com",
  telephone: "+234 800 000 0000",
  knowsAbout: [
    "Surrogacy Law", "Fertility Law", "Assisted Reproduction Law", "Commercial Law",
    "Corporate Law", "Family Law", "Real Estate Law", "Dispute Resolution",
  ],
};

const PRACTICE_INDEX = [
  { href: "/practice-areas/surrogacy-and-fertility-law", name: "Surrogacy & Fertility Law", num: "01" },
  { href: "/practice-areas/commercial-and-corporate", name: "Corporate & Commercial", num: "02" },
  { href: "/practice-areas/family-law", name: "Family Law", num: "03" },
  { href: "/practice-areas/property-and-real-estate", name: "Property & Real Estate", num: "04" },
  { href: "/practice-areas/dispute-resolution", name: "Dispute Resolution", num: "05" },
  { href: "/practice-areas/litigation", name: "Litigation", num: "06" },
  { href: "/practice-areas/maritime-law", name: "Maritime Law", num: "07" },
  { href: "/practice-areas/tech-and-ai-law", name: "Tech & AI Law", num: "08" },
];

function monthYear(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

export default async function HomePage() {
  const [lawyers, articles] = await Promise.all([getAllLawyers(), getAllArticles()]);
  const latestArticles = articles.slice(0, 3);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="hero hero--main">
        <div className="hero-panel">
          <video className="hero-media" autoPlay muted playsInline preload="auto" aria-hidden="true">
            <source src="/media/lady-justice.mp4" type="video/mp4" />
          </video>
          <div className="hero-scrim" aria-hidden="true"></div>
          <div className="hero-blobs" aria-hidden="true">
            <div className="blob blob--sky"></div>
            <div className="blob blob--warm"></div>
          </div>
          <div className="container hero-inner">
            <div className="hero-copy">
              <span className="eyebrow reveal">Ogechi Adibenma &amp; Co Legal Chambers · Abuja</span>
              <div className="hero-headline reveal" data-delay="1">
                <h1>Legal Solutions For<br />Everyone, Everywhere</h1>
                <hr className="hero-rule" />
              </div>
              <p className="hero-teaser reveal" data-delay="2">One standard of care is all we have in this legal profession, and that standard is&nbsp;<span className="hero-accent">excellence</span>.</p>
              <Link className="btn btn--light reveal" data-delay="3" href="/contact">Request a Consultation</Link>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <span>Keep reading</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1v11M2.5 7.8 7 12.3l4.5-4.5" stroke="currentColor" strokeWidth="1.5" /></svg>
          </div>
        </div>
      </section>

      {/* Practice areas */}
      <section className="section practice-area-section" id="practice">
        <div className="globe" data-geo="/media/world-countries.geo.json" aria-hidden="true"></div>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Practice Area</span>
            <h2>Known for excellence, <span className="accent-word">globally</span></h2>
            <p className="lede">Our chambers leads with excellence where careful counsel is scarce, and carries full-service strength behind it.</p>
          </div>

          <div className="practice-index-scroll">
            <ol className="practice-index">
              {PRACTICE_INDEX.map((item) => (
                <li key={item.href}>
                  <Link className="practice-index-item reveal" href={item.href}>
                    <span className="pi-name">{item.name}</span><span className="pi-num">{item.num}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Insights preview */}
      <section className="section section--alt chevron-bg" id="insights">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Chambers Notes</span>
            <h2>Considered, not constant</h2>
            <p className="lede">We publish our thinking before it is billed, in long-form analysis on the questions clients actually bring us.</p>
          </div>
          <div className="insight-grid">
            {latestArticles.map((art) => (
              <Link className="insight-card reveal" href={`/insights/${art.slug}`} key={art._id}>
                <div className="meta">{[art.practiceArea, monthYear(art.publishedAt)].filter(Boolean).join(" · ")}</div>
                <h3>{art.title}</h3>
                {art.excerpt && <p>{art.excerpt}</p>}
                {art.authorName && <div className="byline">{art.authorName}</div>}
              </Link>
            ))}
          </div>
          <p style={{ marginTop: "2.5rem", textAlign: "center" }} className="reveal"><Link className="btn btn--lg" href="/insights">Read More Insights</Link></p>
        </div>
      </section>

      {/* People */}
      <section className="section" id="people">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The People</span>
            <h2>Named, never faceless</h2>
            <p className="lede">Every matter is held by counsel you can name and read, so authority is something you verify before you call.</p>
          </div>
          <div className="people-grid">
            {lawyers.map((person, i) => (
              <Link
                className="person-card reveal"
                data-delay={i > 0 ? String(Math.min(i, 3)) : undefined}
                href={`/people/${person.slug}`}
                key={person._id}
              >
                <div className="person-photo">
                  {person.photo?.asset && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={urlForImage(person.photo, 640)} alt={person.photo.alt || person.name} />
                  )}
                </div>
                <div className="person-body">
                  <h3>{person.name}</h3>
                  {person.role && <div className="role">{person.role}</div>}
                  {person.summary && <p className="cred">{person.summary}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="section section--tight section--dark" id="credentials">
        <div className="container">
          <div className="credentials-grid">
            <div className="credential reveal">
              <span className="label">Admissions</span>
              <p>Barristers &amp; Solicitors of the Supreme Court of Nigeria. Members, Nigerian Bar Association.</p>
            </div>
            <div className="credential reveal" data-delay="1">
              <span className="label">Memberships</span>
              <p>Nigerian Bar Association, Section on Business Law · Institute of Chartered Mediators &amp; Conciliators.</p>
            </div>
            <div className="credential reveal" data-delay="2">
              <span className="label">Published</span>
              <p>Commentary and analysis in Nigerian legal journals and practice publications; original analysis in Chambers Notes.</p>
            </div>
            <div className="credential reveal" data-delay="3">
              <span className="label">Standard</span>
              <p>Every enquiry answered within one business day. Every opinion signed by the counsel who wrote it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The standard (stacked declaration) */}
      <section className="words">
        <div className="container" data-stagger="0.18">
          <span className="eyebrow reveal">The Standard</span>
          <div className="word-line reveal">Plain<em>l</em>y.</div>
          <div className="word-line reveal">In adv<em>an</em>ce.</div>
          <div className="word-line reveal">Under our own na<em>m</em>es.</div>
          <Link className="text-link reveal" href="/about">Why the chambers exists</Link>
        </div>
      </section>

      <ConsultBand />

      <LegacyFx
        libs={[
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
          "/js/three.min.js",
          "/js/world-geo.js",
        ]}
        inits={["/js/atmosphere.js", "/js/globe.js"]}
      />
    </main>
  );
}
