import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Litigation in Nigeria: Civil & Commercial Trial and Appellate Advocacy | Ogechi Adibenma & Co",
  description: "Litigation lawyers in Abuja, Nigeria. Civil and commercial trial and appellate advocacy before Nigerian courts, built on documents and an honest reading of prospects before a claim is filed.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/litigation.html" },
  openGraph: {
    type: "website",
    title: "Litigation | Ogechi Adibenma & Co Legal Chambers",
    description: "Civil and commercial trial and appellate advocacy before Nigerian courts, built on documents and honest assessment.",
  },
};

export default function PracticeAreasLitigationPage() {
  return (
    <main>
      <section className="hero hero--sub hero--photo">
          <div className="hero-panel">
            <img className="hero-photo" src="/media/practice/litigation.jpg" alt="" />
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
              <p className="breadcrumb reveal"><a href="/practice-areas">Practice Areas</a> / Signature Practice</p>
              <h1 className="reveal" data-delay="1">Litigation</h1>
              <p className="lede reveal" data-delay="2">Trial and appellate advocacy for the disputes that must be fought, argued on the documents, and only after an honest reading of what the case is worth.</p>
            </div>
          </div>
        </section>
      
        <div className="container practice-layout">
          <div className="practice-main">
      
            <div className="reveal">
              <h2>The problem clients bring us</h2>
              <p>By the time a dispute reaches a courtroom, its outcome is largely set by the record: what was written, signed, filed and preserved. Clients come to us with breached contracts, shareholder and partnership fights, property claims and regulatory challenges, needing an advocate who will build the case on evidence rather than volume, and who will say plainly when a claim is not worth pursuing.</p>
            </div>
      
            <div className="reveal">
              <h2>Our approach</h2>
              <ul>
                <li><strong>Merits before motion.</strong> A written opinion on prospects, quantum and realistic timelines before proceedings are recommended, including when we advise against them.</li>
                <li><strong>Pleadings built on documents.</strong> The evidentiary spine is assembled before the first process is filed; cases are won on records, not rhetoric.</li>
                <li><strong>Appellate discipline.</strong> Points preserved at trial, and appeals taken only where the law and the record genuinely support them.</li>
                <li><strong>Enforcement planned early.</strong> A judgment you cannot enforce is a certificate; we identify assets and routes when strategy is set.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>What to expect</h2>
              <ul>
                <li>An honest written merits assessment before you commit to proceedings.</li>
                <li>Cost estimates by stage, revisited as the matter develops.</li>
                <li>Reporting after every hearing and material development, without being chased.</li>
                <li>Settlement kept live at every stage where it serves you better than judgment.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary>How is litigation different from your dispute-resolution practice?</summary>
                  <p>They overlap. <a href="/practice-areas/dispute-resolution">Dispute resolution</a> covers the full toolkit, negotiation, mediation and arbitration as well as court. This practice is the courtroom end of it: trial and appellate advocacy when a matter is, or must be, litigated to judgment.</p>
                </details>
                <details>
                  <summary>Will you tell me if my case is weak?</summary>
                  <p>In writing, before you spend on it. Clients are entitled to pursue difficult cases with open eyes; they are not well served by counsel who let them do it blind.</p>
                </details>
              </div>
            </div>
      
          </div>
      
          <aside className="practice-aside">
            <div className="aside-card aside-card--dark reveal">
              <h3>Speak to this practice</h3>
              <p style={{ fontSize: "0.95rem" }}>Enquiries answered within one business day.</p>
              <a className="btn" href="/contact">Request a Consultation</a>
            </div>
            <div className="aside-card reveal" data-delay="1">
              <h3>Typical work</h3>
              <ul>
                <li>Civil &amp; commercial trials</li>
                <li>Appeals &amp; interlocutory applications</li>
                <li>Injunctions &amp; urgent relief</li>
                <li>Enforcement of judgments</li>
              </ul>
            </div>
          </aside>
        </div>
      
        <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
