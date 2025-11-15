import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Code, Brain, Mail } from 'lucide-react';

const Nav = () => (
  <nav className="nav">
    <div className="nav-logo">Quantum Reactor</div>
    <ul className="nav-links">
      <li><Link to="/"><Home size={20} /> About</Link></li>
      <li><Link to="/skills"><Code size={20} /> Skills</Link></li>
      <li><Link to="/projects"><Brain size={20} /> Projects</Link></li>
      <li><Link to="/contact"><Mail size={20} /> Contact</Link></li>
    </ul>
  </nav>
);

export { Nav };