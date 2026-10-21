# Totely landing page

The public website for Totely (Barterverse Technologies Ltd): shop Kaduna markets, supermarkets and restaurants on WhatsApp.
React + Vite + Tailwind 4, deployed on Netlify from `main`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/ (what Netlify publishes)
```

## Where things are

- `src/sections/` — page sections in reading order: `Top` (header, hero, what you can order), `Middle` (how it works,
  photo proof, features, safety, earn), `Bottom` (areas, FAQ, closing call to action, footer)
- `src/art/` — all illustrations, hand-drawn as inline SVG in the brand palette (no image files to load)
- `src/lib.ts` — the WhatsApp number and the pre-filled messages for customers, vendors, shoppers and riders
- `src/index.css` — brand colours and type (same palette as the ops console and worker app)
- `public/og.png` — the preview image shown when the link is shared on WhatsApp, X, etc.

## Keeping it honest

Copy describes what the product does today. Add numbers (customers, orders, partner stores) and testimonials only
when they are real, and update the FAQ when fees, payment options or areas change. The map in "Where we deliver"
names the first Kaduna areas; edit `KadunaMap` in `src/sections/Bottom.tsx` when that changes.
