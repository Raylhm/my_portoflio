import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = ({ lang, setLang, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const t = content[lang].nav;

    const toggleLang = () => {
        setLang(prev => prev === 'en' ? 'fr' : 'en');
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">YG.</a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#about" onClick={() => setIsOpen(false)}>{t.about}</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>{t.skills}</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>{t.projects}</a>
                    <a href="#education" onClick={() => setIsOpen(false)}>{t.education}</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>{t.contact}</a>
                    <button className="lang-toggle" onClick={toggleLang}>
                        <Globe size={18} />
                        <span>{lang.toUpperCase()}</span>
                    </button>
                </div>

                <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          display: flex;
          align-items: center;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--accent);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          font-weight: 500;
          color: var(--text-secondary);
        }

        .nav-links a:hover {
          color: var(--accent);
        }

        .lang-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          color: var(--text-primary);
          font-weight: 600;
          padding: 0.5rem;
          border-radius: 0.25rem;
        }

        .lang-toggle:hover {
          background: var(--bg-secondary);
          color: var(--accent);
        }

        .menu-btn {
          display: none;
          background: transparent;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .menu-btn {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: var(--nav-height);
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 2rem;
            border-bottom: 1px solid var(--border);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
          }

          .nav-links.active {
            transform: translateY(0);
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
