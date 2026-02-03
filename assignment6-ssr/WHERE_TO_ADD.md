# Where to Add Images and Other Enhancements

Only **3–4 images**, loaded **by path** from `public/`. All paths are in one place in `src/data/articles.js`.

---

## 1. Where to Add Images (3–4 only, by path)

**All image paths are at the top of `src/data/articles.js`.** Files live in `public/` and are served at `/filename`.

```js
export const IMAGE_1 = '/image.png';           // hero
export const IMAGE_2 = '/image copy.png';      // articles / cards
export const IMAGE_3 = '/image copy 2.png';
export const IMAGE_4 = '/image copy 3.png';
```

- **SPA:** Put files in `assignment6-spa/public/`.
- **SSR:** Put the same files in `assignment6-ssr/public/` (or copy from SPA).

To add or change an image: put the file in `public/` and set the path in `IMAGE_1`–`IMAGE_4` (e.g. `'/my-photo.jpg'`).

**Rule:** Always give images a fixed size (wrapper height/aspect-ratio or width/height) to avoid CLS.

---

**Hydration and Lighthouse:** See **`HYDRATION_AND_LIGHTHOUSE.md`** for how to use hydration and run Lighthouse in this project.

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
