import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Section2.css";

const Section2 = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const scene = e.currentTarget;
    const rect = scene.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -10; // tilt strength X
    const rY = ((x - centerX) / centerX) * 10;  // tilt strength Y

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    // gently reset tilt
    setRotateX(0);
    setRotateY(0);
  };

  // Build a single transform string that includes both tilt and flip.
  // When flipped, add 180deg to rotateY.
  const combinedRotateY =  (isFlipped ? 180 : 0) + rotateY;
  const transformStyle = {
    transform: `rotateY(${combinedRotateY}deg) rotateX(${rotateX}deg)`,
    transition: "transform 600ms cubic-bezier(.2,.8,.2,1)"
  };

  return (
    <section className="flip-card-section">
      <div
        className="scene"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped((s) => !s)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setIsFlipped((s) => !s);
        }}
        aria-pressed={isFlipped}
        aria-label="Flip card"
      >
        <div className="card" style={transformStyle}>
          <div className="card__face card__face--front">
            <motion.div
              className="glow-effect"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden
            />
            <motion.h2
              className="front-emoji"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 6, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎂
            </motion.h2>
            <p className="front-text">Click to reveal a special message...</p>
            <motion.div
              className="sparkle"
              animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden
            >
              ✨
            </motion.div>
          </div>

          <div className="card__face card__face--back">
            <motion.div
              className="glow-effect-back"
              animate={{ opacity: [0.35, 0.7, 0.35] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden
            />
            <p className="back-text">
              You make every day more fun, and I really appreciate all the good
              moments we've shared. Wishing you an awesome birthday and an even
              better year ahead! Happy Birthday, Tanvi! 🎉
            </p>
            <motion.div
              className="heart-pulse"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden
            >
              💖
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
