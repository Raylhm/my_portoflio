import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = ({ lang, content }) => {
    const t = content[lang].education;

    return (
        <section id="education">
            <div className="container">
                <h2 className="section-title">{t.title}</h2>

                <div className="edu-card animate-fade-in">
                    <div className="edu-icon">
                        <GraduationCap size={32} />
                    </div>
                    <div className="edu-content">
                        <h3>{t.degree}</h3>
                        <h4 className="university">{t.university}</h4>
                        <div className="edu-meta">
                            <span className="year"><Calendar size={16} /> {t.year}</span>
                        </div>
                        <p className="coursework">{t.coursework}</p>
                    </div>
                </div>
            </div>

            <style>{`
        .edu-card {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          max-width: 800px;
          margin: 0 auto;
        }

        .edu-icon {
          background: var(--bg-secondary);
          padding: 1rem;
          border-radius: 50%;
          color: var(--accent);
          flex-shrink: 0;
        }

        .edu-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .edu-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .university {
          color: var(--accent);
          font-weight: 500;
        }

        .edu-meta {
          display: flex;
          gap: 1rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin: 0.5rem 0;
        }

        .year {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .coursework {
          margin-top: 1rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .edu-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .edu-meta {
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
};

export default Education;
