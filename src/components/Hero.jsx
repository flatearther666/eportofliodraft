import React from 'react';
import ScrambledText from './ScrambledText';

const Hero = () => {
  return (
    <section id="hero" className="section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="fade-in">
              <span className="gradient-text">Yñikko Arzee Neo Aguas</span>
            </h1>
            <h2 className="fade-in" style={{ animationDelay: '0.2s' }}>
              Developer
            </h2>
            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
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
            <div className="hero-cta fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="#contact" className="cta-button primary">
                Get In Touch
              </a>
              <a href="#projects" className="cta-button secondary">
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-image fade-in" style={{ animationDelay: '0.8s' }}>
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
    </section>
  );
};

export default Hero;