import { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

// Circular Progress Meter Component with Animation
const CircularMeter = ({ percentage, color = "#AA367C", isVisible }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);
    const radius = 70;
    const strokeWidth = 12;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

    useEffect(() => {
        if (isVisible) {
            // Animation when first loading
            const duration = 1500;
            const steps = 60;
            const stepValue = percentage / steps;
            const stepDuration = duration / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                if (currentStep <= steps) {
                    setCurrentPercentage(Math.min(stepValue * currentStep, percentage));
                } else {
                    clearInterval(timer);
                }
            }, stepDuration);

            return () => clearInterval(timer);
        } else {
            setCurrentPercentage(0);
        }
    }, [isVisible, percentage]);

    return (
        <svg 
            height={radius * 2} 
            width={radius * 2} 
            style={{ margin: '0 auto 15px', display: 'block' }}
        >
            {/* Background circle */}
            <circle
                stroke="rgba(255, 255, 255, 0.1)"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            {/* Progress circle */}
            <circle
                stroke={color}
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ 
                    strokeDashoffset,
                    transition: 'stroke-dashoffset 0.1s ease',
                    transform: 'rotate(-90deg)',
                    transformOrigin: '50% 50%'
                }}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            {/* Percentage text */}
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="28"
                fontWeight="700"
                fill="#fff"
            >
                {Math.round(currentPercentage)}%
            </text>
        </svg>
    );
};

export const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    // To customize skills data and colours
    const skills = [
        { name: "Web Development", percentage: 60, color: "#AA367C" },
        { name: "Front-end", percentage: 80, color: "#4A2FBD" },
        { name: "Back-end", percentage: 60, color: "#AA367C" },
        { name: "Full-stack", percentage: 60, color: "#4A2FBD" },
        { name: "CMS", percentage: 80, color: "#AA367C" },
        { name: "UI/UX", percentage: 40, color: "#4A2FBD" },
    ];

    // Intersection Observer to detect when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.5
            }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <section className="skill" id="skills" ref={sectionRef}>
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
                                {skills.map((skill, index) => (
                                    <div className="item" key={index}>
                                        <CircularMeter 
                                            percentage={skill.percentage} 
                                            color={skill.color}
                                            isVisible={isVisible}
                                        />
                                        <h5>{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}