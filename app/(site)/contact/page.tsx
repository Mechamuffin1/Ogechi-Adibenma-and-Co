import type { Metadata } from "next";
import ConsultForm from "@/components/ConsultForm";
import MailAnimation from "@/components/MailAnimation";

export const metadata: Metadata = {
  title: "Contact: Request a Consultation | Ogechi Adibenma & Co Legal Chambers, Abuja",
  description:
    "Request a consultation with Ogechi Adibenma & Co Legal Chambers, Abuja. One clean form, a stated response time of one business day, and full office details.",
  alternates: { canonical: "https://www.ogechiadibenma.com/contact.html" },
  openGraph: {
    type: "website",
    title: "Contact | Ogechi Adibenma & Co Legal Chambers",
    description: "Request a consultation. Every enquiry receives a considered reply within one business day.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Ogechi Adibenma & Co Legal Chambers",
  url: "https://www.ogechiadibenma.com/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 101 Brightview Estate, Lugbe",
    addressLocality: "Abuja",
    addressRegion: "FCT",
    addressCountry: "NG",
  },
  email: "ogechiadibenma.co.legalchamber@gmail.com",
  telephone: "+234 706 932 0220",
  openingHours: "Mo-Fr 09:00-17:00",
};

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero">
        <div className="container contact-hero">
          <div>
            <span className="eyebrow reveal">Contact</span>
            <h1 className="reveal" data-delay="1">Request a consultation.</h1>
            <p className="lede reveal" data-delay="2">One form, read by a lawyer, answered within one business day.</p>
          </div>
          <MailAnimation />
        </div>
      </section>

      <section className="section">
        <div className="container contact-split">
          <div className="contact-details reveal">
            <h2 style={{ fontSize: "clamp(1.5rem, 2.6vw, 1.9rem)" }}>The chambers</h2>
            <dl>
              <dt>Office</dt>
              <dd>Plot 101 Brightview Estate,<br />Lugbe, Abuja, FCT, Nigeria</dd>
              <dt>Telephone</dt>
              <dd><a href="tel:+2347069320220">+234 (0) 706 932 0220</a></dd>
              <dt>Email</dt>
              <dd><a href="mailto:ogechiadibenma.co.legalchamber@gmail.com">ogechiadibenma.co.legalchamber@gmail.com</a></dd>
              <dt>Hours</dt>
              <dd>Monday to Friday, 9:00–17:00 WAT<br />Consultations outside hours by arrangement</dd>
              <dt className="contact-admissions">Admissions</dt>
              <dd className="contact-admissions">All counsel are Barristers &amp; Solicitors of the Supreme Court of Nigeria and members of the Nigerian Bar Association.</dd>
              <dt>Response time</dt>
              <dd>Every enquiry receives a considered reply within one business day.</dd>
            </dl>
          </div>

          <ConsultForm
            idPrefix="ct"
            withMatterType
            messagePlaceholder="A few plain sentences are enough. We will ask the right questions from there."
          />
        </div>
      </section>
    </main>
  );
}
