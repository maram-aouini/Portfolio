import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export const ProjectCard = ({ id, title, shortDescription, imgUrl, status }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Get translated content
  const transProject = t(`projects_content.${id}`);
  const displayTitle = transProject?.title || title;
  const displayDesc = transProject?.shortDescription || shortDescription;
  
  const statusLabel = status === "live" ? t('projects.status.live') : 
                      status === "wip" ? t('projects.status.wip') :
                      status === "completed" ? t('projects.status.completed') :
                      t('projects.status.placeholder');

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <img src={imgUrl} alt={displayTitle} />
        <div className="proj-txtx">
          {status && <span className={`status-badge ${status}`}>{statusLabel}</span>}
          <h4>{displayTitle}</h4>
          <span>{displayDesc}</span>
        </div>
      </div>
    </Col>
  )
}