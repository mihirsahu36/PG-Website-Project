import React from 'react';
import GoogleMapEmbed from './GoogleMapEmbed';
import ContactForm from './ContactForm';
import '../Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id="contact">
      <div className="contact-content">
        <div className="map-container">
          <GoogleMapEmbed />
        </div>
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: sribalajipg@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: +123 456 7890</p>
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
