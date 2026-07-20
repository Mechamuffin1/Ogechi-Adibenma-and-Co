import type { Metadata } from "next";
import Link from "next/link";
import ConsultBand from "@/components/ConsultBand";
import GeoField from "@/components/GeoField";
import LegacyFx from "@/components/LegacyFx";
import { getAllLawyers } from "@/sanity/lib/fetch";
import { urlForImage } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "People: Named Counsel in Surrogacy, Commercial & Family Law | Ogechi Adibenma & Co",
  description:
    "The lawyers of Ogechi Adibenma & Co Legal Chambers, Abuja. Every matter is handled by named counsel whose thinking you can read before you call.",
  alternates: { canonical: "https://www.ogechiadibenma.com/people/" },
  openGraph: {
    type: "website",
    title: "People | Ogechi Adibenma & Co Legal Chambers",
    description: "Counsel with names, faces and bylines.",
  },
};

export const revalidate = 60;

export default async function PeoplePage() {
  const lawyers = await getAllLawyers();

  return (
    <main>
      <section className="hero hero--sub">
        <div className="hero-panel">
          <GeoField />
          <div className="container hero-inner">
            <span className="eyebrow reveal">The People</span>
            <h1 className="reveal" data-delay="1">Counsel with names,<br />faces and bylines.</h1>
            <p className="lede reveal" data-delay="2">Every matter in this chambers is handled by named counsel, and you can read what each of us thinks in Chambers Notes before you ever call.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
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

      <ConsultBand />

      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
