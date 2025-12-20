import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CVNavBar } from "./CVNavBar";
import { Footer } from "./Footer";
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
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setSidebarMinimized(false);
      } else {
        setSidebarMinimized(true);
      }
    };

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

      <div className="cv-page-wrapper">
        <div className="cv-layout">
          <div className={`cv-left-sidebar ${sidebarMinimized ? 'minimized' : ''}`}>
            <button className="sidebar-toggle-btn" onClick={() => setSidebarMinimized(!sidebarMinimized)}>
              {sidebarMinimized ? '➤' : '⬅'}
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
                  <a href="https://www.linkedin.com/in/maram-aouini-48a8751b3/" target="_blank" rel="noreferrer" className="cv-social-icon" aria-label="LinkedIn">
                    <img src={navIcon1} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/maram-aouini" target="_blank" rel="noreferrer" className="cv-social-icon" aria-label="GitHub">
                    <img src={navIcon2} alt="GitHub" />
                  </a>
                </div>

                <button className="cv-download-btn">DOWNLOAD RESUME</button>
              </div>
            )}
          </div>

          <div className="cv-main-content">
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
              <div className="cv-info-grid">

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
                    <div className="cv-language-item">
                      <div className="cv-lang-header">
                        <span className="cv-lang-name">English</span>
                        <span className="cv-lang-level">fluent</span>
                      </div>
                      <div className="cv-lang-dots">{Array.from({ length: 10 }).map((_, i) => <span key={i} className={`cv-dot ${i < 7 ? "filled" : ""}`} />)}</div>
                    </div>
                    <div className="cv-language-item">
                      <div className="cv-lang-header">
                        <span className="cv-lang-name">Italian</span>
                        <span className="cv-lang-level">native</span>
                      </div>
                      <div className="cv-lang-dots">{Array.from({ length: 10 }).map((_, i) => <span key={i} className="cv-dot filled" />)}</div>
                    </div>
                    <div className="cv-language-item">
                      <div className="cv-lang-header">
                        <span className="cv-lang-name">Arabic</span>
                        <span className="cv-lang-level">native</span>
                      </div>
                      <div className="cv-lang-dots">{Array.from({ length: 10 }).map((_, i) => <span key={i} className="cv-dot filled" />)}</div>
                    </div>
                    <div className="cv-language-item">
                      <div className="cv-lang-header">
                        <span className="cv-lang-name">Chinese</span>
                        <span className="cv-lang-level">beginner</span>
                      </div>
                      <div className="cv-lang-dots">{Array.from({ length: 10 }).map((_, i) => <span key={i} className={`cv-dot ${i < 2 ? "filled" : ""}`} />)}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EXPERIENCE */}
              <section id="experience" className="cv-experience-section">
                <h2 className="cv-section-title">WORK EXPERIENCE</h2>

                <div className="cv-experience-item">
                  <div className="cv-exp-date">
                    <span className="cv-date-badge">Oct 2025 - Jan 2026</span>
                  </div>
                  <div className="cv-exp-content">
                    <h3 className="cv-exp-title">Web Designer</h3>
                    <div className="cv-exp-company">
                      <img src={fastfrwrdLogo} alt="FastFRWRD Agency" className="cv-company-logo" />
                      <span>FastFRWRD Agency, Malta</span>
                    </div>
                    <p className="cv-exp-description">
                      Contributed to web development projects for an international startup during an Erasmus traineeship.
