// src/components/Timeline/Education.jsx (Responsive)
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { educationData, certificationsData } from '../../models/data'
import './Timeline.css'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
  useEffect(() => {
    // Animate timeline items
    gsap.utils.toArray('.education-timeline-item').forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            onUpdate: (self) => {
              if (window.innerWidth < 768) {
                self.start = 'top 90%';
              }
            }
          }
        }
      )
    })

    // Animate certification cards
    gsap.from('.certification-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: '.certifications-grid',
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  return (
    <section id="education" className="timeline-section">
      <div className="section-container">
        <div className="timeline-header">
          <h2>Education & Certifications</h2>
          <p className="timeline-subtitle">Academic background and professional certifications</p>
        </div>
        
        {/* Education Timeline */}
        <div className="education-timeline">
          <h3 className="section-subtitle">Education</h3>
          <div className="timeline-container">
            {educationData.map((edu, index) => (
              <div key={edu.id} className="timeline-item education-timeline-item">
                <div className="timeline-card education-card">
                  {/* Timeline Dot */}
                  <div className="timeline-dot">
                    <div className="dot-inner"></div>
                    <div className="dot-pulse"></div>
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="timeline-content">
                    {/* Period Badge */}
                    <div className="period-badge">
                      <span className="period-text">{edu.period}</span>
                    </div>
                    
                    {/* Institution Header */}
                    <div className="card-header">
                      <h3 className="institution-name">{edu.institution}</h3>
                      <div className="education-icon">
                        <span>🎓</span>
                      </div>
                    </div>
                    
                    {/* Degree */}
                    <h4 className="degree-title">{edu.degree}</h4>
                    
                    {/* Achievements */}
                    <div className="achievements-container">
                      <div className="achievements-label">Achievements:</div>
                      <ul className="achievements-list">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="achievement-item">
                            <span className="achievement-icon">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Grade Info */}
                    <div className="grade-info">
                      <div className="grade-badge">
                        <span className="grade-icon">⭐</span>
                        <span className="grade-text">CGPA: 8.2/10.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications Grid */}
        <div className="certifications-section">
          <h3 className="section-subtitle">Professional Certifications</h3>
          <div className="certifications-grid">
            {certificationsData.map((cert) => (
              <div key={cert.id} className="certification-card">
                <div className="certification-icon">
                  <span className="icon">🏆</span>
                </div>
                <div className="certification-content">
                  <h4 className="certification-name">{cert.name}</h4>
                  <div className="certification-meta">
                    <div className="meta-item">
                      <span className="meta-icon">🏢</span>
                      <span className="meta-text">{cert.issuer}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-icon">📅</span>
                      <span className="meta-text">{cert.date}</span>
                    </div>
                  </div>
                  <div className="certification-badge">
                    <span className="badge-text">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education