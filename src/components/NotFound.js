import { Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { FaHome, FaRedo } from "react-icons/fa";
import "./NotFound.css";

import cat1 from "../assets/img/cats/cat1.svg";
import cat2 from "../assets/img/cats/cat2.svg";
import cat3 from "../assets/img/cats/cat3.svg";
import cat4 from "../assets/img/cats/cat4.svg";
import cat5 from "../assets/img/cats/cat5.svg";

const catImages = [cat1, cat2, cat3, cat4, cat5];
const MIN_DISTANCE = 12;

const messages = [
  "Oops! Looks like this page went on vacation. 🏖️",
  "404: This page is playing hide and seek... and winning! 🙈",
  "Houston, we have a problem. This page doesn't exist. 🚀",
  "Error 404: Page not found. But you found this message! 🎉",
  "This page is in another castle. 🏰",
  "Nope, nothing here. Just cats... wait, what? 🐈",
  "The page you're looking for is out of office. ☕",
  "You broke the internet. Or this page never existed.",
  "404 — even React couldn't find this.",
  "This page took a coffee break and never came back.",
  "Nothing here. Awkward.",
  "Congrats, you found absolutely nothing.",
  "This URL is a work of fiction.",
  "If this page existed, it doesn't anymore.",
  "This page is on a different branch. Probably not merged.",
  "Looks like someone trusted a link they shouldn't have.",
  "This route was deprecated emotionally.",
  "The page exists. Just not in this universe.",
  "404 — task failed successfully.",
  "This page is still loading. Since 2000.",
  "You found a bug. It ran away.",
  "There was a page here. Then JavaScript happened.",
  "This URL passed QA. Somehow.",
  "Even the database said 'nope'.",
  "React Router looked at this and shrugged.",
  "This page was removed for being too powerful.",
  "404 — nothing but vibes.",
  "This route is protected by chaos.",
  "The content you're looking for is on prod. This is not prod.",
  "This link works perfectly. Just not here.",
  "The page is real. The URL is the problem.",
  "This is why we don't hardcode paths.",
  "404 — but make it intentional.",
  "You reached the end of the internet. Please turn around."
];

const normalMessage = messages[Math.floor(Math.random() * messages.length)];
const easterEggMessage = "Uh oh... something's about to happen! 🐱";

export const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [cats, setCats] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [showChaosText, setShowChaosText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [boxAnimatedIn, setBoxAnimatedIn] = useState(false);
  const [animationReady, setAnimationReady] = useState(false);
  const [isEasterEgg, setIsEasterEgg] = useState(
    new URLSearchParams(location.search).get("egg") === "true"
  );

  const boxRef = useRef(null);
  const timersRef = useRef([]);
  const usedPositionsRef = useRef([]);
  const usedCatsRef = useRef([]);
  const catsRefsRef = useRef(new Map());
  const draggingRef = useRef(null);
  const [forbiddenZone, setForbiddenZone] = useState(null);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(id => {
      try { clearTimeout(id); } catch {}
      try { clearInterval(id); } catch {}
    });
    timersRef.current = [];
  }, []);

  // Layout effect for box measurement
  useLayoutEffect(() => {
    if (!boxRef.current) return;
    const timer = setTimeout(() => {
      const rect = boxRef.current.getBoundingClientRect();
      const vw = window.innerWidth;
      setForbiddenZone({
        left: (rect.left / vw) * 100,
        right: (rect.right / vw) * 100
      });
      setAnimationReady(true);
    }, 650);
    return () => clearTimeout(timer);
  }, [isEasterEgg]);

  useLayoutEffect(() => {
    const timer = setTimeout(() => setBoxAnimatedIn(true), 600);
    return () => clearTimeout(timer);
  }, [isEasterEgg]);

  // Random easter egg trigger
  useEffect(() => {
    if (!isEasterEgg && Math.random() < 0.1) {
      const timer = setTimeout(() => setIsEasterEgg(true), 0); // next tick to ensure DOM exists
      return () => clearTimeout(timer);
    }
  }, [isEasterEgg]);

  const generateLandingPosition = useCallback(() => {
    let position;
    let attempts = 0;

    // Helper function to check if position is valid
    const isPositionValid = (pos) => {
      const inForbiddenZone = forbiddenZone &&
        pos > forbiddenZone.left - MIN_DISTANCE &&
        pos < forbiddenZone.right + MIN_DISTANCE;
      const tooCloseToOthers = usedPositionsRef.current.some(p => Math.abs(p - pos) < MIN_DISTANCE);
      return !inForbiddenZone && !tooCloseToOthers;
    };

    do {
      position = 5 + Math.random() * 90;
      attempts++;
      if (attempts > 60) break;
    } while (!isPositionValid(position));

    if (attempts > 60) {
      let tries = 0;
      do {
        position = 5 + Math.random() * 90;
        tries++;
        if (tries > 20) break;
      } while (forbiddenZone && position > forbiddenZone.left && position < forbiddenZone.right);
    }

    usedPositionsRef.current.push(position);
    return position;
  }, [forbiddenZone]);

  const getUniqueCatImage = useCallback(() => {
    const available = catImages.filter(img => !usedCatsRef.current.includes(img));
    if (available.length === 0) {
      usedCatsRef.current = [];
      return catImages[Math.floor(Math.random() * catImages.length)];
    }
    const chosen = available[Math.floor(Math.random() * available.length)];
    usedCatsRef.current.push(chosen);
    return chosen;
  }, []);

  const spawnCat = useCallback((landingPos) => {
    const newCat = {
      id: Date.now() + Math.random(),
      img: getUniqueCatImage(),
      landingPosition: landingPos !== undefined ? landingPos : generateLandingPosition(),
      spawned: false,
      landed: false
    };

    setCats(prev => [...prev, newCat]);

    const spawnTimer = setTimeout(() => {
      setCats(prev =>
        prev.map(cat => (cat.id === newCat.id ? { ...cat, spawned: true } : cat))
      );
    }, 30);

    const landTimer = setTimeout(() => {
      setCats(prev =>
        prev.map(cat => (cat.id === newCat.id ? { ...cat, landed: true } : cat))
      );

      if (boxRef.current) {
        boxRef.current.style.animation = 'none';
        void boxRef.current.offsetHeight;
        boxRef.current.style.animation = '';
        boxRef.current.classList.add('shaking');
        const shakeOff = setTimeout(() => boxRef.current?.classList.remove('shaking'), 500);
        timersRef.current.push(shakeOff);
      }
    }, 800);

    timersRef.current.push(spawnTimer, landTimer);
  }, [generateLandingPosition, getUniqueCatImage]);

  // FIXED: Define runAnimationSequence before it's used in the useEffect
  const runAnimationSequence = useCallback(() => {
    clearAllTimers();
    setCats([]);
    setCollapsed(false);
    setShowChaosText(false);
    setShowButtons(false);
    usedPositionsRef.current = [];
    usedCatsRef.current = [];

    let spawnedCount = 0;
    const maxCats = 5;
    const intervalMs = 1200;
    // FIXED: Pre-calculate positions outside the interval to avoid closure issues
    const positions = Array.from({ length: maxCats }, (_, i) => ((i + 1) / (maxCats + 1)) * 100);

    const intervalId = setInterval(() => {
      if (spawnedCount >= maxCats) {
        clearInterval(intervalId);
        return;
      }
      // Now using the pre-calculated positions array
      spawnCat(positions[spawnedCount]);
      spawnedCount++;
    }, intervalMs);
    timersRef.current.push(intervalId);

    timersRef.current.push(
      setTimeout(() => {
        if (boxRef.current && !boxRef.current.classList.contains('shaking')) {
          boxRef.current.classList.add('shaking');
          timersRef.current.push(setTimeout(() => boxRef.current?.classList.remove('shaking'), 500));
        }
        timersRef.current.push(
          setTimeout(() => {
            setCollapsed(true);
            timersRef.current.push(
              setTimeout(() => {
                setShowChaosText(true);
                timersRef.current.push(setTimeout(() => setShowButtons(true), 1000));
              }, 1500)
            );
          }, 500)
        );
      }, 7000)
    );
  }, [spawnCat, clearAllTimers]);

  // Trigger animation when easter egg becomes true
  useEffect(() => {
    if (isEasterEgg && animationReady) {
      const readyTimer = setTimeout(() => runAnimationSequence(), 150);
      return () => clearTimeout(readyTimer);
    }
  }, [isEasterEgg, animationReady, runAnimationSequence]);

  useEffect(() => () => clearAllTimers(), [clearAllTimers]);

  // Drag handlers
  const handlePointerDown = useCallback((e, cat) => {
    e.preventDefault();
    const el = catsRefsRef.current.get(cat.id);
    if (!el) return;

    try { if (e.pointerId && el.setPointerCapture) el.setPointerCapture(e.pointerId); } catch {}
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    draggingRef.current = { id: cat.id, offsetX, offsetY };
    el.style.cursor = 'grabbing';
    el.style.zIndex = '9999';
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!draggingRef.current) return;
    e.preventDefault();
    const { id, offsetX, offsetY } = draggingRef.current;
    const el = catsRefsRef.current.get(id);
    if (!el) return;
    el.style.left = `${e.clientX - offsetX}px`;
    el.style.top = `${e.clientY - offsetY}px`;
    el.style.bottom = 'auto';
    el.style.transform = 'none';
  }, []);

  const handlePointerUp = useCallback((e) => {
    if (!draggingRef.current) return;
    const { id } = draggingRef.current;
    const el = catsRefsRef.current.get(id);
    if (el) {
      try { if (e.pointerId && el.releasePointerCapture) el.releasePointerCapture(e.pointerId); } catch {}
      el.style.cursor = 'grab';
      el.style.zIndex = '';
    }
    draggingRef.current = null;
  }, []);

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  if (!isEasterEgg) {
    return (
      <Container className="notfound-wrapper d-flex align-items-center justify-content-center text-center min-vh-100">
        <div className="notfound-box">
          <h1 className="notfound-code">404</h1>
          <p className="notfound-text">{normalMessage}</p>
          <Button variant="outline-light" onClick={() => navigate("/")} className="notfound-btn">
            <FaHome /> Take me home
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="notfound-wrapper easter-egg d-flex align-items-center justify-content-center text-center min-vh-100 position-relative">
      <Button
        variant="outline-light"
        className="position-absolute top-0 end-0 m-3"
        style={{ zIndex: 50 }}
        onClick={() => navigate("/")}
      >
        <FaHome /> Take me home
      </Button>

      <div
        ref={boxRef}
        className={`notfound-box ${collapsed ? "collapsed" : ""} ${boxAnimatedIn ? "animated-in" : ""}`}
      >
        <h1 className="notfound-code">404</h1>
        <p className="notfound-text">{easterEggMessage}</p>
        <Button variant="outline-light" onClick={() => navigate("/")} className="notfound-btn">
          <FaHome /> Take me home
        </Button>
      </div>

      {cats.map(cat => (
        <div
          key={cat.id}
          ref={el => { if (el) catsRefsRef.current.set(cat.id, el); else catsRefsRef.current.delete(cat.id); }}
          onPointerDown={e => handlePointerDown(e, cat)}
          className={`cat ${cat.spawned ? "cat-spawned" : ""} ${cat.landed ? "cat-landed" : ""}`}
          style={{ 
            '--landing-position': `${cat.landingPosition}%`,
            left: `${cat.landingPosition}%`,
            bottom: cat.landed ? '4px' : '-100px',
            transform: cat.landed ? 'translateX(-50%)' : 'translateX(-50%) translateY(100px)',
            opacity: cat.spawned ? 1 : 0
          }}
        >
          <img src={cat.img} alt="cat" className="cat-img" draggable="false" />
        </div>
      ))}

      {showChaosText && (
        <>
          <div className="chaos-text">🐾 CAT-ASTROPHE! 🐾</div>
          {showButtons && (
            <div className="chaos-buttons">
              <Button variant="light" onClick={() => navigate("/")} className="chaos-btn">
                <FaHome /> Take me home
              </Button>
              <Button variant="light" onClick={runAnimationSequence} className="chaos-btn">
                <FaRedo /> Watch again
              </Button>
            </div>
          )}
        </>
      )}
    </Container>
  );
};