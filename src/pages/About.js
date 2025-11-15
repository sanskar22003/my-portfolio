import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkFission = () => {
      const initiated = document.body.classList.contains('fission-initiated');
      if (initiated && !isVisible) {
        setTimeout(() => setIsVisible(true), 800);
      }
    };

    checkFission();
    const observer = new MutationObserver(checkFission);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section className="section about">
      <div className="container home-wrapper">
        <div className={`avatar-wrapper ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <img src={data.photo} alt={data.name} className="bio-photo" />
        </div>

        <div className={`bio-text ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <h1>{data.name}</h1>
          <h2>{data.title}</h2>
          <p style={{ lineHeight: 1.6 }}>{data.bio}</p>
          <NavLink to="/projects">
            <button className="cta-button">View Projects</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default About;