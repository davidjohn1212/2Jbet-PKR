import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, graphJsonLd, howToJsonLd, webPageJsonLd } from "@/lib/jsonld";
import { REFERRAL_FAQS } from "@/lib/page-faqs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "2JBet Referral – Referral Program, Code & Invite Guide",
  description:
    "How the 2JBet referral program works — getting your link or code, how rewards are tracked, and what to check before relying on a bonus.",
  keywords: ["2JBet Referral"],
  alternates: { canonical: `${SITE_URL}/2jbet-referral-bonus` },
};

export default function ReferralPage() {
  const pageUrl = `${SITE_URL}/2jbet-referral-bonus`;
  const schema = graphJsonLd(
    webPageJsonLd({
      type: "Article",
      name: "2JBet Referral – Referral Program, Code & Invite Guide",
      description:
        "How the 2JBet referral program works — getting your link or code, how rewards are tracked, and what to check before relying on a bonus.",
      path: "/2jbet-referral-bonus",
      keywords: ["2JBet Referral", "2JBet referral bonus", "2JBet invite"],
      about: "2JBet referral and affiliate program",
      image: "/images/2JBet-PKR.webp",
      datePublished: "2026-09-01",
      dateModified: "2026-09-09",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "2JBet Referral Bonus", path: "/2jbet-referral-bonus" },
    ]),
    howToJsonLd({
      name: "How the 2JBet Referral Program Works",
      description: "General steps for using a 2JBet referral or affiliate link.",
      url: pageUrl,
      steps: [
        {
          name: "Get a referral link",
          text: "Obtain a referral or affiliate link from the current 2JBet referral or affiliate area.",
        },
        {
          name: "Share the link",
          text: "Share the link with another person through permitted channels.",
        },
        {
          name: "New user registers",
          text: "The new user follows the referral link and completes any required registration or qualifying activity.",
        },
        {
          name: "Referral is tracked",
          text: "The referral is tracked by the platform according to the current program terms.",
        },
        {
          name: "Reward handling",
          text: "Any applicable reward or commission is handled according to the current program terms.",
        },
      ],
    }),
    faqPageJsonLd(REFERRAL_FAQS, pageUrl),
  );

  return (
    <div className="main-grid">
      <article className="content-page">
        <JsonLd data={schema} />
        <h1 className="content-title">2JBet Referral – Referral Program, Code &amp; Invite Guide</h1>
        <p className="content-intro">
          If you&apos;re searching for information about the 2JBet referral program, this guide explains how
          referrals work, how referral links or codes may be used, and what to check before inviting other
          users.
        </p>
        <p>
          2JBet currently describes an affiliate program that allows participants to obtain a referral link,
          access promotional materials, monitor referral statistics through an affiliate dashboard, and earn
          based on referred users.
        </p>
        <p>
          Because referral terms and promotional offers can change, always check the current 2JBet platform for
          the latest requirements and rewards.
        </p>

        <section className="content-section">
          <h2>What Is the 2JBet Referral Program?</h2>
          <p>
            The 2JBet referral program is designed to allow existing participants or affiliates to introduce new
            users to the platform. For background on what 2JBet is, see the{" "}
            <Link href="/2JBet-Guide">2JBet APK Complete Guide</Link>.
          </p>
          <p>The basic concept is straightforward:</p>
          <ol>
            <li>A participant obtains a referral or affiliate link.</li>
            <li>The participant shares the link with another person.</li>
            <li>The new user follows the referral link.</li>
            <li>The new user completes any required <Link href="/2jbet-pk-login">2JBet registration</Link> or qualifying activity.</li>
            <li>The referral is tracked by the platform.</li>
            <li>Any applicable reward or commission is handled according to the current program terms.</li>
          </ol>
          <p>The exact eligibility requirements and reward structure can vary.</p>
        </section>

        <section className="content-section">
          <h2>How Does 2JBet Referral Work?</h2>
          <p>
            The current 2JBet website describes an affiliate system where users can obtain a referral link and
            monitor statistics through an affiliate dashboard. It also mentions promotional materials intended to
            help affiliates promote the platform and its <Link href="/2jbet-pk-games">2JBet games</Link>.
          </p>
          <p>
            In general, the important part of a referral system is that the new user needs to be correctly
            attributed to the referring account.
          </p>
          <p>If a referral is not tracked properly, the reward may not be credited.</p>
        </section>

        <section className="content-section">
          <h2>How to Get a 2JBet Referral Link</h2>
          <p>
            If the referral program is available to your account, the current process generally involves accessing
            the platform&apos;s affiliate or referral area.
          </p>
          <p>Look for an option such as:</p>
          <ul>
            <li>Referral</li>
            <li>Affiliate Program</li>
            <li>Invite Friends</li>
            <li>Referral Link</li>
            <li>Affiliate Dashboard</li>
          </ul>
          <p>
            The exact location and terminology may change as the platform updates its interface.
          </p>
          <p>Once you have your referral link, you can share it through permitted channels.</p>
        </section>

        <section className="content-section">
          <h2>What Is a 2JBet Referral Code?</h2>
          <p>
            A 2JBet referral code is a code that can potentially identify the person who referred a new user.
          </p>
          <p>However, a referral code and a referral link are not necessarily the same thing.</p>
          <p>
            A referral link may automatically associate a new registration with the referring account, while a
            referral code may need to be entered manually during registration.
          </p>
          <p>
            If 2JBet provides both options, follow the instructions displayed on the current referral page.
          </p>
        </section>

        <section className="content-section">
          <h2>Is There a 2JBet Referral Bonus?</h2>
          <p>
            The availability and amount of a 2JBet referral bonus can change depending on the current promotion
            and program terms.
          </p>
          <p>
            We do not recommend publishing a fixed bonus amount unless it can be verified directly from the
            current 2JBet referral program.
          </p>
          <p>Before promoting a referral offer, check:</p>
          <ul>
            <li>Current bonus amount</li>
            <li>Eligibility requirements</li>
            <li>Minimum qualifying activity</li>
            <li>Reward conditions</li>
            <li>Expiration dates</li>
            <li>Withdrawal requirements</li>
            <li>Any restrictions on referred users</li>
          </ul>
          <p>
            A promotional offer should never be described as guaranteed unless the current official terms clearly
            state the conditions.
          </p>
        </section>

        <section className="content-section">
          <h2>How Do Referral Rewards Work?</h2>
          <p>Referral rewards can be structured in different ways.</p>
          <p>
            Depending on the current 2JBet program, compensation may be connected to referred users or their
            qualifying activity. The current platform describes its affiliate program as allowing participants to
            monitor statistics and earn from people they refer.
          </p>
          <p>
            The exact calculation method should be checked in the current affiliate dashboard or program terms.
          </p>
          <p>Do not assume that every registration automatically generates a cash reward.</p>
        </section>

        <section className="content-section">
          <h2>When Do You Receive a 2JBet Referral Reward?</h2>
          <p>The timing of referral rewards depends on the conditions of the current program.</p>
          <p>
            A referral may need to satisfy specific requirements before it becomes eligible. For example, some
            programs require a new user to register successfully and complete a qualifying action.
          </p>
          <p>Before expecting a reward, check whether the referral has:</p>
          <ul>
            <li>Registered through the correct link or code</li>
            <li>Completed any required verification</li>
            <li>Met the program&apos;s qualifying conditions</li>
            <li>Remained eligible under the current terms</li>
          </ul>
          <p>
            If a referral appears in your dashboard but a reward has not been credited, review the applicable
            program conditions or contact the platform&apos;s support team.
          </p>
        </section>

        <section className="content-section">
          <h2>Why Is My 2JBet Referral Not Showing?</h2>
          <p>There are several possible reasons why a referral may not appear in your account.</p>
          <p>Possible causes include:</p>
          <ul>
            <li>The person did not use your referral link.</li>
            <li>The referral code was entered incorrectly.</li>
            <li>The registration was completed before using the referral link.</li>
            <li>The new account did not meet the program requirements.</li>
            <li>Tracking information was not recorded correctly.</li>
            <li>The referral is still pending.</li>
            <li>The account does not qualify under the current promotion.</li>
          </ul>
          <p>
            If the problem continues, contact the platform through its available support or affiliate-support
            channel.
          </p>
        </section>

        <section className="content-section">
          <h2>Can I Share My 2JBet Referral Link?</h2>
          <p>
            If the current program permits referral sharing, you can generally share your referral link with
            people who may be interested in the platform.
          </p>
          <p>Potential sharing channels can include:</p>
          <ul>
            <li>Personal messages</li>
            <li>Social media</li>
            <li>Gaming communities</li>
            <li>Websites or blogs</li>
            <li>Other permitted online channels</li>
          </ul>
          <p>
            However, always follow the platform&apos;s referral rules and the rules of the website or social
            network where you are sharing the link.
          </p>
          <p>Avoid spam or misleading advertising.</p>
        </section>

        <section className="content-section">
          <h2>Can I Refer Myself to 2JBet?</h2>
          <p>Self-referrals should not be assumed to be permitted.</p>
          <p>
            Creating additional accounts or attempting to generate referral rewards through your own accounts can
            violate referral-program rules.
          </p>
          <p>
            If you&apos;re unsure whether a particular situation qualifies as a referral, check the current
            program terms before taking action.
          </p>
        </section>

        <section className="content-section">
          <h2>Can I Refer Family or Friends?</h2>
          <p>
            You may be able to share a referral link with friends or other people, provided that doing so is
            allowed under the current referral terms.
          </p>
          <p>
            However, the person you refer should understand that joining a real-money gaming platform involves
            financial risk.
          </p>
          <p>
            Do not pressure someone to deposit money or gamble simply because you want to receive a referral
            reward.
          </p>
        </section>

        <section className="content-section">
          <h2>2JBet Referral on Mobile</h2>
          <p>
            The referral or affiliate area may be accessible through supported mobile devices, depending on the
            current platform interface.
          </p>
          <p>
            If you cannot find the referral section on a mobile device, try accessing your account through the
            current web platform or check the available account menus.
          </p>
          <p>
            The location of referral tools can change as the platform updates its website or application.
            Android users looking for the install file can use our <Link href="/">2JBet APK Download</Link>{" "}
            page.
          </p>
        </section>

        <section className="content-section">
          <h2>2JBet Referral on PC</h2>
          <p>
            Users can also check their referral or affiliate information through the platform&apos;s web-based
            interface where supported.
          </p>
          <p>
            A PC can be particularly useful for affiliates who need to review referral statistics, promotional
            materials, or dashboard information.
          </p>
          <p>
            The current 2JBet website describes an affiliate dashboard where referral statistics can be
            monitored.
          </p>
        </section>

        <section className="content-section">
          <h2>2JBet Affiliate Program vs Referral Program</h2>
          <p>
            The terms referral program and affiliate program are sometimes used interchangeably, but they can
            describe different arrangements.
          </p>
          <p>
            A simple referral program may reward an existing user for inviting another person.
          </p>
          <p>
            An affiliate program can be more structured, with tracking links, promotional materials, statistics,
            and commission arrangements.
          </p>
          <p>
            The current 2JBet website specifically describes an Affiliate Program with referral links,
            promotional materials, and an affiliate dashboard.
          </p>
          <p>
            For that reason, it&apos;s better to check the current program terms rather than assuming that every
            referral works the same way.
          </p>
        </section>

        <section className="content-section">
          <h2>Things to Check Before Using a 2JBet Referral</h2>
          <p>Before sharing or using a referral link, check the current terms carefully.</p>
          <p>Pay attention to:</p>
          <ul>
            <li>Referral eligibility</li>
            <li>Age requirements</li>
            <li>Geographic restrictions</li>
            <li>Registration requirements</li>
            <li>Qualifying activity</li>
            <li>Reward conditions</li>
            <li>Expiration dates</li>
            <li>Withdrawal requirements</li>
            <li>Duplicate-account rules</li>
            <li>Prohibited promotional methods</li>
          </ul>
          <p>
            This can help prevent misunderstandings about whether a referral qualifies for a reward.
          </p>
        </section>

        <section className="content-section">
          <h2>Don&apos;t Trust Guaranteed-Earnings Claims</h2>
          <p>
            Be careful with websites or social-media accounts claiming that a 2JBet referral link will guarantee
            income.
          </p>
          <p>
            Referral programs can have conditions, and gambling itself carries financial risk.
          </p>
          <p>
            A referral reward should not be presented as guaranteed income, and users should not be encouraged to
            gamble simply to generate a referral commission.
          </p>
        </section>

        <section className="content-section" id="faqs">
          <h2>2JBet Referral FAQs</h2>
          <ul className="faq-list">
            <li>
              <p className="faq-q">What is the 2JBet referral program?</p>
              <p className="faq-a">
                It is a referral or affiliate system that allows participants to introduce new users to the
                platform through referral links or other tracking methods. The current 2JBet website describes an
                affiliate program with referral links and dashboard tracking.
              </p>
            </li>
            <li>
              <p className="faq-q">How do I get a 2JBet referral link?</p>
              <p className="faq-a">
                If you are eligible for the program, look for the referral or affiliate section within the
                current 2JBet platform. The platform currently describes access to an affiliate link through its
                affiliate program.
              </p>
            </li>
            <li>
              <p className="faq-q">Does 2JBet have a referral bonus?</p>
              <p className="faq-a">
                The platform currently promotes an affiliate/referral system, but the exact reward structure can
                change. Check the current program terms before relying on a particular bonus amount.
              </p>
            </li>
            <li>
              <p className="faq-q">What is a 2JBet referral code?</p>
              <p className="faq-a">
                A referral code is a code that can be used to associate a new user with a referring account. If a
                code is currently required, follow the instructions shown during the registration process.
              </p>
            </li>
            <li>
              <p className="faq-q">How do I use a 2JBet referral link?</p>
              <p className="faq-a">
                Use the referral link provided through the current referral or affiliate system and follow the
                registration instructions. Make sure the referral is correctly tracked before assuming that it
                qualifies for a reward.
              </p>
            </li>
            <li>
              <p className="faq-q">Why didn&apos;t I receive my 2JBet referral reward?</p>
              <p className="faq-a">
                Possible reasons include incorrect referral tracking, failure to meet qualifying requirements,
                pending status, or other program restrictions. Check the current referral terms and contact
                platform support if necessary.
              </p>
            </li>
            <li>
              <p className="faq-q">Can I refer myself?</p>
              <p className="faq-a">
                Do not assume that self-referrals are allowed. Creating multiple accounts to generate referral
                rewards may violate the program&apos;s rules.
              </p>
            </li>
            <li>
              <p className="faq-q">Can I share my referral link on social media?</p>
              <p className="faq-a">
                You can share a referral link only where the current program permits it and where the relevant
                social platform&apos;s rules allow it. Avoid spam and misleading claims.
              </p>
            </li>
            <li>
              <p className="faq-q">Is the 2JBet referral bonus guaranteed?</p>
              <p className="faq-a">
                No. Referral rewards depend on the applicable program terms and qualifying conditions. A referral
                should not be presented as guaranteed income.
              </p>
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Responsible Referral Promotion</h2>
          <p>
            If you share information about a real-money gaming platform, be transparent about the fact that you
            may receive a referral benefit.
          </p>
          <p>Do not make claims such as:</p>
          <ul>
            <li>&quot;Guaranteed profit&quot;</li>
            <li>&quot;Guaranteed winnings&quot;</li>
            <li>&quot;Risk-free money&quot;</li>
            <li>&quot;Everyone wins&quot;</li>
            <li>&quot;You cannot lose&quot;</li>
          </ul>
          <p>
            Gambling can result in financial losses, and promotional claims should not hide that risk.
          </p>
          <p>
            Users should also meet the applicable age requirements before participating in real-money gambling.
          </p>
        </section>

        <section className="content-section">
          <h2>About This 2JBet Referral Guide</h2>
          <p>
            This is an independent informational resource. We are not the operator or developer of 2JBet, and we
            do not control its referral program, affiliate dashboard, referral links, rewards, payments,
            accounts, or promotional terms.
          </p>
          <p>
            Referral conditions can change. The information on this page is intended to explain how referral and
            affiliate programs generally work and to help users understand the terminology used by 2JBet.
          </p>
          <p>Always check the current platform terms before relying on a referral offer.</p>
        </section>
      </article>
    </div>
  );
}
