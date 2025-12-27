import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = ({ lang, content }) => {
  const t = content[lang].contact;

  return (
    <section id="contact" className="section-alt">
      <div className="container contact-container">
        <h2 className="section-title">{t.title}</h2>

        <div className="contact-card animate-fade-in">
          <p className="contact-intro">{t.text}</p>

          <div className="contact-methods">
            <a href={`mailto:${t.email}`} className="contact-item">
              <div className="icon-box"><Mail size={20} /></div>
              <span>{t.email}</span>
            </a>

            <a href={`tel:${t.phone}`} className="contact-item">
              <div className="icon-box"><Phone size={20} /></div>
              <span>{t.phone}</span>
            </a>

            <div className="contact-item">
              <div className="icon-box"><MapPin size={20} /></div>
              <span>{t.location}</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/yassine-gharbi-" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Raylhm" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div >

      <style>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-card {
          background: white;
          padding: 3rem;
          border-radius: 1.5rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 600px;
          text-align: center;
          position: relative;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: linear-gradient(145deg, #ffffff, #f0f9ff);
        }

        .contact-intro {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
          color: var(--text-primary);
          transition: all 0.2s ease;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        .contact-item:hover {
          color: var(--accent);
          background: rgba(37, 99, 235, 0.05);
        }

        .icon-box {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          font-size: 1.25rem;
          transition: transform 0.2s ease;
        }

        .contact-item:hover .icon-box {
          transform: scale(1.1);
          color: var(--accent-hover);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
        }

        .social-btn {
          width: 50px;
          height: 50px;
          background: var(--bg-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          background: var(--accent);
          color: white;
          transform: translateY(-3px);
        }
      `}</style>
    </section >
  );
};

export default Contact;
