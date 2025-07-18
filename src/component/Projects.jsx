import React, { useEffect, useState } from "react";
import { Code, Eye } from "lucide-react";
import "./Projects.css";

const project = [
  {
    id: 1,
    title: "JobPortal Website",
    imageSrc: "/images/jobportal.png",
    description: "Website made with frontend and backend.",
    source: "https://github.com/Ajeet735/job_portal",
    demo: "#",
    tags: ["React", "Node.js", "MongoDB", ],
  },
  {
    id: 2,
    title: "EasyCart website",
    imageSrc: "/images/EasyCart.png",
    description: "Full frontend and backend project.",
    source: "https://github.com/Ajeet735/EasyCart",
    demo: "#",
    tags: ["React", "Node.js", "MongoDB","Go"],
  },
  {
    id: 3,
    title: "CodeEditor",
    imageSrc: "/images/codeEditor.png",
    description: "Complete React JS project.",
    source: "https://github.com/Ajeet735/code-editor",
    demo: "#",
    tags: ["Typescript", "API", "CSS"],
  }
]
const Projects = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains("dark");
    setIsDarkMode(isDark);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.body.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={`projects ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <div className="projects-header">
          <h2>PROJECTS</h2>
          <div className="underline"></div>
        </div>

        <div className="projects-grid">
          {project.map((data) => (
            <div key={data.id} className="project-card">
              <div className="project-image">
                <img src={data.imageSrc} alt={data.title} />
                <div className="tags">
                  {data.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-info">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <div className="buttons">
                  <a href={data.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">
                    <Eye size={16} />
                    Live Demo
                  </a>
                  <a href={data.source} target="_blank" rel="noopener noreferrer" className="code-btn">
                    <Code size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
