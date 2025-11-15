import React, { useState } from 'react';
// import { portfolioData } from '../data/portfolio.js';  // Remove unused

const Contact = ({ data }) => {  // Use prop data
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(data.contact.formspree, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => alert('Message sent!')).catch(() => alert('Error—try email.'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section contact">
      <div className="container">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
          <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
          <textarea placeholder="Message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
          <button type="submit">Send</button>
        </form>
        <div className="social-links">
          <a href={data.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={data.contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${data.contact.email}`}>Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;