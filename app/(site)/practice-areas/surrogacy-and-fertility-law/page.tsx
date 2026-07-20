import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "Surrogacy & Fertility Law in Nigeria: Agreements, Parental Rights & Birth Registration | Ogechi Adibenma & Co",
  description: "Surrogacy lawyers in Abuja, Nigeria. We draft and review surrogacy agreements, advise intending parents, surrogates and fertility clinics, and handle parental rights, consents and birth registration.",
  alternates: { canonical: "https://www.ogechiadibenma.com/practice-areas/surrogacy-and-fertility-law.html" },
  openGraph: {
    type: "website",
    title: "Surrogacy & Fertility Law | Ogechi Adibenma & Co Legal Chambers",
    description: "Counsel for every party to a family formed through assisted reproduction, agreements, parental rights, clinic engagements and birth registration.",
  },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is surrogacy legal in Nigeria?",
        "acceptedAnswer": { "@type": "Answer", "text": "There is no comprehensive federal statute that either authorises or prohibits surrogacy in Nigeria. Arrangements are structured under general principles of contract, family and child-rights law, together with applicable state-level and professional guidelines. That vacuum makes careful drafting and correct sequencing essential." }
      },
      {
        "@type": "Question",
        "name": "Is a surrogacy agreement enforceable in Nigeria?",
        "acceptedAnswer": { "@type": "Answer", "text": "Commercial and logistical terms are generally analysed as ordinary contract terms. Provisions touching parentage and custody are ultimately subject to the court's assessment of the best interests of the child, so agreements must be drafted with that layered reality in mind." }
      },
      {
        "@type": "Question",
        "name": "Whose names go on the birth certificate after a surrogate birth?",
        "acceptedAnswer": { "@type": "Answer", "text": "Registration practice varies and depends on the structure of the arrangement, the consents in place and the documentation prepared before the birth. We plan the registration pathway at the drafting stage, not after delivery." }
      },
      {
        "@type": "Question",
        "name": "Do surrogates need their own lawyer?",
        "acceptedAnswer": { "@type": "Answer", "text": "Independent legal advice for the surrogate is strongly advisable and materially strengthens the arrangement for everyone. Where we act for intending parents, we insist the surrogate receives genuinely independent advice." }
      }
    ]
  };

export default function PracticeAreasSurrogacyAndFertilityLawPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero hero--sub hero--photo">
          <div className="hero-panel">
            <img className="hero-photo" src="/media/practice/surrogacy.jpg" alt="" />
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
              <h1 className="reveal" data-delay="1">Surrogacy &amp; Fertility Law</h1>
              <p className="lede reveal" data-delay="2">Families formed through assisted reproduction deserve counsel that has done the thinking before the crisis. This is the practice our chambers is built around.</p>
            </div>
          </div>
        </section>
      
        <div className="container practice-layout">
          <div className="practice-main">
      
            <div className="reveal">
              <h2>The problem clients bring us</h2>
              <p>Nigeria has no comprehensive federal statute governing surrogacy. Intending parents, surrogates and clinics therefore operate in a space assembled from contract law, family and child-rights law, medical regulation and state-level guidelines, a space where most of the risk is invisible until something goes wrong: a disputed handover, a registration refusal, a clinic form that quietly contradicts the agreement everyone signed.</p>
              <p>Much of what circulates as "standard practice" is template drafting that has never been tested. Our clients come to us because they want the arrangement to hold, legally, practically and humanly, from the first clinic consultation to the entry in the birth register.</p>
            </div>
      
            <div className="reveal">
              <h2>Our approach</h2>
              <p>We treat a surrogacy arrangement as a sequence, not a document. The agreement matters enormously, but so does what happens before and after it is signed:</p>
              <ul>
                <li><strong>Structure first.</strong> Gestational or traditional; known or introduced surrogate; which consents, screenings and counselling must precede signature, we settle the architecture before drafting a word.</li>
                <li><strong>Independent advice for the surrogate.</strong> Where we act for intending parents, we insist the surrogate is separately and genuinely advised. It protects her, and it protects the agreement.</li>
                <li><strong>Drafting for the layered reality.</strong> Commercial terms are drafted as contract; parentage and custody provisions are drafted in full awareness that the child&rsquo;s best interests govern. Pretending otherwise is how templates fail.</li>
                <li><strong>The registration pathway, planned in advance.</strong> Hospital documentation, consents and the birth registration route are prepared before delivery, not improvised after it.</li>
                <li><strong>Clinic engagements aligned.</strong> We review clinic and hospital paperwork so no consent form undermines the principal agreement.</li>
              </ul>
              <p>We act for intending parents, for surrogates, and for fertility clinics building compliant engagement processes, though never for more than one party to the same arrangement.</p>
            </div>
      
            <div className="reveal">
              <h2>What to expect</h2>
              <ul>
                <li>An initial consultation in which we map your situation against the current legal landscape, in plain language.</li>
                <li>A written opinion or roadmap before any drafting begins, so you understand the risks you are accepting and the ones we can remove.</li>
                <li>Drafts you can actually read. If a clause cannot be explained simply, it is redrafted until it can.</li>
                <li>Availability through the pregnancy, the questions do not stop at signature, and neither do we.</li>
                <li>Fixed-fee stages wherever the work allows it, agreed in writing before we start.</li>
              </ul>
            </div>
      
            <div className="reveal">
              <h2>Frequently asked questions</h2>
              <div className="faq">
                <details>
                  <summary>Is surrogacy legal in Nigeria?</summary>
                  <p>There is no comprehensive federal statute that either authorises or prohibits it. Arrangements are structured under general principles of contract, family and child-rights law, alongside applicable state-level and professional guidelines. The vacuum is precisely why careful structuring matters: the arrangement is only as strong as its documentation and sequencing.</p>
                </details>
                <details>
                  <summary>Is a surrogacy agreement enforceable?</summary>
                  <p>In layers. Commercial and logistical terms are generally analysed as ordinary contract terms. Provisions touching parentage and custody are ultimately subject to a court&rsquo;s assessment of the best interests of the child. We draft with that reality in view, we have written about it at length in <a href="/insights/enforceability-of-surrogacy-agreements">Chambers Notes</a>.</p>
                </details>
                <details>
                  <summary>Whose names go on the birth certificate?</summary>
                  <p>It depends on the structure of the arrangement, the consents in place, and the documentation prepared before the birth. Registration practice is not uniform, which is why we plan the pathway at the drafting stage rather than negotiating with a registry after delivery.</p>
                </details>
                <details>
                  <summary>Does the surrogate need her own lawyer?</summary>
                  <p>Strongly, yes. Independent advice protects the surrogate and materially strengthens the arrangement against later challenge. Where we act for intending parents, we make it a condition.</p>
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
                <li><a href="/insights/surrogacy-agreements-nigeria">Surrogacy in Nigeria: What Intending Parents Should Put in Writing</a></li>
                <li><a href="/insights/enforceability-of-surrogacy-agreements">Is a Surrogacy Agreement Enforceable? Contract, Custody and the Courts</a></li>
              </ul>
            </div>
            <div className="aside-card reveal" data-delay="2">
              <h3>We advise</h3>
              <ul>
                <li>Intending parents, in Nigeria and abroad</li>
                <li>Surrogates seeking independent counsel</li>
                <li>Fertility clinics &amp; hospitals</li>
                <li>Egg &amp; sperm donors</li>
              </ul>
            </div>
          </aside>
        </div>
      
        <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
