import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useLanguage } from "../context/LanguageContext";
import { countryCodes } from "../data/countryCodes";

export const Contact = () => {
  const { t } = useLanguage();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phonePrefix: '+39',
    phone: '',
    message: ''
  };

  const [status, setStatus] = useState({});
  const [emailError, setEmailError] = useState("");
  const [showPrefixDropdown, setShowPrefixDropdown] = useState(false);
  const [prefixSearch, setPrefixSearch] = useState("");
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(t('contact.button.send'));
  const dropdownRef = useRef(null);

  // Reset button text when language changes, unless currently sending
  useEffect(() => {
    if (buttonText !== t('contact.button.sending')) {
        setButtonText(t('contact.button.send'));
    }
  }, [t, buttonText]);

  const onFormUpdate = (category, value) => {
    let updatedValue = value;
    
    // Auto-+ logic for phonePrefix
    if (category === 'phonePrefix') {
      if (!value.startsWith('+') && value.length > 0) {
        updatedValue = '+' + value;
      }
    }

    setFormDetails({
      ...formDetails,
      [category]: updatedValue
    });
  };

  // Client form validation
  const validateForm = () => {
    if (
      !formDetails.firstName.trim() ||
      !formDetails.lastName.trim() ||
      !formDetails.email.trim() ||
      !formDetails.phonePrefix.trim() ||
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
  if (!validateForm() || emailError) {
    if (!emailError && !formDetails.email.trim()) {
       // Allow validateForm to handle empty state
    } else if (emailError) {
       setStatus({ success: false, message: emailError });
       return;
    }
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

  const handleEmailInput = (e) => {
    const value = e.target.value;
    onFormUpdate('email', value);
    
    // Real-time validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setEmailError(t('contact.messages.invalidEmail'));
    } else {
      setEmailError("");
    }
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowPrefixDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countryCodes.filter(c => 
    c.name.toLowerCase().includes(prefixSearch.toLowerCase()) || 
    c.dial_code.includes(prefixSearch)
  );

  return (
    <section className="contact" id="contact">

      <Container>
        <div className="section-box">
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility once offset={100}>
                {({ isVisible }) => {
                  return (
                    <img
                      className={isVisible ? "animate__animated animate__zoomIn" : "hide-on-load"}
                      src={contactImg}
                      alt="Contact Us"
                    />
                  );
                }}
              </TrackVisibility>
            </Col>

            <Col size={12} md={6}>
              <TrackVisibility once offset={100}>
                {({ isVisible }) => {
                  return (
                    <div className={isVisible ? "animate__animated animate__zoomIn" : "hide-on-load"}>
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
                            className={emailError ? "error-input" : ""}
                            value={formDetails.email}
                            placeholder={t('contact.placeholders.email')}
                            onBlur={(e) => {
                              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                              if (e.target.value && !emailRegex.test(e.target.value)) {
                                setEmailError(t('contact.messages.invalidEmail'));
                              }
                            }}
                            onChange={handleEmailInput}
                            required
                          />
                          {emailError && <span className="field-error-message">{emailError}</span>}
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <div className="phone-input-group">
                            <div className="custom-prefix-wrapper" ref={dropdownRef}>
                              <div 
                                className="phone-prefix-display" 
                                onClick={() => setShowPrefixDropdown(!showPrefixDropdown)}
                              >
                                {formDetails.phonePrefix ? (
                                  <>
                                    <img 
                                      src={`https://flagcdn.com/w20/${countryCodes.find(c => c.dial_code === formDetails.phonePrefix)?.code.toLowerCase()}.png`} 
                                      alt=""
                                      className="selected-flag"
                                    />
                                    {formDetails.phonePrefix}
                                  </>
                                ) : (
                                  t('contact.placeholders.phonePrefix')
                                )}
                              </div>

                              {showPrefixDropdown && (
                                <div className="prefix-dropdown">
                                  <input 
                                    type="text" 
                                    className="prefix-search"
                                    placeholder="Search..."
                                    autoFocus
                                    value={prefixSearch}
                                    onChange={(e) => setPrefixSearch(e.target.value)}
                                  />
                                  <div className="prefix-list">
                                    {filteredCountries.map((c, index) => (
                                      <div 
                                        key={index} 
                                        className="prefix-option"
                                        onClick={() => {
                                          onFormUpdate('phonePrefix', c.dial_code);
                                          setShowPrefixDropdown(false);
                                          setPrefixSearch("");
                                        }}
                                      >
                                        <img 
                                          src={`https://flagcdn.com/w20/${c.code.toLowerCase()}.png`} 
                                          alt="" 
                                          className="dropdown-flag"
                                        />
                                        <span className="country-name">{c.name}</span>
                                        <span className="dial-code">{c.dial_code}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <input
                              type="tel"
                              value={formDetails.phone}
                              placeholder={t('contact.placeholders.phone')}
                              onChange={(e) => onFormUpdate('phone', e.target.value)}
                            />
                          </div>
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
                  );
                }}
              </TrackVisibility>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
