import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import './BirthdayWebsite.css';

const BirthdayWebsite = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [candleBlown, setCandleBlown] = useState(false);
  const [showGift, setShowGift] = useState(false);

  return (
    <div className="birthday-container">
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
      <Section3 
        candleBlown={candleBlown} 
        setCandleBlown={setCandleBlown}
        setShowConfetti={setShowConfetti}
      />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 
        showGift={showGift} 
        setShowGift={setShowGift}
        setShowConfetti={setShowConfetti}
      />
    </div>
  );
};

export default BirthdayWebsite;
