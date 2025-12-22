import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ id, title, shortDescription, imgUrl, status }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          {status && <span className={`status-badge ${status}`}>{status}</span>}
          <h4>{title}</h4>
          <span>{shortDescription}</span>
        </div>
      </div>
    </Col>
  )
}