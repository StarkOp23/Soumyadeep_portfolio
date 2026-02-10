// src/components/Navbar/Navbar.jsx (Responsive with Mobile Menu)
import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { personalInfo } from '../../models/data'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Ensure navbar is always visible
    gsap.set('.navbar', { opacity: 1, y: 0 });

    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section
      const sections = ['hero', 'about', 'skills', 'experience', 'education', 'testimonials', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDownloadCV = () => {
    // Create a dummy CV file for download
    const cvContent = `SOUMYADEEP MAITI
Software Engineer | AI & Conversational AI Specialist

Experience: 2+ years in AI-powered chatbots and full-stack development
Specializations: Oracle Digital Assistant, Generative AI, Node.js, Cloud Solutions
Certifications: Oracle Cloud Infrastructure Generative AI Professional, Oracle Digital Assistant Specialist
Contact: ${personalInfo.email} | ${personalInfo.phone}
Location: ${personalInfo.location}
Available for opportunities in Conversational AI and Full Stack Development.`
    
    const blob = new Blob([cvContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Soumyadeep_Maiti_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavClick = (id, e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-text">SM</span>
          <span className="logo-sub">Portfolio</span>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(item.id, e)}
              >
                {item.label}
                <span className="nav-indicator"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Download Button */}
        {/* <button className="nav-download-btn desktop-only" onClick={handleDownloadCV}>
          Download CV
          <span className="download-icon">📥</span>
        </button> */}

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="menu-line line-1"></span>
          <span className="menu-line line-2"></span>
          <span className="menu-line line-3"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            {/* <div className="mobile-logo">
              <span className="logo-text">SM</span>
              <span className="logo-sub">Portfolio</span>
            </div> */}
            {/* <button 
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button> */}
          </div>
          
          <ul className="mobile-nav-menu">
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                >
                  {item.label}
                  <span className="mobile-nav-indicator"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            {/* <button className="mobile-download-btn" onClick={handleDownloadCV}>
              Download CV
              <span className="download-icon">📥</span>
            </button> */}
            
            <div className="mobile-contact-info">
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                <span className="contact-icon">✉️</span>
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="contact-link">
                <span className="contact-icon">📱</span>
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navbar