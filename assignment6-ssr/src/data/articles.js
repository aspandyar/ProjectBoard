// Shared content - same as SPA; also used by API routes
// Use fixed image dimensions in UI to avoid CLS (e.g. width/height or aspect-ratio)

export const HERO_IMAGE = 'https://picsum.photos/1200/600?random=hero';
export const GALLERY_IMAGES = [
  { id: 'g1', src: 'https://picsum.photos/400/300?random=g1', alt: 'Gallery 1' },
  { id: 'g2', src: 'https://picsum.photos/400/300?random=g2', alt: 'Gallery 2' },
  { id: 'g3', src: 'https://picsum.photos/400/300?random=g3', alt: 'Gallery 3' },
  { id: 'g4', src: 'https://picsum.photos/400/300?random=g4', alt: 'Gallery 4' },
  { id: 'g5', src: 'https://picsum.photos/400/300?random=g5', alt: 'Gallery 5' },
  { id: 'g6', src: 'https://picsum.photos/400/300?random=g6', alt: 'Gallery 6' },
];

export const TEAM = [
  { id: 't1', name: 'Alex Chen', role: 'Editor', image: 'https://picsum.photos/200/200?random=t1' },
  { id: 't2', name: 'Sam Rivera', role: 'Design', image: 'https://picsum.photos/200/200?random=t2' },
  { id: 't3', name: 'Jordan Lee', role: 'DevOps', image: 'https://picsum.photos/200/200?random=t3' },
  { id: 't4', name: 'Casey Morgan', role: 'Content', image: 'https://picsum.photos/200/200?random=t4' },
];

export const STATS = [
  { label: 'Articles', value: '120+' },
  { label: 'Readers', value: '50K+' },
  { label: 'Categories', value: '12' },
];

export const ARTICLES = [
  {
    id: '1',
    slug: 'getting-started-with-ssr',
    title: 'Getting Started with Server-Side Rendering',
    excerpt: 'Learn how SSR improves SEO and Core Web Vitals for your React applications.',
    content: 'Server-Side Rendering (SSR) sends fully rendered HTML from the server, improving First Contentful Paint and SEO. This article covers setup with Next.js and hydration best practices.',
    contentImage: 'https://picsum.photos/720/360?random=c1',
    image: 'https://picsum.photos/800/400?random=1',
    date: '2025-02-01',
  },
  {
    id: '2',
    slug: 'optimizing-core-web-vitals',
    title: 'Optimizing Core Web Vitals: LCP and CLS',
    excerpt: 'Practical tips to achieve Lighthouse scores above 90.',
    content: 'Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS) are key metrics. Use next/image for images, reserve space for media, and optimize fonts to avoid layout shifts.',
    contentImage: 'https://picsum.photos/720/360?random=c2',
    image: 'https://picsum.photos/800/400?random=2',
    date: '2025-01-28',
  },
  {
    id: '3',
    slug: 'hydration-mismatch-solutions',
    title: 'Solving Hydration Mismatch in React',
    excerpt: 'Avoid client/server DOM mismatches for smooth SPA to SSR transition.',
    content: 'Hydration mismatches occur when server HTML does not match client render. Use suppressHydrationWarning sparingly, avoid browser-only APIs during initial render, and ensure date/time formatting is consistent.',
    contentImage: 'https://picsum.photos/720/360?random=c3',
    image: 'https://picsum.photos/800/400?random=3',
    date: '2025-01-25',
  },
  {
    id: '4',
    slug: 'image-optimization-nextjs',
    title: 'Image Optimization with next/image',
    excerpt: 'Lazy loading, responsive sizes, and blur placeholders for better LCP.',
    content: 'Next.js Image component automatically optimizes formats, sizes, and lazy-loads. Always set width/height or fill with a sized container to prevent CLS.',
    contentImage: 'https://picsum.photos/720/360?random=c4',
    image: 'https://picsum.photos/800/400?random=4',
    date: '2025-01-20',
  },
  {
    id: '5',
    slug: 'font-loading-strategies',
    title: 'Font Loading Strategies for Performance',
    excerpt: 'next/font, display: swap, and preload for minimal FOIT.',
    content: 'Use next/font to self-host or proxy Google Fonts. Preload critical fonts and use font-display: swap to avoid invisible text.',
    contentImage: 'https://picsum.photos/720/360?random=c5',
    image: 'https://picsum.photos/800/400?random=5',
    date: '2025-01-15',
  },
  {
    id: '6',
    slug: 'static-generation-vs-ssr',
    title: 'Static Generation vs Server-Side Rendering',
    excerpt: 'When to use SSG, ISR, and SSR in Next.js.',
    content: 'SSG at build time for static content; SSR for personalized or dynamic data. ISR for content that updates periodically.',
    contentImage: 'https://picsum.photos/720/360?random=c6',
    image: 'https://picsum.photos/800/400?random=6',
    date: '2025-01-10',
  },
];

export function getArticleBySlug(slug) {
  return ARTICLES.find((a) => a.slug === slug) ?? null;
}

export function getRelatedArticles(currentSlug, limit = 3) {
  return ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, limit);
}

export function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
