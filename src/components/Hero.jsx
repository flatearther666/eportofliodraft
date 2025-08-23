import React, { useState, useEffect } from 'react';
import ScrambledText from './ScrambledText';
import Particles from './Particles';

const Hero = () => {
  const [constellationStage, setConstellationStage] = useState(0);
  const fullName = 'Yñikko Aguas';
  const [visibleChars, setVisibleChars] = useState([]);

  useEffect(() => {
    // Stage 1: Show stars/dots (0.5s)
    const starsTimer = setTimeout(() => {
      setConstellationStage(1);
    }, 500);

    // Stage 2: Connect stars and reveal text (1.5s)
    const connectTimer = setTimeout(() => {
      setConstellationStage(2);
    }, 1500);

    // Stage 3: Final text reveal (2.5s)
    const revealTimer = setTimeout(() => {
      setConstellationStage(3);
    }, 2500);

    // Animate individual characters appearing
    const charTimers = [];
    fullName.split('').forEach((char, index) => {
      const timer = setTimeout(() => {
        setVisibleChars(prev => [...prev, index]);
      }, 800 + (index * 50));
      charTimers.push(timer);
    });

    return () => {
      clearTimeout(starsTimer);
      clearTimeout(connectTimer);
      clearTimeout(revealTimer);
      charTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section id="hero" className="section">
      {/* Particles Background - Full Screen */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: -150,
        width: '100vw', 
        height: '100vh', 
        zIndex: -1,
        pointerEvents: 'none'
      }}>
        <Particles 
          particleColors={['#ffffff', '#ffffff']} 
          particleCount={800} 
          particleSpread={30} 
          speed={0.1} 
          particleBaseSize={70} 
          moveParticlesOnHover={true} 
          alphaParticles={false} 
          disableRotation={false} 
        />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="fade-in">
              <span className={`gradient-text constellation-text stage-${constellationStage}`}>
                {fullName.split('').map((char, index) => (
                  <span 
                    key={index}
                    className={`constellation-char ${
                      visibleChars.includes(index) ? 'visible' : ''
                    } ${
                      char === ' ' ? 'space' : ''
                    }`}
                    style={{
                      '--char-index': index,
                      '--total-chars': fullName.length
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h1>
            <h2 className="fade-in" style={{ animationDelay: '3.5s' }}>
              Developer
            </h2>
            <div className="fade-in" style={{ animationDelay: '3.7s' }}>
              <ScrambledText 
                className="scrambled-text-demo" 
                radius={100} 
                duration={1.2} 
                speed={0.5} 
                scrambleChars="01"
              >
                I'm well-versed in Artificial Intelligence and Machine Learning, 
                built upon a firm understanding of Software Engineering principles.
              </ScrambledText>
            </div>
            <div className="hero-cta fade-in" style={{ animationDelay: '3.9s' }}>
              <a href="#contact" className="cta-button primary">
                Get In Touch
              </a>
              <a href="#projects" className="cta-button secondary">
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-image fade-in" style={{ animationDelay: '4.1s' }}>
            <div className="image-container">
              <img 
                src="/aguasss.png" 
                alt="Yñikko Arzee Neo Aguas"
                className="profile-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .constellation-text {
          display: inline-block;
          min-height: 1.2em;
          position: relative;
          white-space: nowrap;
        }
        
        .constellation-char {
          display: inline-block;
          position: relative;
          opacity: 0;
          transform: scale(0);
          transition: all 0.4s ease;
        }
        
        .constellation-char.space {
          width: 0.3em;
        }
        
        /* Stage 1: Stars appear */
        .stage-1 .constellation-char.visible {
          opacity: 1;
          transform: scale(1);
          color: transparent;
          text-shadow: 
            0 0 2px currentColor,
            0 0 4px currentColor;
          animation: starPulse 1.5s ease-in-out infinite alternate;
        }
        
        /* Stage 2: Connecting lines and glow */
        .stage-2 .constellation-char.visible {
          opacity: 1;
          transform: scale(1);
          color: transparent;
          text-shadow: 
            0 0 1px currentColor,
            0 0 3px currentColor;
          position: relative;
        }
        
        .stage-2 .constellation-char.visible::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          width: 0.8em;
          height: 1px;
          background: linear-gradient(90deg, currentColor 0%, transparent 100%);
          opacity: 0.4;
          animation: lineConnect 0.6s ease-out forwards;
          animation-delay: calc(var(--char-index) * 0.04s);
        }
        
        .stage-2 .constellation-char.space::before {
          display: none;
        }
        
        /* Stage 3: Final text reveal */
        .stage-3 .constellation-char.visible {
          opacity: 1;
          transform: scale(1);
          color: currentColor;
          text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
          animation: finalReveal 0.6s ease-out forwards;
          animation-delay: calc(var(--char-index) * 0.02s);
        }
        
        .stage-3 .constellation-char.visible::before {
          opacity: 0;
          animation: fadeOut 0.4s ease-out forwards;
        }
        
        @keyframes starPulse {
          0% {
            text-shadow: 
              0 0 1px currentColor,
              0 0 2px currentColor;
            transform: scale(1);
          }
          100% {
            text-shadow: 
              0 0 2px currentColor,
              0 0 4px currentColor;
            transform: scale(1.05);
          }
        }
        
        @keyframes lineConnect {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 0.8em;
            opacity: 0.4;
          }
        }
        
        @keyframes finalReveal {
          0% {
            color: transparent;
            text-shadow: 
              0 0 1px currentColor,
              0 0 3px currentColor;
          }
          100% {
            color: currentColor;
            text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
          }
        }
        
        @keyframes fadeOut {
          0% {
            opacity: 0.4;
          }
          100% {
            opacity: 0;
          }
        }
        
        .fade-in {
          opacity: 0;
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;