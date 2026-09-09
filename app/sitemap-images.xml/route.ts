import { escapeXml, siteOrigin } from "@/lib/sitemap-xml";

export const dynamic = "force-static";

/** Homepage WebP images with SEO titles and captions. */
const IMAGE_FILES: { path: string; title: string; caption: string }[] = [
  {
    path: "images/2jbet-apk.webp",
    title: "2JBet APK Official App Icon",
    caption: "Official 2JBet APK app icon used as the site favicon and homepage feature mark.",
  },
  {
    path: "images/2JBet-PKR.webp",
    title: "2JBet PKR – Official Online Gaming Platform in Pakistan",
    caption:
      "Official 2JBet promotional banner featuring the 2JBet logo, Pakistan earning-platform message, 2JBetz.PK, and casino-style games imagery.",
  },
  {
    path: "images/2JBet-PKR-Download.webp",
    title: "2JBet APK Download – Welcome Bonus up to Rs 10,000",
    caption:
      "2JBet download promotion highlighting a first deposit welcome bonus of up to Rs 10,000 for new Android users installing the APK.",
  },
  {
    path: "images/2JBet-PKR-Login.webp",
    title: "2JBet Login & Registration Guide",
    caption:
      "Step-by-step 2JBet account registration and login guide with mobile app screens for sign up, OTP verification, and secure login.",
  },
  {
    path: "images/2JBet-PKR-Deposit.webp",
    title: "2JBet Fast Easy Secure Deposit Options in PKR",
    caption:
      "2JBet deposit banner showing JazzCash, Easypaisa, bank transfer, debit/credit card, and cryptocurrency options with secure instant deposits.",
  },
  {
    path: "images/2JBet-PKR-Withdraw.webp",
    title: "2JBet Withdraw Your Winnings – Fast Easy Secure",
    caption:
      "2JBet withdrawal banner featuring JazzCash, Easypaisa, bank transfer, and other methods with fast processing and secure PKR payouts.",
  },
];

export function GET() {
  const base = siteOrigin();
  const pageLoc = `${base}/`;
  const imagesXml = IMAGE_FILES.map(
    ({ path, title, caption }) => `    <image:image>
      <image:loc>${escapeXml(`${base}/${path}`)}</image:loc>
      <image:title>${escapeXml(title)}</image:title>
      <image:caption>${escapeXml(caption)}</image:caption>
    </image:image>`,
  ).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(pageLoc)}</loc>
${imagesXml}
  </url>
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
