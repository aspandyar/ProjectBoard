import Link from 'next/link';
import Image from 'next/image';
import {
  getArticleBySlug,
  formatDate,
  ARTICLES,
  getRelatedArticles,
} from '@/data/articles';

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Not Found' };
  return {
    title: `${article.title} — Roasters Blog`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return (
      <div>
        <p>Article not found.</p>
        <Link href="/articles">Back to Articles</Link>
      </div>
    );
  }
  const related = getRelatedArticles(slug, 3);
  return (
    <article>
      <Link href="/articles" className="back-link">
        ← Back to Articles
      </Link>
      {/* Hero image: priority for LCP on direct visit; fixed height for CLS */}
      <div className="article-hero" style={{ position: 'relative', height: 320 }}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <header className="article-header">
        <h1>{article.title}</h1>
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </header>
      <div className="article-content">
        <p>{article.content}</p>
        {/* Inline content image — fixed dimensions */}
        {article.contentImage && (
          <div className="article-inline-image" style={{ position: 'relative', height: 360 }}>
            <Image
              src={article.contentImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        )}
        <p>
          Server-Side Rendering ensures this content is in the initial HTML for SEO and fast First
          Contentful Paint. Images use next/image for automatic optimization and no layout shift.
        </p>
      </div>

      {/* Related articles with thumbnails */}
      {related.length > 0 && (
        <section className="related-section">
          <h2>Related Articles</h2>
          <ul className="related-grid">
            {related.map((r) => (
              <li key={r.id}>
                <Link href={`/articles/${r.slug}`} className="related-card">
                  <div className="related-card-image">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                  <span className="related-card-title">{r.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
