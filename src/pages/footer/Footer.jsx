// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file here

function Footer() {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
