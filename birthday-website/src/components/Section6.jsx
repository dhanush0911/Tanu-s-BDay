import React from 'react';
import { motion } from 'framer-motion';
import './Section6.css';

const Section6 = () => {
  const notes = [
    {
      title: 'Your Energy ⚡',
      message: 'You always bring such good vibes wherever you go. Honestly, you make any place feel more fun and comfortable 😄✨.'
    },
    {
      title: 'Your Kindness 💛',
      message: 'You genuinely care about people, and it shows. It’s one of the things that makes you such an amazing person 🌟.'
    },
    {
      title: 'Your Perspective 👀',
      message: 'The way you look at things is honestly so cute — you come up with angles I’d never even think of 🤯😂. Your brain has its own adorable plot twists😉📚.'
    }
  ];

  return (
    <section className="notes-section">
      <h2>Things I Appreciate About You 🤝</h2>
      <div className="notes-container">
        {notes.map((note, index) => (
          <motion.div
            key={index}
            className="note-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{note.title}</h3>
            <p>{note.message}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
