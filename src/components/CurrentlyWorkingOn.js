import { Container, Row, Col } from "react-bootstrap";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { workingOnData } from "../data/workingOnData";
import { useNavigate } from "react-router-dom";

import "./WorkingOn.css";

export const CurrentlyWorkingOn = () => {
    const sectionRef = useRef(null);
    const { t } = useLanguage();
    const navigate = useNavigate();

    return (
        <section className="now-section py-5" id="now" ref={sectionRef}>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="section-box">
                            <div className="text-center mb-5">
                                <h2 className="mb-3 now-heading">{t('current.title')}</h2>
                                <p className="now-subtitle">
                                    {t('current.subtitle')}
                                </p>
                                <span className="now-updated">{t('current.lastUpdate')}</span>
                            </div>

                            <Row>
                                {workingOnData.map((project, index) => {
                                    const Icon = project.icon;
                                    
                                    const titleKey = `current.items.${project.translationKey}.title`;
                                    const descKey = `current.items.${project.translationKey}.desc`;
                                    
                                    const displayTitle = t(titleKey);
                                    const displayDesc = t(descKey);

                                    let displayStage = project.stageKey;
                                    if (project.stageKey === "building") displayStage = t('current.stages.building');
                                    else if (project.stageKey === "backend") displayStage = t('current.stages.backend');
                                    else if (project.stageKey === "frontend") displayStage = t('current.stages.frontend');
                                    else if (project.stageKey === "planning") displayStage = t('current.stages.planning');

                                    return (
                                        <Col md={6} lg={3} key={index} className="mb-4">
                                            <div 
                                                className={`now-card ${project.priority ? "featured" : ""}`}
                                                onClick={() => navigate(`/working-on/${project.id}`)}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <div className="now-card-header">
                                                    <div className="now-icon">
                                                        <Icon size={22} />
                                                    </div>

                                                    <div className="progress-wrapper">
                                                        <span className="stage-label">{displayStage}</span>
                                                        <div className="progress-bar">
                                                            <div
                                                                className="progress-fill"
                                                                style={{ width: `${project.progress}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <h5 className="now-title">{displayTitle}</h5>
                                                <p className="now-desc">{displayDesc}</p>
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
