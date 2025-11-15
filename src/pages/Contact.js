import React, { useState } from 'react';

const Contact = ({ data }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await fetch(data.contact.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      alert('Message sent!');
    } catch { alert('Error – try email.'); }
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="section contact">
      <div className="container">
        <h1>Contact</h1>
        <form className="contact-form" onSubmit={submit}>
          <input placeholder="Name" required value={form.name}
                 onChange={e => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder="Email" required value={form.email}
                 onChange={e => setForm({ ...form, email: e.target.value })} />
          <textarea placeholder="Message" required rows={5} value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })} />
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