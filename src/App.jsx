import React from 'react';
import './App.css';

// Import components
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
