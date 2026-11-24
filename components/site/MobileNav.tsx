"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

export function MobileNav({ links }: { links: readonly NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
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
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
