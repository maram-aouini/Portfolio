// src/components/CVNavBar.jsx
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const CVNavBar = () => {
  const [activeLink, setActiveLink] = useState("summary");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".floating-navbar")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      // Sections on CV Page
      const sections = ["summary", "experience", "skills", "projects"];
      const scrollPos = window.scrollY + 300; // Offset for sticky header

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          // Check if we are within this section
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
        {/* HOME: goes back to main homepage */}
        <HashLink
          smooth
          to="/#home"
          className={`nav-icon-link ${activeLink === "home" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("home")}
          title="Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="tooltip">Home</span>
        </HashLink>

        {/* CV SECTIONS */}
        {/* CV SECTIONS */}
        <a
          href="#summary"
          className={`nav-icon-link ${activeLink === "summary" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("summary")}
          title="Summary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className="tooltip">Summary</span>
        </a>

        <a
          href="#skills"
          className={`nav-icon-link ${activeLink === "skills" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("skills")}
          title="Languages"
        >
          {/* Globe icon for Languages */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span className="tooltip">Languages</span>
        </a>

        <a
          href="#experience"
          className={`nav-icon-link ${activeLink === "experience" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("experience")}
          title="Experience"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          </svg>
          <span className="tooltip">Experience</span>
        </a>

        <a
          href="#projects"
          className={`nav-icon-link ${activeLink === "projects" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("projects")}
          title="Projects"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="tooltip">Projects</span>
        </a>
      </div>

      {/* same menu / socials dropdown as homepage */}
      <div className="menu-container">
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>

        <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
          <div className="social-icons-dropdown">
            <a
              href="https://www.linkedin.com/in/maram-aouini-48a8751b3/"
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
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src={navIcon3} alt="Instagram" />
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
