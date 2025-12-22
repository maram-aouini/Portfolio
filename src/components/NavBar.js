import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.floating-navbar')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "skills", "projects"];
      const scrollPos = window.scrollY + 200; // Offset for better detection

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="floating-navbar">
      <div className="nav-links">
        <HashLink
          smooth
          to="/#home"
          className={`nav-icon-link ${activeLink === "home" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("home")}
          title="Home"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="tooltip">Home</span>
        </HashLink>

        <HashLink
          smooth
          to="/#skills"
          className={`nav-icon-link ${activeLink === "skills" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("skills")}
          title="Skills"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="tooltip">Skills</span>
        </HashLink>

        <HashLink
          smooth
          to="/#projects"
          className={`nav-icon-link ${activeLink === "projects" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("projects")}
          title="Projects"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="tooltip">Projects</span>
        </HashLink>

        <Link
          to="/cv"
          className={`nav-icon-link ${activeLink === "cv" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("cv")}
          title="CV"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          <span className="tooltip">CV</span>
        </Link>
      </div>

      <div className="menu-container">
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>

        <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
          <div className="social-icons-dropdown">
            <a
              href="https://www.linkedin.com/in/maramaouini/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src={navIcon1} alt="LinkedIn" />
            </a>

            <a
              href="https://github.com/maram-aouini"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <img src={navIcon2} alt="Github" />
            </a>

            <a
              href="https://drive.google.com/drive/folders/1aDyZHzLNRaee2EQOqbldaXHTXLE0p9ip?usp=sharing"
              target="_blank"
              rel="noreferrer"
              aria-label="CV"
            >
              <img src={navIcon3} alt="CV" />
            </a>
          </div>

          <HashLink
            smooth
            to="/#contact"
            className="connect-btn"
            onClick={() => setMenuOpen(false)}
          >
            Let's Connect
          </HashLink>
        </div>
      </div>
    </nav>
  );
};