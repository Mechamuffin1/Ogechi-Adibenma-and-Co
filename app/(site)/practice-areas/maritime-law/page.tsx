import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Maritime Law in Nigeria — Admiralty, Shipping, Charterparties & Cargo Claims | Ogechi Adibenma & Co",
  description: "Maritime lawyers in Abuja, Nigeria. Admiralty and shipping counsel: charterparties, cargo claims, vessel arrest and marine regulatory work for operators moving goods through Nigerian and international waters.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/maritime-law.html" },
  openGraph: {
    type: "website",
    title: "Maritime Law | Ogechi Adibenma & Co Legal Chambers",
    description: "Admiralty and shipping counsel — charterparties, cargo claims, vessel arrest and marine regulatory work.",
  },
};

export default function PracticeAreasMaritimeLawPage() {
  return (
    <main>
      <section className="hero hero--sub hero--photo">
          <div className="hero-panel">
            <img className="hero-photo" src="/media/practice/maritime.jpg" alt="" />
            <div className="hero-photo-scrim" aria-hidden="true"></div>
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
              <p className="breadcrumb reveal"><a href="/practice-areas">Practice Areas</a> / Full-Service Practice</p>
              <h1 className="reveal" data-delay="1">Maritime Law</h1>
              <p className="lede reveal" data-delay="2">Admiralty and shipping counsel for a trading nation — the contracts that move cargo, and the claims that arise when a voyage does not go to plan.</p>
            </div>
          </div>
        </section>
      
        <div className="container practice-layout">
          <div className="practice-main">
      
            <div className="reveal">
              <h2>The problem clients bring us</h2>
              <p>Nigeria&rsquo;s ports carry the weight of its trade, and maritime disputes move quickly: a vessel to be arrested before it sails, cargo damaged or short-landed, a charterparty read differently by owner and charterer, a regulator asking questions mid-voyage. Operators, shippers, freight forwarders and financiers come to us for counsel that understands both the commercial clock and the admiralty jurisdiction of the Federal High Court.</p>
            </div>
      
            <div className="reveal">
              <h2>Our approach</h2>
              <ul>
                <li><strong>Contracts drafted for the sea.</strong> Charterparties, bills of lading, and carriage and logistics agreements written with the casualty, not just the voyage, in mind.</li>
                <li><strong>Urgent remedies, quickly.</strong> Vessel arrest and release, security and interim relief handled with the speed the tide demands.</li>
                <li><strong>Cargo and casualty claims.</strong> Loss, damage, short-landing and general-average matters pursued or defended on the documents.</li>
                <li><strong>Regulatory fluency.</strong> NIMASA, NPA and related requirements navigated so compliance is routine, not a crisis.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>What to expect</h2>
              <ul>
                <li>Rapid first response on time-critical matters — arrest, release and security.</li>
                <li>A written view of the merits and the forum before a claim is commenced.</li>
                <li>Fee clarity, with urgent work scoped and confirmed in writing.</li>
                <li>Coordination with surveyors, P&amp;I clubs and correspondents where needed.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary>Which court hears admiralty matters in Nigeria?</summary>
                  <p>The Federal High Court has admiralty jurisdiction. Time limits and security requirements can be tight, so early advice — ideally before a vessel sails — materially improves your position.</p>
                </details>
                <details>
                  <summary>Can you act on an urgent vessel arrest?</summary>
                  <p>Yes. Arrest and release are time-critical; contact us as early as possible with the vessel details and the underlying claim, and we will advise on prospects and security immediately.</p>
                </details>
              </div>
            </div>
      
          </div>
      
          <aside className="practice-aside">
            <div className="aside-card aside-card--dark reveal">
              <h3>Speak to this practice</h3>
              <p style={{ fontSize: "0.95rem" }}>Urgent maritime matters answered promptly.</p>
              <a className="btn" href="/contact">Request a Consultation</a>
            </div>
            <div className="aside-card reveal" data-delay="1">
              <h3>Typical work</h3>
              <ul>
                <li>Charterparties &amp; bills of lading</li>
                <li>Vessel arrest &amp; release</li>
                <li>Cargo, damage &amp; general average</li>
                <li>Marine regulatory compliance</li>
              </ul>
            </div>
          </aside>
        </div>
      
        <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
