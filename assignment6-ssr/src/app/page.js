import Link from 'next/link';
import Image from 'next/image';
import {
  ARTICLES,
  HERO_IMAGE,
  GALLERY_IMAGES,
  STATS,
} from '@/data/articles';

export default function Home() {
  const featured = ARTICLES.slice(0, 3);
  return (
    <>
      {/* LCP candidate: hero image — use priority and fixed dimensions */}
      <section className="hero-banner">
        <div className="hero-image-wrap">
          <Image
            src={HERO_IMAGE}
            alt="Roasters Blog — SSR & Core Web Vitals"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="hero-overlay">
          <h1>Welcome to Roasters Blog</h1>
          <p className="hero-sub">
            SSR, Hydration &amp; Core Web Vitals — same content, SSR version.
          </p>
        </div>
      </section>

      {/* Stats: no images, stable layout */}
      <section className="stats-section">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured articles with thumbnails — fixed height to avoid CLS */}
      <section className="featured">
        <h2>Featured Articles</h2>
        <ul className="article-grid">
          {featured.map((a) => (
            <li key={a.id}>
              <Link href={`/articles/${a.slug}`} className="article-card">
                <div className="article-card-image">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
                <div className="article-card-body">
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/articles" className="btn">
          View all articles
        </Link>
      </section>

      {/* Gallery: 6 images in grid — always set dimensions to avoid CLS */}
      <section className="gallery-section">
        <h2>From the blog</h2>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img) => (
            <div key={img.id} className="gallery-item">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={300}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="gallery-img"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
