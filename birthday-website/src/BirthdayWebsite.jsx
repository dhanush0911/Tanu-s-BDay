import React, { useState, useRef } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import './BirthdayWebsite.css';

const BirthdayWebsite = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [candleBlown, setCandleBlown] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const createPartyPoppers = () => {
    const popperEmojis = ['🎉', '🎊', '✨', '🎈', '🎆', '🎇', '💫', '⭐'];
    const cakeContainer = document.querySelector('.cake-container');
    
    for (let i = 0; i < 12; i++) {
      const popper = document.createElement('div');
      popper.className = 'party-popper';
      popper.textContent = popperEmojis[Math.floor(Math.random() * popperEmojis.length)];
      
      const angle = (Math.PI * 2 * i) / 12;
      const distance = 100 + Math.random() * 50;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      popper.style.cssText = `
        --tx: ${tx}px;
        --ty: ${ty}px;
        left: 50%;
        top: 50%;
      `;
      
      cakeContainer.appendChild(popper);
      setTimeout(() => popper.remove(), 1500);
    }
  };

  const createBalloons = () => {
    const balloonEmojis = ['🎈', '🎈', '🎈', '🎈', '🎈', '🎈'];
    const cakeContainer = document.querySelector('.cake-container');
    
    balloonEmojis.forEach((balloon, i) => {
      setTimeout(() => {
        const balloonEl = document.createElement('div');
        balloonEl.className = 'celebration-balloon';
        balloonEl.textContent = balloon;
        balloonEl.style.cssText = `
          left: ${20 + i * 15}%;
          top: 60%;
          --rotate: ${(Math.random() - 0.5) * 60}deg;
        `;
        cakeContainer.appendChild(balloonEl);
        setTimeout(() => balloonEl.remove(), 4000);
      }, i * 200);
    });
  };

  const createStarBurst = () => {
    const starEmojis = ['⭐', '✨', '💫', '🌟'];
    const cakeContainer = document.querySelector('.cake-container');
    
    for (let i = 0; i < 16; i++) {
      const star = document.createElement('div');
      star.className = 'celebration-star';
      star.textContent = starEmojis[Math.floor(Math.random() * starEmojis.length)];
      
      const angle = (Math.PI * 2 * i) / 16;
      const distance = 80 + Math.random() * 70;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      star.style.cssText = `
        --tx: ${tx}px;
        --ty: ${ty}px;
        left: 50%;
        top: 40%;
      `;
      
      cakeContainer.appendChild(star);
      setTimeout(() => star.remove(), 1500);
    }
  };

  const createFireworks = () => {
    const fireworkEmojis = ['💥', '🎆', '🎇', '✨'];
    const cakeContainer = document.querySelector('.cake-container');
    
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const firework = document.createElement('div');
        firework.className = 'celebration-firework';
        firework.textContent = fireworkEmojis[Math.floor(Math.random() * fireworkEmojis.length)];
        firework.style.cssText = `
          left: ${20 + Math.random() * 60}%;
          top: ${30 + Math.random() * 30}%;
        `;
        cakeContainer.appendChild(firework);
        setTimeout(() => firework.remove(), 2000);
      }, i * 400);
    }
  };

  const createHeartBurst = () => {
    const heartEmojis = ['💖', '💕', '💗', '💓', '💝'];
    const cakeContainer = document.querySelector('.cake-container');
    
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'celebration-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.cssText = `
          left: ${30 + Math.random() * 40}%;
          top: ${40 + Math.random() * 20}%;
        `;
        cakeContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
      }, i * 250);
    }
  };

  const createSparkles = () => {
    const sparkleEmojis = ['✨', '⭐', '💫', '🌟', '✨'];
    const cakeContainer = document.querySelector('.cake-container');
    
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'celebration-sparkle';
        sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
        sparkle.style.cssText = `
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `;
        cakeContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1200);
      }, i * 60);
    }
  };

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

  const openGift = () => {
    setShowGift(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="birthday-container">
      <audio ref={audioRef} loop>
        <source src="/romantic-song.mp3" type="audio/mpeg" />
      </audio>

      <motion.div
        className="music-control"
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🎵 {isPlaying ? 'Pause Music' : 'Play Music'}
      </motion.div>

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={false}
        />
      )}

      <FloatingHearts />
      <Section1 />
      <Section2 isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      <Section3 candleBlown={candleBlown} blowCandle={blowCandle} />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 showGift={showGift} setShowGift={setShowGift} openGift={openGift} />
    </div>
  );
};

const FloatingHearts = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <div className="hearts-container">
      {hearts.map((_, index) => (
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
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

const Section1 = () => {
  return (
    <section className="opening-section">
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        Happy Birthday, Name! 💖
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

const Section2 = ({ isFlipped, setIsFlipped }) => {
  return (
    <section className="flip-card-section">
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <motion.div 
          className="flip-card-inner"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flip-card-front">
            <h2>🎂</h2>
            <p>Click to reveal a special message...</p>
          </div>
          <div className="flip-card-back">
            <p>
              You light up my world like nobody else. Every moment with you is a
              treasure. Happy Birthday to the most amazing person I know! 💕
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Section3 = ({ candleBlown, blowCandle }) => {
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

const Section5 = () => {
  const memories = [
    {
      title: 'Our First Date',
      description: 'Remember when we first met? That day changed my life forever. Your smile captivated my heart instantly.'
    },
    {
      title: 'That Crazy Adventure',
      description: 'We laughed until our stomachs hurt. Every adventure with you is unforgettable!'
    },
    {
      title: 'Quiet Moments',
      description: 'Just being with you, talking about everything and nothing, those are my favorite moments.'
    },
    {
      title: 'Your Surprise',
      description: "The way your eyes light up when you're happy - that's my favorite thing to see."
    },
    {
      title: 'Late Night Talks',
      description: 'Those 3 AM conversations where we share our dreams and fears. You get me like no one else.'
    },
    {
      title: 'Every Day With You',
      description: 'Every single day with you is a new memory I treasure. Here\'s to a million more!'
    }
  ];

  return (
    <section className="memory-section">
      <h2>Our Beautiful Memories 📸</h2>
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
            <div className="memory-card-image">📷 Memory {index + 1}</div>
            <h3>{memory.title}</h3>
            <p>{memory.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Section6 = () => {
  const notes = [
    {
      title: 'Your Smile',
      message: 'Your smile is my favorite thing in the world. It brightens even my darkest days and reminds me that everything will be okay.'
    },
    {
      title: 'Your Kindness',
      message: 'The way you care for everyone around you shows what a beautiful soul you have. You make the world a better place just by being in it.'
    },
    {
      title: 'Your Everything',
      message: "I love everything about you - your laugh, your quirks, your dreams, your flaws. You're perfect exactly as you are, and I'm so grateful to have you in my life."
    }
  ];

  return (
    <section className="notes-section">
      <h2>Things I Love About You 💝</h2>
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

const Section7 = ({ showGift, setShowGift, openGift }) => {
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
              <h3>Your Birthday Gifts 🎁</h3>
              <p>
                💝 A romantic dinner date at your favorite restaurant
                <br />
                💝 A weekend getaway to that place you've always wanted to visit
                <br />
                💝 A promise to always be there for you, through everything
                <br />
                💝 All my love, today and forever
              </p>
              <motion.button
                onClick={() => setShowGift(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Thank You! 💕
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BirthdayWebsite;
