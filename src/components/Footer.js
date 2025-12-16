import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Maram Aouini logo" />
          </Col>

          <Col sm={6}>
            <div className="text-center text-sm-end">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <img src={navIcon2} alt="Facebook" />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>
            </div>
          </Col>

          <Col sm={12}>
            <div className="footer-bottom text-center">
              <p>Copyright © 2025. All rights reserved. Maram Aouini</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
