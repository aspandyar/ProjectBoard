import Image from 'next/image';
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

      {/* Team: fixed-size avatars to avoid CLS */}
      <section className="team-section">
        <h2>Our team</h2>
        <div className="team-grid">
          {TEAM.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-avatar">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  sizes="200px"
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
