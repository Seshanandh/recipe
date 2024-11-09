// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>LOGO</h2>
          <p>Slogan or Company Tagline</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>WEEKLY THEMES</h3>
            <a href="#pre-sale">Pre-Sale FAQs</a>
            <a href="#submit-ticket">Submit a Ticket</a>
          </div>
          <div className="footer-column">
            <h3>SERVICES</h3>
            <a href="#theme-tweak">Theme Tweak</a>
            <a href="#custom">Custom Work</a>
          </div>
          <div className="footer-column">
            <h3>SHOWCASE</h3>
            <a href="#support">Support</a>
            <a href="#sponsor">Sponsor</a>
          </div>
          <div className="footer-column">
            <h3>ABOUT US</h3>
            <a href="#contact">Contact Us</a>
            <a href="#affiliates">Affiliates</a>
            <a href="#resources">Resources</a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#facebook" className="icon">F</a>
          <a href="#twitter" className="icon">T</a>
          <a href="#linkedin" className="icon">L</a>
          <a href="#instagram" className="icon">I</a>
          <a href="#youtube" className="icon">Y</a>
        </div>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
