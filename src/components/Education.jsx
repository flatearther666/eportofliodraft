import React, { useState } from 'react';
import Stepper, { Step } from './Stepper';

const Education = () => {
  const educationData = [
    {
      id: 1,
      year: "2009-2013",
      institution: "Morning Dew Montessori",
      level: "Preschool & Elementary",
      description: "Early Childhood Education",
      details: "Started educational journey with Montessori approach, fostering creativity, independence, and love for learning from an early age.",
      logo: "/mdm.png"
    },
    {
      id: 2,
      year: "2013-2014",
      institution: "Greenland Academy",
      level: "Elementary",
      description: "Primary Education",
      details: "Continued elementary education with focus on building fundamental academic skills and character development.",
      logo: "/ga.png"
    },
    {
      id: 3,
      year: "2014-2021",
      institution: "Agapeland Christian Academy",
      level: "Elementary & Junior High School",
      description: "Primary and Secondary Education",
      details: "Completed both elementary and junior high school education. Developed strong academic foundation and discovered passion for technology and problem-solving.",
      logo: "/aca.png"
    },
    {
      id: 4,
      year: "2021-2023",
      institution: "Mapúa University Intramuros",
      level: "Senior High School",
      description: "STEM Track",
      details: "Completed Senior High School with STEM track, focusing on Science, Technology, Engineering, and Mathematics. Developed strong foundation in programming and mathematical concepts.",
      logo: "/mu.png"
    },
    {
      id: 5,
      year: "2023-Present",
      institution: "Mapúa University Makati",
      level: "College",
      description: "Bachelor of Science in Computer Science",
      details: "Currently pursuing my degree in Computer Science with specialization in Artificial Intelligence. Maintaining excellent academic performance while actively participating in coding competitions and tech communities.",
      logo: "/mu.png"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="gradient-text">Education</h2>
          <p>My academic journey through the years</p>
        </div>
        
        <div className="education-stepper-container">
          <Stepper 
            initialStep={1} 
            onStepChange={(step) => { 
              console.log(`Current step: ${step}`); 
            }} 
            onFinalStepCompleted={() => console.log("Education journey completed!")} 
            backButtonText="Previous" 
            nextButtonText="Next"
            stepCircleContainerClassName="education-stepper"
            contentClassName="education-step-content-wrapper"
            footerClassName="education-footer"
          > 
            {educationData.map((edu, index) => (
              <Step key={edu.id}> 
                <div className="education-step">
                  <div className="education-step-header">
                    <div className="education-logo">
                      <img src={edu.logo} alt={edu.institution} />
                    </div>
                    <div className="education-info">
                      <h3 className="institution-name">{edu.institution}</h3>
                      <p className="education-level">{edu.level}</p>
                      <span className="education-year">{edu.year}</span>
                    </div>
                  </div>
                  <div className="education-step-content">
                    <p className="education-description">{edu.description}</p>
                    <p className="education-details">{edu.details}</p>
                  </div>
                </div>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </section>
  );
};

export default Education;