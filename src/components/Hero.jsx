import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import heroImage from '../assets/hero-3d.png';

const Hero = ({ lang, content }) => {
  const t = content[lang].hero;

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="greeting">{t.greeting}</span>
          <h1 className="name">{t.name}</h1>
          <h2 className="title">{t.title}</h2>
          <p className="subtitle">{t.subtitle}</p>

          <div className="cta-group">
            <a href="#projects" className="btn btn-primary">
              {t.cta} <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#contact" className="btn btn-outline">
              {t.contact} <Mail size={18} style={{ marginLeft: '0.5rem' }} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src={heroImage} alt="Development Workspace" className="hero-img" />
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: var(--nav-height);
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          z-index: 2;
        }

        .greeting {
          font-size: 1.25rem;
          color: var(--accent);
          font-weight: 600;
        }

        .name {
          font-size: 4.5rem;
          line-height: 1.1;
          color: transparent;
          background: linear-gradient(135deg, var(--text-primary) 30%, var(--accent));
          -webkit-background-clip: text;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .title {
          font-size: 2rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 500px;
          line-height: 1.6;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }

        .hero-img {
          width: 100%;
          max-width: 550px;
          height: auto;
          animation: float 6s ease-in-out infinite;
          border-radius: 30px;
          background-color: white; /* Ensure white background if transparent */
          filter: drop-shadow(0 20px 40px rgba(37, 99, 235, 0.1)) brightness(1.05) contrast(1.05);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          
          .hero-content {
            align-items: center;
          }

          .name {
            font-size: 3rem;
          }

          .hero-visual {
            order: -1;
            margin-bottom: 2rem;
          }
          
          .hero-img {
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
