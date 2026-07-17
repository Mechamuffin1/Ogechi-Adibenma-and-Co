import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="brand-mark" aria-hidden="true">OA</span>
            <p className="tagline">Ogechi Adibenma &amp; Co Legal Chambers. Considered counsel for family formation and commercial life.</p>
          </div>
          <div>
            <h4>Practice Areas</h4>
            <ul>
              <li><Link href="/practice-areas/surrogacy-and-fertility-law">Surrogacy &amp; Fertility</Link></li>
              <li><Link href="/practice-areas/commercial-and-corporate">Corporate &amp; Commercial</Link></li>
              <li><Link href="/practice-areas/family-law">Family Law</Link></li>
              <li><Link href="/practice-areas/property-and-real-estate">Property &amp; Real Estate</Link></li>
              <li><Link href="/practice-areas/dispute-resolution">Dispute Resolution</Link></li>
            </ul>
          </div>
          <div>
            <h4>Chambers</h4>
            <ul>
              <li><Link href="/insights">Chambers Notes</Link></li>
              <li><Link href="/people">People</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Plot 101 Brightview Estate,<br />Lugbe, Abuja, FCT</li>
              <li><a href="tel:+2348000000000">+234 (0) 800 000 0000</a></li>
              <li><a href="mailto:chambers@ogechiadibenma.com">chambers@ogechiadibenma.com</a></li>
              <li>Mon–Fri, 9:00–17:00 WAT</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Ogechi Adibenma &amp; Co Legal Chambers. All rights reserved.</span>
          <span>Content on this site is commentary, not legal advice.</span>
          <span><Link href="/privacy-policy">Privacy Policy</Link> &middot; <Link href="/terms-conditions">Terms &amp; Conditions</Link></span>
        </div>
      </div>
    </footer>
  );
}
