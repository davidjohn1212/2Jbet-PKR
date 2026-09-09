import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/2jbet-apk.webp"
              alt="2JBet"
              title="2JBet APK Official App Icon"
              width={64}
              height={64}
              className="footer-brand-icon"
              decoding="async"
            />
            <p className="footer-brand-logo-text">
              2JBet <span>PKR</span>
            </p>
            <p className="footer-brand-text">
              Independent informational resource for the 2JBet APK, installation steps, games, account
              guides, and referral information.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Important Links</div>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Important Pages</div>
              <Link href="/">2JBet APK Download</Link>
              <Link href="/2jbet-pkr-guide">Complete Guide</Link>
              <Link href="/2jbet-pkr-games">2JBet Games</Link>
              <Link href="/2jbet-pkr-login">Login &amp; Registration</Link>
              <Link href="/2jbet-pkr-referral-bonus">Referral</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">2JBet PKR © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
