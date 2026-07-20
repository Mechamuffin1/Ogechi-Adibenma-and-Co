import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Tech & AI Law in Nigeria: Data Protection, Platform Counsel & AI Governance | Ogechi Adibenma & Co",
  description: "Technology and AI lawyers in Abuja, Nigeria. Data protection under the NDPA, platform and product counsel, intellectual property and the governance questions raised by artificial intelligence.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/tech-and-ai-law.html" },
  openGraph: {
    type: "website",
    title: "Tech & AI Law | Ogechi Adibenma & Co Legal Chambers",
    description: "Data protection, platform and product counsel, and the governance questions raised by artificial intelligence.",
  },
};

export default function PracticeAreasTechAndAiLawPage() {
  return (
    <main>
      <section className="hero hero--sub hero--photo">
          <div className="hero-panel">
            <img className="hero-photo" src="/media/practice/tech.jpg" alt="" />
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
              <h1 className="reveal" data-delay="1">Tech &amp; AI Law</h1>
              <p className="lede reveal" data-delay="2">Counsel for the companies building what comes next, where data, product and artificial intelligence outrun the settled law, and the drafting has to think ahead.</p>
            </div>
          </div>
        </section>
      
        <div className="container practice-layout">
          <div className="practice-main">
      
            <div className="reveal">
              <h2>The problem clients bring us</h2>
              <p>Technology businesses move faster than the statutes that govern them. Founders and product teams face real obligations, data protection under the Nigeria Data Protection Act 2023, platform liability, intellectual property, and the novel questions raised by deploying AI, often without in-house counsel to translate them into decisions. We act for startups, platforms and established companies that want to build boldly without inheriting avoidable legal risk.</p>
            </div>
      
            <div className="reveal">
              <h2>Our approach</h2>
              <ul>
                <li><strong>Data protection, made operational.</strong> NDPA 2023 compliance turned into policies, notices and processes a product team can actually follow.</li>
                <li><strong>Platform &amp; product counsel.</strong> Terms of service, user and vendor agreements, and liability allocation drafted for how the product really works.</li>
                <li><strong>IP that travels.</strong> Ownership of code, content and models secured across contractors, employees and collaborators.</li>
                <li><strong>AI governance.</strong> Practical guardrails for training data, model deployment and disclosure, built for a field where the rules are still being written.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>What to expect</h2>
              <ul>
                <li>Plain-language advice a non-lawyer product team can act on.</li>
                <li>Documents drafted for your actual stack and data flows, not a template.</li>
                <li>Fixed-fee stages for defined work, reviews, policies, standard agreements.</li>
                <li>Counsel who track how the law is moving, and flag it before it bites.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary>Do we need to comply with the NDPA if we are a small startup?</summary>
                  <p>Very likely, yes. The Nigeria Data Protection Act 2023 applies broadly to organisations processing personal data, with obligations scaling to your activity. Getting the basics right early is far cheaper than retrofitting them later.</p>
                </details>
                <details>
                  <summary>Can you advise on deploying AI in our product?</summary>
                  <p>Yes, on training-data rights, output and liability questions, disclosure, and the contracts around third-party models. The law here is unsettled, so we advise on defensible positions rather than false certainty.</p>
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
                <li>Data protection &amp; NDPA compliance</li>
                <li>Terms, privacy &amp; product agreements</li>
                <li>Intellectual property &amp; licensing</li>
                <li>AI governance &amp; risk</li>
              </ul>
            </div>
          </aside>
        </div>
      
        <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
