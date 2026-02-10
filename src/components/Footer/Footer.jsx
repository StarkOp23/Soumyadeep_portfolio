// src/components/Footer/Footer.jsx (Updated with horizontal layout)
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { personalInfo } from '../../models/data'
import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";


const Footer = () => {
  useEffect(() => {
    // Footer animation
    gsap.from('.footer-content', {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.footer-section',
        start: 'top 90%',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Let's Connect Section - Horizontal Layout */}
        <div className="footer-connect-section">
          <div className="connect-content">
            <h3 className="connect-title">Let's Connect</h3>
            <p className="connect-description">
              Have a project in mind? Let's discuss how we can work together
              to bring your ideas to life. I'm always open to new opportunities.
            </p>
          </div>
          <div className="connect-actions">
            <a href={`mailto:${personalInfo.email}`} className="connect-btn">
              Get In Touch
              <span className="btn-icon">✉️</span>
            </a>
            <a href={personalInfo.github} className="connect-btn-outline" target="_blank" rel="noopener noreferrer">
              View GitHub
              <span className="btn-icon">⚡</span>
            </a>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-logo">
            <h3>{personalInfo.name}</h3>
            <p>Building exceptional digital experiences</p>
            <div className="footer-contact-info">
              <p>📧 {personalInfo.email}</p>
              <p>📍 Pune, India</p>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Follow Me</h4>
            <div className="social-icons-horizontal">
              <a href={personalInfo.github} className="social-icon" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub className="icon" />
              </a>
              <a href={personalInfo.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin className="icon" />
              </a>
              <a href={personalInfo.instagram} className="social-icon" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FaInstagram className="icon" />
              </a>
              <a href={personalInfo.facebook} className="social-icon" target="_blank" rel="noopener noreferrer" title="Facebook">
                <FaFacebook className="icon" />
              </a>
              
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer