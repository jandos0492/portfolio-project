import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text-container">
          <h1 className="about-title">
            Hi, I'm Zhandos.
            <br />I love to build amazing apps.
          </h1>
          <p className="about-paragraph">
            I'm an enthusiastic software engineer, having honed my skills at 42 Silicon Valley, a renowned coding school. With a strong foundation in JavaScript, Express, Node, HTML, CSS, React, and Redux, I have the technical versatility and experience to tackle complex problems and create exceptional digital solutions. I'm always excited to embrace new challenges and further broaden my expertise.
          </p>
          <div className="about-buttons">
            <a href="#contact" className="about-button work-with-me">
              Contact Me
            </a>
            <a href="#projects" className="about-button see-past-work">
              See My Projects
            </a>
          </div>
        </div>
        <div className="about-image-container">
          <img className="about-image" alt="hero" src="./coding.svg" />
        </div>
      </div>
    </section>
  );
}
