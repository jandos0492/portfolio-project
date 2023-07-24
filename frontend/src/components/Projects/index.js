import React from "react";
import projects from "../../data/projects.json";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h1 className="projects-heading">Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onMouseOver={(event) => (event.target.src = project.gif)}
                  onMouseOut={(event) => (event.target.src = project.image)}
                />
                <h2 className="project-title">{project.title}</h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
