import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  graphJsonLd,
  howToJsonLd,
  softwareApplicationJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld";
import { HOME_FAQS } from "@/lib/page-faqs";
import { DOWNLOAD_URL, SITE_URL } from "@/lib/site";

const HOME_IMAGES = {
  brand: {
    src: "/images/2JBet-PKR.webp",
    width: 1200,
    height: 675,
    alt: "2JBet official brand banner for the best earning gaming platform in Pakistan",
    title: "2JBet PKR – Official Online Gaming Platform in Pakistan",
    description:
      "Official 2JBet promotional banner featuring the 2JBet logo, Pakistan earning-platform message, 2JBetz.PK, and casino-style games imagery.",
  },
  download: {
    src: "/images/2JBet-PKR-Download.webp",
    width: 1200,
    height: 675,
    alt: "2JBet APK download welcome bonus offer up to Rs 10,000 first deposit bonus",
    title: "2JBet APK Download – Welcome Bonus up to Rs 10,000",
    description:
      "2JBet download promotion highlighting a first deposit welcome bonus of up to Rs 10,000 for new Android users installing the APK.",
  },
  login: {
    src: "/images/2JBet-PKR-Login.webp",
    width: 1200,
    height: 675,
    alt: "2JBet login and registration guide showing create account and login screens on mobile",
    title: "2JBet Login & Registration Guide",
    description:
      "Step-by-step 2JBet account registration and login guide with mobile app screens for sign up, OTP verification, and secure login.",
  },
  deposit: {
    src: "/images/2JBet-PKR-Deposit.webp",
    width: 1200,
    height: 675,
    alt: "2JBet deposit methods including JazzCash, Easypaisa, bank transfer, cards, and crypto",
    title: "2JBet Fast Easy Secure Deposit Options in PKR",
    description:
      "2JBet deposit banner showing JazzCash, Easypaisa, bank transfer, debit/credit card, and cryptocurrency options with secure instant deposits.",
  },
  withdraw: {
    src: "/images/2JBet-PKR-Withdraw.webp",
    width: 1200,
    height: 675,
    alt: "2JBet withdraw winnings via JazzCash, Easypaisa, and bank transfer in PKR",
    title: "2JBet Withdraw Your Winnings – Fast Easy Secure",
    description:
      "2JBet withdrawal banner featuring JazzCash, Easypaisa, bank transfer, and other methods with fast processing and secure PKR payouts.",
  },
} as const;

