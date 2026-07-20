import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Corporate & Commercial Law: Shareholders’ Agreements, Contracts & Compliance | Ogechi Adibenma & Co",
  description: "Commercial and corporate lawyers in Abuja, Nigeria. Incorporation, shareholders' agreements, commercial contracts, governance and regulatory compliance for businesses built to last.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/commercial-and-corporate.html" },
  openGraph: {
    type: "website",
    title: "Corporate & Commercial Law | Ogechi Adibenma & Co Legal Chambers",
    description: "Drafted so the document holds when the relationship is tested, incorporation, shareholders' agreements, contracts and compliance.",
  },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do we really need a shareholders' agreement if we have Articles of Association?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Articles are public and generic; a shareholders' agreement is private and specific. Deadlock, exit, valuation and vesting, the things that actually break founder relationships, live in the agreement, not the Articles." } },
      { "@type": "Question", "name": "Can you review a contract the other side drafted?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Contract review with a written risk memorandum is a core part of the practice, you receive a plain-language account of what the document does, what it fails to do, and what we would change before signature." } },
      { "@type": "Question", "name": "Do you work on fixed fees?", "acceptedAnswer": { "@type": "Answer", "text": "Wherever the scope allows it. Incorporations, standard agreements and defined reviews are quoted as fixed fees agreed in writing before work begins." } }
    ]
  };

export default function PracticeAreasCommercialAndCorporatePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero hero--sub hero--photo">
          <div className="hero-panel">
            <img className="hero-photo" src="/media/practice/commercial.jpg" alt="" />
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
              <h1 className="reveal" data-delay="1">Corporate &amp; Commercial</h1>
              <p className="lede reveal" data-delay="2">We draft for the day the relationship is tested, because every agreement is eventually read by someone looking for a way out of it.</p>
            </div>
          </div>
        </section>
      
        <div className="container practice-layout">
          <div className="practice-main">
      
            <div className="reveal">
              <h2>The problem clients bring us</h2>
              <p>Most commercial damage is self-inflicted at the start: the partnership begun on a handshake, the template shareholders&rsquo; agreement downloaded and half-adapted, the supply contract signed because the deal felt too good to slow down. By the time the dispute arrives, the documents either protect you or they don&rsquo;t, and no advocacy fully repairs a bad paper trail.</p>
              <p>Our commercial clients are founders, family businesses, and growing companies that want their structures examined by counsel who will still be reachable in five years, and who write their reasoning down.</p>
            </div>
      
            <div className="reveal">
              <h2>Our approach</h2>
              <ul>
                <li><strong>Structure before paper.</strong> Incorporation under CAMA 2020, governance design, and founder arrangements settled before the first external signature.</li>
                <li><strong>Agreements drafted to be tested.</strong> Shareholders&rsquo; agreements with real deadlock, exit and valuation machinery; commercial contracts whose remedies are actually usable in a Nigerian forum.</li>
                <li><strong>Plain-language risk memoranda.</strong> Every review comes with a written account of what the document does, what it omits, and what we would change, in language a non-lawyer director can act on.</li>
                <li><strong>Compliance as maintenance, not emergency.</strong> Annual returns, regulatory filings and board records kept in order quietly, so diligence never becomes drama.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>What to expect</h2>
              <ul>
                <li>A scoping conversation and a written fee proposal before any work begins.</li>
                <li>Fixed fees for defined work: incorporations, standard agreements, contract reviews.</li>
                <li>Drafts explained clause by clause on request, you should never sign what you cannot restate.</li>
                <li>A standing file: we keep your corporate record so the next transaction starts from order, not archaeology.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary>We have Articles of Association, do we need a shareholders&rsquo; agreement?</summary>
                  <p>Yes. Articles are public and generic; a shareholders&rsquo; agreement is private and specific. Deadlock, exit, valuation and vesting, the things that actually break founder relationships, live in the agreement, not the Articles. We have written about the four clauses that matter most in <a href="/insights/shareholders-agreements-before-you-sign">Chambers Notes</a>.</p>
                </details>
                <details>
                  <summary>Can you review a contract the other side drafted?</summary>
                  <p>Yes, review with a written risk memorandum is core work for this practice. You receive a plain account of what the document does, what it fails to do, and what we would change before signature.</p>
                </details>
                <details>
                  <summary>Do you work on fixed fees?</summary>
                  <p>Wherever the scope allows. Incorporations, standard agreements and defined reviews are quoted as fixed fees, agreed in writing before we start.</p>
                </details>
              </div>
            </div>
      
          </div>
      
          <aside className="practice-aside">
            <div className="aside-card aside-card--dark reveal">
              <h3>Speak to this practice</h3>
              <p style={{ fontSize: "0.95rem" }}>Led by Angela Ekene Anekwe, Esq. Enquiries answered within one business day.</p>
              <a className="btn btn--light" href="/contact">Request a Consultation</a>
            </div>
            <div className="aside-card reveal" data-delay="1">
              <h3>From Chambers Notes</h3>
              <ul>
                <li><a href="/insights/shareholders-agreements-before-you-sign">The Shareholders&rsquo; Agreement You Wish You Had Signed</a></li>
              </ul>
            </div>
            <div className="aside-card reveal" data-delay="2">
              <h3>Typical work</h3>
              <ul>
                <li>Incorporation &amp; governance (CAMA 2020)</li>
                <li>Shareholders&rsquo; &amp; founders&rsquo; agreements</li>
                <li>Commercial contracts &amp; reviews</li>
                <li>Regulatory compliance &amp; filings</li>
              </ul>
            </div>
          </aside>
        </div>
      
        <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
