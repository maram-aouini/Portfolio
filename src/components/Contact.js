import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useLanguage } from "../context/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(t('contact.button.send'));
  const [status, setStatus] = useState({});

  // Reset button text when language changes, unless currently sending
  useEffect(() => {
    if (buttonText !== t('contact.button.sending')) {
        setButtonText(t('contact.button.send'));
    }
  }, [t, buttonText]);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  // Client form validation
  const validateForm = () => {
    if (
      !formDetails.firstName.trim() ||
      !formDetails.lastName.trim() ||
      !formDetails.email.trim() ||
      !formDetails.phone.trim() ||
      !formDetails.message.trim()
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // If fields are not compiled, send an error message
  if (!validateForm()) {
    setStatus({ success: false, message: t('contact.messages.incomplete') });
    return;
  }

  setButtonText(t('contact.button.sending'));

  try {
    let response = await fetch("/.netlify/functions/contact", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText(t('contact.button.send'));
    let result = await response.json();
    setFormDetails(formInitialDetails);

    if (result.code === 200) {
      setStatus({ success: true, message: t('contact.messages.success') });
    } else {
      setStatus({ success: false, message: t('contact.messages.error') });
    }
  } catch (error) {
    setButtonText(t('contact.button.send'));
    setStatus({ success: false, message: t('contact.messages.error') });
  }
};

  return (
    <section className="contact" id="contact">

      <Container>
        <div className="section-box">
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility once>
                {({ isVisible }) =>
                  <img
                    className={isVisible ? "animate__animated animate__zoomIn" : ""}
                    src={contactImg}
                    alt="Contact Us"
                  />
                }
              </TrackVisibility>
            </Col>

            <Col size={12} md={6}>
              <TrackVisibility once>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>{t('contact.title')}</h2>

                    <form onSubmit={handleSubmit} netlify>
                      <Row>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.firstName}
                            placeholder={t('contact.placeholders.firstName')}
                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.lastName}
                            placeholder={t('contact.placeholders.lastName')}
                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            value={formDetails.email}
                            placeholder={t('contact.placeholders.email')}
                            onChange={(e) => onFormUpdate('email', e.target.value)}
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="tel"
                            value={formDetails.phone}
                            placeholder={t('contact.placeholders.phone')}
                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                          />
                        </Col>

                        <Col size={12} className="px-1">
                          <textarea
                            rows="6"
                            value={formDetails.message}
                            placeholder={t('contact.placeholders.message')}
                            onChange={(e) => onFormUpdate('message', e.target.value)}
                          ></textarea>

                          <div className="contact-button-wrapper">
                            <button type="submit">
                              <span>{buttonText}</span>
                            </button>

                            {/* ERROR/SUCCESS MESSAGE */}
                            {status.message && (
                              <div className={`status-message-wrapper animate__animated animate__fadeInUp mt-3 ${status.success === false ? "status-danger" : "status-success"}`}>
                                <p>{status.message}</p>
                              </div>
                            )}
                          </div>
                        </Col>

                      </Row>
                    </form>
                  </div>
                }
              </TrackVisibility>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
