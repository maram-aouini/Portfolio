import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "../data/projectsData";
import 'animate.css';
import { useLanguage } from "../context/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: "50px" 
      }
    );
    
    const current = sectionRef.current;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Filter projects by category
  const filterProjects = (category) => {
    if (category === "all") {
      return projectsData;
    }
    return projectsData.filter(project => project.category === category);
  };

  return (
    <section className="project" id="projects" ref={sectionRef}>
      <Container>
        <Row>
          <Col size={12}>
            <div className="section-box">
              <div className={isVisible ? "animate__animated animate__zoomIn" : "hide-on-load"}>
                <h2>{t('projects.title')}</h2>
                <p>{t('projects.description')}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">{t('projects.tabs.all')}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">{t('projects.tabs.react')}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">{t('projects.tabs.laravel')}</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : "hide-on-load"}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        filterProjects("all").map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        filterProjects("react").map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        filterProjects("laravel").map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
