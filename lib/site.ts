const DEFAULT_SITE_URL = "https://2jbetpk.com";

/** Avoids invalid `metadataBase` when env is empty or not a valid URL. */
function normalizeSiteUrl(raw: string | undefined): string {
  const trimmed = raw?.trim() ?? "";
  if (!trimmed) return DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    return new URL(withProtocol).origin.replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

/** Canonical site origin for metadata, sitemap, and robots. Override with NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

/** Display name for the informational website. */
export const SITE_NAME = "2JBet PKR";

/** Product / app name used in copy and titles. */
export const BRAND_NAME = "2JBet";

/** External download target used by all download CTAs. Update when the live APK link is ready. */
export const DOWNLOAD_URL = "#download";
