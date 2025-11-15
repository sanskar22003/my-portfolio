import React from 'react';
// import { User } from 'lucide-react';  // Remove unused
// import { portfolioData } from '../data/portfolio.js';  // Remove unused

const About = ({ data }) => (  // Use prop data
  <section className="section about">
    <div className="container">
      <div className="bio-card">
        <img src={data.photo} alt={data.name} className="bio-photo" />
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <p>{data.bio}</p>
        <button className="cta-button">View Projects</button>
      </div>
    </div>
  </section>
);

export default About;