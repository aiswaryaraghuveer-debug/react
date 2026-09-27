import React from "react";
import { Code2, Github, X } from "lucide-react";
function Skills({ SectionHeading, skills,SkillIcon }) {
  return (
     <section className="section skills-section" id="skills">
          <SectionHeading number="02" title="My Skills" />

          <div className="skills-layout">
            <div className="skill-list">
              {skills.map(([name, level, type]) => (
                <div className="skill" key={name}>
                  <SkillIcon type={type} />
                  <strong>{name}</strong>
                  <small>{level}</small>
                </div>
              ))}
            </div>

            <div className="tools-card">
              <h3>Tools & Others</h3>
              <div className="tool-grid">
                <span><Code2 /> VS Code</span>
                <span><Github /> GitHub</span>
                  <span><X /> XCode</span>
                <span>◉ Transporter</span>
                <span>🔥 Firebase</span>
                <span>⬢ Node.js</span>
              </div>
            </div>
          </div>
        </section>
  );
}
export default Skills;