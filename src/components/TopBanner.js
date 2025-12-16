import { useState } from 'react';
import { Container } from 'react-bootstrap';

export const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="top-banner">
      <Container className="d-flex justify-content-center align-items-center">
        <p className="mb-0">
          This portfolio is currently being updated. Some features may be incomplete, but feel free to explore.
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
