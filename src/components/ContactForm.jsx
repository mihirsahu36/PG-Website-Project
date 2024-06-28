import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        alert('Failed to send the message, please try again');
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Please fill out the form below and we'll get in touch with you as soon as possible.</p>
      <label>
        <FontAwesomeIcon icon={faUser} /> Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        <FontAwesomeIcon icon={faEnvelope} /> Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        <FontAwesomeIcon icon={faCommentDots} /> Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /> Send</button>
    </form>
  );
}

export default ContactForm;
