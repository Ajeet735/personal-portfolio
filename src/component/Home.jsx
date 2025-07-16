import React, { useEffect, useRef, useState } from "react";
import hero from "../assets/hero/hero.jpg";
import Typed from "typed.js";
import { FileDown, Github, Linkedin, Twitter } from "lucide-react";
import "./Home.css"; // ✅ Import your CSS
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const typedRef = useRef(null);

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

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "I'm a Full Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className={`home-section ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <div className="home-inner">
          {/* Left Content */}
          <div className="home-content">
            <h2 className="hello">Hey There! I'm</h2>
            <h1 className="name">Ajeet Kumar</h1>
            <div className="typed-wrapper">
              <span ref={typedRef} className="typed-text"></span>
            </div>
            <p className="description">
              <span style={{color:"#2563eb"}}> Web Developer. </span>I design and develop responsive, high-impact web applications with modern
              technologies and a focus on clean, maintainable code.
            </p>
           <div className="buttons">
<div className="buttons">
  <button  className="btn secondary"
    onClick={() => window.open("https://github.com/Ajeet735", "_blank")}
  >
    <FaGithub/> GitHub
  </button>

  <button className="btn secondary"
    onClick={() => window.open("https://www.linkedin.com/in/ajeet-kumar-4ba383244/", "_blank")}
  >
    <FaLinkedin/> LinkedIn
  </button>

  <button className="btn secondary"
    onClick={() => window.location.href = "mailto:ajeetkumar.dev735@email.com"}
  >
  <FaEnvelope/> Email
  </button>
</div>

</div>

          </div>

          {/* Right Content */}
          <div className="home-image">
            <div className="image-wrapper">
              <img src={hero} alt="Ajeet Kumar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
