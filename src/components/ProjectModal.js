import React from 'react';
import { X } from 'lucide-react';
// import { portfolioData } from '../data/portfolio.js';  // Remove unused

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="modal-metrics">{project.metrics}</div>
        <ul className="modal-tech">
          {project.tech.map(t => <li key={t}>{t}</li>)}
        </ul>
        <div className="modal-links">
          <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export { ProjectModal };