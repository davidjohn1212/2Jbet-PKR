import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  graphJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/jsonld";
import { GAMES_FAQS } from "@/lib/page-faqs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "2JBet PK Games – Complete Guide to All Available Games",
  description:
    "Explore all games available on 2JBet, including Aviator, Teen Patti, Roulette, Mines, and Plinko. See categories, game types, and what to check before playing.",
  keywords: ["2JBet Games", "2JBet PK Games"],
  alternates: { canonical: `${SITE_URL}/2jbet-pk-games` },
};

export default function GamesPage() {
  const pageUrl = `${SITE_URL}/2jbet-pk-games`;
  const schema = graphJsonLd(
    webPageJsonLd({
      type: "CollectionPage",
      name: "2JBet PK Games – Complete Guide to All Available Games",
      description:
        "Explore all games available on 2JBet, including Aviator, Teen Patti, Roulette, Mines, and Plinko. See categories, game types, and what to check before playing.",
      path: "/2jbet-pk-games",
      keywords: ["2JBet Games", "2JBet Aviator", "2JBet Teen Patti", "2JBet Roulette"],
      about: "Games available on the 2JBet platform",
      image: "/images/2JBet-PKR.webp",
      datePublished: "2026-09-01",
      dateModified: "2026-09-09",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "2JBet PK Games", path: "/2jbet-pk-games" },
    ]),
    itemListJsonLd({
      name: "2JBet Featured Games",
      description: "Games and titles commonly associated with the 2JBet platform",
      url: pageUrl,
      items: [
        { name: "Aviator", description: "Crash-style multiplier game" },
        { name: "Plinko", description: "Casual falling-ball game" },
        { name: "Go Rush", description: "Featured fast-paced game" },
        { name: "Roulette", description: "Classic casino roulette" },
        { name: "Teen Patti", description: "Skill/card game popular in South Asia" },
        { name: "Mines", description: "Grid-based casual game" },
        { name: "Color Game", description: "Color prediction casino game" },
        { name: "Dragon Tiger", description: "Card-based casino game" },
        { name: "Zoo Roulette", description: "Animal-themed roulette variant" },
        { name: "Toss a Coin", description: "Coin-flip skill/casual format" },
        { name: "Blackjack", description: "Live casino card game" },
        { name: "Baccarat", description: "Live casino card game" },
        { name: "Ludo", description: "Casual board-style game" },
        { name: "Fishing", description: "Arcade-style fishing game" },
        { name: "Crash", description: "Multiplier crash game" },
        { name: "Limbo", description: "Multiplier prediction game" },
      ],
    }),
    faqPageJsonLd(GAMES_FAQS, pageUrl),
  );

  return (
    <div className="main-grid">
      <article className="content-page">
        <JsonLd data={schema} />
        <h1 className="content-title">2JBet PK Games – Complete Guide to All Available Games</h1>
        <p className="content-intro">
          If you&apos;re looking for 2JBet games, the platform offers a variety of online casino and gaming
          options across several categories. The current 2JBet game directory lists more than 100 games and
          organizes them into categories such as Casino, Slot, Skill, and Casual.
        </p>
        <p>
          The exact game selection can change over time, so the list below should be used as a guide to the
          types of games and titles currently associated with the platform rather than a permanent catalog.
          For how 2JBet works overall, see the <Link href="/2JBet-Guide">2JBet APK Complete Guide</Link>.
        </p>

        <section className="content-section">
          <h2>What Games Are Available on 2JBet?</h2>
          <p>
            2JBet currently features several different types of games, ranging from traditional casino games to
            slots, skill-based games, and casual games.
          </p>
          <p>Some of the games and titles currently shown across 2JBet&apos;s platform include:</p>
          <ul>
            <li>Aviator</li>
            <li>Plinko</li>
            <li>Go Rush</li>
            <li>Roulette</li>
            <li>Teen Patti</li>
            <li>Mines</li>
            <li>Color Game</li>
            <li>Dragon Tiger</li>
            <li>Zoo Roulette</li>
            <li>Toss a Coin</li>
            <li>Blackjack</li>
            <li>Baccarat</li>
            <li>Ludo</li>
            <li>Fishing</li>
            <li>Crash</li>
            <li>Limbo</li>
          </ul>
          <p>
            The platform&apos;s current homepage highlights Aviator, Plinko, Go Rush, Roulette, Teen Patti, and
            Mines, while its game directory includes titles such as Color Game, Dragon Tiger, Zoo Roulette, Toss
            a Coin, and Roulette.
          </p>
        </section>

        <section className="content-section">
          <h2>2JBet Casino Games</h2>
          <p>
            The Casino category includes traditional-style casino games and other chance-based titles.
          </p>
          <h3>Roulette</h3>
          <p>
            Roulette is one of the classic casino games available through the platform. The current 2JBet
            directory specifically lists Roulette among its casino games.
          </p>
          <h3>Dragon Tiger</h3>
          <p>
            Dragon Tiger is another game currently listed in the 2JBet casino directory. It is a relatively
            simple card-based game where players choose between the Dragon and Tiger sides.
          </p>
          <h3>Color Game</h3>
          <p>
            Color Game is also listed in the current game directory. The game is based around selecting or
            predicting a color outcome.
          </p>
          <h3>Zoo Roulette</h3>
          <p>
            Zoo Roulette combines the basic concept of roulette with animal-themed visuals and is currently
            listed in the casino section of the 2JBet games directory.
          </p>
          <h3>Blackjack and Baccarat</h3>
          <p>
            2JBet&apos;s current FAQ also describes traditional live-casino options including Blackjack,
            Roulette, and Baccarat. Since game availability can change, users should check the current lobby
            before assuming a particular title is available.
          </p>
        </section>

        <section className="content-section">
          <h2>2JBet Slot Games</h2>
          <p>Slots are another major category on the platform.</p>
          <p>
            2JBet&apos;s current FAQ describes slot categories that include themes such as Fruit, Zeus, Mahjong,
            and Dragon. The available titles may vary as the platform updates its game selection.
          </p>
          <p>
            Slot games generally use reels, symbols, paylines, or other game mechanics to determine outcomes.
            Before playing any particular slot, check its individual rules, betting limits, and displayed
            information.
          </p>
        </section>

        <section className="content-section">
          <h2>2JBet Skill Games</h2>
          <p>
            The Skill category provides games that are different from traditional slot and casino formats.
          </p>
          <h3>Teen Patti</h3>
          <p>
            Teen Patti is currently identified by 2JBet as one of its skill-based game offerings. It is also
            highlighted among the platform&apos;s current top games.
          </p>
          <h3>Toss a Coin</h3>
          <p>
            Toss a Coin is another game currently displayed in the 2JBet casino directory. It uses a simple
            coin-flip format.
          </p>
          <p>Other skill-oriented games may also appear in the platform&apos;s current selection.</p>
        </section>

        <section className="content-section">
          <h2>2JBet Casual Games</h2>
          <p>
            The platform also provides casual-style games designed around simpler gameplay formats.
          </p>
          <p>
            Current 2JBet information identifies games such as Ludo, Plinko, Crash, and Mines within its casual
            gaming offering.
          </p>
          <h3>Mines</h3>
          <p>
            Mines is a popular grid-based game format in which players interact with a board containing hidden
            outcomes. The current 2JBet homepage and game listings both identify Mines as one of the available
            game titles.
          </p>
          <h3>Plinko</h3>
          <p>
            Plinko is another game currently highlighted by 2JBet. It uses a falling-ball format in which the
            final position determines the outcome.
          </p>
          <h3>Crash Games</h3>
          <p>
            Crash-style games are also included in 2JBet&apos;s current game information. In these games, the
            player generally has to decide when to stop or cash out before a predetermined game event occurs.
          </p>
        </section>

        <section className="content-section">
          <h2>2JBet Aviator</h2>
          <p>
            Aviator is one of the games currently highlighted by 2JBet and is also the subject of a dedicated
            article on the platform.
          </p>
          <p>
            Aviator is a crash-style game in which a multiplier increases while a virtual aircraft moves upward.
            The round can end unexpectedly, so players who participate with real money should understand the
            game&apos;s rules and risks before playing.
          </p>
          <p>
            Because outcomes can involve financial loss, Aviator should be treated as a gambling game rather
            than a guaranteed way to make money.
          </p>
        </section>

        <section className="content-section">
          <h2>2JBet Teen Patti</h2>
          <p>
            Teen Patti is currently featured among 2JBet&apos;s listed game offerings. It is a card-based game
            that is particularly familiar to players in South Asia.
          </p>
          <p>
            The current 2JBet website includes Teen Patti among its skill-based games and also highlights it
            among its top games.
          </p>
          <p>
            If you&apos;re specifically looking for 2JBet Teen Patti, check the current game lobby to confirm the
            title is available and review its rules before playing.
          </p>
        </section>

        <section className="content-section">
          <h2>2JBet Games on Mobile</h2>
          <p>
            2JBet provides gaming access across mobile and web environments according to its current platform
            information. Its FAQ describes Android and iOS access as well as web-based instant play.
          </p>
          <p>
            However, this should not be confused with installing an Android APK on an iPhone. An Android APK is
            designed for Android devices. iPhone users should use the applicable iOS or web-based access option
            instead.
          </p>
          <p>
            For Android users looking specifically for the APK, visit our{" "}
            <Link href="/">2JBet APK Download</Link> page for installation information.
          </p>
        </section>

        <section className="content-section">
          <h2>2JBet Games on PC</h2>
          <p>
            Users who want to access 2JBet games from a computer may be able to use the web-based version where
            supported.
          </p>
          <p>
            If an Android-only application is required, an Android emulator can also be used on a compatible
            Windows PC. Performance will depend on the computer, emulator, internet connection, and the
            application being used.
          </p>
        </section>

        <section className="content-section">
          <h2>Are All 2JBet Games Always Available?</h2>
          <p>Not necessarily.</p>
          <p>
            Online gaming platforms can change their game libraries, categories, featured titles, and
            availability over time. The current 2JBet directory lists more than 100 games, but individual titles
            may be added, removed, renamed, or temporarily unavailable.
          </p>
          <p>
            For that reason, it is better to check the current 2JBet game lobby before looking for a specific
            title.
          </p>
        </section>

        <section className="content-section">
          <h2>Which 2JBet Game Should You Choose?</h2>
          <p>There isn&apos;t one best 2JBet game for everyone.</p>
          <p>Your choice depends on the type of gameplay you prefer:</p>
          <table className="info-table">
            <thead>
              <tr>
                <th>Game Type</th>
                <th>Examples</th>
                <th>General Format</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Casino</td>
                <td>Roulette, Dragon Tiger, Baccarat</td>
                <td>Traditional casino-style games</td>
              </tr>
              <tr>
                <td>Slots</td>
                <td>Fruit, Zeus, Mahjong, Dragon</td>
                <td>Reel-based games</td>
              </tr>
              <tr>
                <td>Skill</td>
                <td>Teen Patti, Toss a Coin</td>
                <td>Interactive or skill-oriented formats</td>
              </tr>
              <tr>
                <td>Casual</td>
                <td>Mines, Plinko, Ludo, Crash</td>
                <td>Simple and fast gameplay</td>
              </tr>
              <tr>
                <td>Crash</td>
                <td>Aviator, Crash</td>
                <td>Multiplier-based gameplay</td>
              </tr>
            </tbody>
          </table>
          <p>
            This table describes game formats rather than suggesting that one category offers better chances of
            winning.
          </p>
        </section>

        <section className="content-section">
          <h2>Things to Check Before Playing 2JBet Games</h2>
          <p>Before using any real-money game, take a few minutes to understand how it works.</p>
          <p>Check:</p>
          <ul>
            <li>The game&apos;s rules and objective</li>
            <li>Minimum and maximum betting amounts</li>
            <li>How the game&apos;s outcome is determined</li>
            <li>Any applicable terms and conditions</li>
            <li>Deposit and withdrawal requirements</li>
            <li>Whether the game is available in your location</li>
            <li>Any age restrictions that apply</li>
            <li>Your own spending limits</li>
          </ul>
          <p>
            Most importantly, don&apos;t assume that a game can provide consistent profits. Casino and gambling
            games involve financial risk, and losing money is possible.
          </p>
        </section>

        <section className="content-section">
          <h2>Are 2JBet Games Free to Play?</h2>
          <p>This depends on the specific game and the access method offered by the platform.</p>
          <p>
            Some online gaming platforms may provide demonstrations or non-real-money versions of certain games,
            while others may require a <Link href="/2jbet-pk-login">2JBet account</Link> or balance to participate.
          </p>
          <p>
            Check the individual game and current 2JBet terms before assuming that a particular title can be
            played for free.
          </p>
        </section>

        <section className="content-section" id="faqs">
          <h2>Frequently Asked Questions About 2JBet Games</h2>
          <ul className="faq-list">
            <li>
              <p className="faq-q">How many games does 2JBet have?</p>
              <p className="faq-a">
                The current 2JBet game directory displays 100+ games across categories including Casino, Slot,
                Skill, and Casual. The exact number and selection may change over time.
              </p>
            </li>
            <li>
              <p className="faq-q">What are the most popular 2JBet games?</p>
              <p className="faq-a">
                The current 2JBet homepage highlights games including Aviator, Plinko, Go Rush, Roulette, Teen
                Patti, and Mines. Featured games can change over time.
              </p>
            </li>
            <li>
              <p className="faq-q">Does 2JBet have Teen Patti?</p>
              <p className="faq-a">
                Yes. Teen Patti is currently listed by 2JBet among its skill-based games and is also highlighted
                on its homepage.
              </p>
            </li>
            <li>
              <p className="faq-q">Does 2JBet have Roulette?</p>
              <p className="faq-a">Yes. Roulette is currently listed in the 2JBet game directory.</p>
            </li>
            <li>
              <p className="faq-q">Does 2JBet have Mines?</p>
              <p className="faq-a">
                Yes. Mines is currently highlighted on the 2JBet homepage and appears among its listed game
                offerings.
              </p>
            </li>
            <li>
              <p className="faq-q">Does 2JBet have Aviator?</p>
              <p className="faq-a">
                Aviator is currently featured on the 2JBet homepage, and 2JBet also has a dedicated article
                about the game.
              </p>
            </li>
            <li>
              <p className="faq-q">Can I play 2JBet games on my phone?</p>
              <p className="faq-a">
                2JBet&apos;s current information describes mobile access through Android and iOS as well as
                web-based play. However, the Android APK itself cannot be installed directly on an iPhone.
              </p>
            </li>
            <li>
              <p className="faq-q">Can I play 2JBet games on a PC?</p>
              <p className="faq-a">
                Where supported, 2JBet can be accessed through its web-based platform. Android applications may
                also be usable through a compatible Android emulator.
              </p>
            </li>
            <li>
              <p className="faq-q">Do 2JBet games guarantee winnings?</p>
              <p className="faq-a">
                No. There is no guaranteed way to win consistently from casino or real-money gambling games.
                Outcomes can involve financial losses, so users should play responsibly and only risk money they
                can afford to lose.
              </p>
            </li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Responsible Gaming</h2>
          <p>
            Real-money gambling involves financial risk. Before playing, understand the rules and limits of the
            particular game you are considering.
          </p>
          <p>
            Never treat gambling as a guaranteed source of income, and avoid increasing your spending simply
            because you have experienced losses. If gambling stops being recreational and begins causing
            financial or personal problems, consider stopping and seeking appropriate support.
          </p>
        </section>

        <section className="content-section">
          <h2>About This 2JBet Games Guide</h2>
          <p>
            This page is an independent informational resource. We are not the operator or developer of 2JBet,
            and we do not control its games, accounts, transactions, promotions, availability, or policies.
          </p>
          <p>
            Game names and availability can change. Information on this page is intended to help users understand
            the types of games associated with 2JBet and should not be treated as a guarantee that every listed
            game will always be available.
          </p>
          <p>For related information, visit:</p>
          <ul>
            <li>
              <Link href="/2jbet-referral-bonus">2JBet referral program</Link> – referral and invite information
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
