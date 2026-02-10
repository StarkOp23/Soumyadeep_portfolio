// src/components/Hero/Hero.jsx (Simplified)
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { personalInfo } from '../../models/data'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef()
  const titleRef = useRef()
  const subtitleRef = useRef()
  const buttonsRef = useRef()
  const statsRef = useRef()

  useEffect(() => {
    // Simple fade-in animation
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
      .from(subtitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.3')
      .from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
      }, '-=0.2')
      .from(statsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out'
      }, '-=0.1')
  }, [])

  const handleDownloadCV = () => {
    try {
      // Get the resume URL from personalInfo
      const resumeUrl = personalInfo.resume;

      // Check if it's a Google Drive link
      if (resumeUrl.includes('drive.google.com')) {
        // Convert Google Drive shareable link to direct download link
        const fileId = resumeUrl.match(/\/d\/(.+?)\/|id=(.+?)(&|$)/);
        const id = fileId ? (fileId[1] || fileId[2]) : '';

        if (id) {
          const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${id}`;

          // Create a temporary anchor element
          const link = document.createElement('a');
          link.href = directDownloadUrl;
          link.setAttribute('download', `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');

          // Trigger download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          // Fallback: Open in new tab
          window.open(resumeUrl, '_blank');
        }
      } else {
        // For direct PDF links
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: Open the link in new tab
      window.open(personalInfo.resume, '_blank');
    }
  }

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="section-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Available for Work</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title" ref={titleRef}>
            <span className="title-line">Hi, I'm </span>
            <span className="title-name">{personalInfo.name}</span>
            <span className="title-line">—</span>
            <span className="title-role">{personalInfo.title}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle" ref={subtitleRef}>
            I create modern web applications with clean code and great user experiences.
            Specializing in Ai, Node.js, and cloud technologies.
          </p>

          {/* Buttons */}
          <div className="hero-buttons" ref={buttonsRef}>
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
              <span className="btn-icon">→</span>
            </button>

            {/* <button 
              className="btn btn-outline"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <span className="btn-icon">↓</span>
            </button> */}

            <button
              className="btn btn-secondary"
              onClick={handleDownloadCV}
            >
              Download CV
              <span className="btn-icon">📄</span>
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats" ref={statsRef}>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>

          {/* Tech Stack */}
          {/* <div className="hero-tech">
            <span className="tech-label">Tech Stack:</span>
            <div className="tech-icons">
              <span className="tech-icon" title="React">⚛️</span>
              <span className="tech-icon" title="TypeScript">📘</span>
              <span className="tech-icon" title="Node.js">🟢</span>
              <span className="tech-icon" title="AWS">☁️</span>
              <span className="tech-icon" title="Python">🐍</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero