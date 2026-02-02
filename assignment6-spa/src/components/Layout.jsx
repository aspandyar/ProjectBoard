import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo">Roasters Blog</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; 2025 Roasters Blog. Assignment 6: SSR &amp; Core Web Vitals.</p>
      </footer>
    </div>
  );
}
