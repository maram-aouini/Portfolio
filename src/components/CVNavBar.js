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
      // Sections on CV Page in DOM order
      const sections = ["summary", "skills", "experience", "certifications"];
      const scrollPos = window.scrollY + 400; // Increased offset for better detection

      // Check if we are at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActiveLink("certifications");
        return;
      }

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const height = rect.height;

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
          href="#certifications"
          className={`nav-icon-link ${activeLink === "certifications" ? "active" : ""}`}
          onClick={() => onUpdateActiveLink("certifications")}
          title="Certifications"
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
            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
            <circle cx="12" cy="8" r="5" />
          </svg>
          <span className="tooltip">Certifications</span>
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
