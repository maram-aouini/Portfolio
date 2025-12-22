import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Modal, Carousel } from "react-bootstrap";
import { projectsData } from "../data/projectsData";
import { ArrowLeft, ArrowRight, ExternalLink, Check, Github } from "lucide-react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    // Update page title
    if (project) {
      document.title = `${project.title} | Maram Portfolio`;
    } else {
      document.title = "Project Not Found | Maram Portfolio";
    }

    // Scroll to top
    const scrollTop = () => window.scrollTo(0, 0);
    const timeout = setTimeout(scrollTop, 50);
    
    return () => clearTimeout(timeout);
  }, [id, project]);

  if (!project) {
    return (
      <Container className="project-detail py-5">
        <h2>Project not found</h2>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Container>
    );
  }

  return (
    <section className="project-detail py-5" id="project-detail">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className="section-box mt-5">
              <Row className="mb-4">
                <Col>
                  <Button
                    variant="outline-light"
                    onClick={() => navigate(-1)}
                    className="back-btn"
                  >
                    <ArrowLeft size={20} className="me-2" />
                    Back to Projects
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col lg={6} className="mb-4 mb-lg-0">
                  <div className="project-img-wrapper">
                    <Carousel
                      activeIndex={activeIndex}
                      onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
                      prevIcon={
                        <div className="carousel-arrow">
                          <ArrowLeft size={24} color="white" />
                        </div>
                      }
                      nextIcon={
                        <div className="carousel-arrow">
                          <ArrowRight size={24} color="white" />
                        </div>
                      }
                    >
                      {project.images.map((img, index) => (
                        <Carousel.Item key={index}>
                          <img
                            src={img}
                            alt={`${project.title} - ${index + 1}`}
                            className="project-img"
                            onClick={() => {
                              setActiveIndex(index);
                              setShowModal(true);
                            }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>

                    <div className="img-overlay" onClick={() => setShowModal(true)}>
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="project-info">
                    <div className="project-title-wrapper mb-4">
                      <h1 className="project-title">{project.title}</h1>
                      {project.status && <span className={`status-badge-detail ${project.status}`}>{project.status}</span>}
                    </div>
                    {project.fullDescription && project.fullDescription.length > 0 &&
                      project.fullDescription.map((item, index) => (
                        <p key={index} className="project-desc mb-4">{item}</p>
                      ))
                    }

                    <div className="technologies mb-4">
                      <h4 className="mb-3">Technologies Used:</h4>
                      <div className="tech-badges">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="project-links">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn primary"
                        >
                          <ExternalLink size={20} className="me-2" />
                          View Live
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn secondary"
                        >
                          <Github size={20} className="me-2" />
                          View Source
                        </a>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>

              {/* PSA Section */}
              {project.psa && (project.psa.problem || project.psa.solution || project.psa.outcome) && (
                <div className="project-psa mt-5">
                  <h2 className="project-psa-title d-none d-md-block">
                    Problem → Solution → Outcome
                  </h2>

                  {/* Mobile vertical title */}
                  <h2 className="project-psa-title-vertical d-block d-md-none text-center mb-4">
                    <span>Problem</span>
                    <span className="title-arrow">↓</span>
                    <span>Solution</span>
                    <span className="title-arrow">↓</span>
                    <span>Outcome</span>
                  </h2>

                  <div className="project-psa-row">
                    {["problem", "solution", "outcome"].map((key, idx) => (
                      project.psa[key] && (
                        <div key={idx} className="psa-item-wrapper">
                          <div className="psa-item text-center">
                            <h3 className="psa-title">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                            <p className="psa-text">{project.psa[key]}</p>
                          </div>

                          {/* Mobile arrow */}
                          {idx < 2 && <div className="psa-arrow-vertical d-block d-md-none">↓</div>}

                          {/* Desktop arrow */}
                          {idx < 2 && <div className="psa-arrow-horizontal d-none d-md-block">→</div>}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* What I Learned Section */}
              {project.learned && project.learned.length > 0 && (
                <div className="project-learned mt-5">
                  <h2>What I Learned</h2>
                  <ul className="learned-list">
                    {project.learned.map((item, idx) => (
                      <li key={idx}>
                        <Check size={20} strokeWidth={5} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
        className="image-modal"
      >
        <Modal.Body>
          <Carousel
            className="modal-carousel"
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            interval={null}
            prevIcon={
              <div className="carousel-arrow">
                <ArrowLeft size={28} color="white" />
              </div>
            }
            nextIcon={
              <div className="carousel-arrow">
                <ArrowRight size={28} color="white" />
              </div>
            }
          >
            {project.images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={img}
                  alt={`${project.title} enlarged ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '15px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </section>
  );
};