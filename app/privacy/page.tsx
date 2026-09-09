import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "2JBet PKR Privacy Policy | 2JBet APK",
  description:
    "Read the Privacy Policy of 2JBet PKR for 2JBet APK users in Pakistan. Learn how we protect your data and ensure safe browsing.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  const schema = graphJsonLd(
    webPageJsonLd({
      name: "Privacy Policy – 2JBet PKR",
      description:
        "Privacy policy for 2JBet PKR with data usage, cookies, and user rights information for Pakistan users.",
      path: "/privacy",
      about: "Privacy policy for 2JBet PKR website",
      dateModified: "2026-09-09",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy" },
    ]),
  );

  return (
    <div className="main-grid">
      <article className="content-page">
        <JsonLd data={schema} />
        <h1 className="content-title">Privacy Policy – 2JBet PKR</h1>
        <p className="content-intro">
          At 2JBet PKR, we respect the privacy of our users and are committed to protecting personal information. This Privacy Policy explains what information we
          collect, how we use it, and the measures we take to keep your data safe when accessing our website related to the 2JBet APK in Pakistan.
        </p>
        <p className="content-intro" style={{ marginTop: "-0.75rem" }}>
          By using our website, you agree to the terms outlined in this policy.
        </p>

        <section className="content-section">
          <h2>Information We Collect</h2>
          <p>
            We collect only the information necessary to improve your experience and provide accurate content about 2JBet APK.
          </p>

          <h3>1. Personal Information</h3>
          <p>We may collect personal information that users provide voluntarily, including:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Messages sent through the Contact form</li>
          </ul>
          <p>This information is used solely to respond to inquiries and provide better service.</p>

          <h3>2. Non-Personal Information</h3>
          <p>We automatically collect non-identifiable information, such as:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Device information (Android version, screen size)</li>
            <li>IP address (for analytics)</li>
            <li>Pages visited on our website</li>
          </ul>
          <p>This helps us improve website performance and user experience.</p>

          <h3>3. Cookies and Tracking</h3>
          <p>We may use cookies to:</p>
          <ul>
            <li>Analyze website traffic</li>
            <li>Remember user preferences</li>
            <li>Optimize content display for mobile users in Pakistan</li>
          </ul>
          <p>Users can manage cookie settings through their browser at any time.</p>
        </section>

        <section className="content-section">
          <h2>How We Use Your Information</h2>
          <p>The information collected is used only for the following purposes:</p>
          <ul>
            <li>Responding to questions and requests</li>
            <li>Sending important updates or announcements about 2JBet APK</li>
            <li>Improving website content and user experience</li>
            <li>Ensuring secure and functional website navigation</li>
          </ul>
          <p>
            We do not sell, rent, or share personal information with third parties.
          </p>
        </section>

        <section className="content-section">
          <h2>Data Protection and Security</h2>
          <p>We take multiple measures to protect user information:</p>
          <ul>
            <li>SSL encryption for secure data transmission</li>
            <li>Limited access to personal data</li>
            <li>Regular monitoring of website security</li>
          </ul>
          <p>
            While we make every effort to protect data, users should also take precautions when sharing sensitive information online.
          </p>
        </section>

        <section className="content-section">
          <h2>Third-Party Services</h2>
          <p>
            Our website may include links to third-party services related to 2JBet APK, including:
          </p>
          <ul>
            <li>Payment guides (JazzCash, Easypaisa)</li>
            <li>Download instructions</li>
            <li>External informational sources</li>
          </ul>
          <p>
            We are not responsible for the privacy practices of third-party websites. Users should review their privacy policies separately.
          </p>
        </section>

        <section className="content-section">
          <h2>Children’s Privacy</h2>
          <p>
            2JBet PKR does not knowingly collect information from users under the age of 13.
          </p>
          <p>
            If you believe that we have collected data from a child, please contact us immediately to remove the information.
          </p>
        </section>

        <section className="content-section">
          <h2>GEO Targeting – Pakistan Users</h2>
          <p>This website is primarily intended for users in Pakistan. We optimize our content and privacy practices to reflect:</p>
          <ul>
            <li>Local data protection norms</li>
            <li>Awareness of Pakistani payment systems (JazzCash, Easypaisa)</li>
            <li>Best practices for mobile users in Pakistan</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>User Rights</h2>
          <p>Users have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of personal information</li>
          </ul>
          <p>
            To exercise these rights, please contact us via our Contact page.
          </p>
        </section>

        <section className="content-section">
          <h2>Updates to Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in practices or legal requirements.</p>
          <ul>
            <li>Updated policies will be posted on this page</li>
            <li>Users are encouraged to review the policy periodically</li>
          </ul>
        </section>

        <section className="content-section" id="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
          <ul>
            <li>
              <strong>Website:</strong> <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <p>We are committed to protecting your privacy and providing a safe browsing experience.</p>
        </section>
      </article>
    </div>
  );
}

