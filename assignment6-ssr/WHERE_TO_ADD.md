# Where to Add Images and Other Enhancements

This guide explains **where** to add images and other content so the SSR app stays Lighthouse 90+ and hydration-safe.

---

## 1. Where to Add Images

### Home page (`src/app/page.js`)

| Location | Purpose | How to add |
|----------|---------|------------|
| **Hero banner** | LCP (Largest Contentful Paint) — above the fold | Use `next/image` with `priority`, fixed container height (e.g. `height: 320px`), and `sizes="(max-width: 768px) 100vw, 1200px"`. Add URL to `HERO_IMAGE` in `src/data/articles.js`. |
| **Featured article cards** | Thumbnails | Use `next/image` with `fill`, container with `aspect-ratio: 2/1` (or fixed height). Add `image` to each article in `src/data/articles.js`. |
| **Gallery section** | “From the blog” grid | Use `next/image` with explicit `width={400}` and `height={300}` (or `fill` + fixed container). Add entries to `GALLERY_IMAGES` in `src/data/articles.js`. |

**Rule:** Always give images a **fixed size** (wrapper with height/aspect-ratio or width/height) to avoid CLS.

### Articles list (`src/app/articles/page.js`)

| Location | Purpose | How to add |
|----------|---------|------------|
| **Each card thumbnail** | Card image | Same as featured cards: `next/image` + `fill` + container with `aspect-ratio: 2/1`. Image URL comes from `article.image` in `src/data/articles.js`. |

### Article detail (`src/app/articles/[slug]/page.js`)

| Location | Purpose | How to add |
|----------|---------|------------|
| **Hero image** | LCP on direct visit | `next/image` with `priority`, container `height: 320`. Use `article.image` from data. |
| **Inline content image** | Body image | Optional `contentImage` in data; render with fixed height (e.g. 360px) and `next/image` + `fill`. |
| **Related articles** | Thumbnails | Same pattern as featured cards; data from `getRelatedArticles()`. |

### About page (`src/app/about/page.js`)

| Location | Purpose | How to add |
|----------|---------|------------|
| **Team avatars** | Team section | Use `next/image` with `width={200}` and `height={200}`. Add/edit `TEAM` in `src/data/articles.js` (each item has `image`, `name`, `role`). |

### Adding a new image elsewhere

1. **Data:** Add the URL in `src/data/articles.js` (or a new data file).
2. **Component:** Use `next/image` with either:
   - `fill` + a wrapper with `position: relative` and fixed **height** (or aspect-ratio), or  
   - Explicit `width` and `height`.
3. **CLS:** Never render an image without a reserved space (no unsized `<Image>`).
4. **Remote images:** Add the host to `next.config.mjs` → `images.remotePatterns`.

---

## 2. Where to Add Other Things

### Fonts (Lighthouse / performance)

| Where | What to do |
|-------|------------|
| **`src/app/layout.js`** | Use `next/font` (e.g. `Inter`, `Roboto`) with `display: 'swap'` and `preload: true`. Apply via `className={font.variable}` on `<html>` and use the variable in `globals.css` for `font-family`. |
| **New font** | Import from `next/font/google` or `next/font/local` and add a CSS variable in `globals.css` under `@theme` or `:root`. |

### API routes

| Where | What to add |
|-------|-------------|
| **New list endpoint** | Create `src/app/api/<name>/route.js` and export `GET` (and optionally `POST`). |
| **New detail endpoint** | Create `src/app/api/<name>/[id]/route.js`, `await params` in the handler, and return one item or 404. |

### New pages (SSR/SSG)

| Where | What to do |
|-------|------------|
| **Static page** | Add `src/app/<path>/page.js`; it is server-rendered by default. |
| **Dynamic page** | Add `src/app/<path>/[slug]/page.js`. For SSG, export `generateStaticParams()` and return an array of `{ slug }`. |
| **Metadata** | Export `metadata` or `generateMetadata({ params })` for title/description (SEO). |

### Hydration-safe patterns (no console errors)

| Do | Don’t |
|----|--------|
| Use **deterministic** date/time formatting (e.g. `formatDate()` with fixed locale/options) so server and client match. | Use `new Date().toLocaleString()` or browser-only APIs during first render. |
| Keep **same structure** on server and client (no conditional wrapper that exists only on client). | Render different markup on server vs client (e.g. “Loading…” only on client). |
| Use **`next/image`** and **`next/font`** so assets are optimized and consistent. | Rely on raw `<img>` or external font `<link>` without size/CLS control. |

---

## 3. Checklist for Lighthouse 90+

- [ ] **LCP:** One clear LCP element (usually hero image) with `priority` and fixed dimensions.
- [ ] **CLS:** Every image has a reserved space (aspect-ratio or width/height).
- [ ] **Fonts:** Loaded via `next/font` with `display: 'swap'`.
- [ ] **Images:** All from `next/image` with sensible `sizes` and lazy loading (except LCP).
- [ ] **No hydration errors:** No browser-only or non-deterministic output in initial HTML.

Run the SSR app in **production** (`npm run build && npm start`) and run Lighthouse on `http://localhost:3000` for accurate scores.
