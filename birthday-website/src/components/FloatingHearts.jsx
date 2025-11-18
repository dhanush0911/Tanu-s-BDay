import React from 'react';
import { motion } from 'framer-motion';
import './FloatingHearts.css';

const FloatingHearts = () => {
  const celebrationEmojis = ['🎉', '🎊', '🎈', '✨', '🥳', '🎆', '🎁', '🪅'];
  
  return (
    <div className="hearts-container">
      {celebrationEmojis.map((emoji, index) => (
        <motion.div
          key={index}
          className="heart"
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 100 - 50]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: index * 1.5,
            ease: 'linear'
          }}
          style={{ left: `${10 + index * 12}%` }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
