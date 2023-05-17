import React from "react";
import "./Skills.css";
import skills from "../../data/skills.json";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="skills-heading">Skills & Technologies</h1>
        <div className="skills-grid">
          {skills.map(skill => (
            <div className="skills-card" key={skill.id}>
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img src={skill.img} alt={skill.title} className="skill-image" />
                <h2 className="skill-title">{skill.title}</h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;