import React from 'react';
import { motion } from 'framer-motion';
import './Section5.css';

// Import images from assets folder
import image1 from '../assets/Image1.jpg';
import image2 from '../assets/Image2.jpg';
import image3 from '../assets/Image3.jpg';
import image4 from '../assets/Image4.jpg';

const Section5 = () => {
  const memories = [
    {
      title: 'Our First Hangout',
      description: 'That day was so memorable and fun — still one of my favorites!',
      image: image1
    },
    {
      title: 'Garba Night',
      description: 'TBH I never thought I’d ever attend a garba event, but that night turned out to be so fun and unforgettable!',
      image: image2
    },
    {
      title: 'Chill Moments',
      description: 'Just sitting, chatting, and joking about life — those simple moments hit different.',
      image: image3
    },
    {
      title: 'That Special Birthday',
      description: "The birthday you planned for me was honestly next-level. I still appreciate how much effort you put into making it special!",
      image: image4
    }
  ];

  return (
    <section className="memory-section">
      <h2>Our Fun Memories 📸</h2>
      <div className="memory-grid">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className="memory-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
          >
            <img
              src={memory.image}
              alt={`Memory ${index + 1}`}
              className="memory-card-image"
            />
            <h3>{memory.title}</h3>
            <p>{memory.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
