import React from 'react';

function GoogleMapEmbed() {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2531.6518506370617!2d77.71626787731668!3d12.966675163899723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718631921360!5m2!1sen!2sin"
      width="600"
      height="1050"
      style={{ border: 1 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default GoogleMapEmbed;
