import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import "./Navbar.css";
import { FileCode } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <div className="logo">
            <span style={{color:"#898E99"}}>{`{`}</span>
            <span>A</span>
            <span style={{color:"#898E99"}}>{`}`}</span>
    
          </div>

          <div className="nav-desktop">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="nav-mobile-toggle">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className="menu-button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="nav-mobile">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
