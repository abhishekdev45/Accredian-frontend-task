// src/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between py-8">
      <div className="mb-8 md:mb-0">
        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
        <p className="mb-2">Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="text-blue-500">admissions@accredian.com</a></p>
        <p className="mb-2">Email us (For Product Management Queries): <a href="mailto:pm@accredian.com" className="text-blue-500">pm@accredian.com</a></p>
        <p className="mb-2">Data Science Admission Helpline: +91 9079653922 (9 AM - 7 PM)</p>
        <p className="mb-2">Product Management Admission Helpline: +91 9625811095</p>
        <p className="mb-2">Enrolled Student Helpline: +91 7969322507</p>
        <p className="mb-2">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" className="text-blue-500">Facebook</a>
          <a href="https://www.linkedin.com" className="text-blue-500">LinkedIn</a>
          <a href="https://www.twitter.com" className="text-blue-500">Twitter</a>
          <a href="https://www.youtube.com" className="text-blue-500">YouTube</a>
          <a href="https://www.instagram.com" className="text-blue-500">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
