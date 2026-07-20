import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import GeoField from "@/components/GeoField";
import InsightsBrowser from "@/components/InsightsBrowser";
import LegacyFx from "@/components/LegacyFx";
import { getAllArticles } from "@/sanity/lib/fetch";

export const metadata: Metadata = {
  title: "Chambers Notes: Legal Insights on Surrogacy, Commercial & Family Law | Ogechi Adibenma & Co",
  description:
    "Chambers Notes: considered legal analysis from Ogechi Adibenma & Co on surrogacy and fertility law, commercial and corporate law, and family law in Nigeria. Long-form, signed, and written to be useful.",
  alternates: { canonical: "https://www.ogechiadibenma.com/insights/" },
  openGraph: {
    type: "website",
    title: "Chambers Notes | Ogechi Adibenma & Co Legal Chambers",
    description:
      "Considered legal analysis on surrogacy, commercial and family law in Nigeria, long-form, signed, and written to be useful.",
  },
};

export const revalidate = 60;

export default async function InsightsPage() {
  const articles = await getAllArticles();

  return (
    <main>
      <section className="hero hero--sub">
        <div className="hero-panel">
          <GeoField />
          <div className="container hero-inner">
            <span className="eyebrow reveal">Chambers Notes</span>
            <h1 className="reveal" data-delay="1">Considered analysis,<br />signed by its author.</h1>
            <p className="lede reveal" data-delay="2">Not a blog. Chambers Notes is where this chambers publishes its thinking, long-form, few and sharp, on the questions clients actually bring us. Every note carries the name of the counsel who wrote it.</p>
          </div>
        </div>
      </section>

      <InsightsBrowser articles={articles} />

      <ConsultBand
        heading="Read something that touches your situation?"
        style={{ marginTop: "clamp(2rem, 5vw, 4rem)" }}
      />

      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
