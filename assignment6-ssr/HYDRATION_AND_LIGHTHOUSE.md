# How to Use Hydration and Lighthouse in This Project

## 1. Images by path

Images are loaded from **paths** (files in `public/`), not from the internet.

| App  | Where images live           | Path in code        |
|------|-----------------------------|---------------------|
| SPA  | `assignment6-spa/public/`   | `/image.png`, etc.  |
| SSR  | `assignment6-ssr/public/`  | `/image.png`, etc.  |

In **`src/data/articles.js`** (both apps):

```js
export const IMAGE_1 = '/image.png';           // hero
export const IMAGE_2 = '/image copy.png';      // articles / cards
export const IMAGE_3 = '/image copy 2.png';
export const IMAGE_4 = '/image copy 3.png';
```

- **SPA:** Files in `assignment6-spa/public/` are served at the root, so `/image.png` works.
- **SSR:** Copy the same 4 files into `assignment6-ssr/public/` so `/image.png` etc. work. (They were copied once; if you add new images, copy them to both `public/` folders.)

To add or change an image: put the file in `public/` and use its filename in the path, e.g. `'/my-photo.jpg'`.

---

## 2. Hydration — how it’s used here

**What hydration is:** The SSR app sends HTML from the server. When the JS loads, React “hydrates” that HTML: it attaches event listeners and state without re-rendering from scratch. **Hydration mismatch** = server HTML and client render don’t match → React warns and may fix the DOM, causing flicker or errors.

### How this project avoids hydration issues

1. **Same output on server and client**
   - No `window` / `document` or other browser-only APIs during the first render.
   - Dates use a **deterministic** formatter so server and client print the same string.

2. **Where we do it**
   - **`src/data/articles.js`** — `formatDate(dateStr)` uses fixed options:
     ```js
     return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
     ```
   - **`src/app/articles/[slug]/page.js`** — we use `<time dateTime={article.date}>{formatDate(article.date)}</time>`. No `new Date().toLocaleString()` or “now” on first render.
   - **Layout / nav** — same structure on server and client; no “if (typeof window !== 'undefined')” that changes the DOM.

3. **How to check for hydration errors**
   - Run the SSR app: `cd assignment6-ssr && npm run dev`, open http://localhost:3000.
   - Open DevTools → **Console**.
   - Navigate: Home → Articles → an article → About.
   - You should **not** see:
     - “Text content does not match server-rendered HTML”
     - “Hydration failed because the initial UI does not match”
     - “There was an error while hydrating…”
   - If you see those, something is rendering differently on server vs client (e.g. date, random ID, or browser-only branch).

4. **If you add new features**
   - **Dates / times:** Use a single `formatDate()` (or similar) with fixed locale/options. Don’t use “live” clocks on first render without `suppressHydrationWarning` and a client-only wrapper.
   - **Random / UUID:** Generate on server and pass as prop, or render that part only on the client (e.g. after `useEffect` + state) so server and client don’t differ.
   - **Browser APIs:** Use them only in `useEffect` or in client components that don’t change the initial server HTML.

---

## 3. Lighthouse — how to use it here

Lighthouse measures performance, accessibility, SEO, etc. For **Performance score > 90** and good **LCP/CLS**, use the **production** build.

### Step 1: Production build (SSR app)

```bash
cd assignment6-ssr
npm run build
npm start
```

Open http://localhost:3000 (production server).

### Step 2: Run Lighthouse

1. Open Chrome → http://localhost:3000.
2. DevTools (F12) → **Lighthouse** tab.
3. Select **Performance** (and optionally Accessibility, Best Practices, SEO).
4. Device: **Desktop** or **Mobile**.
5. Click **Analyze page load**.

### Step 3: What this project does for a high score

| Goal        | What we do in this app |
|------------|-------------------------|
| **LCP**    | Hero image is the main LCP element. We use `next/image` with `priority` and a fixed-height container so the browser can load it early and not shift layout. |
| **CLS**    | Every image has a fixed size (wrapper with `height` or `aspect-ratio`, or `width`/`height` on `<Image>`). No images without dimensions. |
| **Fonts**  | `next/font` (Inter) in `src/app/layout.js` with `display: 'swap'` so text isn’t invisible while fonts load. |
| **Images** | All images use `next/image` with `sizes` and `loading="lazy"` (except the hero, which uses `priority`). |

### Step 4: Where to look in the report

- **Performance** → Overall score; aim for **> 90**.
- **LCP** → Should be green; often the hero image.
- **CLS** → Should be green (no layout shift from images).
- **Diagnostics** → “Avoid large layout shifts” should not point at our images if we keep fixed dimensions.

### Quick checklist

- [ ] Run `npm run build && npm start` in `assignment6-ssr`.
- [ ] Open http://localhost:3000 and run Lighthouse (Performance).
- [ ] Check Console for hydration errors while navigating.
- [ ] All images in `public/` and referenced by path (e.g. `/image.png`) in `src/data/articles.js`.

---

## Summary

| Topic     | Where it’s used / how to check |
|----------|---------------------------------|
| **Images** | Paths in `src/data/articles.js`; files in `public/` for both SPA and SSR. |
| **Hydration** | No browser-only or non-deterministic output on first render; verify in DevTools Console (no hydration errors). |
| **Lighthouse** | Run on production build (`npm run build && npm start`) at http://localhost:3000; use Performance report and LCP/CLS. |
