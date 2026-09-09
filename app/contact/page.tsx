import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, graphJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | 2JBet",
  description: "Contact 2JBet PKR with your questions, feedback, or content suggestions.",
  alternates: { canonical: `${SITE_URL}/contact` },
  robots: { index: false, follow: false },
};

export default function ContactPage() {
  const schema = graphJsonLd(
    webPageJsonLd({
      type: "ContactPage",
      name: "Contact Us | 2JBet",
      description: "Contact 2JBet PKR with your questions, feedback, or content suggestions.",
      path: "/contact",
      about: "Contact 2JBet PKR",
      dateModified: "2026-09-09",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Contact Us", path: "/contact" },
    ]),
  );

  return (
    <div className="main-grid">
      <article className="content-page">
        <JsonLd data={schema} />
        <h1 className="content-title">Contact Us</h1>
        <ContactForm />
      </article>
    </div>
  );
}
