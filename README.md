# 2JBet PKR (Next.js)

Informational site for **2JBet APK** download, install guides, games, login, and referral information.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### If the dev server shows 500 / missing chunk errors

```bash
npm run dev:fresh
```

## Environment

Copy `.env.example` to `.env.local` and set:

- **`NEXT_PUBLIC_SITE_URL`** – live origin (no trailing slash), e.g. `https://2jbetpk.com`

## Pages

| Path | Focus |
|------|--------|
| `/` | 2JBet APK Download |
| `/2jbet-pkr-guide` | Complete guide |
| `/2jbet-pkr-games` | Games guide |
| `/2jbet-pkr-login` | Login & registration |
| `/2jbet-pkr-referral-bonus` | Referral / affiliate guide |

## Download CTA

Update `DOWNLOAD_URL` in `lib/site.ts` when the live APK link is ready.
