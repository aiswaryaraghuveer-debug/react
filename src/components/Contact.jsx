import React from "react";
import { ArrowUpRight, Mail, Linkedin, Github } from "lucide-react";
function Contact() {
    return(
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
    );
}
export default Contact;