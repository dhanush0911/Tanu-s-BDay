import React from 'react';
import { motion } from 'framer-motion';
import './Section4.css';

const Section4 = () => {
  return (
    <section className="video-section">
      <motion.div
        className="video-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>A Special Song For You 🎵</h2>
        <video controls className="birthday-video">
          <source src="/birthday-song.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="video-caption">I sang this just for you! 💝</p>
      </motion.div>
    </section>
  );
};

export default Section4;
