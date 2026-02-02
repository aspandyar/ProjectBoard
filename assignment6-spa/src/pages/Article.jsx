import { useParams, Link } from 'react-router-dom';
import {
  getArticleBySlug,
  formatDate,
  getRelatedArticles,
} from '../data/articles';

export default function Article() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  if (!article) {
    return (
      <div>
        <p>Article not found.</p>
        <Link to="/articles">Back to Articles</Link>
      </div>
    );
  }
  const related = getRelatedArticles(slug, 3);
  return (
    <article>
      <Link to="/articles" className="back-link">← Back to Articles</Link>
      <div className="article-hero">
        <img
          src={article.image}
          alt={article.title}
          width={800}
          height={400}
          loading="eager"
          decoding="async"
        />
      </div>
      <header className="article-header">
        <h1>{article.title}</h1>
        <time dateTime={article.date}>{formatDate(article.date)}</time>
      </header>
      <div className="article-content">
        <p>{article.content}</p>
        {article.contentImage && (
          <div className="article-inline-image">
            <img
              src={article.contentImage}
              alt=""
              width={720}
              height={360}
              loading="lazy"
            />
          </div>
        )}
        <p>
          Server-Side Rendering ensures this content is in the initial HTML for SEO and fast First
          Contentful Paint. Images use next/image for automatic optimization and no layout shift.
        </p>
      </div>

      {related.length > 0 && (
        <section className="related-section">
          <h2>Related Articles</h2>
          <ul className="related-grid">
            {related.map((r) => (
              <li key={r.id}>
                <Link to={`/articles/${r.slug}`} className="related-card">
                  <div className="related-card-image">
                    <img src={r.image} alt={r.title} width={400} height={200} loading="lazy" />
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
