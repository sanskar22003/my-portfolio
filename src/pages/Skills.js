import React from 'react';
import { Code, Brain, Leaf } from 'lucide-react';  // Add this import

const Skills = ({ data }) => (
  <section className="section skills">
    <div className="container">
      <h1>Skills</h1>
      <div className="skills-grid">
        {data.skills.map((skill, i) => (
          <div key={i} className="skill-card">
            <div className={`skill-icon ${skill.category.toLowerCase()}`}>
              {skill.category === 'DevOps' && <Code size={24} />}
              {skill.category === 'AI' && <Brain size={24} />}
              {skill.category === 'Green Tech' && <Leaf size={24} />}
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;