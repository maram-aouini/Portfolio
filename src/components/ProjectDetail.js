import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { projectsData } from "../data/projectsData";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <Container className="project-detail py-5">
        <h2>Project not found</h2>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </Container>
    );
  }

  return (
    <section className="project-detail" id="project-detail">
      <Container>
        <Row className="py-5">
          <Col>
            <Button 
              variant="outline-light" 
              onClick={() => navigate(-1)}
              className="mb-4"
            >
              <ArrowLeft size={20} className="me-2" />
              Back to Projects
            </Button>
          </Col>
        </Row>
        
        <Row>
          <Col lg={6}>
            <img 
              src={project.imgUrl} 
              alt={project.title} 
              className="w-100 rounded"
              onClick={() => setShowModal(true)}
              style={{ cursor: 'pointer' }}
            />
            <p className="text-center mt-2" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              Click to enlarge
            </p>
          </Col>
          
          <Col lg={6}>
            <h1 className="mb-4">{project.title}</h1>
            <p className="mb-4">{project.fullDescription}</p>
            
            <div className="mb-4">
              <h4>Technologies Used:</h4>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="badge bg-primary"
                    style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="d-flex gap-3">
              {project.liveLink && (
                <Button 
                  variant="primary" 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} className="me-2" />
                  View Live Project
                </Button>
              )}
              
              {project.githubLink && (
                <Button 
                  variant="outline-light"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} className="me-2" />
                  View on GitHub
                </Button>
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
        <Modal.Body 
          onClick={() => setShowModal(false)}
          style={{ 
            padding: 0,
            background: 'transparent',
            border: 'none'
          }}
        >
          <img 
            src={project.imgUrl} 
            alt={project.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '15px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          />
        </Modal.Body>
      </Modal>
    </section>
  );
};