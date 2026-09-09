import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "2JBet PKR Disclaimer | 2JBet APK Pakistan",
  description:
    "Read the official Disclaimer of 2JBet PKR. Learn the limitations, risks, and legal notices related to 2JBet APK in Pakistan.",
  alternates: { canonical: `${SITE_URL}/disclaimer` },
  robots: { index: false, follow: false },
};

export default function DisclaimerPage() {
  const schema = graphJsonLd(
    webPageJsonLd({
      name: "Disclaimer – 2JBet PKR",
      description:
        "Disclaimer page for 2JBet PKR with limitation of liability, informational use, and risk notices.",
      path: "/disclaimer",
      about: "Disclaimer for 2JBet PKR informational content",
      dateModified: "2026-09-09",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Disclaimer", path: "/disclaimer" },
    ]),
  );

  return (
    <div className="main-grid">
      <article className="content-page">
        <JsonLd data={schema} />
        <h1 className="content-title">Disclaimer – 2JBet PKR</h1>
        <p className="content-intro">
          The content provided on 2JBet PKR is for informational and educational purposes only. This website provides guides, articles, and instructions related
          to 2JBet APK in Pakistan, including downloads, features, payments, and gameplay.
        </p>
        <p className="content-intro" style={{ marginTop: "-0.75rem" }}>
          While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, accuracy, or reliability of any content. Users are
          responsible for their own decisions when downloading or using the 2JBet APK.
        </p>

        <section className="content-section">
          <h2>General Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we do not guarantee the completeness, accuracy, or reliability of any content. Users are
            responsible for their own decisions when downloading or using the 2JBet APK.
          </p>
        </section>

        <section className="content-section">
          <h2>No Ownership of the App</h2>
          <p>
            2JBet PKR does not own, develop, or operate the 2JBet APK. We are an independent informational platform.
          </p>
          <p>All references to the app, its features, and gameplay are based on publicly available information and user experience.</p>
        </section>

        <section className="content-section">
          <h2>Use at Your Own Risk</h2>
          <p>By using the information on this website, users acknowledge that:</p>
          <ul>
            <li>Downloading APK files from third-party sources carries inherent risks.</li>
            <li>Users must ensure they download from trusted sources only.</li>
            <li>
              2JBet PKR is not responsible for any issues arising from installation, account usage, payment transactions, or device compatibility.
            </li>
            <li>Users should always follow safe usage practices and verify all details independently.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Payments and Transactions</h2>
          <p>
            Any instructions related to payments, deposits, or withdrawals using JazzCash or Easypaisa are provided for guidance only.
          </p>
          <ul>
            <li>Users must double-check all payment details.</li>
            <li>2JBet PKR cannot be held liable for transaction errors or delays.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>No Professional Advice</h2>
          <p>
            The content on this website does not constitute legal, financial, or professional advice.
          </p>
          <ul>
            <li>Users are responsible for complying with local laws and regulations.</li>
            <li>This website cannot guarantee earnings or outcomes from using the 2JBet APK.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Third-Party Links</h2>
          <p>This website may include links to third-party websites for information or download purposes.</p>
          <ul>
            <li>We do not control or endorse these websites.</li>
            <li>Users are encouraged to read the privacy policies and terms of any linked site.</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>GEO-Specific Notice</h2>
          <p>
            2JBet PKR content is targeted at users in Pakistan. While the website may be accessed internationally, some instructions, payment methods, or
            features may only apply to users in Pakistan.
          </p>
        </section>

        <section className="content-section">
          <h2>Limitation of Liability</h2>
          <p>Under no circumstances will 2JBet PKR, its owners, or authors be held responsible for:</p>
          <ul>
            <li>Loss of data</li>
            <li>Financial loss</li>
            <li>Device issues</li>
            <li>Unauthorized access to accounts</li>
          </ul>
          <p>Users agree to use the website and all content at their own risk.</p>
        </section>

        <section className="content-section" id="faqs">
          <h2>Updates to Disclaimer</h2>
          <p>We may update this Disclaimer periodically to reflect changes in laws, policies, or app usage.</p>
          <ul>
            <li>The latest version is always posted on this page.</li>
            <li>Users should review this page regularly to stay informed.</li>
          </ul>
        </section>

        <section className="content-section" id="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about this Disclaimer, please contact us:</p>
          <ul>
            <li>
              <strong>Website:</strong> <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <p>
            We are committed to providing clear guidance and supporting responsible usage of the 2JBet APK.
          </p>
        </section>
      </article>
    </div>
  );
}

