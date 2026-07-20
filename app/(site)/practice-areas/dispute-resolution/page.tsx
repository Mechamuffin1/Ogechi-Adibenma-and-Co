import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Dispute Resolution in Nigeria: Litigation, Arbitration & Mediation | Ogechi Adibenma & Co",
  description: "Dispute resolution lawyers in Abuja, Nigeria. Litigation before Nigerian courts, arbitration and mediation, we tell clients which disputes are worth fighting, and fight the ones that are.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/dispute-resolution.html" },
  openGraph: {
    type: "website",
    title: "Dispute Resolution | Ogechi Adibenma & Co Legal Chambers",
    description: "Negotiation, arbitration and litigation, pursued when it serves you, avoided when it doesn't.",
  },
};

export default function PracticeAreasDisputeResolutionPage() {
  return (
    <main>
      <section className="hero hero--sub hero--photo">
          <div className="hero-panel">
            <img className="hero-photo" src="/media/practice/dispute.avif" alt="" />
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
              <h1 className="reveal" data-delay="1">Dispute Resolution</h1>
              <p className="lede reveal" data-delay="2">The first question is never how to win, it is whether this fight, in this forum, at this cost, serves you. We answer that honestly, then act on the answer.</p>
            </div>
          </div>
        </section>
      
        <div className="container practice-layout">
          <div className="practice-main">
      
            <div className="reveal">
              <h2>The problem clients bring us</h2>
              <p>Nigerian litigation can be long, and its length is itself a weapon, one that parties on both sides know how to use. Clients come to us with breached contracts, property claims, partnership fallouts and enforcement problems, and what they need first is not bravado but arithmetic: what the claim is worth, what pursuing it costs in money and years, and whether a negotiated or arbitrated route reaches the substance faster.</p>
            </div>
      
            <div className="reveal">
              <h2>Our approach</h2>
              <ul>
                <li><strong>Merits and economics assessed together.</strong> A written opinion on prospects, quantum and realistic timelines before proceedings are recommended, including when we advise against them.</li>
                <li><strong>The right forum, deliberately.</strong> Court, arbitration under the Arbitration and Mediation Act 2023, or structured negotiation, chosen for your dispute, not by default.</li>
                <li><strong>Pleadings built on documents.</strong> Cases are won on records; we build the evidentiary spine before the first process is filed.</li>
                <li><strong>Enforcement planned from the start.</strong> A judgment you cannot enforce is a certificate. We identify assets and enforcement routes when strategy is set, not after victory.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>What to expect</h2>
              <ul>
                <li>An honest merits assessment in writing, even when the honest answer is &ldquo;settle.&rdquo;</li>
                <li>Cost estimates by stage, revisited as the matter develops.</li>
                <li>Reporting after every hearing and material development, without being asked.</li>
                <li>Settlement kept live at every stage where it serves you.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary>How long will my case take?</summary>
                  <p>It depends on forum, court, and the other side&rsquo;s appetite for delay, first-instance commercial litigation is commonly measured in years, arbitration usually in months. We give you a realistic range at the outset and update it honestly as the matter develops.</p>
                </details>
                <details>
                  <summary>Is arbitration better than court?</summary>
                  <p>Sometimes. It is typically faster and private, and awards are enforceable, but it requires an arbitration agreement and has its own costs. Where your contracts are still being drafted, the better question is which disputes you want arbitrated, that is a drafting decision we handle with our <a href="/practice-areas/commercial-and-corporate">commercial practice</a>.</p>
                </details>
                <details>
                  <summary>Will you take a case you think we will lose?</summary>
                  <p>Not without telling you so in writing first. Clients are entitled to pursue weak cases with open eyes; they are not well served by counsel who let them do it blind.</p>
                </details>
              </div>
            </div>
      
          </div>
      
          <aside className="practice-aside">
            <div className="aside-card aside-card--dark reveal">
              <h3>Speak to this practice</h3>
              <p style={{ fontSize: "0.95rem" }}>Led by Joel Ezekiel Nwushie, Esq. Enquiries answered within one business day.</p>
              <a className="btn btn--light" href="/contact">Request a Consultation</a>
            </div>
            <div className="aside-card reveal" data-delay="1">
              <h3>Typical work</h3>
              <ul>
                <li>Commercial &amp; contract litigation</li>
                <li>Property &amp; land disputes</li>
                <li>Arbitration &amp; mediation</li>
                <li>Enforcement of judgments &amp; awards</li>
              </ul>
            </div>
          </aside>
        </div>
      
        <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
