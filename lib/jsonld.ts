import { BRAND_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

export type FaqItem = { question: string; answer: string };
export type BreadcrumbItem = { name: string; path: string };
export type HowToStep = { name: string; text: string };

/** Shared Organization node for publisher/author references. */
export function organizationJsonLd() {
  return {
    "@type": "Organization" as const,
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject" as const,
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/images/2jbet-apk.webp`,
      contentUrl: `${SITE_URL}/images/2jbet-apk.webp`,
      width: 512,
      height: 512,
      caption: `${BRAND_NAME} APK logo`,
    },
    image: `${SITE_URL}/images/2JBet-PKR.webp`,
    description: `Independent informational resource about the ${BRAND_NAME} APK, games, login, and referral topics for users in Pakistan.`,
    areaServed: { "@type": "Country" as const, name: "Pakistan" },
    inLanguage: "en-PK",
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BRAND_NAME,
    alternateName: [SITE_NAME, "2JBet APK", "2JBet PKR"],
    url: SITE_URL,
    inLanguage: "en-PK",
    publisher: { "@id": `${SITE_URL}/#organization` },
    copyrightHolder: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Site-wide graph used in root layout (Organization + WebSite). */
export function siteGraphJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationJsonLd(), websiteJsonLd()],
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList" as const,
    "@id": `${SITE_URL}${items[items.length - 1]?.path || "/"}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPageJsonLd(faqs: FaqItem[], pageUrl: string) {
  return {
    "@type": "FAQPage" as const,
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };
}

export function howToJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  totalTime?: string;
  steps: HowToStep[];
  image?: string;
}) {
  return {
    "@type": "HowTo" as const,
    "@id": `${opts.url}#howto`,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: "en-PK",
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    ...(opts.image
      ? {
          image: {
            "@type": "ImageObject" as const,
            url: opts.image,
          },
        }
      : {}),
    step: opts.steps.map((step, i) => ({
      "@type": "HowToStep" as const,
      position: i + 1,
      name: step.name,
      text: step.text,
      url: `${opts.url}#step-${i + 1}`,
    })),
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@type": "SoftwareApplication" as const,
    "@id": `${SITE_URL}/#app`,
    name: `${BRAND_NAME} APK`,
    alternateName: ["2JBet", "2JBet Android", "2JBet PKR APK"],
    operatingSystem: "Android 5.0 and above",
    applicationCategory: "GameApplication",
    applicationSubCategory: "Online Gaming",
    downloadUrl: SITE_URL,
    installUrl: `${SITE_URL}/#download`,
    softwareVersion: "1.0",
    fileSize: "12.6 MB",
    offers: {
      "@type": "Offer" as const,
      price: "0",
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
      url: SITE_URL,
    },
    aggregateRating: undefined,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/2jbet-apk.webp`,
    description:
      "Download the 2JBet APK v1.0 for Android (12.6MB). Step-by-step install guide, system requirements, and safety tips.",
  };
}

export function webPageJsonLd(opts: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "TechArticle" | "Article";
  name: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  image?: string | string[];
  keywords?: string[];
  about?: string;
  primaryImage?: string;
}) {
  const url = opts.path === "/" ? SITE_URL : `${SITE_URL}${opts.path}`;
  const images = opts.image
    ? (Array.isArray(opts.image) ? opts.image : [opts.image]).map((src) =>
        src.startsWith("http") ? src : `${SITE_URL}${src}`,
      )
    : undefined;

  return {
    "@type": opts.type ?? ("WebPage" as const),
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    headline: opts.name,
    description: opts.description,
    inLanguage: "en-PK",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    author: { "@id": `${SITE_URL}/#organization` },
    ...(opts.about ? { about: opts.about } : {}),
    ...(opts.keywords?.length ? { keywords: opts.keywords.join(", ") } : {}),
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.dateModified ? { dateModified: opts.dateModified } : { dateModified: "2026-09-09" }),
    ...(images
      ? {
          image: images,
          primaryImageOfPage: {
            "@type": "ImageObject" as const,
            url: opts.primaryImage
              ? opts.primaryImage.startsWith("http")
                ? opts.primaryImage
                : `${SITE_URL}${opts.primaryImage}`
              : images[0],
          },
        }
      : {}),
    isAccessibleForFree: true,
  };
}

export function itemListJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  items: { name: string; description?: string }[];
}) {
  return {
    "@type": "ItemList" as const,
    "@id": `${opts.url}#itemlist`,
    name: opts.name,
    description: opts.description,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

/** Combine multiple schema nodes into one @graph document. */
export function graphJsonLd(...nodes: Record<string, unknown>[]) {
  const cleaned = nodes.map((node) => {
    const copy = { ...node };
    delete copy["@context"];
    // Drop undefined keys (e.g. unused aggregateRating)
    Object.keys(copy).forEach((key) => {
      if (copy[key] === undefined) delete copy[key];
    });
    return copy;
  });

  return {
    "@context": "https://schema.org",
    "@graph": cleaned,
  };
}
