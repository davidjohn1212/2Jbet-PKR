import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About 2JBet PKR | 2JBet APK Pakistan",
  description:
    "Learn about 2JBet PKR, your trusted source for 2JBet APK in Pakistan with guides, features, payments, and safe usage tips.",
  alternates: { canonical: `${SITE_URL}/about` },
  robots: { index: false, follow: false },
};

export default function AboutPage() {
  const schema = graphJsonLd(
    webPageJsonLd({
      type: "AboutPage",
      name: "About Us – 2JBet PKR",
      description:
        "About page describing 2JBet PKR mission, content scope, and support for Pakistan users.",
      path: "/about",
      about: "2JBet PKR informational website",
      dateModified: "2026-09-09",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
    ]),
  );

  return (
    <div className="main-grid">
      <article className="content-page">
        <JsonLd data={schema} />
        <h1 className="content-title">About Us – 2JBet PKR</h1>
        <p className="content-intro">
          2JBet PKR is an informational platform created to provide accurate, clear, and up-to-date details about the <strong>2JBet game APK Pakistan</strong>{" "}
          audience searches for. Our goal is to help users understand how the application works, how to download it safely, and how to use its features in a simple and
          structured way.
        </p>

        <section className="content-section">
          <h2>Quick summary (AEO)</h2>
          <ul>
            <li>
              <strong>What we do:</strong> Publish guides about 2JBet APK in Pakistan (download, features, payments, safety).
            </li>
            <li>
              <strong>What we don’t do:</strong> We don’t own the app and we don’t process payments.
            </li>
            <li>
              <strong>Who it’s for:</strong> Pakistan users who want clear steps, limits, and troubleshooting.
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Who We Are</h2>
          <p>
            We focus on delivering content that is easy to understand for both new and experienced users. Every guide, article, and page on our website is written with
            the intention of solving user queries and providing practical information.
          </p>
        </section>

        <section className="content-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make it easier for users in Pakistan to access reliable information about 2JBet APK without confusion or misinformation.
          </p>
          <ul>
            <li>
              Provide step-by-step guides for downloading and installing the APK
            </li>
            <li>Explain features, bonuses, and gameplay clearly</li>
            <li>Help users understand payment methods like JazzCash and Easypaisa</li>
            <li>Share safety tips and responsible usage practices</li>
          </ul>
          <p>
            By focusing on these areas, we ensure that users can make informed decisions based on real and structured information.
          </p>
        </section>

        <section className="content-section">
          <h2>What We Offer</h2>
          <p>
            At 2JBet PKR, we provide a complete knowledge base related to 2JBet APK. Our content is designed to match user intent and answer common
            questions effectively.
          </p>

          <h3>1. APK Download Guidance</h3>
          <p>
            We provide clear instructions on how to download and install the 2JBet APK on Android devices. Since the app is not available on the Google Play
            Store, proper guidance is important for safe installation.
          </p>

          <h3>2. Feature Explanations</h3>
          <p>We explain all major features of the app, including:</p>
          <ul>
            <li>Game types and categories</li>
            <li>Bonus systems</li>
            <li>Referral programs</li>
            <li>Payment options</li>
          </ul>
          <p>Our goal is to simplify complex information into easy-to-follow content.</p>

          <h3>3. Payment and Withdrawal Information</h3>
          <p>We provide detailed guides on how to:</p>
          <ul>
            <li>Deposit using JazzCash and Easypaisa</li>
            <li>Withdraw funds safely</li>
            <li>Understand limits and processing times</li>
          </ul>
          <p>This helps users avoid common mistakes and improves overall experience.</p>

          <h3>4. Problem-Solving Guides</h3>
          <p>We create content that addresses common issues faced by users, such as:</p>
          <ul>
            <li>Login problems</li>
            <li>Installation errors</li>
            <li>Payment delays</li>
          </ul>
          <p>These guides are based on real user concerns and are written to provide quick solutions.</p>

          <h3>5. Safety and Awareness Content</h3>
          <p>
            User safety is an important part of our content strategy. We provide general guidance on downloading APK files from trusted sources, protecting personal
            information, and using apps responsibly.
          </p>
          <p>We do not promote unsafe practices and always encourage users to stay informed.</p>
        </section>

        <section className="content-section">
          <h2>Our Content Approach (EEAT Focus)</h2>
          <h3>Experience</h3>
          <p>
            Our content is based on real user behavior and usage patterns observed in Pakistan. We focus on practical scenarios that users commonly face.
          </p>

          <h3>Expertise</h3>
          <p>
            Each article is written with attention to detail, ensuring that technical steps, payment methods, and features are explained accurately.
          </p>

          <h3>Authoritativeness</h3>
          <p>
            We aim to build topical authority by covering all aspects of 2JBet APK, including downloads, features, safety, and troubleshooting.
          </p>

          <h3>Trustworthiness</h3>
          <p>
            We provide balanced information and avoid misleading claims. Users are encouraged to verify details and use applications responsibly.
          </p>
        </section>

        <section className="content-section">
          <h2>Who This Website Is For</h2>
          <p>2JBet PKR is designed for:</p>
          <ul>
            <li>
              Users in Pakistan looking for <Link href="/">APK download guidance</Link>
            </li>
            <li>
              Beginners who need simple step-by-step instructions in our{" "}
              <Link href="/2JBet-Guide">Complete Guide</Link>
            </li>
            <li>
              Users curious about <Link href="/2jbet-pk-games">available games</Link>
            </li>
            <li>
              People who need help with <Link href="/2jbet-pk-login">login and registration</Link>
            </li>
          </ul>
          <p>Our content is written in a way that is accessible to a wide audience.</p>
        </section>

        <section className="content-section">
          <h2>GEO Targeting – Pakistan Focus</h2>
          <p>This website is specifically optimized for users in Pakistan. We focus on:</p>
          <ul>
            <li>Local payment methods such as JazzCash and Easypaisa</li>
            <li>Android devices commonly used in Pakistan</li>
            <li>User behavior and preferences within the region</li>
          </ul>
          <p>This ensures that the information remains relevant and useful.</p>
        </section>

        <section className="content-section">
          <h2>Disclaimer</h2>
          <p>
            2JBet PKR is an independent informational website. We do not own or develop the 2JBet application.
          </p>
          <p>
            All content is provided for educational and informational purposes only. Users are advised to verify information, review app permissions, and use such
            applications responsibly. For full details, see our <Link href="/disclaimer">Disclaimer</Link>, <Link href="/terms">Terms</Link>, and{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </section>

        <section className="content-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, suggestions, or feedback, you can contact us through our website. We are always open to improving our content based on user needs
            and feedback.
          </p>
          <p>
            Visit the <Link href="/contact">Contact</Link> page to get in touch.
          </p>
        </section>

        <section className="content-section">
          <h2>Final Note</h2>
          <p>
            At 2JBet PKR, our priority is to provide accurate, structured, and user-focused information. We aim to help users make informed decisions by offering
            clear guidance, practical steps, and updated content.
          </p>
          <p>
            Our platform is built to support users at every stage, from understanding the app to using it effectively.
          </p>
        </section>
      </article>
    </div>
  );
}

