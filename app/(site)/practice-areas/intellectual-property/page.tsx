import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Intellectual Property Law in Nigeria: Trademarks, Copyright & Brand Protection | Ogechi Adibenma & Co",
  description: "Intellectual property lawyers in Abuja, Nigeria. Trademark registration and enforcement, copyright, trade secrets and licensing, protection put in writing before the idea is tested.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/intellectual-property.html" },
  openGraph: {
    type: "website",
    title: "Intellectual Property | Ogechi Adibenma & Co Legal Chambers",
    description: "Trademarks, copyright, trade secrets and licensing for the people who create and the businesses built on what they make.",
  },
};

export default function PracticeAreasIntellectualPropertyPage() {
  return (
    <main>
      <section className="hero hero--sub hero--photo">
        <div className="hero-panel">
          <img className="hero-photo" src="/media/practice/intellectual-property.jpg" alt="" />
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
            <h1 className="reveal" data-delay="1">Intellectual Property</h1>
            <p className="lede reveal" data-delay="2">Trademarks, copyright, trade secrets and licensing: protection put in writing before the idea is tested, not after it is taken.</p>
          </div>
        </div>
      </section>

      <div className="container practice-layout">
        <div className="practice-main">

          <div className="reveal">
            <h2>The problem clients bring us</h2>
            <p>A name that built a market and was registered by someone else. A creative work used without licence. A departing employee who left with the process that made the business work. Most intellectual property disputes we see began years earlier, when protection felt like a formality that could wait. Our practice exists to do the unglamorous early work, registration, assignment and confidentiality, so the valuable thing your business makes remains yours.</p>
          </div>

          <div className="reveal">
            <h2>What we handle</h2>
            <ul>
              <li><strong>Trademarks.</strong> Clearance searches, registration at the Nigerian Trademarks Registry, renewals, oppositions and enforcement against infringers.</li>
              <li><strong>Copyright.</strong> Protection and licensing of creative, literary and software works, and action against unauthorised use.</li>
              <li><strong>Trade secrets and confidentiality.</strong> Non-disclosure frameworks, employment IP clauses and exit protocols that keep proprietary knowledge in the business.</li>
              <li><strong>Licensing and assignment.</strong> Agreements that move rights deliberately, with royalties, territories and reversion written plainly.</li>
            </ul>
          </div>

          <div className="reveal">
            <h2>What to expect</h2>
            <ul>
              <li>A written audit of what your business owns, what is registered, and what is exposed.</li>
              <li>Registrations pursued and tracked to certificate, with renewal dates diarised.</li>
              <li>Enforcement advice that weighs the cost of action honestly against the value of the right.</li>
              <li>Agreements drafted to be read by business people, not only lawyers.</li>
            </ul>
          </div>

          <div className="reveal">
            <h2>Frequently asked questions</h2>
            <div className="faq">
              <details>
                <summary>Is my business name protected because I registered the company at CAC?</summary>
                <p>No. Company registration reserves a corporate name; it does not create trademark rights. A competitor can still register your brand as a trademark and enforce it against you. The two registrations answer different questions, and a serious brand needs both.</p>
              </details>
              <details>
                <summary>Do I need to register copyright in Nigeria?</summary>
                <p>Copyright arises automatically when an original work is created. Registration with the Nigerian Copyright Commission is not required, but a voluntary deposit creates a public record that makes proving ownership far easier when a dispute comes.</p>
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
              <li>Trademark registration &amp; oppositions</li>
              <li>Copyright licensing &amp; enforcement</li>
              <li>Confidentiality &amp; IP clauses</li>
              <li>Licensing &amp; assignment agreements</li>
            </ul>
          </div>
        </aside>
      </div>

      <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
