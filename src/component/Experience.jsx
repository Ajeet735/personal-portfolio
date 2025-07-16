import React, { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import "./Experience.css"; // Make sure your CSS matches!

const experience = [
  {
    id: 1,
    company: "Learnsmasher",
    role: "MERN Stack Developer (Remote)",
    startDate: "Jun 2023",
    endDate: "Aug 2023",
    location: "Remote",
    experiences: [
      "Built a full-stack web application using the MERN stack.",
      "Developed responsive React UIs and backend APIs with Express and Node.js.",
      "Collaborated with UX designers to improve accessibility and user experience.",
    ],
    credential: "/certificate/learnsmasher-certificate.pdf",
  },
];

const Experience = () => {
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
    <section
      id="experience"
      className={`experience-section ${isDarkMode ? "dark" : ""}`}
    >
      <div className="container">
        <div className="experience-header">
          <h2>EXPERIENCE</h2>
          <div className="underline"></div>
        </div>

        <div className="experience-list">
          {experience.map((data) => (
            <div key={data.id} className="experience-card">
              <div className="experience-top">
                <h3>{data.role}</h3>
                <h4>{data.company}</h4>
              </div>

              <div className="experience-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>
                    {data.startDate} — {data.endDate}
                  </span>
                </div>
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{data.location}</span>
                </div>
              </div>

              <ul className="experience-points">
                {data.experiences.map((exp, index) => (
                  <li key={index}>
                    <span className="bullet"></span>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
              {data.credential && (
                <a
                  href={data.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-link"
                >
                  View Certificate
                </a>
              )}

              <div className="divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
