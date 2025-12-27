import React from 'react';
import { User } from 'lucide-react';

const About = ({ lang, content }) => {
    const t = content[lang].about;

    return (
        <section id="about" className="section-alt">
            <div className="container">
                <h2 className="section-title">{t.title}</h2>

                <div className="about-card animate-fade-in">
                    <div className="icon-wrapper">
                        <User size={48} className="icon" />
                    </div>
                    <p className="about-text">{t.description}</p>
                </div>
            </div>

            <style>{`
        .section-alt {
          background-color: var(--bg-secondary);
        }

        .about-card {
          background: white;
          padding: 3rem;
          border-radius: 1rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          background: var(--bg-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
        }

        .about-text {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-secondary);
        }
      `}</style>
        </section>
    );
};

export default About;
