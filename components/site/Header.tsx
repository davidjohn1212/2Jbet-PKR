"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/2JBet-Guide", label: "Complete Guide" },
  { href: "/2jbet-pk-games", label: "Games" },
  { href: "/2jbet-pk-login", label: "Login" },
  { href: "/2jbet-referral-bonus", label: "Referral" },
] as const;

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="site-header" role="banner">
      <div className="site-header-inner">
        <Link href="/" className="site-brand" aria-label="2JBet PKR Home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/2jbet-apk.webp"
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

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={closeMenu} role="presentation">
          <aside
            className="mobile-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="mobile-menu-close" aria-label="Close menu" onClick={closeMenu}>
              ×
            </button>
            <nav className="mobile-menu-list" aria-label="Mobile primary">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
