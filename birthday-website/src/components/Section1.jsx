import React from 'react';
import { motion } from 'framer-motion';
import './Section1.css';

const Section1 = () => {
  return (
    <section className="opening-section">
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        Happy Birthday, Tanvi! 🥳
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Today is all about you!
      </motion.p>
    </section>
  );
};

export default Section1;
