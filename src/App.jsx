import React from 'react';
import Navigation from './components/Navigation';
import DockNavbar from './components/DockNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <DockNavbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
