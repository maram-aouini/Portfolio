import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CVNavBar } from "./CVNavBar";
import './CVPage.css';

import fastfrwrdLogo from '../assets/img/companies/fastfrwrd-logo.png';
import adeccoLogo from '../assets/img/companies/adecco-logo.png';
import enelLogo from '../assets/img/companies/enel-logo.png';
import humangestLogo from '../assets/img/companies/humangest-logo.png';

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const CVPage = () => {
  const navigate = useNavigate();
  const [sidebarMinimized, setSidebarMinimized] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    // Update page title
    document.title = "CV - Maram Aouini | Full Stack Web Developer";

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => setSidebarMinimized(window.innerWidth <= 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <CVNavBar />

      {/* BACK BUTTON */}
      <button onClick={() => navigate("/")} className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Portfolio
      </button>

      <main className="cv-page-wrapper" role="main">
        <div className="cv-layout">
          <aside className={`cv-left-sidebar ${sidebarMinimized ? 'minimized' : ''}`} aria-label="Sidebar">
            <button className="sidebar-toggle-btn" onClick={() => setSidebarMinimized(!sidebarMinimized)}>
              {sidebarMinimized ? '➤' : '☰'}
            </button>

            {!sidebarMinimized && (
              <div className="cv-profile-card">
                <div className="cv-avatar-circle">
                  <img
                    src={require("../assets/img/profile.jpg")}
                    alt="Your Name"
                    className="cv-avatar-inner"
                  />
                </div>
                <h1 className="cv-name">MARAM AOUINI</h1>
                <p className="cv-role">Full Stack Web Developer</p>

                <div className="cv-social-icons">
                  <a href="/" className="cv-social-icon home-icon" aria-label="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/maramaouini/" target="_blank" rel="noreferrer" className="cv-social-icon" aria-label="LinkedIn">
                    <img src={navIcon1} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/maram-aouini" target="_blank" rel="noreferrer" className="cv-social-icon" aria-label="GitHub">
                    <img src={navIcon2} alt="GitHub" />
                  </a>
                </div>

                <a
                  href="https://drive.google.com/drive/folders/1aDyZHzLNRaee2EQOqbldaXHTXLE0p9ip?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="cv-download-btn"
                  style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
                >
                  DOWNLOAD RESUME
                </a>
              </div>
            )}
          </aside>

          <section className="cv-main-content" aria-label="Main Content">
            <div className="cv-content-card">

              {/* SUMMARY */}
              <section id="summary" className="cv-about-section">
                <h2 className="cv-section-title">ABOUT ME</h2>
                <p className="cv-intro-text">Hello, I'm Maram Aouini!</p>
                <p className="cv-about-text">
                  I am a Full Stack Web Developer focused on building reliable, user-friendly web applications using React, PHP, Laravel, and MySQL. I hold certifications in Full Stack and Back End Development from Talentform and have hands-on experience working with real-world projects. <br /> <br />Coming from a background in technical assistance and customer service, I combine strong problem-solving skills with clear communication and a user-centric mindset. I enjoy turning complex requirements into clean, maintainable solutions that actually work.
                </p>
                <div className="cv-signature">Maram Aouini</div>
              </section>

              {/* PERSONAL INFO AND LANGUAGES */}
              <section className="cv-info-grid" aria-label="Personal Info and Languages">
                <div className="cv-info-column">
                  <h3 className="cv-info-heading">personal information</h3>
                  <div className="cv-info-list">
                    <div className="cv-info-row"><span className="cv-label">FULL NAME</span><span className="cv-value">Maram Aouini</span></div>
                    <div className="cv-info-row"><span className="cv-label">D.O.B.</span><span className="cv-value">13 May 2000</span></div>
                    <div className="cv-info-row"><span className="cv-label">ADDRESS</span><span className="cv-value">Pescara, Italy</span></div>
                    <div className="cv-info-row"><span className="cv-label">E-MAIL</span><span className="cv-value">maramaouini.l@gmail.com</span></div>
                    <div className="cv-info-row"><span className="cv-label">PHONE</span><span className="cv-value">+39 334 112 1820</span></div>
                    <div className="cv-info-row"><span className="cv-label">FREELANCE</span><span className="cv-value">Available</span></div>
                  </div>
                </div>

                <div className="cv-info-column" id="skills">
                  <h3 className="cv-info-heading">languages</h3>
                  <div className="cv-languages">
                    {[
                      { name: 'English', level: 8 },
                      { name: 'Italian', level: 10 },
                      { name: 'Arabic', level: 10 },
                      { name: 'Chinese', level: 2 }
                    ].map((lang, i) => (
                      <div key={i} className="cv-language-item">
                        <div className="cv-lang-header">
                          <span className="cv-lang-name">{lang.name}</span>
                          <span className="cv-lang-level">
                            {lang.level === 10
                              ? 'native'
                              : lang.level >= 8
                                ? 'fluent'
                                : lang.level >= 3
                                  ? 'intermediate'
                                  : 'beginner'}
                          </span>

                        </div>
                        <div className="cv-lang-dots">
                          {Array.from({ length: 10 }).map((_, j) => <span key={j} className={`cv-dot ${j < lang.level ? "filled" : ""}`} />)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <br />
              <br />

              {/* CERTIFICATIONS & TRAINING */}
              <section id="certifications" className="cv-section">
                <h2 className="cv-section-title">CERTIFICATIONS & TRAINING</h2>
                {[
                  { title: 'Full Stack Web Developer', date: '2025', org: 'Talentform', desc: 'Comprehensive training in modern web technologies including HTML5, CSS3, JavaScript ES6+, React, PHP, and MySQL.' },
                  { title: 'Back End Developer', date: '2025', org: 'Talentform', desc: 'Focused curriculum on server-side programming, database management, API development, and security best practices.' }
                ].map((cert, i) => (
                  <div key={i} className="cv-item">
                    <div className="cv-item-header">
                      <h3 className="cv-item-title">{cert.title}</h3>
                      <span className="cv-date">{cert.date}</span>
                    </div>
                    <div className="cv-company">{cert.org}</div>
                    <p>{cert.desc}</p>
                  </div>
                ))}
              </section>

              {/* KEY TECHNICAL STRENGTHS */}
              <section className="cv-section" aria-label="Key Technical Strengths">
                <h2 className="cv-section-title">KEY TECHNICAL STRENGTHS</h2>
                <ul className="cv-styled-list strength-list">
                  <li>Ability to translate requirements into functional web solutions</li>
                  <li>Strong problem-solving approach to debugging and errors</li>
                  <li>Experience working with full authentication flows</li>
                  <li>User-focused mindset from customer support background</li>
                </ul>
              </section>

              {/* CURRENT TECHNICAL FOCUS */}
              <section className="cv-section" aria-label="Current Technical Focus">
                <h2 className="cv-section-title">CURRENT TECHNICAL FOCUS</h2>
                <ul className="cv-styled-list focus-list">
                  <li>Improving Laravel authentication and database relationships</li>
                  <li>Strengthening React component architecture</li>
                  <li>Practicing clean, maintainable code patterns</li>
                  <li>Exploring performance optimization and best practices</li>
                </ul>
              </section>

              <br />
              <br />

              {/* EXPERIENCE */}
              <section id="experience" className="cv-experience-section">
                <h2 className="cv-section-title">WORK EXPERIENCE</h2>
                {[
                  { date: 'Oct 2025 - Jan 2026', title: 'Web Designer', company: 'FastFRWRD Agency, Malta', logo: fastfrwrdLogo, desc: `Contributed to web development projects for an international startup during an Erasmus traineeship. Built and customized responsive websites using Framer and WordPress, with rapid prototyping and testing via Replit in a remote team environment.` },
                  { date: 'Feb 2024 - Feb 2025', title: 'Warehouse Worker', company: 'Adecco Italia S.p.A, Amazon', logo: adeccoLogo, desc: `Package management and goods handling through digital systems. Warehouse organization, compliance with safety procedures, and operational problem resolution.` },
                  { date: 'Apr 2023 - Jul 2023', title: 'Call Center, Technical Assistance', company: 'OpenJob S.p.A, Enel Energia', logo: enelLogo, desc: `Technical assistance via inbound calls for electricity and gas utilities, invoice analysis, consumption monitoring, tariff plans, and energy sector documentation management.` },
                  { date: 'Oct 2021 - Mar 2022', title: 'Call Center, Technical Assistance', company: 'Humangest S.p.A, SKY', logo: humangestLogo, desc: `Technical assistance via inbound calls, invoice analysis, PayTV troubleshooting, TV schedule information, packages and documentation related to pay TV, CAM and various decoders.` }
                ].map((exp, i) => (
                  <div key={i} className="cv-experience-item">
                    <div className="cv-exp-date"><span className="cv-date-badge">{exp.date}</span></div>
                    <div className="cv-exp-content">
                      <h3 className="cv-exp-title">{exp.title}</h3>
                      <div className="cv-exp-company">
                        <img src={exp.logo} alt={exp.company} className="cv-company-logo" />
                        <span>{exp.company}</span>
                      </div>
                      <p className="cv-exp-description">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </section>

            </div>
          </section>
        </div>
      </main>
    </>
  );
};