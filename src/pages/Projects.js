import React, { useState } from 'react';
import { ProjectModal } from '../components/ProjectModal';  // Add this import

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="projects-grid">
          {data.projects.map(proj => (
            <div key={proj.id} className="project-card" onClick={() => setSelectedProject(proj)}>
              <img src={proj.image} alt={proj.title} />
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-metrics">{proj.metrics}</div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;