import { Link } from 'react-router-dom';
import { ARTICLES, HERO_IMAGE, STATS } from '../data/articles';

export default function Home() {
  const featured = ARTICLES.slice(0, 3);
  return (
    <>
      <section className="hero-banner">
        <div className="hero-image-wrap">
          <img
            src={HERO_IMAGE}
            alt="Roasters Blog — SSR & Core Web Vitals"
            width={1200}
            height={600}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="hero-overlay">
          <h1>Welcome to Roasters Blog</h1>
          <p className="hero-sub">
            SSR, Hydration &amp; Core Web Vitals — same content, SPA version.
          </p>
        </div>
      </section>

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

      <section className="featured">
        <h2>Featured Articles</h2>
        <ul className="article-grid">
          {featured.map((a) => (
            <li key={a.id}>
              <Link to={`/articles/${a.slug}`} className="article-card">
                <div className="article-card-image">
                  <img src={a.image} alt={a.title} width={800} height={400} loading="lazy" />
                </div>
                <div className="article-card-body">
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/articles" className="btn">View all articles</Link>
      </section>
    </>
  );
}
