import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";
import LegacyFx from "@/components/LegacyFx";

export const metadata: Metadata = {
  title: "About the Chambers: Founding Conviction & Standards | Ogechi Adibenma & Co",
  description: "Why Ogechi Adibenma & Co Legal Chambers exists: counsel written plainly, in advance, and under our own names. Our founding conviction, our standards, and the people who hold them.",
  alternates: { canonical: "https://www.ogechiadibenma.com/about.html" },
  openGraph: {
    type: "website",
    title: "About | Ogechi Adibenma & Co Legal Chambers",
    description: "Counsel written plainly, in advance, and under our own names.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <section className="hero hero--sub">
          <div className="hero-panel">
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
              <span className="eyebrow reveal">About the Chambers</span>
              <h1 className="reveal" data-delay="1">Plainly. In advance.<br />Under our own names.</h1>
              <p className="lede reveal" data-delay="2">Those three phrases are the founding conviction of this chambers, and every standard we hold follows from them.</p>
            </div>
          </div>
        </section>
      
        <section className="section">
          <div className="container container--narrow">
            <div className="reveal">
              <h2>Why we set up</h2>
              <p>This chambers was founded on an observation made too many times to ignore: most of the legal grief that reaches a lawyer&rsquo;s desk was avoidable, and what would have avoided it was rarely brilliance, it was care, applied early, in writing.</p>
              <p>The surrogacy arrangement documented on a template. The company incorporated on a handshake. The land purchased on assurance rather than search. In each case, the expensive problem began as a cheap question nobody put to counsel in time.</p>
              <p>So we built a practice around the early question. We lead with surrogacy and fertility law, a field where families take life-defining steps in a statutory vacuum, and where careful counsel is scarcest, and we carry that same discipline through commercial, family, property and disputes work.</p>
            </div>
            <div className="reveal">
              <h2>The standard we hold</h2>
              <p>We publish our thinking before clients pay for it. Chambers Notes exists because we believe a client is entitled to see how their counsel reasons, and because writing for the public record imposes a discipline that private advice sometimes escapes. Every note, like every opinion we issue, carries the name of the counsel who wrote it.</p>
              <p>We are a young chambers, and we do not pretend to decades we do not have. What we hold instead is a standard: no advice we cannot explain plainly, no document we would not sign our name beneath, no fee that was not agreed before the work began.</p>
            </div>
          </div>
        </section>
      
        <section className="section section--alt chevron-bg">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How We Work</span>
              <h2>Three habits, kept without exception</h2>
            </div>
            <div className="values-grid">
              <div className="value-item reveal">
                <h3>Written before spoken</h3>
                <p>Opinions, assessments and fee proposals arrive in writing, so you can weigh them without a lawyer watching you read.</p>
              </div>
              <div className="value-item reveal" data-delay="1">
                <h3>Candour over comfort</h3>
                <p>If your case is weak, your structure risky, or litigation not worth its price, you will hear it from us first, in writing, with reasons.</p>
              </div>
              <div className="value-item reveal" data-delay="2">
                <h3>One name on your matter</h3>
                <p>Every matter has a named counsel responsible for it throughout. You will never wonder who is acting for you.</p>
              </div>
            </div>
          </div>
        </section>
      
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Meet Our Team</span>
              <h2>Who holds the standard</h2>
              <p className="lede">Full profiles, credentials, admissions, publications and a line of personality each, are on the Meet Our Team page.</p>
            </div>
            <div className="people-grid">
              <a className="person-card reveal" href="/people/ogechi-adibenma">
                <div className="person-photo"><img src="/media/partners/ogechi-adibenma.jpeg" alt="Ogechi Adibenma, Esq." /></div>
                <div className="person-body">
                  <h3>Ogechi Adibenma, Esq.</h3>
                  <div className="role">Managing Partner</div>
                  <p className="cred">Surrogacy &amp; fertility, family law. Founder of the chambers and of Chambers Notes.</p>
                </div>
              </a>
              <a className="person-card reveal" data-delay="1" href="/people/angela-anekwe">
                <div className="person-photo"><img src="/media/partners/angela-anekwe.jpeg" alt="Angela Ekene Anekwe, Esq." /></div>
                <div className="person-body">
                  <h3>Angela Ekene Anekwe, Esq.</h3>
                  <div className="role">Partner</div>
                  <p className="cred">Corporate &amp; commercial. Drafts for the day the relationship is tested.</p>
                </div>
              </a>
              <a className="person-card reveal" data-delay="2" href="/people/elisha-agwah">
                <div className="person-photo"><img src="/media/partners/elisha-agwah.jpeg" alt="Elisha Agwah, Esq." /></div>
                <div className="person-body">
                  <h3>Elisha Agwah, Esq.</h3>
                  <div className="role">Partner</div>
                  <p className="cred">Property &amp; real estate. Verification before commitment, every time.</p>
                </div>
              </a>
              <a className="person-card reveal" data-delay="3" href="/people/joel-nwushie">
                <div className="person-photo"><img src="/media/partners/joel-nwushie.jpeg" alt="Joel Ezekiel Nwushie, Esq." /></div>
                <div className="person-body">
                  <h3>Joel Ezekiel Nwushie, Esq.</h3>
                  <div className="role">Partner</div>
                  <p className="cred">Dispute resolution. The first duty of a litigator is arithmetic.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      
        <ConsultBand />
      <LegacyFx libs={["https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"]} inits={["/js/atmosphere.js"]} />
    </main>
  );
}
