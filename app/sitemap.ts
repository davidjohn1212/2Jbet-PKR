import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Core indexable routes (legal/support pages are noindex and excluded). */
const paths = ["/", "/2JBet-Guide", "/2jbet-pk-games", "/2jbet-pk-login", "/2jbet-referral-bonus"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
