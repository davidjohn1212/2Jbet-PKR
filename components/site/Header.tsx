import Link from "next/link";
import { MobileNav } from "@/components/site/MobileNav";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/2JBet-Guide", label: "Complete Guide" },
  { href: "/2jbet-pk-games", label: "Games" },
  { href: "/2jbet-pk-login", label: "Login" },
  { href: "/2jbet-referral-bonus", label: "Referral" },
] as const;

export function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="site-header-inner">
        <Link href="/" className="site-brand" aria-label="2JBet PKR Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/2jbet-apk-96.webp"
            alt="2JBet"
            title="2JBet APK Official App Icon"
            width={28}
            height={28}
            className="site-brand-icon"
            decoding="async"
            fetchPriority="low"
          />
          <span className="site-brand-text">
            <span className="site-brand-name">2JBet</span>
            <span className="site-brand-tag">PKR</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
