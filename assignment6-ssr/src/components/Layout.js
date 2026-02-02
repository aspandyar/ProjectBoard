import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <Link href="/" className="logo">
          Roasters Blog
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/about">About</Link>
        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <p>&copy; 2025 Roasters Blog. Assignment 6: SSR &amp; Core Web Vitals.</p>
      </footer>
    </div>
  );
}
