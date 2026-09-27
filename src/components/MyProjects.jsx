import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
function MyProjects({ myprojects,SectionHeading }) {
  return (
     <section className="section experience-section" id="my projects">
          <SectionHeading number="03" title="My Projects" />

              <div className="projects-grid">
            {myprojects.map((project) => {
              const isExternalPortfolioUrl = /^https?:\/\//i.test(project.inportfolio ?? "");
              const githubUrl = isExternalPortfolioUrl ? project.inportfolio : project.href;

              return (
                <article className="project-card" key={project.title}>
                  <div className="project-image-wrap">
                    <img src={project.image} alt={project.title} />
                    <span className="project-type">{project.type}</span>
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tags">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>

                    <div className="project-links">
                      {project.inportfolio && !isExternalPortfolioUrl ? (
                        <Link to={project.inportfolio}>
                          View in portfolio <ExternalLink size={13} />
                        </Link>
                      ) : (
                        <a href="#contact">Live Demo <ExternalLink size={13} /></a>
                      )}
                      {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noreferrer">
                          GitHub <Github size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
            </div>
          </section>
  );
}
export default MyProjects;