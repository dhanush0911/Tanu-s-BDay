import React from 'react';
import { motion } from 'framer-motion';
import {
  createPartyPoppers,
  createBalloons,
  createStarBurst,
  createFireworks,
  createHeartBurst,
  createSparkles
} from '../utils/celebrationEffects';
import './Section3.css';

const Section3 = ({ candleBlown, setCandleBlown, setShowConfetti }) => {
  const blowCandle = () => {
    const flame = document.querySelector('.flame');
    if (flame) {
      flame.classList.add('blown');
    }
    
    // Launch all celebration effects
    createPartyPoppers();
    createStarBurst();
    
    setTimeout(() => {
      createBalloons();
      createHeartBurst();
    }, 300);
    
    setTimeout(() => {
      createFireworks();
      createSparkles();
    }, 600);
    
    setTimeout(() => {
      setCandleBlown(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }, 600);
  };

  return (
    <section className="cake-section">
      <motion.div
        className="cake-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Make a Wish! 🎂</h2>
        <div className="cake">
          <div className="cake-layer layer-1"></div>
          <div className="cake-layer layer-2"></div>
          <div className="cake-layer layer-3"></div>
          <div className="candle">
            {!candleBlown && (
              <div className="flame">
                🔥
              </div>
            )}
          </div>
        </div>
        {!candleBlown && (
          <motion.button
            className="blow-button"
            onClick={blowCandle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blow the Candle 💨
          </motion.button>
        )}
        {candleBlown && (
          <motion.p
            className="wish-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your wish will come true! 💫
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default Section3;
