import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';

export const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  if (!isVisible) return null;

  return (
    <div className="top-banner">
      <Container className="d-flex justify-content-center align-items-center">
        <p className="mb-0">
          {t('topBanner.message')}
        </p>
        <button
          className="top-banner-close"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          ×
        </button>
      </Container>
    </div>
  );
};
