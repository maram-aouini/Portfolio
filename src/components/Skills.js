import { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { useLanguage } from "../context/LanguageContext";

// LARGE Circular Progress Meter (for the main carousel)
const CircularMeter = ({ percentage, color = "#AA367C", isVisible }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const radius = 70;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (currentPercentage / 100) * circumference;

  useEffect(() => {
    if (isVisible) {
      const duration = 1800;
      const steps = 60;
      const stepValue = percentage / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCurrentPercentage(
            Math.min(stepValue * currentStep, percentage)
          );
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
      style={{ margin: "0 auto 15px", display: "block" }}
    >
      <circle
        stroke="rgba(255, 255, 255, 0.1)"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{
          strokeDashoffset,
          transition: "stroke-dashoffset 0.1s ease",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
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

// SMALL Circular Progress Meter (for the 4 blocks)
const SmallCircularMeter = ({ percentage, color = "#AA367C", isVisible }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const radius = 35;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (currentPercentage / 100) * circumference;

  useEffect(() => {
    if (isVisible) {
      const duration = 1600;
      const steps = 40;
      const stepValue = percentage / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCurrentPercentage(
            Math.min(stepValue * currentStep, percentage)
          );
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
      style={{ margin: "0 auto 8px", display: "block" }}
    >
      <circle
        stroke="rgba(255, 255, 255, 0.1)"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{
          strokeDashoffset,
          transition: "stroke-dashoffset 0.1s ease",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="#fff"
      >
        {Math.round(currentPercentage)}%
      </text>
    </svg>
  );
};

export const Skills = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Main Carousel Items
  const carouselLabels = t('skills.carousel') || [];
  const carouselSkills = [
    { name: carouselLabels[0], percentage: 70, color: "#f07b19" },
    { name: carouselLabels[1], percentage: 80, color: "#2286aa" },
    { name: carouselLabels[2], percentage: 60, color: "#f07b19" },
    { name: carouselLabels[3], percentage: 40, color: "#2286aa" },
    { name: carouselLabels[4], percentage: 60, color: "#f07b19" },
    { name: carouselLabels[5], percentage: 60, color: "#2286aa" },
  ];

  // Categories
  const toolsData = t('skills.categories.tools') || { title: "Tools", items: [] };
  const databasesData = t('skills.categories.databases') || { title: "Databases", items: [] };
  const webFundamentalsData = t('skills.categories.webFundamentals') || { title: "Web Fundamentals", items: [] };
  const backEndData = t('skills.categories.backEnd') || { title: "Back-end", items: [] };

  const skillCategories = [
    {
      title: toolsData.title,
      skills: [
        { name: toolsData.items[0], percentage: 90, color: "#724746" },
        { name: toolsData.items[1], percentage: 80, color: "#724746" },
        { name: toolsData.items[2], percentage: 85, color: "#724746" },
        { name: toolsData.items[3], percentage: 95, color: "#724746" },
      ],
    },
    {
      title: databasesData.title,
      skills: [
        { name: databasesData.items[0], percentage: 90, color: "#2286aa" },
        { name: databasesData.items[1], percentage: 70, color: "#2286aa" },
        { name: databasesData.items[2], percentage: 60, color: "#2286aa" },
        { name: databasesData.items[3], percentage: 50, color: "#2286aa" },
      ],
    },
    {
      title: webFundamentalsData.title,
      skills: [
        { name: webFundamentalsData.items[0], percentage: 85, color: "#616594" },
        { name: webFundamentalsData.items[1], percentage: 70, color: "#616594" },
        { name: webFundamentalsData.items[2], percentage: 70, color: "#616594" },
      ],
    },
    {
      title: backEndData.title,
      skills: [
        { name: backEndData.items[0], percentage: 90, color: "#f07b19" },
        { name: backEndData.items[1], percentage: 80, color: "#f07b19" },
        { name: backEndData.items[2], percentage: 75, color: "#f07b19" },
        { name: backEndData.items[3], percentage: 60, color: "#f07b19" },
        { name: backEndData.items[4], percentage: 60, color: "#f07b19" },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section className="skill" id="skills" ref={sectionRef}>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>{t('skills.title')}</h2>
              <p>{t('skills.p1')}</p>
              <p>{t('skills.p2')}</p>
              <p>{t('skills.p3')}</p>
              <p>{t('skills.p4')}</p>
              <p>{t('skills.p5')}</p>

              {/* MAIN CAROUSEL */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {carouselSkills.map((skill, index) => (
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

              {/* 2x2 GRID OF CATEGORY BLOCKS */}
              <div className="skill-categories mt-5">
                <Row>
                  {skillCategories.map((category, index) => (
                    <Col md={6} xs={12} key={index} className="mb-4">
                      <div className="skill-category-block">
                        <h4 className="text-center mb-3">
                          {category.title}
                        </h4>
        <Row className="g-2 justify-content-center px-1 px-md-5">
            {category.skills.map((skill, i) => (
            <Col xs={6} key={i} className="mb-3">
                              <div className="skill-item text-center">
                                <SmallCircularMeter
                                  percentage={skill.percentage}
                                  color={skill.color}
                                  isVisible={isVisible}
                                />
                                <h6
                                  className="mt-1 mb-0"
                                  style={{ fontSize: "0.8rem" }}
                                >
                                  {skill.name}
                                </h6>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
