import React, { useEffect, useState } from "react";
import {
  Code2,
  Database,
  Wrench,
  ServerCog,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import "./Skills.css";

// Import local icons
import neonIcon from "../assets/skills/neon.png";
import clerkIcon from "../assets/skills/clerk.svg";
import n8nIcon from "../assets/skills/n8n.svg";

// Map skill titles to either skillicons.dev identifiers or local asset paths
const skillIconMap = {
  "C++": "cpp",
  C: "c",
  Go: "go",
  Python: "python",
  JavaScript: "javascript",
  TypeScript: "typescript",
  Nodejs: "nodejs",
  MySQL: "mysql",
  MongoDB: "mongodb",
  React: "react",
  TailwindCSS: "tailwindcss",
  Bootstrap: "bootstrap",
  Docker: "docker",
  Kubernetes: "kubernetes",
  GitHub: "github",
  Vercel: "vercel",
  Postman: "postman",
  Express: "express",
  PostgreSQL: "postgresql",
  Prisma: "prisma",
  SQL: "sqlite",
  Neon: neonIcon,   // Local PNG
  Clerk: clerkIcon, // Local SVG
  n8n: n8nIcon,     // Local SVG
  Firebase: "firebase",
};

// Determine correct icon source URL
const getSkillIconUrl = (skill) => {
  const icon = skillIconMap[skill];

  // If it's a local asset (Webpack/Vite import), return it directly
  if (
    typeof icon === "string" &&
    (icon.includes("/assets/") || icon.endsWith(".svg") || icon.endsWith(".png"))
  ) {
    return icon;
  }

  // If mapped to a skillicons.dev identifier
  if (typeof icon === "string") {
    return `https://skillicons.dev/icons?i=${icon}`;
  }

  // Fallback: use skill title (lowercased)
  return `https://skillicons.dev/icons?i=${skill.toLowerCase()}`;
};

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
    { id: 9, title: "MySQL", proficiency: 70 },
    { id: 22, title: "PostgreSQL", proficiency: 75 },
    { id: 23, title: "Neon", proficiency: 70 },
    { id: 26, title: "Prisma", proficiency: 80 },
    { id: 27, title: "SQL", proficiency: 75 },
  ],
  tools: [
    { id: 10, title: "GitHub", proficiency: 85 },
    { id: 11, title: "Vercel", proficiency: 80 },
    { id: 12, title: "Postman", proficiency: 85 },
    { id: 13, title: "Firebase", proficiency: 75 },
    { id: 24, title: "Clerk", proficiency: 80 },
    { id: 25, title: "n8n", proficiency: 70 },
  ],
  devops: [
    { id: 14, title: "Docker", proficiency: 70 },
    { id: 15, title: "Kubernetes", proficiency: 60 },
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
    const checkDark = () => setIsDarkMode(document.body.classList.contains("dark"));
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const toggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const visibleCategories =
    activeTab === "all" ? categories : categories.filter((c) => c.key === activeTab);

  return (
    <section id="skills" className={`skills-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <div className="skills-header">
          <h2>SKILLS</h2>
          <div className="underline" />
          <p style={{ color: "#4B5563", fontSize: "1.5rem", fontWeight: 500 }}>
            My technical skills and tools that I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-tabs">
          {[{ key: "all", label: "All Skills" }, ...categories].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`tab-btn ${activeTab === key ? "active" : ""}`}
            >
              {icon} {label}
            </button>
          ))}
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
                      <img src={getSkillIconUrl(skill.title)} alt={skill.title} />
                      <div className="skill-info">
                        <p>{skill.title}</p>
                        <div className="progress-bar">
                          <div
                            className="progress"
                            style={{ width: `${skill.proficiency}%` }}
                          />
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
