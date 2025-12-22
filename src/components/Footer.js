import { Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = ({ darkBackground }) => {
  return (
    <footer
      className="footer"
      style={{ background: darkBackground ? "hsla(0,0%,8%,0.8)" : "" }}
    >
      <Container>
        <div className="section-box footer-box">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="Maram Aouini logo" />
            </div>

            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/maramaouini/"
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
                href="https://drive.google.com/drive/folders/1aDyZHzLNRaee2EQOqbldaXHTXLE0p9ip?usp=sharing"
                target="_blank"
                rel="noreferrer"
                aria-label="CV"
              >
                <img src={navIcon3} alt="CV" />
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
