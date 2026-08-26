# Pin & Pan Cafe — Website

A **high-end, social-first café website** for **Pin & Pan Cafe, Bawadiya Kalan, Bhopal**.

It's built as an "Instagram page you can walk into" — a digital menu, food gallery,
reservation + WhatsApp platform, and a food & lifestyle magazine all in one. The customer
journey is **Discover → See food → Explore menu → Check vibe → Reserve → WhatsApp → Visit**.

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · Framer Motion · Google Fonts.

**Visual direction:** a warm, premium, editorial café identity — espresso / cream / terracotta
palette, DM Sans + Sora display type with DM Serif italic accents, frosted-glass floating nav,
layered shadows, gradient headlines, generative-product imagery, and subtle micro-interactions.

---

## ✨ What's on the site

| Section | What it does |
|---|---|
| **Loading screen** | `PIN` → `& PAN` → `CAFE` with a coffee-pour fill bar |
| **Hero** | Cinematic slow-zoom image, parallax text, dark-to-cream masked reveal |
| **Mood selector** | "What are you in the mood for?" — hover switches a food image + description |
| **Digital menu** | Category tabs, veg/non-veg & bestseller/spicy badges, quick-view panel |
| **Signature dish** | "You have to try this" — one featured dish |
| **Food gallery** | Masonry "eat with your eyes" grid with a lightbox |
| **Instagram feed** | 9-post hover grid → every post links to the café's Instagram |
| **Café vibe** | Editorial "come for the food, stay for the vibe" |
| **Your kind of place** | Clickable experience cards (date night, friends, family…) |
| **Events** | Cards with social sharing (WhatsApp / Instagram / copy link) |
| **Reservation** | "Save your table" form + confirmation state |
| **Location** | Bawadiya Kalan, Bhopal + "Get directions" (no fake pin) |
| **Reviews** | Shows a "add verified reviews" state until real ones are provided |
| **Final CTA / Footer** | Dark closing section + floating WhatsApp & Reserve buttons |

Plus: floating **WhatsApp** & **Reserve** buttons, a **mobile sticky bottom nav**
(Menu · Reserve · WhatsApp), shareable menu & event URLs, SEO (LocalBusiness/JSON-LD +
Open Graph), lazy-loaded & responsive images, reduced-motion support, and semantic HTML.

---

## 🛠️ Editing the content — pretty much everything is data-driven

The café owner or an editor can update the site without touching any component code. All
content lives in the **`lib/`** folder. Open these files and edit the values:

| File | What it controls |
|---|---|
| `lib/site.ts` | Business name, Instagram, **address / phone / WhatsApp / hours (to verify)**, WhatsApp messages |
| `lib/menu.ts` | Menu categories, dish names, descriptions, prices, veg/non-veg, bestseller/spicy, images |
| `lib/moods.ts` | "What are you in the mood for?" options |
| `lib/gallery.ts` | Food gallery images & captions |
| `lib/instagram.ts` | Instagram feed posts + links |
| `lib/vibe.ts` | Café vibe words + "your kind of place" experiences |
| `lib/events.ts` | Events, dates, times, images (set `eventsEmpty = true` to show "coming soon") |
| `lib/reviews.ts` | Reviews (set `reviewsAvailable = true` once you have real ones) |

**Images:** drop your own photos into `public/images/` and update the `/images/…`
paths in those files.

---

## ⚠️ Still to verify (deliberately NOT invented)

Per the brief, none of these were fabricated. They're shown as placeholders
(marked **"— verify"**) until you supply the real values in `lib/site.ts` and the other files:

- **Exact street address** (currently we show "Bawadiya Kalan, Bhopal" and link to a Google **search**)
- **Phone number**
- **WhatsApp number** (the WhatsApp deep links use a placeholder number)
- **Opening hours**
- **Menu items, categories & prices** (all placeholder/demo content)
- **Events & schedule** (demo events; flip `eventsEmpty = true` to hide them)
- **Follower/engagement stats** (never displayed — we show none)
- **Customer reviews** (shown as a "add verified reviews" state)

> **Why the map is stylised:** we don't want to show an inaccurate Google pin. A real
> address + live map embed can be dropped in once the exact location is confirmed.

---

## 🚀 Run it locally

```bash
npm install
npm run dev       # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## ☁️ Deploy

This is a standard Next.js app — deploy to **Vercel** (recommended), Netlify, or any Node
host. Build command `npm run build`, output `.next/`. No environment variables are required.

---

*Demo content — menu, prices, events and contact details are placeholders until verified by the café.*
