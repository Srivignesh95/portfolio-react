import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      {submitted && <p className="success-message">Thanks for reaching out!</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={formData.name} required onChange={handleChange} />
        </label>

        <label>
          Email
          <input type="email" name="email" value={formData.email} required onChange={handleChange} />
        </label>

        <label>
          Message
          <textarea name="message" value={formData.message} required onChange={handleChange} />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
