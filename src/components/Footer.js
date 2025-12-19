import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="section-box footer-box">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="Maram Aouini logo" />
            </div>

            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/maram-aouini-48a8751b3/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/maram-aouini"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <img src={navIcon2} alt="Github" />
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

            <div className="footer-copyright">
              <p>© 2025 Maram Aouini. All rights reserved.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
