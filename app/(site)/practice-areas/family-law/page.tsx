import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Family Law in Nigeria: Custody, Divorce, Maintenance & Adoption | Ogechi Adibenma & Co",
  description: "Family lawyers in Abuja, Nigeria. Custody, divorce and dissolution under the Matrimonial Causes Act, maintenance, adoption and guardianship, handled with discretion and steadiness.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/family-law.html" },
  openGraph: {
    type: "website",
    title: "Family Law | Ogechi Adibenma & Co Legal Chambers",
    description: "Custody, divorce, maintenance, adoption and guardianship, handled with discretion and a steady hand.",
  },
};

export default function PracticeAreasFamilyLawPage() {
  return (
    <main>
      <section className="hero hero--sub hero--photo">
          <div className="hero-panel">
            <img className="hero-photo" src="/media/practice/family.jpg" alt="" />
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
              <h1 className="reveal" data-delay="1">Family Law</h1>
              <p className="lede reveal" data-delay="2">The matters in this practice are lived, not just litigated. We handle them with discretion, candour about prospects, and the child&rsquo;s interests where the law places them: first.</p>
            </div>
          </div>
        </section>
      
        <div className="container practice-layout">
          <div className="practice-main">
      
            <div className="reveal">
              <h2>The problem clients bring us</h2>
              <p>Family disputes arrive carrying more than legal questions, custody and access, maintenance, the dissolution of statutory or customary marriage, adoption and guardianship all sit inside relationships that will usually continue in some form after the case ends. Clients come to us when they need an advocate who will protect their position without inflaming what remains.</p>
              <p>Nigeria&rsquo;s plural system, the Matrimonial Causes Act, the Child&rsquo;s Rights Act where domesticated, customary and Islamic law, means the forum and framing of a family matter can matter as much as its facts. Choosing them well is half the work.</p>
            </div>
      
            <div className="reveal">
              <h2>Our approach</h2>
              <ul>
                <li><strong>Candour first.</strong> A realistic written assessment of your position before strategy is set, including when settlement serves you better than victory.</li>
                <li><strong>The child&rsquo;s interests as the fixed point.</strong> In custody and guardianship, Nigerian courts apply the best-interests standard; we build cases that speak to it rather than around it.</li>
                <li><strong>Forum chosen deliberately.</strong> Statutory, customary or negotiated resolution, assessed on your facts, not on habit.</li>
                <li><strong>Discretion as policy.</strong> Family matters are handled by named counsel, with correspondence and filings kept as private as the process allows.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>What to expect</h2>
              <ul>
                <li>A confidential first consultation, and a written opinion on prospects before proceedings are recommended.</li>
                <li>Honest advice on settlement at every stage, litigation is a tool here, not a default.</li>
                <li>Clear fee structures, discussed before engagement.</li>
                <li>One counsel responsible for your matter throughout.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary>How do Nigerian courts decide custody?</summary>
                  <p>By the best interests of the child, a holistic assessment of welfare, stability, care history and circumstances, not a presumption in favour of either parent. We examine how courts apply the standard in <a href="/insights/custody-best-interests-nigeria">Chambers Notes</a>.</p>
                </details>
                <details>
                  <summary>Does it matter whether we married under the Act or customary law?</summary>
                  <p>Considerably. It determines which court can dissolve the marriage, on what grounds, and how ancillary matters like maintenance and property are approached. It is one of the first questions we resolve.</p>
                </details>
                <details>
                  <summary>Can family matters be settled without going to court?</summary>
                  <p>Often, yes, negotiated terms of settlement, mediation, or consent orders. Where a negotiated outcome protects you adequately, we will recommend it and say why.</p>
                </details>
              </div>
            </div>
      
          </div>
      
          <aside className="practice-aside">
            <div className="aside-card aside-card--dark reveal">
              <h3>Speak to this practice</h3>
              <p style={{ fontSize: "0.95rem" }}>Led by Ogechi Adibenma, Esq. Enquiries answered within one business day.</p>
              <a className="btn btn--light" href="/contact">Request a Consultation</a>
            </div>
            <div className="aside-card reveal" data-delay="1">
              <h3>From Chambers Notes</h3>
              <ul>
                <li><a href="/insights/custody-best-interests-nigeria">Custody After Separation: How Courts Read the Best Interests of the Child</a></li>
              </ul>
            </div>
            <div className="aside-card reveal" data-delay="2">
              <h3>Typical work</h3>
              <ul>
                <li>Custody, access &amp; guardianship</li>
                <li>Dissolution, statutory &amp; customary</li>
                <li>Maintenance &amp; settlement of property</li>
                <li>Adoption proceedings</li>
              </ul>
            </div>
          </aside>
        </div>
      
        <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
