import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Section4.css';
import birthdayVideo from '../assets/BirthdaySong.mp4';

const Section4 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-section">
      <motion.div
        className="video-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="video-header"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2
            animate={{ 
              textShadow: [
                "0 0 10px rgba(255, 255, 255, 0.5)",
                "0 0 20px rgba(255, 105, 180, 0.8)",
                "0 0 10px rgba(255, 255, 255, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            A Birthday Song For You 🎵
          </motion.h2>
          <motion.div 
            className="music-notes"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ♪ ♫ ♪
          </motion.div>
        </motion.div>

        <motion.div
          className="video-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div 
            className="video-glow"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <video 
            controls 
            className="birthday-video"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={birthdayVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <motion.div 
            className="video-border"
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.div
          className="video-caption-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.p 
            className="video-caption"
            animate={isPlaying ? { 
              scale: [1, 1.05, 1],
              color: ["#ffffff", "#ff69b4", "#ffffff"]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
           I couldn't be there physically, but I hope this makes up for it a little! 💝
          </motion.p>
          <motion.div 
            className="hearts"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating musical notes */}
      <motion.div 
        className="floating-note note-1"
        animate={{ 
          y: [-20, -100],
          x: [0, 30],
          opacity: [0, 1, 0],
          rotate: [0, 20]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 0 }}
      >
        🎵
      </motion.div>
      <motion.div 
        className="floating-note note-2"
        animate={{ 
          y: [-20, -100],
          x: [0, -30],
          opacity: [0, 1, 0],
          rotate: [0, -20]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        🎶
      </motion.div>
      <motion.div 
        className="floating-note note-3"
        animate={{ 
          y: [-20, -100],
          x: [0, 20],
          opacity: [0, 1, 0],
          rotate: [0, 15]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      >
        🎵
      </motion.div>
    </section>
  );
};

export default Section4;
