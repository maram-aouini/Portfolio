import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectDetail } from './components/ProjectDetail';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TopBanner } from "./components/TopBanner";
import { CVPage } from "./components/CVPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="homepage-wrapper">
              {/* 🌸 SAKURA PETALS - ONLY ON HOMEPAGE */}
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
              
              {/* Your existing homepage content */}
              <TopBanner />
              <NavBar />
              <Banner />
              <Skills />
              <Projects />
              <Contact />
              <Footer /> 
            </div>
          } />
          <Route path="/project/:id" element={
            <>
              <TopBanner />
              <NavBar />
              <ProjectDetail />
            </>
          } />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
