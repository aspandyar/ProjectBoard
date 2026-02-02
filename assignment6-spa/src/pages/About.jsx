import { TEAM, STATS } from '../data/articles';

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p className="page-intro">
        This is the SPA version of Roasters Blog — same content and structure as the SSR app.
        Built with Vite + React for Assignment 6: SSR, Hydration, and Core Web Vitals.
      </p>

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
              <div className="team-avatar">
                <img
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  loading="lazy"
                />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
