# Assignment 6 — SSR/SSG (Same content as SPA app)

Next.js app with Server-Side Rendering and Static Site Generation. Same content and structure as **assignment6-spa** (Vite SPA).

## Requirements covered

1. **SSR / SSG**
   - Pages are server-rendered by default (SSR).
   - Article detail pages use `generateStaticParams` for SSG at build time.

2. **Hydration**
   - No client-only APIs in initial render; dates use deterministic `formatDate()`.
   - No hydration mismatch — smooth SPA → SSR transition.

3. **Lighthouse (LCP/CLS)**
   - **Fonts:** `next/font` (Inter) with `display: 'swap'` and preload.
   - **Images:** `next/image` with `sizes`, `priority` on LCP, fixed-height containers to avoid CLS.

4. **API Routes**
   - `GET /api/articles` — list articles
   - `GET /api/articles/[slug]` — single article

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (SSG)

```bash
npm run build
npm start
```

## API

- `GET /api/articles` — returns all articles
- `GET /api/articles/getting-started-with-ssr` — returns one article by slug
