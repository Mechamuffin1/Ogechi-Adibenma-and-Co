import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Practice Areas — Surrogacy, Commercial, Family, Property & Disputes | Ogechi Adibenma & Co",
  description: "Five practices, led by two signature strengths: surrogacy & fertility law and commercial & corporate law, supported by family law, property & real estate, and dispute resolution.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/" },
  openGraph: {
    type: "website",
    title: "Practice Areas | Ogechi Adibenma & Co Legal Chambers",
    description: "Surrogacy & fertility, commercial & corporate, family, property and dispute resolution — considered counsel across five practices.",
  },
};

export default function PracticeAreasPage() {
  return (
    <main>
      <section className="hero hero--sub">
          <div className="hero-panel">
            <div className="geo-field" aria-hidden="true">
              <span className="geo-block gb--sky" style={{ top: "10%", left: "4%", width: "22%", height: "20%" }}></span>
              <span className="geo-block gb--cream" style={{ top: "34%", left: "18%", width: "15%", height: "28%" }}></span>
              <span className="geo-block gb--deep" style={{ top: "6%", right: "8%", width: "18%", height: "36%" }}></span>
              <span className="geo-block gb--sky" style={{ bottom: "12%", right: "20%", width: "26%", height: "18%" }}></span>
              <span className="geo-block gb--cream" style={{ bottom: "4%", left: "38%", width: "12%", height: "24%" }}></span>
              <span className="geo-block gb--sky" style={{ top: "54%", left: "62%", width: "14%", height: "22%" }}></span>
              <span className="geo-block gb--deep" style={{ bottom: "20%", left: "6%", width: "10%", height: "30%" }}></span>
            </div>
            <div className="container hero-inner">
              <span className="eyebrow reveal">Practice Areas</span>
              <h1 className="reveal" data-delay="1">Eight practices.<br />One standard of care.</h1>
              <p className="lede reveal" data-delay="2">We lead where careful counsel is scarcest — surrogacy and commercial law — and carry full-service strength in family, property and disputes behind them.</p>
            </div>
          </div>
        </section>
      
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Signature Practices</span>
              <h2>Where the chambers leads</h2>
            </div>
            <div className="signature-grid">
              <a className="practice-card practice-card--signature reveal" href="/practice-areas/surrogacy-and-fertility-law">
                <span className="eyebrow">Signature Practice</span>
                <h3>Surrogacy &amp; Fertility Law</h3>
                <p>Nigeria has no comprehensive surrogacy statute — which makes the agreement, the sequence and the counsel decisive. We act for intending parents, surrogates and clinics through the whole arc: agreements, consents, parental rights and birth registration.</p>
                <span className="text-link">Explore the practice</span>
              </a>
              <a className="practice-card practice-card--signature reveal" data-delay="1" href="/practice-areas/litigation">
                <span className="eyebrow">Signature Practice</span>
                <h3>Litigation</h3>
                <p>Trial and appellate advocacy for the disputes that must be fought — built on the documents, and argued only after an honest reading of what the case is worth before it is filed.</p>
                <span className="text-link">Explore the practice</span>
              </a>
            </div>
          </div>
        </section>
      
        <section className="section section--alt chevron-bg" style={{ paddingTop: "clamp(3rem, 6vw, 5rem)" }}>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Full-Service Strength</span>
              <h2>The practices behind them</h2>
            </div>
            <div className="capability-grid">
              <a className="practice-card reveal" href="/practice-areas/family-law">
                <h3>Family Law</h3>
                <p>Marriage, custody, maintenance and dissolution under the Matrimonial Causes Act and customary law — handled with discretion, and with the child&rsquo;s interests where the law puts them: first.</p>
                <span className="text-link">Learn more</span>
              </a>
              <a className="practice-card reveal" data-delay="1" href="/practice-areas/property-and-real-estate">
                <h3>Property &amp; Real Estate</h3>
                <p>Title due diligence, conveyancing, perfection, leases and development agreements. In Nigerian property practice, what you verify before signing is worth more than what you litigate after.</p>
                <span className="text-link">Learn more</span>
              </a>
              <a className="practice-card reveal" data-delay="2" href="/practice-areas/dispute-resolution">
                <h3>Dispute Resolution</h3>
                <p>Negotiation, mediation, arbitration and litigation before Nigerian courts. We tell clients honestly which disputes are worth fighting — and fight the ones that are.</p>
                <span className="text-link">Learn more</span>
              </a>
              <a className="practice-card reveal" href="/practice-areas/commercial-and-corporate">
                <h3>Corporate &amp; Commercial</h3>
                <p>Incorporation and governance, shareholders&rsquo; agreements, commercial contracts, and regulatory compliance for businesses that intend to be around in twenty years.</p>
                <span className="text-link">Learn more</span>
              </a>
              <a className="practice-card reveal" data-delay="1" href="/practice-areas/maritime-law">
                <h3>Maritime Law</h3>
                <p>Admiralty and shipping counsel: charterparties, cargo claims, vessel arrest and marine regulatory work for those moving goods through Nigerian and international waters.</p>
                <span className="text-link">Learn more</span>
              </a>
              <a className="practice-card reveal" data-delay="2" href="/practice-areas/tech-and-ai-law">
                <h3>Tech &amp; AI Law</h3>
                <p>Data protection, platform and product counsel, and the governance questions raised by artificial intelligence — for the companies building what comes next.</p>
                <span className="text-link">Learn more</span>
              </a>
            </div>
          </div>
        </section>
      
        <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
