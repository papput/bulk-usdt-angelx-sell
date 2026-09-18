# Angelx — Sell USDT & Get INR

SSR Next.js frontend for Angelx. Cream yellow background (`#ffefbb`), black typography, and `#ffc107` accents, with the Angelx logo in the header, footer, and favicon.

Telegram is configured through environment variables:

- Direct messages: [@OfficialAngelX](https://t.me/OfficialAngelX)
- Official channel: [t.me/officiallangelx](https://t.me/officiallangelx)

## Stack

- Next.js App Router with React Server Components
- TypeScript
- Tailwind CSS
- `next/font` for Poppins

## Pages

- `/` landing page (hero, why Angelx, payout methods, specs, how it works, FAQ)
- `/how-it-works`
- `/faq`
- `/contact`

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env` and set:

```bash
NEXT_PUBLIC_SITE_URL=https://bulkusdt.in
NEXT_PUBLIC_TELEGRAM_HANDLE=@OfficialAngelX
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/OfficialAngelX
NEXT_PUBLIC_TELEGRAM_CHANNEL_HANDLE=@officiallangelx
NEXT_PUBLIC_TELEGRAM_CHANNEL_URL=https://t.me/officiallangelx
```

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```
