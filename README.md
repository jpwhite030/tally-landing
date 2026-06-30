# Tally Tax — landing page

Marketing landing page for **Tally Tax**, the Aussie receipt-to-deduction app.
Built with **Next.js (App Router) + Tailwind CSS v4**. This is a standalone web
project — separate from the Expo mobile app.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Configure

Copy `.env.example` to `.env.local`:

- `WAITLIST_ENDPOINT` — where signup emails are forwarded (e.g. a
  [Formspree](https://formspree.io) form URL or your own webhook). **If left
  blank**, the `/api/waitlist` route still returns success and logs the email
  server-side, so the form works end-to-end during development — but emails
  aren't stored anywhere until you set this.
- `NEXT_PUBLIC_SITE_URL` — public URL, used for SEO/OG tags.

## Deploy (Vercel)

Push to GitHub, then "Import Git Repository" in Vercel (or run `vercel`).
Set the two env vars above in the Vercel project settings.

## Structure

- `app/page.tsx` — composes the page sections.
- `app/layout.tsx` — fonts + SEO metadata.
- `app/globals.css` — Tailwind v4 theme tokens (brand colours) + button/card styles.
- `app/api/waitlist/route.ts` — waitlist email capture.
- `components/` — `Nav`, `Hero`, `Features`, `HowItWorks`, `StoreBadges`, `WaitlistForm`, `Footer`, `Wordmark`.
- `public/tally-mascot.png` — the mascot (shared with the app).
