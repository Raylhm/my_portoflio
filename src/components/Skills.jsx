import React from 'react';
import { Code, Server, Wrench } from 'lucide-react';

const Skills = ({ lang, content }) => {
  const t = content[lang].skills;
  const categories = [
    { title: t.languages, items: t.data.languages, icon: Code },
    { title: t.frameworks, items: t.data.frameworks, icon: Server },
    { title: t.tools, items: t.data.tools, icon: Wrench },
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        <div className="skills-grid">
          {categories.map((cat, index) => (
            <div key={index} className="skill-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-header">
                <cat.icon className="skill-icon" size={24} />
                <h3>{cat.title}</h3>
              </div>
              <div className="tags">
                {cat.items.map((item, idx) => (
                  <span key={idx} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: var(--gradient-card);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--accent), #8b5cf6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          border-color: transparent;
        }

        .skill-card:hover::before {
          opacity: 1;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .skill-icon {
          color: var(--accent);
          padding: 0.5rem;
          background: rgba(37, 99, 235, 0.1);
          border-radius: 0.5rem;
          box-sizing: content-box;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tag {
          background: var(--bg-secondary);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .skill-card:hover .tag {
          background: #eff6ff; /* light blue hint */
          color: var(--accent);
        }
      `}</style>
    </section >
  );
};

export default Skills;
