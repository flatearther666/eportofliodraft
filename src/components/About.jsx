import React from 'react';
import ScrambledText from './ScrambledText';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="section-header">
            <h2 className="gradient-text">About Me</h2>
          </div>
          <div className="about-grid">
            <div className="about-left">
              <div className="about-description">
                <ScrambledText 
                  className="scrambled-text-demo" 
                  radius={100} 
                  duration={1.2} 
                  speed={0.5} 
                  scrambleChars="01"
                >
                  Hello! I'm a dedicated third-year Computer Science student at Mapúa University, 
                  specializing in <strong>Artificial Intelligence</strong>. My journey in technology 
                  began with curiosity about how machines can learn and think, which has evolved 
                  into a deep passion for creating intelligent solutions that make a real impact.
                </ScrambledText>
                <ScrambledText 
                  className="scrambled-text-demo" 
                  radius={100} 
                  duration={1.2} 
                  speed={0.5} 
                  scrambleChars="01"
                >
                  With hands-on experience in both <strong>frontend and backend development</strong>, 
                  I enjoy the complete process of bringing ideas to life—from conceptualizing 
                  user experiences to architecting robust systems. I believe in writing clean, 
                  efficient code and staying updated with the latest technological advancements.
                </ScrambledText>
                <ScrambledText 
                  className="scrambled-text-demo" 
                  radius={100} 
                  duration={1.2} 
                  speed={0.5} 
                  scrambleChars="01"
                >
                  Beyond academics, I'm an active contributor to <strong>open-source projects </strong> 
                  and love collaborating with fellow developers. I find great satisfaction in 
                  solving complex problems and sharing knowledge with the tech community.
                </ScrambledText>
              </div>
            </div>
            
            <div className="about-right">
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Study</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="var(--text-accent)"/>
                      <path d="M21 9V7L15 6.5V4.5C15 3.4 14.6 2.4 13.9 1.7L12 0L10.1 1.7C9.4 2.4 9 3.4 9 4.5V6.5L3 7V9L9 8.5V21C9 21.6 9.4 22 10 22H14C14.6 22 15 21.6 15 21V8.5L21 9Z" fill="var(--text-secondary)" opacity="0.7"/>
                      <circle cx="12" cy="15" r="2" fill="var(--text-primary)"/>
                    </svg>
                  </div>
                  <h4>AI Specialist</h4>
                  <ScrambledText 
                    className="scrambled-text-demo" 
                    radius={100} 
                    duration={1.2} 
                    speed={0.5} 
                    scrambleChars="01"
                  >
                    Machine Learning & AI at Mapúa University
                  </ScrambledText>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="var(--text-accent)" strokeWidth="2" fill="none"/>
                      <path d="M8 21L16 21" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 17L12 21" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M6 7L10 11L18 7" stroke="var(--text-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4>Full-Stack Dev</h4>
                  <ScrambledText 
                    className="scrambled-text-demo" 
                    radius={100} 
                    duration={1.2} 
                    speed={0.5} 
                    scrambleChars="01"
                  >
                    Modern web technologies & scalable systems
                  </ScrambledText>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="var(--text-accent)"/>
                      <path d="M2 17L12 22L22 17" stroke="var(--text-secondary)" strokeWidth="2" fill="none"/>
                      <path d="M2 12L12 17L22 12" stroke="var(--text-primary)" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="7" r="1" fill="var(--text-primary)"/>
                    </svg>
                  </div>
                  <h4>Open Source</h4>
                  <ScrambledText 
                    className="scrambled-text-demo" 
                    radius={100} 
                    duration={1.2} 
                    speed={0.5} 
                    scrambleChars="01"
                  >
                    Contributing to community & emerging tech
                  </ScrambledText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;