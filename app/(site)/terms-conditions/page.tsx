import type { Metadata } from "next";
import ConsultBand from "@/components/ConsultBand";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ogechi Adibenma & Co Legal Chambers",
  description: "Terms and conditions governing use of the Ogechi Adibenma & Co Legal Chambers website.",
  alternates: { canonical: "https://www.ogechiadibenma.com/terms-conditions.html" },
};

export default function TermsConditionsPage() {
  return (
    <main>
      <section className="page-hero">
          <div className="container">
            <span className="eyebrow reveal">Legal</span>
            <h1 className="reveal" data-delay="1">Terms &amp; Conditions</h1>
            <p className="lede reveal" data-delay="2">These terms govern your use of this website (the &ldquo;Site&rdquo;), operated by Ogechi Adibenma &amp; Co Legal Chambers (the &ldquo;Firm&rdquo;). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please do not use the Site.</p>
          </div>
        </section>
      
        <div className="article-body" style={{ paddingTop: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          <div className="container container--narrow">
      
            <h2>1. Use of the Site</h2>
            <p>You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the Site in any way that violates any applicable local, national, or international law or regulation.</li>
              <li>Engage in any conduct that restricts or inhibits anyone&rsquo;s use or enjoyment of the Site, or which may harm the Firm or users of the Site.</li>
              <li>Use the Site to transmit, or procure the sending of, any advertising or promotional material without our express written consent, including &ldquo;junk mail,&rdquo; &ldquo;chain letters,&rdquo; or any other form of solicitation.</li>
              <li>Impersonate or attempt to impersonate the Firm, a Firm employee, another user, or any other person or entity.</li>
            </ul>
            <p>The Firm reserves the right to terminate or suspend your access to the Site at any time, without notice, for any reason, including if we suspect a violation of these Terms.</p>
      
            <h2>2. Intellectual Property Rights</h2>
            <p>The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Firm or its licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
            <p>These Terms permit you to use the Site for your personal, non-commercial use only. You must not copy, reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on the Site, except as permitted by applicable law or with our prior written consent.</p>
            <p>The Firm name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the Firm or its affiliates or licensors. You must not use such marks without our prior written permission.</p>
      
            <h2>3. User Contributions</h2>
            <p>The Site may contain message boards, forms, forums, and other interactive features (collectively, &ldquo;Interactive Services&rdquo;) that allow users to post, submit, publish, display, or transmit content or materials (collectively, &ldquo;User Contributions&rdquo;) to or through the Site.</p>
            <p>Any User Contributions you submit will be considered non-confidential and non-proprietary. By providing any User Contributions, you grant us and our affiliates and service providers a perpetual, worldwide, royalty-free, non-exclusive license to use, reproduce, distribute, create derivative works of, publicly display, and publicly perform such User Contributions in any manner or media.</p>
            <p>You represent and warrant that you own or control all rights in and to your User Contributions and have the right to grant the license above. You also represent and warrant that your User Contributions do not violate any third party&rsquo;s rights, including intellectual property rights, privacy rights, or publicity rights.</p>
            <p>The Firm does not endorse or support any User Contributions and is not responsible for the accuracy, legality, or appropriateness of such content.</p>
      
            <h2>4. Disclaimers</h2>
            <p>The Site and all information, materials, services, and products included or otherwise made available to you through the Site are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without any warranties of any kind, express or implied.</p>
            <p>The Firm disclaims all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Site will be secure, uninterrupted, error-free, or that any defects will be corrected.</p>
            <p>Any legal information provided on the Site is for general informational purposes only and does not constitute legal advice, a solicitation, or an offer to provide legal services. You should consult with a qualified legal practitioner for advice specific to your situation. The Firm makes no representations or warranties about the completeness, accuracy, or suitability of the information on the Site.</p>
      
            <h2>5. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, the Firm, its affiliates, partners, employees, agents, suppliers, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
            <ul>
              <li>Your access to or use of, or inability to access or use, the Site.</li>
              <li>Any conduct or content of any third party on the Site.</li>
              <li>Any content obtained from the Site.</li>
            </ul>
      
            <h2>6. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless the Firm, its affiliates, partners, employees, agents, suppliers, and licensors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or relating to your violation of these Terms or your use of the Site.</p>
      
            <h2>7. Governing Law and Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law principles.</p>
            <p>Any dispute arising out of or relating to these Terms or the Site shall be resolved exclusively in the competent courts located in Abuja, Nigeria. You irrevocably submit to the personal jurisdiction of such courts.</p>
      
            <h2>8. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Site after such changes constitutes your acceptance of the revised Terms.</p>
      
            <h2>9. Miscellaneous</h2>
            <p>These Terms constitute the entire agreement between you and the Firm regarding the Site. If any provision of these Terms is held to be invalid or unenforceable, the other provisions remain in full force and effect.</p>
            <p>Our failure to enforce any right or provision of these Terms does not constitute a waiver of such right or provision.</p>
      
            <h2>Contact</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:ogechiadibenma.co.legalchamber@gmail.com">ogechiadibenma.co.legalchamber@gmail.com</a>.</p>
      
          </div>
        </div>
    </main>
  );
}
