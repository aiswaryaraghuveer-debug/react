import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  GraduationCap,
  Heart,
  Code2,
  Moon,
  Sun,
  Menu,
  X,
  ExternalLink,
  Sparkles,
  Palette,
  Smartphone,
  Globe2
} from "lucide-react";

const publicBase = import.meta.env.BASE_URL;
const profileImage = `${publicBase}images/AiswaryaProfilePhoto.png`;

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

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className={`site ${dark ? "dark" : "light"}`}>
      <header className="navbar">
        <button className="brand" onClick={() => scrollTo("home")}>
          Ash <span>♥</span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "experience", "skills", "contact"].map(
            (item) => (
              <button key={item} onClick={() => scrollTo(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            )
          )}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Moon size={15} /> : <Sun size={15} />}
            <span className="toggle-dot" />
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="handwritten hello">Hi, I'm Aiswarya <span>✦</span></div>

            <h1>
              A Frontend Developer
              <br />
              <span>who builds pretty things ♥</span>
            </h1>

            <p className="hero-description">
              I turn ideas into interactive web experiences using React,
              JavaScript and a lot of curiosity. When I'm not coding, you'll
              find me creating, learning or planning my next adventure.
            </p>

            <div className="hero-buttons">
              <button className="primary-button" onClick={() => scrollTo("experience")}>
                Experience and stuff? <ArrowUpRight size={17} />
              </button>

              <a className="outline-button" href={`${publicBase}images/Aiswarya-Raghuveer.pdf%20(2).pdf`} download>
                <Download size={16} /> Download Resume
              </a>
            </div>

            <div className="socials">
              <a href="https://github.com/aiswaryaraghuveer-debug/react" target="_blank" rel="noreferrer"><Github /></a>
              <a href="https://www.linkedin.com/in/aiswarya-raghuveer-10a827221" target="_blank" rel="noreferrer"><Linkedin /></a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer"><Instagram /></a>
              <a href="mailto:aiswaryaraghuveer@gmail.com"><Mail /></a>
            </div>
          </div>

          <div className="hero-art">
           
            <div className="tape tape-one" />
            <div className="tape tape-two" />
 <div className="paint-blob" >
            <img className="profile-photo" src={profileImage} alt="Portrait placeholder" />
</div>
            <div className="scribble laptop">⌁<br />code<br />coffee<br />progress ♥</div>
            <div className="speech-bubble">big dreams<br />+<br />consistent<br />action</div>
            <div className="doodle leaf">♧</div>
            <div className="doodle cat">⌁<br />ฅ</div>
            <div className="sparkle">✦</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading number="01" title="About Me" />

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm a frontend developer with a passion for creating beautiful,
                functional and user-friendly applications.
              </p>
              <p>
                I enjoy turning complex problems into simple, elegant
                solutions. I'm always learning, always building, and always
                excited about what's next.
              </p>

              <div className="mini-facts">
                <span><MapPin size={15} /> India</span>
                <span><GraduationCap size={15} /> B.Tech (CS)</span>
                <span><Globe2 size={15} /> Explorer</span>
              </div>
            </div>

            <div className="facts-card">
              <div className="handwritten card-title">A few things about me</div>
              <ul>
                <li><Heart size={15} /> Love agood  movie nights</li>
                <li><Sparkles size={15} /> Gym, fitness & healthy living</li>
                <li><Globe2 size={15} /> Travel...</li>
                <li><Palette size={15} /> Art, design & visual details</li>
                <li><span className="cat-emoji">🐈</span> Cats &gt; everything ♥</li>
              </ul>
            </div>

            <div className="polaroid">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=85"
                alt="Travel inspiration"
              />
              <span>Next stop: somewhere beautiful ✈</span>
            </div>
          </div>
        </section>

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

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div>
              <div className="section-number">05</div>
              <h2>Let's Connect</h2>
              <p>Always open to new opportunities, collaborations or just a good tech chat.</p>
            </div>

           
   <a className="primary-button" href="tel:+918891565685">
               Give a call <ArrowUpRight size={17} />
            </a>
            <div className="contact-details">
              <a href="mailto:aiswaryaraghuveer@gmail.com"><Mail size={15} /> aiswaryaraghuveer@gmail.com</a>
              <a href="https://www.linkedin.com/in/aiswarya-raghuveer-10a827221" target="_blank" rel="noreferrer"><Linkedin size={15} /> linkedin.com/in/aiswarya-raghuveer-10a827221</a>
              <a href="https://github.com/aiswaryaraghuveer-debug/react" target="_blank" rel="noreferrer"><Github size={15} /> github.com/aiswaryaraghuveer-debug/react</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>Ash ♥</span>
        <span>Built with React · Designed by me · 2026</span>
        <button onClick={() => scrollTo("home")} aria-label="Back to top"><ArrowUp /></button>
      </footer>
    </div>
  );
}

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

export default App;