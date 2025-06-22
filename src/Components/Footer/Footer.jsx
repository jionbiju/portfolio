import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <p className="footer-text">© {new Date().getFullYear()} Jion Biju. All rights reserved.</p>
      <div className="footer-icons">
        <a href="https://linkedin.com/in/jion-biju-738072283" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/jion__17" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/jionbiju" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
