import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Property & Real Estate Law in Nigeria: Title Due Diligence, Conveyancing & Leases | Ogechi Adibenma & Co",
  description: "Property lawyers in Abuja, Nigeria. Title verification and due diligence, conveyancing, perfection of title, leases and development agreements, what you verify before signing is worth more than what you litigate after.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/property-and-real-estate.html" },
  openGraph: {
    type: "website",
    title: "Property & Real Estate | Ogechi Adibenma & Co Legal Chambers",
    description: "Title due diligence, conveyancing, perfection and leases that survive scrutiny.",
  },
};

export default function PracticeAreasPropertyAndRealEstatePage() {
  return (
    <main>
      <section className="hero hero--sub hero--photo">
          <div className="hero-panel">
            <img className="hero-photo" src="/media/practice/property.jpg" alt="" />
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
              <h1 className="reveal" data-delay="1">Property &amp; Real Estate</h1>
              <p className="lede reveal" data-delay="2">In Nigerian property practice, what you verify before signing is worth more than anything you can litigate after. We are thorough where it counts: before your money moves.</p>
            </div>
          </div>
        </section>
      
        <div className="container practice-layout">
          <div className="practice-main">
      
            <div className="reveal">
              <h2>The problem clients bring us</h2>
              <p>Property in Nigeria rewards patience and punishes haste. Competing claims to the same land, imperfect or unregistered titles, family and community property sold without full consent, government acquisition history that surfaces years later, the catalogue of avoidable losses is long, and nearly all of it traces back to due diligence that was skipped or rushed.</p>
              <p>Clients come to us before they buy, lease or build, because the cost of investigation is trivial next to the cost of a defective root of title.</p>
            </div>
      
            <div className="reveal">
              <h2>Our approach</h2>
              <ul>
                <li><strong>Investigation before commitment.</strong> Registry searches, root-of-title analysis, verification of the vendor&rsquo;s capacity to sell, and physical inspection of the land, reported in writing before you commit funds.</li>
                <li><strong>Documents drafted for the registry, not just the parties.</strong> Deeds of assignment, leases and powers of attorney prepared with perfection in mind: governor&rsquo;s consent, stamping and registration planned from the start.</li>
                <li><strong>Perfection actually completed.</strong> Perfection of title is where many transactions quietly stall; we treat it as part of the retainer, not an afterthought.</li>
                <li><strong>Leases with working machinery.</strong> Rent review, repair, renewal and recovery provisions drafted to be exercised, not admired.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>What to expect</h2>
              <ul>
                <li>A written due diligence report with a clear recommendation: proceed, renegotiate, or walk away.</li>
                <li>Fee clarity, search, drafting and perfection stages quoted separately in advance.</li>
                <li>Progress reporting through perfection, which can outlast the transaction itself.</li>
                <li>Plain answers about timing, including honest ones.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary>What does due diligence on Nigerian land actually involve?</summary>
                  <p>At minimum: a search at the relevant lands registry, tracing the root of title, confirming the vendor&rsquo;s capacity and consent requirements (especially for family or community land), checking for government acquisition, and physically inspecting the property. Each step exists because someone lost money skipping it.</p>
                </details>
                <details>
                  <summary>What is &ldquo;perfection of title&rdquo; and why does it matter?</summary>
                  <p>Obtaining governor&rsquo;s consent, stamping, and registration of your instrument. Until perfection, your interest is vulnerable in ways most purchasers do not appreciate. We treat it as the completion of the purchase, not paperwork after it.</p>
                </details>
                <details>
                  <summary>Can you act if I am buying from abroad?</summary>
                  <p>Yes. We regularly act for diaspora purchasers, verification, negotiation, execution by power of attorney and perfection can all be handled without your physical presence, with documentary reporting at each stage.</p>
                </details>
              </div>
            </div>
      
          </div>
      
          <aside className="practice-aside">
            <div className="aside-card aside-card--dark reveal">
              <h3>Speak to this practice</h3>
              <p style={{ fontSize: "0.95rem" }}>Enquiries answered within one business day.</p>
              <a className="btn btn--light" href="/contact">Request a Consultation</a>
            </div>
            <div className="aside-card reveal" data-delay="1">
              <h3>Typical work</h3>
              <ul>
                <li>Title investigation &amp; due diligence</li>
                <li>Purchases, sales &amp; conveyancing</li>
                <li>Perfection of title</li>
                <li>Leases &amp; tenancy matters</li>
                <li>Diaspora property representation</li>
              </ul>
            </div>
          </aside>
        </div>
      
        <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
