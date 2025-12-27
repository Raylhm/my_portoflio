import React from 'react';

const Footer = ({ lang, content }) => {
    const t = content[lang].footer;
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {year} Yassine Gharbi. {t.rights}</p>
                <p className="tech-stack">{t.built}</p>
            </div>

            <style>{`
        .footer {
          background: var(--bg-secondary);
          padding: 3rem 0;
          text-align: center;
          color: var(--text-secondary);
          border-top: 1px solid var(--border);
        }

        .tech-stack {
          font-size: 0.875rem;
          margin-top: 0.5rem;
          opacity: 0.8;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
