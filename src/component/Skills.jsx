import React, { useEffect, useState } from "react";
import {
  Code2,
  Database,
  Wrench,
  ServerCog,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import firebaseImg from "../assets/skills/firebase.png";
import podmanImg from "../assets/skills/podman.png";
import "./Skills.css";

const skillIconMap = {
  "C++": "cpp",
  C: "c",
  Go: "go",
  Python: "python",
  JavaScript: "javascript",
  TypeScript: "typescript",
  Nodejs: "nodejs",
  mySQL: "mysql",
  MongoDB: "mongodb",
  React: "react",
  TailwindCSS: "tailwindcss",
  Bootstrap: "bootstrap",
  Docker: "docker",
  Kubernetes: "kubernetes",
  GitHub: "github",
  Vercel: "vercel",
  Postman: "postman",
};

const getSkillIconUrl = (skill) =>
  `https://skillicons.dev/icons?i=${skillIconMap[skill] || skill.toLowerCase()}`;

const skillsData = {
  frontend: [
    { id: 1, title: "React", proficiency: 90 },
    { id: 2, title: "JavaScript", proficiency: 85 },
    { id: 3, title: "TypeScript", proficiency: 85 },
    { id: 4, title: "TailwindCSS", proficiency: 80 },
    { id: 5, title: "Bootstrap", proficiency: 85 },
  ],
  backend: [
    { id: 6, title: "Nodejs", proficiency: 80 },
    { id: 7, title: "Express", proficiency: 75 },
    { id: 8, title: "MongoDB", proficiency: 80 },
    { id: 9, title: "mySQL", proficiency: 70 },
  ],
  tools: [
    { id: 10, title: "GitHub", proficiency: 85 },
    { id: 11, title: "Vercel", proficiency: 80 },
    { id: 12, title: "Postman", proficiency: 85 },
    { id: 13, title: "Firebase", imageSrc: firebaseImg, proficiency: 75 },
  ],
  devops: [
    { id: 14, title: "Docker", proficiency: 70 },
    { id: 15, title: "Kubernetes", proficiency: 60 },
    { id: 16, title: "Podman", imageSrc: podmanImg, proficiency: 60 },
  ],
  programmingLanguages: [
    { id: 17, title: "Python", proficiency: 85 },
    { id: 18, title: "JavaScript", proficiency: 85 },
    { id: 19, title: "C", proficiency: 70 },
    { id: 20, title: "C++", proficiency: 90 },
    { id: 21, title: "Go", proficiency: 95 },
  ],
};

const categories = [
  { key: "frontend", label: "Frontend", icon: <Code2 size={18} /> },
  { key: "backend", label: "Backend", icon: <Database size={18} /> },
  { key: "tools", label: "Tools", icon: <Wrench size={18} /> },
  { key: "devops", label: "DevOps", icon: <ServerCog size={18} /> },
  {
    key: "programmingLanguages",
    label: "Programming Languages",
    icon: <Code2 size={18} />,
  },
];

export default function Skills() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const isDark = document.body.classList.contains("dark");
    setIsDarkMode(isDark);
    const observer = new MutationObserver(() =>
      setIsDarkMode(document.body.classList.contains("dark"))
    );
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const toggle = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const visibleCategories =
    activeTab === "all"
      ? categories
      : categories.filter((cat) => cat.key === activeTab);

  return (
    <section id="skills" className={`skills-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <div className="skills-header">
          <h2>SKILLS</h2>
          <div className="underline"></div>
          <p style={{color:"#4B5563", fontSize:"1.5rem", fontWeight: "500"}}>My technical skills and tools that I use to bring ideas to life.</p>
        </div>

        <div className="skills-tabs">
          {[{ key: "all", label: "All Skills" }, ...categories].map(
            ({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`tab-btn ${activeTab === key ? "active" : ""}`}
              >
                {icon} {label}
              </button>
            )
          )}
        </div>

        <div className="skills-grid">
          {visibleCategories.map(({ key, label, icon }) => (
            <div key={key} className="skills-card">
              <button className="skills-card-header" onClick={() => toggle(key)}>
                <span>{icon} {label}</span>
                {expanded[key] ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expanded[key] && (
                <div className="skills-list">
                  {skillsData[key].map((skill) => (
                    <div key={skill.id} className="skill-item">
                      <img
                        src={skill.imageSrc || getSkillIconUrl(skill.title)}
                        alt={skill.title}
                      />
                      <div className="skill-info">
                        <p>{skill.title}</p>
                        <div className="progress-bar">
                          <div
                            className="progress"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
