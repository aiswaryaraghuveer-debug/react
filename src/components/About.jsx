  import React from "react";
  import { MapPin, GraduationCap, Globe2, Heart, Sparkles, Palette } from "lucide-react";
 function About({ SectionHeading }) {
    return (
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
    );
   }
   export default About;