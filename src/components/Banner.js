import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { HashLink } from "react-router-hash-link";
import { useLanguage } from "../context/LanguageContext";

export const Banner = () => {
    const { t } = useLanguage();
    const toRotate = useMemo(() => t('banner.roles'), [t]);
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const period = 2000;

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(40);
        } else {
            setDelta(100);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }, [isDeleting, loopNum, text, toRotate]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); };
    }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <div className="section-box">
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">{t('banner.tagline')}</span>
              <h1>
                {t('banner.greeting')}  <br />
                <span className="wrap">{text}</span>
              </h1>
              <p>
                {t('banner.description')}
              </p>
              <HashLink smooth to="#contact">
                <button
                  type="button"
                  className="vvd"
                  onClick={() => console.log("connect")}
                >
                  {t('banner.connect')} <ArrowRightCircle size={25} />
                </button>
              </HashLink>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};