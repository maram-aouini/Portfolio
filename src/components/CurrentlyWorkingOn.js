import { Container, Row, Col } from "react-bootstrap";
import { Package, BookOpen, Calendar, Globe2 } from "lucide-react";
import { useEffect, useRef } from "react";

export const CurrentlyWorkingOn = () => {
    const sectionRef = useRef(null);

    const nowItems = [
        {
    icon: Globe2,
    title: "Language changer Button",
    desc: "Button to change the language of the portfolio website",
    progress: 50,
    stage: "Building",
    featured: true
  },
  /* {
    icon: Briefcase,
    title: "Job Application Tracker",
    desc: "Full-stack app to track applications, interviews, companies, and follow-ups",
    progress: 10,
    stage: "Backend Development",
  }, */
  {
    icon: Package,
    title: "Grocery/Kitchen Inventory Tracker",
    desc: "Real-time pantry management with expiration alerts and auto shopping lists",
    progress: 45,
    stage: "Backend Development",
    featured: true
  },
  {
    icon: BookOpen,
    title: "Book/Manga Library Tracker",
    desc: "Personal collection manager with reading progress, ratings, and lending logs",
    progress: 15,
    stage: "Frontend Development"
  },
  {
    icon: Calendar,
    title: "Content Creation Calendar",
    desc: "Blog/social media scheduler with performance analytics and idea board",
    progress: 10,
    stage: "Planning"
  },
];


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current
                        .querySelectorAll(".progress-fill")
                        .forEach((bar) => {
                            bar.style.width = bar.dataset.progress + "%";
                        });
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);

    return (
        <section className="now-section py-5" id="now" ref={sectionRef}>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="section-box">
                            <div className="text-center mb-5">
                                <h2 className="mb-3 now-heading">Currently Working On</h2>
                                <p className="now-subtitle">
                                    Coding in Public | Updated Monthly
                                </p>
                                <span className="now-updated">Last update: Dec 2025</span>
                            </div>

                            <Row>
                                {nowItems.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <Col md={6} lg={3} key={index} className="mb-4">
                                            <div className={`now-card ${item.featured ? "featured" : ""}`}>
                                                <div className="now-card-header">
                                                    <div className="now-icon">
                                                        <Icon size={22} />
                                                    </div>

                                                    <div className="progress-wrapper">
                                                        <span className="stage-label">{item.stage}</span>
                                                        <div className="progress-bar">
                                                            <div
                                                                className="progress-fill"
                                                                data-progress={item.progress}
                                                            />
                                                        </div>

                                                    </div>
                                                </div>

                                                <h5 className="now-title">{item.title}</h5>
                                                <p className="now-desc">{item.desc}</p>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
