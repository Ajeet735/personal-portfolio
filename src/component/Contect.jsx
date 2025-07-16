import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub,  FaBlenderPhone} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./Contect.css";

const Contact = () => {
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

  const socialLinks = [
    {
      icon: <FaInstagram size={24} />,
      name: "Instagram",
      url: "https://www.instagram.com/ajeet_chirag",
    },
    {
      icon: <FaLinkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ajeet-kumar-4ba383244/",
    },
    {
      icon: <FaTwitter size={24} />,
      name: "Twitter",
      url: "https://x.com/AjeetChirag",
    },
    {
      icon: <FaGithub size={24} />,
      name: "GitHub",
      url: "https://github.com/Ajeet735",
    },
    {
      icon: <SiGmail size={24} />,
      name: "mail",
      url: "mailto:ajeetkumar.dev735@gmail.com",
    },
  ];

  const contactCards = [
    {
      icon: <SiGmail size={28} />,
      title: "Email",
      details: "ajeetkumar.dev735@gmail.com",
      action: "mailto:ajeetkumar.dev735@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt size={28} />,
      title: "Location",
      details: "Delhi",
      action: null,
    },
    {
      icon: <FaBlenderPhone size={28} />,
      title: "Phone",
      details: "7903395232",
      action: "tel:7903395232",
    },
  ];

  return (
    <section id="contact" className={`contact ${isDarkMode ? "dark" : ""}`}>
      <div className="container">
        <div className="contact-header">
          <h2>CONTACT ME</h2>
          <div className="underline"></div>
          <p>
            I'm currently available for freelance work and full-time positions.
          </p>
          <p>Feel free to reach out if you'd like to connect!</p>
        </div>

        <div className="social-links">
  <div className="social-icons">
    {socialLinks.map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
        className={`social-icon ${social.name.toLowerCase()}`}  // 👈 add brand class
      >
        {social.icon}
      </a>
    ))}
  </div>
</div>

        <div className="contact-cards">
          {contactCards.map((card, index) => (
            <div key={index} className="contact-card">
              <div className="icon-title">
                <div className="icon">{card.icon}</div>
                <h4>{card.title}</h4>
              </div>
              {card.action ? (
                <a href={card.action}>{card.details}</a>
              ) : (
                <p>{card.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
