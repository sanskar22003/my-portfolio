import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

function AppContent() {
  const [initiated, setInitiated] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (initiated) {
      document.body.classList.add('fission-initiated');
    } else {
      document.body.classList.remove('fission-initiated');
    }
  }, [initiated]);

  return (
    <div className="app">
      <Nav />
      <div className="ui-overlay">
        <ReactorCanvas initiated={initiated} setInitiated={setInitiated} />
        {isHome && <Alerts />}
        {isHome && <Chatbot />}
        <Routes>
          <Route path="/" element={<About data={portfolioData} />} />
          <Route path="/skills" element={<Skills data={portfolioData} />} />
          <Route path="/projects" element={<Projects data={portfolioData} />} />
          <Route path="/contact" element={<Contact data={portfolioData} />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>© 2025 {portfolioData.name}. All rights reserved. |
          <a href={portfolioData.resume} download> Download Resume</a>
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}