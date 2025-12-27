import React from 'react';
import { Github } from 'lucide-react';
import projectSaga from '../assets/project-saga-logo.png';
import projectNike from '../assets/project-nike-logo.png';

const projectImages = {
  saga: projectSaga,
  nike: projectNike
};

const Projects = ({ lang, content }) => {
  const t = content[lang].projects;

  return (
    <section id="projects" className="section-alt">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>

        <div className="projects-grid">
          {t.items.map((project, index) => (
            <div key={index} className="project-card animate-fade-in">
              <div className="project-image-container">
                <img
                  src={projectImages[project.id]}
                  alt={project.title}
                  className={`project-img ${project.id === 'nike' ? 'cover' : 'contain'}`}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-btn">
                    <Github size={18} /> {t.viewCode}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
        }

        .project-card {
          background: var(--gradient-card);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), var(--accent-glow);
          border-color: rgba(37, 99, 235, 0.3);
        }

        .project-image-container {
          width: 100%;
          height: 250px;
          overflow: hidden;
          background: white;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .project-img.contain {
          object-fit: contain;
        }

        .project-img.cover {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
        }

        .project-card:hover .project-img {
          transform: scale(1.05);
        }

        .project-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .project-content h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .project-content p {
          color: var(--text-secondary);
          line-height: 1.6;
          white-space: pre-wrap;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          border-radius: 1rem;
          font-weight: 500;
        }

        .link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--accent);
        }

        .link-btn:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default Projects;
