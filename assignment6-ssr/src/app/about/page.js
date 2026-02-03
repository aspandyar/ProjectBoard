import { TEAM, STATS } from '@/data/articles';

export const metadata = {
  title: 'About — Roasters Blog',
  description: 'About Roasters Blog — SSR & Core Web Vitals.',
};

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p className="page-intro">
        This is the SSR version of Roasters Blog — same content and structure as the SPA app.
        Built with Next.js for Assignment 6: SSR, Hydration, and Core Web Vitals.
      </p>

      {/* Stats */}
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

      <section className="team-section">
        <h2>Our team</h2>
        <div className="team-grid">
          {TEAM.map((member) => (
            <div key={member.id} className="team-card">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
