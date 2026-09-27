import React from "react";
import { ArrowUpRight, Download, Github, Instagram, Linkedin, Mail } from "lucide-react";

function HomePage({scrollTo, publicBase}) {
    const profileImage = `${publicBase}images/AiswaryaProfilePhoto.png`;
  return (
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
  );
}
export default HomePage;