import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppHeader from "./AppHeader";
import HomePage from "./HomePage";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
function PortfolioPage() {
const [dark, setDark] = useState(true);
const location = useLocation();
const publicBase = import.meta.env.BASE_URL;
const projects = [
  {
    title: "Canada Bank Web App",
    type: "Banking Web App",
    description:
      "A banking Application which deals with Finanace,Money Transfer,Interac.",
    tags: ["React", "Polymer", "API"],
    image: `${publicBase}images/webapp.avif`
  },
   {
    title: "Canada Bank Mobile App",
    type: "Banking Mobile Application",
    description:
      "A banking Application which deals with Finanace,Money Transfer,Interac.",
    tags: ["React-Native", "Redux", "iOS", "Android"],
    image: `${publicBase}images/banking.avif`
  },
];

const skills = [
  ["React", "Advanced", "react"],
  ["JavaScript", "Advanced", "js"],
  ["TypeScript", "Intermediate", "ts"],
  ["HTML5", "Advanced", "html"],
  ["CSS3", "Advanced", "css"],
  ["Git", "Advanced", "git"],
  ["Figma", "Intermediate", "figma"]
];
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const sectionId = location.hash.slice(1);
    if (sectionId) {
      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.hash]);
function SectionHeading({ number, title }) {
  return (
    <div className="section-heading">
      <span>{number}</span>
      <div />
      <h2>{title}</h2>
    </div>
  );
}

function TimelineItem({ date, title, company, points }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot" />
      <div className="timeline-content">
        <time>{date}</time>
        <h3>{title}</h3>
        <strong>{company}</strong>
        <ul>
          {points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
    </div>
  );
}

function SkillIcon({ type }) {
  return <span className={`skill-icon ${type}`}>{type === "react" ? "⚛" : type === "js" ? "JS" : type === "ts" ? "TS" : type === "html" ? "5" : type === "css" ? "3" : type === "git" ? "⌘" : "F"}</span>;
}
  return (
    <div className={`site ${dark ? "dark" : "light"}`}>
      <AppHeader dark={dark} onToggleTheme={() => setDark((current) => !current)} />
      <main>
        <HomePage scrollTo={scrollTo} publicBase={publicBase} />
        <About SectionHeading={SectionHeading} />
        <Skills skills={skills} SectionHeading={SectionHeading} SkillIcon={SkillIcon} />
        <Experience SectionHeading={SectionHeading} TimelineItem={TimelineItem} projects={projects} />
        <Contact />
      </main>
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
export default PortfolioPage;