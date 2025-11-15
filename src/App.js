import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Remove Link
import { ReactorCanvas } from './components/ReactorCore';
import { Alerts } from './components/Alerts';
import { Chatbot } from './components/Chatbot';
import { Nav } from './components/Nav';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { portfolioData } from './data/portfolio.js';
import './styles.css';

function App() {
  const [initiated, setInitiated] = useState(false);

  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="ui-overlay">
          <ReactorCanvas initiated={initiated} />
          <Alerts />
          <Chatbot />
          {!initiated ? (
            <button className="init-button" onClick={() => setInitiated(true)}>
              Initiate Fission
            </button>
          ) : null}
          <Routes>
            <Route path="/" element={<About data={portfolioData} />} />
            <Route path="/skills" element={<Skills data={portfolioData} />} />
            <Route path="/projects" element={<Projects data={portfolioData} />} />
            <Route path="/contact" element={<Contact data={portfolioData} />} />
          </Routes>
        </div>
        <footer className="footer">
          <p>&copy; 2025 {portfolioData.name}. All rights reserved. | <a href={portfolioData.resume} download>Download Resume</a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;