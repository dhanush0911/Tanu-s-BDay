export const createPartyPoppers = () => {
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

export const createBalloons = () => {
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

export const createStarBurst = () => {
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

export const createFireworks = () => {
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

export const createHeartBurst = () => {
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

export const createSparkles = () => {
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
