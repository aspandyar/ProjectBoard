import { Link } from 'react-router-dom';
import { ARTICLES, formatDate } from '../data/articles';

export default function Articles() {
  return (
    <>
      <h1>Articles</h1>
      <p className="page-intro">
        All posts — same content as the SSR app, client-rendered in the SPA.
      </p>
      <ul className="article-grid list-page">
        {ARTICLES.map((a) => (
          <li key={a.id}>
            <Link to={`/articles/${a.slug}`} className="article-card">
              <div className="article-card-image">
                <img src={a.image} alt={a.title} width={800} height={400} loading="lazy" />
              </div>
              <div className="article-card-body">
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <time dateTime={a.date}>{formatDate(a.date)}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
