import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CVNavBar } from "./CVNavBar";
import './CVPage.css';
import { useLanguage } from "../context/LanguageContext";

import fastfrwrdLogo from '../assets/img/companies/fastfrwrd-logo.png';
import adeccoLogo from '../assets/img/companies/adecco-logo.png';
import enelLogo from '../assets/img/companies/enel-logo.png';
import humangestLogo from '../assets/img/companies/humangest-logo.png';

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const CVPage = () => {
  const { t } = useLanguage();
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

  const languages = t('cv.languages.items') || [];
  const languageLevels = t('cv.languages.levels') || {};
  const certifications = t('cv.certifications.items') || [];
  const strengths = t('cv.strengths.items') || [];
  const focusAreas = t('cv.focus.items') || [];
  const experienceData = t('cv.experience.items') || [];

  const experienceLogos = [fastfrwrdLogo, adeccoLogo, enelLogo, humangestLogo];
  const experienceDates = [
    'Oct 2025 - Jan 2026', 'Feb 2024 - Feb 2025', 'Apr 2023 - Jul 2023', 'Oct 2021 - Mar 2022'
  ];
  const experienceCompanies = [
    'FastFRWRD Agency, Malta', 'Adecco Italia S.p.A, Amazon', 'OpenJob S.p.A, Enel Energia', 'Humangest S.p.A, SKY'
  ];

  const experience = experienceData.map((item, index) => ({
    ...item,
    logo: experienceLogos[index],
    date: experienceDates[index],
    company: experienceCompanies[index]
  }));


  return (
    <>
      <CVNavBar />

      {/* BACK BUTTON */}
      <button onClick={() => navigate("/")} className="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        {t('cv.backButton')}
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
                <p className="cv-role">{t('cv.role')}</p>

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
                  {t('cv.download')}
                </a>
              </div>
            )}
          </aside>

          <section className="cv-main-content" aria-label="Main Content">
            <div className="cv-content-card">

              {/* SUMMARY */}
              <section id="summary" className="cv-about-section">
                <h2 className="cv-section-title">{t('cv.about.title')}</h2>
                <p className="cv-intro-text">{t('cv.about.greeting')}</p>
                <p className="cv-about-text">
                  {t('cv.about.p1')} <br /> <br />
                  {t('cv.about.p2')}
                </p>
                <div className="cv-signature">Maram Aouini</div>
              </section>

              {/* PERSONAL INFO AND LANGUAGES */}
              <section className="cv-info-grid" aria-label="Personal Info and Languages">
                <div className="cv-info-column">
                  <h3 className="cv-info-heading">{t('cv.personalInfo.title')}</h3>
                  <div className="cv-info-list">
                    <div className="cv-info-row"><span className="cv-label">{t('cv.personalInfo.labels.name')}</span><span className="cv-value">Maram Aouini</span></div>
                    <div className="cv-info-row"><span className="cv-label">{t('cv.personalInfo.labels.dob')}</span><span className="cv-value">13 May 2000</span></div>
                    <div className="cv-info-row"><span className="cv-label">{t('cv.personalInfo.labels.address')}</span><span className="cv-value">Pescara, Italy</span></div>
                    <div className="cv-info-row"><span className="cv-label">{t('cv.personalInfo.labels.email')}</span><span className="cv-value">maramaouini.l@gmail.com</span></div>
                    <div className="cv-info-row"><span className="cv-label">{t('cv.personalInfo.labels.phone')}</span><span className="cv-value">+39 334 112 1820</span></div>
                    <div className="cv-info-row"><span className="cv-label">{t('cv.personalInfo.labels.freelance')}</span><span className="cv-value">{t('cv.personalInfo.values.freelance')}</span></div>
                  </div>
                </div>

                <div className="cv-info-column" id="skills">
                  <h3 className="cv-info-heading">{t('cv.languages.title')}</h3>
                  <div className="cv-languages">
                    {[
                      { name: languages[0]?.name || 'English', level: 8, levelText: languageLevels.fluent },
                      { name: languages[1]?.name || 'Italian', level: 10, levelText: languageLevels.native },
                      { name: languages[2]?.name || 'Arabic', level: 10, levelText: languageLevels.native },
                      { name: languages[3]?.name || 'Chinese', level: 2, levelText: languageLevels.beginner }
                    ].map((lang, i) => (
                      <div key={i} className="cv-language-item">
                        <div className="cv-lang-header">
                          <span className="cv-lang-name">{lang.name}</span>
                          <span className="cv-lang-level">
                            {lang.levelText}
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
                <h2 className="cv-section-title">{t('cv.certifications.title')}</h2>
                {certifications.map((cert, i) => (
                  <div key={i} className="cv-item">
                    <div className="cv-item-header">
                      <h3 className="cv-item-title">{cert.title}</h3>
                      <span className="cv-date">2025</span>
                    </div>
                    <div className="cv-company">Talentform</div>
                    <p>{cert.desc}</p>
                  </div>
                ))}
              </section>

              {/* KEY TECHNICAL STRENGTHS */}
              <section className="cv-section" aria-label="Key Technical Strengths">
                <h2 className="cv-section-title">{t('cv.strengths.title')}</h2>
                <ul className="cv-styled-list strength-list">
                  {strengths.map((item, i) => (
                      <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* CURRENT TECHNICAL FOCUS */}
              <section className="cv-section" aria-label="Current Technical Focus">
                <h2 className="cv-section-title">{t('cv.focus.title')}</h2>
                <ul className="cv-styled-list focus-list">
                  {focusAreas.map((item, i) => (
                      <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <br />
              <br />

              {/* EXPERIENCE */}
              <section id="experience" className="cv-experience-section">
                <h2 className="cv-section-title">{t('cv.experience.title')}</h2>
                {experience.map((exp, i) => (
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