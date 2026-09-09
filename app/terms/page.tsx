import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | 2JBet",
  description:
    "Terms of Use for the 2JBet informational website. Learn how content may be used, limitations of liability, and user responsibilities.",
  alternates: { canonical: `${SITE_URL}/terms` },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  const schema = graphJsonLd(
    webPageJsonLd({
      name: "Terms of Use | 2JBet",
      description:
        "Terms of Use for the 2JBet informational website, including user responsibilities and limitations.",
      path: "/terms",
      about: "Terms of use for 2JBet PKR website",
      dateModified: "2026-09-09",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Terms of Use", path: "/terms" },
    ]),
  );

  return (
    <div className="main-grid">
      <article className="content-page">
        <JsonLd data={schema} />
        <h1 className="content-title">Terms of Use</h1>
        <p className="content-intro">
          These Terms of Use govern your access to and use of this website (the “site”). By using the site, you agree to these terms. If you do not agree, please do
          not use the site.
        </p>

        <section className="content-section">
          <h2>Quick summary (AEO)</h2>
          <ul>
            <li>
              <strong>Informational only:</strong> We publish guides and explanations, not official app services.
            </li>
            <li>
              <strong>No guarantees:</strong> Content may change; verify information before acting.
            </li>
            <li>
              <strong>Use responsibly:</strong> Follow local laws and avoid sharing sensitive info.
            </li>
          </ul>
          <p style={{ color: "var(--color-text-secondary)" }}>
            Last updated: <strong>2026-03-18</strong>
          </p>
        </section>

        <section className="content-section">
          <h2>1) Who we are</h2>
          <p>
            We are an independent informational website that publishes content about 2JBet for users in Pakistan. We are not guaranteed to be affiliated with the
            app’s developers, its operators, or payment providers.
          </p>
        </section>

        <section className="content-section">
          <h2>2) Acceptable use</h2>
          <ul>
            <li>Do not use the site for unlawful purposes.</li>
            <li>Do not attempt to disrupt, scrape aggressively, or attack the site.</li>
            <li>Do not submit sensitive personal data (passwords, OTPs, payment PINs) via our contact methods.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>3) Content accuracy and updates</h2>
          <p>
            We aim to keep information accurate and current, but app versions, limits, and features may change. You are responsible for confirming details from
            trustworthy sources before taking action (installing apps, depositing funds, etc.).
          </p>
        </section>

        <section className="content-section">
          <h2>4) No professional advice</h2>
          <p>
            Nothing on this site is legal, financial, or medical advice. For legal or financial decisions, consult a qualified professional in your jurisdiction.
          </p>
        </section>

        <section className="content-section">
          <h2>5) Third-party links</h2>
          <p>
            The site may link to third-party websites. We do not control third-party content and are not responsible for their policies or practices. Use third-party
            sites at your own risk.
          </p>
        </section>

        <section className="content-section">
          <h2>6) Intellectual property</h2>
          <p>
            Site text, layout, and design are protected by applicable laws. You may quote small portions with attribution. You may not copy entire pages for
            republishing without permission.
          </p>
        </section>

        <section className="content-section">
          <h2>7) Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, we are not liable for losses or damages arising from your use of the site or reliance on its content. This includes
            issues related to third-party apps, downloads, payments, or account access.
          </p>
        </section>

        <section className="content-section">
          <h2>8) Privacy</h2>
          <p>
            Our data handling is described in our <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </section>

        <section className="content-section" id="faqs">
          <h2>Terms FAQs</h2>
          <ul className="faq-list">
            <li>
              <p className="faq-q">Can I reuse your content?</p>
              <p className="faq-a">You can quote small portions with attribution. Republishing full pages requires permission.</p>
            </li>
            <li>
              <p className="faq-q">Do you provide official support for 2JBet?</p>
              <p className="faq-a">
                No. We provide general informational guides only. See <Link href="/disclaimer">Disclaimer</Link>.
              </p>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}

