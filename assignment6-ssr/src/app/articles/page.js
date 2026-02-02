import Link from 'next/link';
import Image from 'next/image';
import { ARTICLES, formatDate } from '@/data/articles';

export default function ArticlesPage() {
  return (
    <>
      <h1>Articles</h1>
      <p className="page-intro">
        All posts — same content as the SPA app, rendered on the server for SEO and performance.
      </p>
      <ul className="article-grid list-page">
        {ARTICLES.map((a) => (
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
                <time dateTime={a.date}>{formatDate(a.date)}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
