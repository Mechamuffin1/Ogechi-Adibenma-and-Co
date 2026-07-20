import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Immigration Law in Nigeria: Visas, Work Permits & Residency | Ogechi Adibenma & Co",
  description: "Immigration lawyers in Abuja, Nigeria. Work and residence permits, expatriate quotas, business visas and citizenship matters, handled on paper, in advance, before travel plans depend on them.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/immigration-law.html" },
  openGraph: {
    type: "website",
    title: "Immigration Law | Ogechi Adibenma & Co Legal Chambers",
    description: "Work and residence permits, expatriate quotas, business visas and citizenship matters, prepared before travel plans depend on them.",
  },
};

export default function PracticeAreasImmigrationLawPage() {
  return (
    <main>
      <section className="hero hero--sub hero--photo">
        <div className="hero-panel">
          <img className="hero-photo" src="/media/practice/immigration.jpg" alt="" />
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
            <p className="breadcrumb reveal"><a href="/practice-areas">Practice Areas</a> / Full-Service Strength</p>
            <h1 className="reveal" data-delay="1">Immigration Law</h1>
            <p className="lede reveal" data-delay="2">Work and residence permits, expatriate quotas, business visas and citizenship matters, handled on paper, in advance, before a journey depends on them.</p>
          </div>
        </div>
      </section>

      <div className="container practice-layout">
        <div className="practice-main">

          <div className="reveal">
            <h2>The problem clients bring us</h2>
            <p>Immigration matters rarely fail loudly. They fail as an expired permit noticed at renewal, a quota position filled without approval, a visa category that never matched the work actually being done. Companies bringing expatriate staff into Nigeria, and individuals building lives across borders, come to us to get the paperwork right the first time, because the cost of correcting an immigration file is always higher than the cost of preparing it properly.</p>
          </div>

          <div className="reveal">
            <h2>What we handle</h2>
            <ul>
              <li><strong>Corporate immigration.</strong> Expatriate quota applications and renewals, STR visas, Combined Expatriate Residence Permit and Aliens Card (CERPAC), and compliance returns for companies employing foreign nationals.</li>
              <li><strong>Business and visitor visas.</strong> Advice on the correct visa category for the activity intended, and support with applications where the stakes justify counsel.</li>
              <li><strong>Residency and citizenship.</strong> Permanent residence, naturalisation and citizenship by registration, prepared with the evidentiary record these applications actually require.</li>
              <li><strong>Regularisation and compliance.</strong> Reviewing existing immigration files, correcting defects before they become penalties, and advising employers on their obligations.</li>
            </ul>
          </div>

          <div className="reveal">
            <h2>What to expect</h2>
            <ul>
              <li>A written assessment of the correct route before any application is filed.</li>
              <li>A document checklist prepared once, at the start, not discovered piecemeal.</li>
              <li>Realistic timelines based on how the agencies actually process, not how they should.</li>
              <li>Renewal dates diarised and raised with you before they become urgent.</li>
            </ul>
          </div>

          <div className="reveal">
            <h2>Frequently asked questions</h2>
            <div className="faq">
              <details>
                <summary>Can our company hire a foreign employee before the quota position is approved?</summary>
                <p>No, and doing so exposes both the company and the employee. The expatriate quota position must exist and have capacity before the STR visa and residence permit process begins. The sequence is the compliance; we plan recruitment timelines around it.</p>
              </details>
              <details>
                <summary>Do you handle visas to other countries?</summary>
                <p>Our practice is Nigerian immigration law: bringing people and businesses into Nigeria lawfully and keeping their status compliant. For outbound visa matters we can advise on the Nigerian-side documentation and, where useful, refer trusted counsel in the destination jurisdiction.</p>
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
              <li>Expatriate quotas &amp; CERPAC</li>
              <li>Work &amp; residence permits</li>
              <li>Business visa advice</li>
              <li>Residency &amp; citizenship applications</li>
            </ul>
          </div>
        </aside>
      </div>

      <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
