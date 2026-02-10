// src/components/About/About.jsx (Clean Version)
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { personalInfo } from '../../models/data'
import './About.css'

const About = () => {
  const aboutRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const highlightsRef = useRef()

  useEffect(() => {
    // About section animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
      .from(descriptionRef.current.querySelectorAll('.text-line'), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.4')
      .from(highlightsRef.current.querySelectorAll('.highlight-item'), {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out'
      }, '-=0.3')
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
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="section-container">
        {/* Decorative Elements */}
        <div className="about-decorative">
          <div className="decorative-line line-1"></div>
          <div className="decorative-line line-2"></div>
        </div>

        {/* Typographic Header */}
        <div className="about-header">
          <div className="header-decorative">
            <span className="header-label">ABOUT ME</span>
          </div>
          <h1 className="about-title" ref={titleRef}>
            <span className="title-line">
              <span className="title-gradient">Building</span>
            </span>
            <span className="title-line">
              <span className="title-highlight">Intelligent</span>
            </span>
            <span className="title-line">
              <span className="title-sub">Conversations</span>
            </span>
          </h1>
        </div>

        <div className="about-content-grid">
          {/* Left Column - Main description */}
          <div className="about-description" ref={descriptionRef}>
            <div className="text-line">
              <p className="typing-text">
                I'm a <span className="text-accent">Software Engineer</span> with
                <span className="text-highlight"> 2+ years</span> of experience in
                <span className="text-accent"> AI-powered chatbots</span> and
                cloud-native solutions. I specialize in creating intelligent systems
                that enhance customer engagement through natural conversations.
              </p>
            </div>

            <div className="text-line">
              <p className="typing-text">
                My expertise spans <span className="text-accent">Oracle Digital Assistant</span>,
                <span className="text-accent"> Generative AI</span>, and full-stack development.
                I've delivered solutions that improved response accuracy by
                <span className="text-highlight"> 25%</span> for enterprise clients.
              </p>
            </div>

            <div className="text-line">
              <p className="typing-text">
                I believe in <span className="text-accent">code that communicates</span>—not just
                with machines, but with people. Each project is an opportunity to push
                the boundaries of what's possible with conversational AI.
              </p>
            </div>
          </div>

          {/* Right Column - Stats and highlights */}
          <div className="about-stats" ref={highlightsRef}>
            <div className="stats-grid">
              <div className="stat-card highlight-item">
                <div className="stat-icon">🤖</div>
                <div className="stat-content">
                  <h3 className="stat-number">5+</h3>
                  <p className="stat-label">AI Projects</p>
                  <div className="stat-bar">
                    <div className="stat-progress" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              <div className="stat-card highlight-item">
                <div className="stat-icon">🏆</div>
                <div className="stat-content">
                  <h3 className="stat-number">3</h3>
                  <p className="stat-label">Certifications</p>
                  <div className="stat-bar">
                    <div className="stat-progress" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              <div className="stat-card highlight-item">
                <div className="stat-icon">⚡</div>
                <div className="stat-content">
                  <h3 className="stat-number">25%</h3>
                  <p className="stat-label">Accuracy Boost</p>
                  <div className="stat-bar">
                    <div className="stat-progress" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>

              <div className="stat-card highlight-item">
                <div className="stat-icon">💬</div>
                <div className="stat-content">
                  <h3 className="stat-number">10K+</h3>
                  <p className="stat-label">Monthly Users</p>
                  <div className="stat-bar">
                    <div className="stat-progress" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy section */}
            <div className="philosophy-section">
              <div className="philosophy-header">
                <span className="philosophy-icon">💡</span>
                <h4>Development Philosophy</h4>
              </div>
              <div className="philosophy-points">
                <div className="philosophy-point">
                  <span className="point-bullet">•</span>
                  <span>Intelligence should be conversational</span>
                </div>
                <div className="philosophy-point">
                  <span className="point-bullet">•</span>
                  <span>Clean code enables scalable solutions</span>
                </div>
                <div className="philosophy-point">
                  <span className="point-bullet">•</span>
                  <span>Continuous learning drives innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="about-cta-section">
          <div className="cta-content">
            <div className="cta-text">
              <h3 className="cta-title">Ready to Build AI Solutions?</h3>
              <p className="cta-subtitle">Let's create intelligent conversational experiences together</p>
            </div>
            <div className="cta-actions">
              <button className="btn btn-primary cta-btn" onClick={handleDownloadCV}>
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">↓</span>
              </button>
              <a href="#contact" className="btn btn-outline cta-btn">
                <span className="btn-text">Get In Touch</span>
                <span className="btn-icon">→</span>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default About