export const metadata: Metadata = {
  title: "2JBet APK Download – Latest Version for Android",
  description:
    "Download the 2JBet APK v1.0 for Android (12.6MB). Step-by-step install guide, system requirements, and safety tips before you download.",
  keywords: ["2JBet APK"],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    url: `${SITE_URL}/`,
    title: "2JBet APK Download – Latest Version for Android",
    description:
      "Download the 2JBet APK v1.0 for Android (12.6MB). Step-by-step install guide, system requirements, and safety tips before you download.",
    images: [
      {
        url: `${SITE_URL}/images/2JBet-PKR.webp`,
        width: 1200,
        height: 675,
        alt: "2JBet official brand banner for the best earning gaming platform in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2JBet APK Download – Latest Version for Android",
    description:
      "Download the 2JBet APK v1.0 for Android (12.6MB). Step-by-step install guide, system requirements, and safety tips before you download.",
    images: [`${SITE_URL}/images/2JBet-PKR.webp`],
  },
};

function DownloadButton({ label }: { label: string }) {
  const isHash = DOWNLOAD_URL.startsWith("#");
  return (
    <a
      href={DOWNLOAD_URL}
      {...(isHash ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className="btn-primary"
    >
      {label}
    </a>
  );
}

export default function HomePage() {
  const schema = graphJsonLd(
    webPageJsonLd({
      name: "2JBet APK Download – Latest Version for Android",
      description:
        "Download the 2JBet APK v1.0 for Android (12.6MB). Step-by-step install guide, system requirements, and safety tips before you download.",
      path: "/",
      keywords: ["2JBet APK", "2JBet APK download", "2JBet Android"],
      about: "2JBet APK download and installation for Android",
      image: Object.values(HOME_IMAGES).map((img) => img.src),
      primaryImage: HOME_IMAGES.brand.src,
      datePublished: "2026-09-01",
      dateModified: "2026-09-09",
    }),
    breadcrumbJsonLd([{ name: "Home", path: "/" }]),
    softwareApplicationJsonLd(),
    howToJsonLd({
      name: "How to Install 2JBet APK on Android",
      description: "Step-by-step instructions to download and install the 2JBet APK on an Android device.",
      url: SITE_URL,
      totalTime: "PT10M",
      image: `${SITE_URL}/images/2JBet-PKR-Download.webp`,
      steps: [
        {
          name: "Download the APK",
          text: "Use the 2JBet APK Download button on this page to obtain the APK file. Make sure the download finishes before attempting to install the application.",
        },
        {
          name: "Allow APK Installation",
          text: "If prompted, open the relevant security settings and allow your browser or file manager to install applications from unknown sources.",
        },
        {
          name: "Open the APK File",
          text: "Open the APK file from your browser's download section or your device's file manager.",
        },
        {
          name: "Install 2JBet",
          text: "Follow the instructions displayed on your screen and wait for the installation to finish.",
        },
        {
          name: "Open the Application",
          text: "Once installation is complete, open 2JBet from your device and follow the application's instructions, including login and registration if needed.",
        },
      ],
    }),
    faqPageJsonLd(HOME_FAQS, SITE_URL),
  );

  return (
    <div className="main-grid">
      <JsonLd data={schema} />

      <section className="hero-row" aria-label="Download 2JBet APK">
        <div className="hero-content">
          <h1 className="content-title">2JBet APK Download – Latest Version for Android</h1>
          <p className="hero-lead">
            Looking for the 2JBet APK download for Android? Get version 1.0 (12.6 MB) with install steps,
            requirements, and safety tips on this page.
          </p>
          <div className="actions-row">
            <DownloadButton label="Download 2JBet APK" />
          </div>
        </div>
        <div className="hero-icon-wrap">
          <Image
            src="/images/2jbet-apk.webp"
            alt="2JBet APK icon – official 2JBet Android app logo"
            title="2JBet APK Official App Icon"
            width={512}
            height={512}
            className="hero-promo-image"
            priority
            sizes="(max-width: 720px) 38vw, 200px"
          />
        </div>
      </section>

      <article className="content-page">
        <p className="content-intro">
          Looking for the 2JBet APK download for Android? This page provides basic information about the
          current 2JBet Android application, including its version, file size, Android requirements, and
          installation instructions.
        </p>
        <p>
          If you&apos;re ready to install 2JBet, use the download option provided on this page and follow the
          Android installation steps below.
        </p>

        <div className="content-card">
          <section className="content-section" id="apk-info">
            <h2>2JBet APK Information</h2>
            <h3>App Information</h3>
            <p>Details</p>
            <dl className="app-info-grid">
              <dt>App Name</dt>
              <dd>2JBet</dd>
              <dt>Version</dt>
              <dd>1.0</dd>
              <dt>APK Size</dt>
              <dd>12.6 MB</dd>
              <dt>Android Requirement</dt>
              <dd>Android 5.0 and above</dd>
              <dt>Category</dt>
              <dd>Online Gaming</dd>
            </dl>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="download">
            <h2>2JBet APK Download</h2>
            <ContentImage {...HOME_IMAGES.download} priority />
            <p>
              Download the 2JBet APK to your Android device and follow the installation instructions below.
            </p>
            <div className="actions-row">
              <DownloadButton label="Download 2JBet APK" />
            </div>
            <p>
              Before installing an APK, make sure you have enough available storage and that your Android
              device meets the minimum system requirement.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="what-is">
            <h2>What Is 2JBet?</h2>
            <ContentImage {...HOME_IMAGES.brand} />
            <p>
              2JBet is an online gaming platform available for users through its supported application and
              services. For a broader overview of how the platform works, see our{" "}
              <Link href="/2jbet-pkr-guide">2JBet Complete Guide</Link>.
            </p>
            <p>
              The Android APK provides a way for compatible Android devices to access the platform&apos;s{" "}
              <Link href="/2jbet-pkr-games">2JBet games</Link> without installing the application through the
              standard Google Play Store process.
            </p>
            <p>
              The current version listed on this page is 2JBet 1.0, with an APK size of approximately 12.6 MB
              and a minimum requirement of Android 5.0 or above.
            </p>
            <p>
              Features, availability, and platform services may change when newer versions are released.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="install">
            <h2>How to Install 2JBet APK on Android</h2>
            <p>Installing an APK on Android is generally straightforward.</p>

            <h3>Step 1: Download the APK</h3>
            <p>
              Use the 2JBet APK Download button on this page to obtain the APK file. Make sure the download
              finishes before attempting to install the application.
            </p>

            <h3>Step 2: Allow APK Installation</h3>
            <p>
              Depending on your Android version and device manufacturer, Android may ask you to allow
              installation from an unknown source. If prompted, open the relevant security settings and allow
              your browser or file manager to install applications. The exact settings can vary between
              Android devices.
            </p>

            <h3>Step 3: Open the APK File</h3>
            <p>
              After the download is complete, open the APK file from your browser&apos;s download section or
              your device&apos;s file manager.
            </p>

            <h3>Step 4: Install 2JBet</h3>
            <p>
              Follow the instructions displayed on your screen and wait for the installation to finish.
            </p>

            <h3>Step 5: Open the Application</h3>
            <p>
              Once installation is complete, open 2JBet from your device and follow the application&apos;s
              instructions, including <Link href="/2jbet-pkr-login">2JBet login and registration</Link> if you need
              an account.
            </p>
            <ContentImage {...HOME_IMAGES.login} />
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="requirements">
            <h2>2JBet APK Requirements</h2>
            <p>The current 2JBet APK information provided on this page is:</p>
            <ul>
              <li>
                <strong>Version:</strong> 1.0
              </li>
              <li>
                <strong>File size:</strong> 12.6 MB
              </li>
              <li>
                <strong>Minimum Android version:</strong> Android 5.0 and above
              </li>
            </ul>
            <p>
              Make sure your device meets the Android requirement before downloading the application. You
              should also keep sufficient free storage available for the installation and any additional
              application data that may be required.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="pc">
            <h2>How to Install 2JBet on PC</h2>
            <p>
              The Android APK is designed for Android devices. However, users who want to access an Android
              application from a computer may be able to use a compatible Android emulator.
            </p>
            <h3>Using an Android Emulator</h3>
            <ul>
              <li>Install a reputable Android emulator on your PC.</li>
              <li>Complete the emulator&apos;s initial setup.</li>
              <li>Download the 2JBet APK.</li>
              <li>Open or import the APK through the emulator.</li>
              <li>Follow the installation instructions shown by the emulator.</li>
              <li>Launch 2JBet after installation.</li>
            </ul>
            <p>
              Compatibility can vary depending on the emulator, operating system, computer hardware, and
              application version. If the APK does not work correctly through an emulator, check whether the
              current version supports your particular setup.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="iphone">
            <h2>Is 2JBet Available on iPhone?</h2>
            <p>An Android APK cannot be installed directly on an iPhone or iPad.</p>
            <p>
              The version described on this page is an Android APK, so iOS users should not attempt to install
              the APK on an Apple device.
            </p>
            <p>
              If 2JBet provides an official iOS application or another supported method of access in the
              future, users should follow the instructions provided for that platform.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="explore">
            <h2>Explore 2JBet</h2>
            <p>
              Want to learn more before downloading? We have separate pages covering different aspects of
              2JBet.
            </p>
            <div className="explore-grid">
              <div className="explore-card">
                <h3>2JBet Complete Guide</h3>
                <p>
                  Learn more about what 2JBet is, how the platform works, its features, safety considerations,
                  and other important information in the complete guide linked above.
                </p>
              </div>
              <div className="explore-card">
                <h3>2JBet Games</h3>
                <p>
                  Interested in the games available on the platform? The games guide linked above covers the
                  different gaming categories and explains what users should know before playing.
                </p>
              </div>
              <div className="explore-card">
                <h3>2JBet Login &amp; Registration</h3>
                <p>
                  Already have an account or want to learn about registration? The login guide linked in the
                  install steps covers creating an account, logging in, and common account-related issues.
                </p>
              </div>
              <div className="explore-card">
                <h3>2JBet Referral</h3>
                <p>
                  Looking for information about referrals and invite features? Our 2JBet Referral page explains
                  how referral programs generally work and what users should check before participating.
                </p>
                <Link href="/2jbet-pkr-referral-bonus">2JBet referral program and invite guide</Link>
              </div>
            </div>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section" id="faqs">
            <h2>Frequently Asked Questions</h2>
            <ul className="faq-list">
              <li>
                <p className="faq-q">What is the latest 2JBet APK version?</p>
                <p className="faq-a">
                  The version currently listed on this page is 2JBet version 1.0. If a newer version becomes
                  available, the app information on this page should be updated accordingly.
                </p>
              </li>
              <li>
                <p className="faq-q">What is the size of the 2JBet APK?</p>
                <p className="faq-a">
                  The current APK size is approximately 12.6 MB. The final amount of storage required after
                  installation may be different because an application can create additional files or data.
                </p>
              </li>
              <li>
                <p className="faq-q">What Android version is required for 2JBet?</p>
                <p className="faq-a">The current requirement is Android 5.0 and above.</p>
              </li>
              <li>
                <p className="faq-q">Can I install 2JBet on iPhone?</p>
                <p className="faq-a">
                  No. An Android APK cannot be installed directly on an iPhone or iPad.
                </p>
              </li>
              <li>
                <p className="faq-q">Can I use 2JBet on a PC?</p>
                <p className="faq-a">
                  The APK is designed for Android. However, it may be possible to run an Android application
                  through a compatible Android emulator on a PC.
                </p>
              </li>
              <li>
                <p className="faq-q">How do I install the 2JBet APK?</p>
                <p className="faq-a">
                  Download the APK, allow your Android device to install applications from the relevant source
                  if prompted, open the downloaded file, and follow the installation instructions.
                </p>
              </li>
              <li>
                <p className="faq-q">Why can&apos;t I install the 2JBet APK?</p>
                <p className="faq-a">
                  Installation problems can occur for several reasons, including an incompatible Android
                  version, insufficient storage, an incomplete download, or device security settings blocking
                  APK installation. Check that your device runs Android 5.0 or above and that the APK download
                  completed successfully.
                </p>
              </li>
              <li>
                <p className="faq-q">Is 2JBet free to download?</p>
                <p className="faq-a">
                  The APK itself can be downloaded without treating the download as a purchase. However, any
                  real-money gaming, deposits, or other financial activity offered through the platform may
                  have separate conditions.
                </p>
              </li>
              <li>
                <p className="faq-q">Is 2JBet safe to install?</p>
                <p className="faq-a">
                  Users should exercise caution when installing any APK obtained outside an official app store.
                  Check the source of the file, review the application&apos;s requested permissions, and use
                  appropriate security measures on your device. We do not claim that any third-party APK is
                  completely risk-free.
                </p>
              </li>
              <li>
                <p className="faq-q">Does 2JBet require an internet connection?</p>
                <p className="faq-a">
                  Online gaming applications generally require an internet connection for account access and
                  online features. The exact requirements can depend on the feature being used.
                </p>
              </li>
            </ul>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section">
            <h2>Important Information Before Installing</h2>
            <p>Before installing 2JBet, make sure:</p>
            <ul>
              <li>Your device runs Android 5.0 or above.</li>
              <li>You have enough available storage.</li>
              <li>You obtain the APK from a source you trust.</li>
              <li>
                You understand that Android may display a security warning for APK files installed outside an
                app store.
              </li>
              <li>You review the application&apos;s permissions before installation.</li>
              <li>You understand the applicable terms before using any real-money features.</li>
            </ul>
            <p>
              If you are using real-money gaming services, make sure you meet the applicable age requirements
              and that such services are permitted in your location.
            </p>
            <ContentImage {...HOME_IMAGES.deposit} />
            <ContentImage {...HOME_IMAGES.withdraw} />
          </section>
        </div>

        <div className="content-card">
          <section className="content-section">
            <h2>Download 2JBet APK</h2>
            <p>
              If your Android device meets the requirements and you want to install the application, you can
              use the download option on this page.
            </p>
            <div className="actions-row">
              <DownloadButton label="Download 2JBet APK – Version 1.0" />
            </div>
            <p>
              After downloading the 12.6 MB APK, follow the Android installation instructions above to complete
              the setup.
            </p>
          </section>
        </div>

        <div className="content-card">
          <section className="content-section">
            <h2>About This Website</h2>
            <p>
              This website is an independent informational resource about 2JBet. We are not the operator or
              developer of the 2JBet platform.
            </p>
            <p>
              We provide information about the APK, installation process, and related topics to help visitors
              understand the application.
            </p>
            <p>
              Application features, versions, availability, and other details can change over time. Users
              should verify important information through the relevant service before providing personal
              information or making financial transactions.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
