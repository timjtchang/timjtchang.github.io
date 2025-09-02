// src/App.tsx

import React from "react";
import "./styles.css";
import { Project } from "./types";

// Dummy data for your projects
const myProjects: Project[] = [
  {
    name: "Project One",
    description:
      "A brief description of your first project. Talk about its purpose and features.",
    technologies: ["React", "TypeScript", "Node.js"],
    githubUrl:
      "[https://github.com/your-username/project-one](https://github.com/your-username/project-one)",
    liveUrl: "[https://live-demo-one.com](https://live-demo-one.com)",
  },
  {
    name: "Project Two",
    description:
      "Describe your second project and the challenges you solved while building it.",
    technologies: ["Python", "Django", "PostgreSQL"],
    githubUrl:
      "[https://github.com/your-username/project-two](https://github.com/your-username/project-two)",
  },
];

const App: React.FC = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Your Name Here</h1>
        <p>Software Engineer</p>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I am a passionate software engineer specializing in web development. I
          love building scalable and efficient applications that solve
          real-world problems. I have experience with [list key technologies].
        </p>
      </section>

      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {myProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
