// src/components/Timeline/Experience.jsx (Updated)
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experienceData } from '../../models/data'
import './Timeline.css'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
  useEffect(() => {
    // Animate timeline items
    gsap.utils.toArray('.experience-timeline-item').forEach((item, i) => {
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
  }, [])

  return (
    <section id="experience" className="timeline-section">
      <div className="section-container">
        <div className="timeline-header">
          <h2>Work Experience</h2>
          <p className="timeline-subtitle">Professional journey and career milestones</p>
        </div>
        
        {/* Experience Timeline */}
        <div className="experience-timeline">
          <div className="timeline-container">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="timeline-item experience-timeline-item">
                <div className="timeline-card experience-card">
                  {/* Timeline Dot */}
                  <div className="timeline-dot">
                    <div className="dot-inner"></div>
                    <div className="dot-pulse"></div>
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="timeline-content">
                    {/* Period Badge */}
                    <div className="period-badge">
                      <span className="period-text">{exp.period}</span>
                    </div>
                    
                    {/* Company Header */}
                    <div className="card-header">
                      <h3 className="company-name">{exp.company}</h3>
                      <div className="location-tag">
                        <span className="location-icon">📍</span>
                        <span className="location-text">{exp.location || 'Remote'}</span>
                      </div>
                    </div>
                    
                    {/* Position */}
                    <h4 className="position-title">{exp.position}</h4>
                    
                    {/* Description */}
                    <div className="description-container">
                      <ul className="description-list">
                        {exp.description.map((item, i) => (
                          <li key={i} className="description-item">
                            <span className="bullet">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="technologies-container">
                      <div className="tech-label">Technologies Used:</div>
                      <div className="tech-tags">
                        {exp.tech.map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievement Badge if any */}
                    {exp.achievement && (
                      <div className="card-footer">
                        <div className="achievement-badge">
                          <span className="achievement-icon">🏆</span>
                          <span className="achievement-text">{exp.achievement}</span>
                        </div>
                      </div>
                    )}
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

export default Experience