Built and customized responsive websites using Framer and WordPress, with rapid prototyping and testing via Replit in a remote team environment.
                    </p>
                  </div>
                </div>

                <div className="cv-experience-item">
                  <div className="cv-exp-date">
                    <span className="cv-date-badge">Feb 2024 - Feb 2025</span>
                  </div>
                  <div className="cv-exp-content">
                    <h3 className="cv-exp-title">Warehouse Worker</h3>
                    <div className="cv-exp-company">
                      <img src={adeccoLogo} alt="Adecco Italia S.p.A" className="cv-company-logo" />
                      <span>Adecco Italia S.p.A, Amazon</span>
                    </div>
                    <p className="cv-exp-description">
                      Package management and goods handling through digital systems. Warehouse 
                      organization, compliance with safety procedures, and operational problem resolution.
                    </p>
                  </div>
                </div>

                <div className="cv-experience-item">
                  <div className="cv-exp-date">
                    <span className="cv-date-badge">Apr 2023 - Jul 2023</span>
                  </div>
                  <div className="cv-exp-content">
                    <h3 className="cv-exp-title">Call Center, Technical Assistance</h3>
                    <div className="cv-exp-company">
                      <img src={enelLogo} alt="Enel Energia" className="cv-company-logo" />
                      <span>OpenJob S.p.A, Enel Energia</span>
                    </div>
                    <p className="cv-exp-description">
                      Technical assistance via inbound calls for electricity and gas utilities, invoice 
                      analysis, consumption monitoring, tariff plans, and energy sector documentation management.
                    </p>
                  </div>
                </div>

                <div className="cv-experience-item">
                  <div className="cv-exp-date">
                    <span className="cv-date-badge">Oct 2021 - Mar 2022</span>
                  </div>
                  <div className="cv-exp-content">
                    <h3 className="cv-exp-title">Call Center, Technical Assistance</h3>
                    <div className="cv-exp-company">
                      <img src={humangestLogo} alt="Humangest S.p.A" className="cv-company-logo" />
                      <span>Humangest S.p.A, SKY</span>
                    </div>
                    <p className="cv-exp-description">
                      Technical assistance via inbound calls, invoice analysis, PayTV troubleshooting, 
                      TV schedule information, packages and documentation related to pay TV, CAM and various decoders.
                    </p>
                  </div>
                </div>
              </section>

              {/* PROJECTS */}
              {/* <section id="projects" className="cv-section">
                <h2 className="cv-section-title">PROJECTS</h2>
                <p>
                  Projects will go here. Keep styling consistent with cv-content-card layout.
                </p>
              </section> */}

              {/* CERTIFICATIONS & TRAINING */}
              <section id="certifications" className="cv-section">
                <h2 className="cv-section-title">CERTIFICATIONS & TRAINING</h2>
                
                <div className="cv-item">
                  <div className="cv-item-header">
                    <h3 className="cv-item-title">Full Stack Web Developer</h3>
                    <span className="cv-date">2025</span>
                  </div>
                  <div className="cv-company">Talentform</div>
                  <p>Comprehensive training in modern web technologies including HTML5, CSS3, JavaScript ES6+, React, PHP, and MySQL.</p>
                </div>

                <div className="cv-item">
                  <div className="cv-item-header">
                    <h3 className="cv-item-title">Back End Developer</h3>
                    <span className="cv-date">2025</span>
                  </div>
                  <div className="cv-company">Talentform</div>
                  <p>Focused curriculum on server-side programming, database management, API development, and security best practices.</p>
                </div>
              </section>

              {/* KEY TECHNICAL STRENGTHS */}
              <section className="cv-section">
                <h2 className="cv-section-title">KEY TECHNICAL STRENGTHS</h2>
                <ul className="cv-styled-list strength-list">
                  <li>Ability to translate requirements into functional web solutions</li>
                  <li>Strong problem-solving approach to debugging and errors</li>
                  <li>Experience working with full authentication flows</li>
                  <li>User-focused mindset from customer support background</li>
                </ul>
              </section>

              {/* CURRENT TECHNICAL FOCUS */}
              <section className="cv-section">
                <h2 className="cv-section-title">CURRENT TECHNICAL FOCUS</h2>
                <ul className="cv-styled-list focus-list">
                  <li>Improving Laravel authentication and database relationships</li>
                  <li>Strengthening React component architecture</li>
                  <li>Practicing clean, maintainable code patterns</li>
                  <li>Exploring performance optimization and best practices</li>
                </ul>
              </section>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
