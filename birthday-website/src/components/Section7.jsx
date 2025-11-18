import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Section7.css';

const Section7 = ({ showGift, setShowGift, setShowConfetti }) => {
  const openGift = () => {
    setShowGift(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <section className="gift-section">
      <h2>I Have Something For You... 🎁</h2>
      <motion.div
        className="gift-box"
        onClick={openGift}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="gift-bow"></div>
        <div className="gift-ribbon-vertical"></div>
        <div className="gift-ribbon-horizontal"></div>
      </motion.div>
      <p className="gift-instruction">Click to open your gift!</p>

      <AnimatePresence>
        {showGift && (
          <>
            <motion.div
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGift(false)}
            />
            <motion.div
              className="gift-message"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              <h3>Your Birthday Gift 🎁</h3>
              <p>
                🎁 Something small but meaningful that I’ve planned for you  
                <br />
                🎁 You’ll get it when we meet — keeping a little suspense 😌  
                <br />
                🎁 I really hope you’ll like it when you finally see it 👀✨  
                <br />
                🎁 Consider this a tiny preview of what’s coming!
              </p>

              <motion.button
                onClick={() => setShowGift(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Got it! 🎉
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Section7;
