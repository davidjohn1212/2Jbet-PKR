import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { JsonLd } from "@/components/JsonLd";
import { CRITICAL_CSS } from "@/lib/critical-css";
import { siteGraphJsonLd } from "@/lib/jsonld";
import { BRAND_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

/** Cache-bust when public/css/site.css changes (keep in sync with app/globals.css). */
const SITE_CSS_HREF = "/css/site.css?v=20261124";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "2JBet APK Download – Latest Version for Android",
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "Download the 2JBet APK v1.0 for Android (12.6MB). Step-by-step install guide, system requirements, and safety tips before you download.",
  formatDetection: { telephone: false },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/images/2jbet-apk.webp", type: "image/webp", sizes: "512x512" }],
    apple: [{ url: "/images/2jbet-apk.webp", type: "image/webp", sizes: "512x512" }],
    shortcut: [{ url: "/images/2jbet-apk.webp", type: "image/webp" }],
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [{ url: "/images/2jbet-apk.webp", width: 512, height: 512, alt: BRAND_NAME }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
        <link rel="preload" href={SITE_CSS_HREF} as="style" />
        <link id="site-css" rel="stylesheet" href={SITE_CSS_HREF} media="print" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.getElementById('site-css');if(!l)return;var a=function(){l.media='all'};if(l.addEventListener)l.addEventListener('load',a);l.onload=a;if(l.sheet)a();})();",
          }}
        />
        <noscript>
          <link rel="stylesheet" href={SITE_CSS_HREF} />
        </noscript>
      </head>
      <body>
        <JsonLd data={siteGraphJsonLd()} />
        <Header />
        <main id="main-content" className="page">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
