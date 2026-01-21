import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Modal, Carousel } from "react-bootstrap";
import { projectsData } from "../data/projectsData";
import { ArrowLeft, ArrowRight, ExternalLink, Check, Github } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  const project = projectsData.find(p => p.id === parseInt(id));

  const transProject = t(`projects_content.${id}`);
  
  const title = transProject?.title || project?.title;
  const fullDescription = transProject?.fullDescription || project?.fullDescription;
  const psa = transProject?.psa || project?.psa;
  const learned = transProject?.learned || project?.learned;
  const statusLabel = project?.status === "live" ? t('projects.status.live') : 
                      project?.status === "wip" ? t('projects.status.wip') :
                      project?.status === "completed" ? t('projects.status.completed') :
                      t('projects.status.placeholder');

  useEffect(() => {
    if (project) {
      document.title = `${title} | Maram Portfolio`;
    } else {
      document.title = "Project Not Found | Maram Portfolio";
    }

    const scrollTop = () => window.scrollTo(0, 0);
    const timeout = setTimeout(scrollTop, 50);
    
    return () => clearTimeout(timeout);
  }, [id, project, title]);

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
                            alt={`${title} - ${index + 1}`}
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
                      <h1 className="project-title">{title}</h1>
                      {project.status && <span className={`status-badge-detail ${project.status}`}>{statusLabel}</span>}
                    </div>
                    {fullDescription && fullDescription.length > 0 &&
                      fullDescription.map((item, index) => (
                        <p key={index} className="project-desc mb-4">{item}</p>
                      ))
                    }

                    <div className="technologies mb-4">
                      <h4 className="mb-3">{t('projects.headers.technologies')}</h4>
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
                          {t('projects.headers.viewLive')}
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
                          {t('projects.headers.viewSource')}
                        </a>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>

              {/* PSA Section */}
              {psa && (psa.problem || psa.solution || psa.outcome) && (
                <div className="project-psa mt-5">
                  <h2 className="project-psa-title d-none d-md-block">
                    {t('projects.headers.problem')} → {t('projects.headers.solution')} → {t('projects.headers.outcome')}
                  </h2>

                  {/* Mobile vertical title */}
                  <h2 className="project-psa-title-vertical d-none d-md-none text-center mb-4">
                    <span>{t('projects.headers.problem')}</span>
                    <span className="title-arrow">↓</span>
                    <span>{t('projects.headers.solution')}</span>
                    <span className="title-arrow">↓</span>
                    <span>{t('projects.headers.outcome')}</span>
                  </h2>

                  <div className="project-psa-row">
                    {["problem", "solution", "outcome"].map((key, idx) => (
                      psa[key] && (
                        <div key={idx} className="psa-item-wrapper">
                          <div className="psa-item text-center">
                            <h3 className="psa-title">{t(`projects.headers.${key}`)}</h3>
                            <p className="psa-text">{psa[key]}</p>
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
              {learned && learned.length > 0 && (
                <div className="project-learned mt-5">
                  <h2>{t('projects.headers.learned')}</h2>
                  <ul className="learned-list">
                    {learned.map((item, idx) => (
                      <li key={idx}>
                        <Check size={20} strokeWidth={5} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Row className="mb-4">
                <Col>
                  <Button
                    variant="outline-light"
                    onClick={() => navigate(-1)}
                    className="back-btn"
                  >
                    <ArrowLeft size={20} className="me-2" />
                    {t('projects.headers.back')}
                  </Button>
                </Col>
              </Row>
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
                  alt={`${title} enlarged ${index + 1}`}
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