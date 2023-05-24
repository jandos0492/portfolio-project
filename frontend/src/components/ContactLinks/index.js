import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactLinks.css';

const ContactLinks = () => {
  const [activeLink, setActiveLink] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const iconSize = windowWidth < 600 ? 'lg' : '2x';

  return (
    <div className="contact-links">
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink('Resume')}
        onMouseLeave={() => setActiveLink('')}
      >
        <a href="https://docs.google.com/document/d/1mNv8V8YEZWieV6DlmS5BaSbmVJxMaHaU5iwM2madA1s/export?format=pdf" download className="link-content">
          <FontAwesomeIcon icon={faFileAlt} size={iconSize} />
          {activeLink === 'Resume' && <span className="link-text">Resume</span>}
        </a>
      </div>
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink('Github')}
        onMouseLeave={() => setActiveLink('')}
      >
        <a
          href="https://github.com/jandos0492"
          target="_blank" rel="noopener noreferrer"
          className="link-content">
          <FontAwesomeIcon icon={faGithub} size={iconSize} />
          {activeLink === 'Github' && <span className="link-text">Github</span>}
        </a>
      </div>
      <div
        className="contact-link"
        onMouseEnter={() => setActiveLink('LinkedIn')}
        onMouseLeave={() => setActiveLink('')}
      >
        <a 
          href="https://www.linkedin.com/in/zhandos-arinov-19046a156/" 
          target="_blank" rel="noopener noreferrer"
          className="link-content">
          <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
          {activeLink === 'LinkedIn' && <span className="link-text">LinkedIn</span>}
        </a>
      </div>
    </div>
  );
};

export default ContactLinks;
