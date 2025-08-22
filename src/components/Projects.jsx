import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = {
    ml: [
      {
        name: 'Heart Disease Risk Prediction',
        description: 'A machine learning project for predicting heart disease risk based on patient data. Models: Logistic Regression, Support Vector Classification (SVC), and Random Forest Classifier.',
        image: 'hdrp.png',
        tags: ['Python'],
        github: 'https://github.com/flatearther666/Heart-Disease-Risk-Prediction',
        category: 'ml'
      },
      {
        name: 'Earfquake',
        description: 'A machine learning tool for analyzing earthquake data and predicting seismic activities using advanced algorithms and data visualization.',
        image: 'eq.png',
        tags: ['Streamlit', 'Python'],
        liveDemo: 'https://earfquake-atjsxhtyuvwrcjwyfbjyx2.streamlit.app/',
        github: 'https://github.com/clivebixby0/EARFQUAKE/blob/main/EARFQUAKE/EARFQUAKE.py',
        category: 'ml'
      },
      {
        name: 'Job Trends Analysis',
        description: 'A data warehousing project analyzes over 5,000 global job postings from Google Jobs using data warehousing and mining techniques to uncover trends in in-demand skills and roles.',
        image: 'jpt.png',
        tags: ['Python', 'PostgreSQL'],
        github: 'https://github.com/flatearther666/Analysis-of-Job-Market-Trends-Using-Google-Job-Postings',
        category: 'ml'
      }
    ],
    software: [
      {
        name: 'Petchingu',
        description: 'A Pet Social Platform connects pet lovers for adoption, lost-and-found alerts, and social interaction, creating a community that supports pet care and companionship.',
        image: 'petchingu.png',
        tags: ['React', 'AppWrite', 'JavaScript', 'SCSS'],
        github: 'https://github.com/clivebixby0/petchinguuu',
        category: 'software'
      },
      {
        name: 'MyApt',
        description: 'An Apartment Management System streamlines tasks like rent collection, maintenance, and tenant management, improving efficiency and communication.',
        image: 'myapt.png',
        tags: ['React', 'Firebase', 'JavaScript', 'SCSS'],
        liveDemo: 'https://myapthome.space/login',
        github: 'https://github.com/clivebixby0/myapt-july8-2025-main',
        category: 'software'
      }
    ]
  };

  const allProjects = [...projects.ml, ...projects.software];
  
  const getFilteredProjects = () => {
    if (activeCategory === 'all') return allProjects;
    if (activeCategory === 'ml') return projects.ml;
    if (activeCategory === 'software') return projects.software;
    return [];
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-content">
          <div className="section-header">
            <h2 className="gradient-text">My Projects</h2>
            <p>A showcase of my work in Machine Learning and Software Development</p>
          </div>
          
          <div className="project-filters">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Projects
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'ml' ? 'active' : ''}`}
              onClick={() => setActiveCategory('ml')}
            >
              Machine Learning
            </button>
            <button 
              className={`filter-btn ${activeCategory === 'software' ? 'active' : ''}`}
              onClick={() => setActiveCategory('software')}
            >
              Software Development
            </button>
          </div>

          <div className="projects-grid">
            {getFilteredProjects().map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.name}</h3>
                  <span className={`project-category ${project.category}`}>
                    {project.category === 'ml' ? 'ML' : 'Software'}
                  </span>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tags.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link demo-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link github-link"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;