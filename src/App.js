import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { CurrentlyWorkingOn } from "./components/CurrentlyWorkingOn";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TopBanner } from "./components/TopBanner";
import { ProjectDetail } from './components/ProjectDetail';
import { WorkingOnDetail } from './components/WorkingOnDetail';
import { CVPage } from "./components/CVPage";
import { NotFound } from "./components/NotFound";



// Wrapper to get location
function AppWrapper() {
  const location = useLocation();
  const isCVPage = location.pathname === '/cv';
  const isWorkingOnPage = location.pathname.startsWith('/working-on/');
  const isDarkTheme = isCVPage || isWorkingOnPage;

  useEffect(() => {
    if (location.pathname === '/') {
      document.title = "Maram | Web Developer Portfolio";
    }
  }, [location.pathname]);

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
      <TopBanner />

      <Routes>
        {/* HOMEPAGE */}
        <Route path="/" element={
          <>
            <header><NavBar /></header>
            <div className="sakura-container">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="sakura-petal"
                  style={{
                    left: `${i * 2.5}%`,
                    animationDelay: `-${i * 0.3}s`,
                    animationDuration: `${12 + (i % 3) * 4}s`
                  }}
                />
              ))}
            </div>
            <main>
              <Banner />
              <Skills />
              <Projects />
              <CurrentlyWorkingOn />
              <Contact />
            </main>
          </>
        } />

        {/* PROJECT DETAIL PAGE */}
        <Route
          path="/project/:id"
          element={
            <>
              <header><NavBar /></header>
              <main><ProjectDetail /></main>
            </>
          }
        />
        
        <Route path="/working-on/:id" element={
            <>
              <header><NavBar /></header>
              <main><WorkingOnDetail /></main>
            </>
        } />

        {/* CV PAGE */}
        <Route path="/cv" element={
          <>
            <header><NavBar /></header>
            <main><CVPage /></main>
          </>
        } />

        {/* NOT FOUND PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer always rendered */}
      <Footer darkBackground={isDarkTheme} />
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;