import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Passionate about creating engaging and user-friendly interfaces.</p>
                            <p>Proficient in HTML, CSS, JavaScript, and React.</p>
                            <p>Experienced in responsive design and cross-browser compatibility.</p>
                            <p>Skilled in using tools like Git and GitHub for version control.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Web Development" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Front-end" />
                                    <h5>Front-end</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Back-end" />
                                    <h5>Back-end</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Full-stack" />
                                    <h5>Full-stack</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}