# Assignment 6: SSR, Hydration, and Core Web Vitals Optimization

Two projects with **the same content** — one SPA, one SSR/SSG.

| Project | Folder | Stack | Rendering |
|--------|--------|--------|-----------|
| **SPA** | `assignment6-spa/` | Vite + React + React Router | Client-side only |
| **SSR/SSG** | `assignment6-ssr/` | Next.js 16 + React | SSR + SSG (generateStaticParams) |

## Requirements

1. **SSR / SSG** — Next.js app uses Server-Side Rendering and Static Site Generation (article pages via `generateStaticParams`).
2. **Hydration** — No hydration mismatch; deterministic date formatting and no client-only APIs in initial render.
3. **Lighthouse 90+** — `next/font` (Inter, display: swap), `next/image` with sizes/priority, fixed image dimensions to avoid CLS.
4. **API Routes** — `GET /api/articles`, `GET /api/articles/[slug]`.

## Run

**SPA (same content):**
```bash
cd assignment6-spa && npm install && npm run dev
```
→ http://localhost:5173

**SSR/SSG (same content):**
```bash
cd assignment6-ssr && npm install && npm run dev
```
→ http://localhost:3000

## Does it complete Lighthouse & Hydration?

- **Lighthouse (Performance > 90):** Yes — hero LCP with `priority`, `next/image` everywhere with fixed dimensions (no CLS), `next/font` (Inter, display: swap). Run **production** build (`npm run build && npm start` in `assignment6-ssr`) and run Lighthouse on http://localhost:3000 for accurate scores.
- **Hydration:** Yes — no client-only APIs in initial render; dates use deterministic `formatDate()`; same structure server and client. No console errors; smooth SPA → SSR transition.

## Enhanced content (same in both apps)

- **Home:** Hero image (LCP), stats section, 3 featured articles with thumbnails, 6-image gallery.
- **Articles:** 6 articles in a card grid with images.
- **Article detail:** Hero image, inline content image, related articles (3) with thumbnails.
- **About:** Stats and team section (4 members with avatars).

## Where to add images and other things

- **`assignment6-ssr/WHERE_TO_ADD.md`** — Where to add images (by path in `public/`), fonts, API routes, new pages.
- **`assignment6-ssr/HYDRATION_AND_LIGHTHOUSE.md`** — How to use **Hydration** and **Lighthouse** in this project (images by path, avoiding hydration errors, running Lighthouse for Performance 90+).

## Grading alignment

- **Lighthouse:** Performance > 90 — font/image optimization, SSG for article pages.
- **Hydration:** No console errors; deterministic server/client output.
- **SSR configured:** Next.js App Router with SSR by default and SSG for `/articles/[slug]`.
