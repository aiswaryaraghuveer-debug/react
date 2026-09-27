import React from "react";
import { GraduationCap } from "lucide-react";
function Experience({ SectionHeading, TimelineItem, projects }) {
    return (
         <section className="section experience-section" id="experience">
          <SectionHeading number="03" title="Experience" />

          <div className="experience-grid">
            <div className="timeline">
              <TimelineItem
                date="Sep 2021 — Dec 2024"
                title="Senior Software Engineer-Infosys"
                company="Finacle / Enterprise Banking"
                points={[
                  "Building mobile and web experiences with Polymer and React.",
                  "Collaborating with cross-functional engineering teams."
                ]}
              />
              <TimelineItem
                date="Jan 2025 — Present"
                title="Technology Analyst-Infosys"
                company="Finance & Product"
                points={[
                  "Developing and maintaining mobile applications using React-Native and TypeScript.",
                  "Releasing apps to the App Store and Google Play Store.",
                  "Leading modules and supporting junior developers.",
                  "Improving system performance and user experience."
                ]}
              />
            </div>

            <div className="education">
              <GraduationCap size={24} />
              <h3>Education</h3>
              <strong>B.Tech in Computer Science</strong>
              <p>Kerala Technological University</p>
              <small>2017 — 2021</small>
            </div>

            <div className="build-note">
              <span>Build ♥</span>
              <span>Learn ✦</span>
              <span>Travel →</span>
              <span>Grow</span>
            </div>
          </div>
                 <div className="projects-grid">
            {projects.map((project) => (
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

                  {/* <div className="project-links">
                    <a href="#contact">Live Demo <ExternalLink size={13} /></a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                      GitHub <Github size={13} />
                    </a>
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        </section>
    );
}
export default Experience;