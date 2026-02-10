// src/components/Testimonials/Testimonials.jsx (Updated - Carousel Style)
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { testimonialsData } from '../../models/data'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

const Testimonials = () => {
  const testimonialsRef = useRef()
  const carouselRef = useRef()
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    // Animate section on scroll
    gsap.from(testimonialsRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  useEffect(() => {
    // Auto rotate carousel
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % testimonialsData.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path 
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill={i < rating ? "#FFD700" : "rgba(255, 255, 255, 0.2)"}
              />
            </svg>
          </span>
        ))}
      </div>
    )
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonialsData.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }
    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  // Generate gradient colors based on index
  const getGradient = (index) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section id="testimonials" className="testimonials-section" ref={testimonialsRef}>
      {/* Animated background elements */}
      <div className="testimonials-bg-elements">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="bg-element" 
            style={{ 
              animationDelay: `${i * 0.8}s`,
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>

      <div className="section-container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="header-left">
            <div className="section-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Trust & Recognition</span>
            </div>
            <h2 className="testimonials-title">
              Voices of
              <span className="title-highlight"> &nbsp; Validation</span>
            </h2>
            <p className="testimonials-subtitle">
              Professional endorsements that highlight my expertise and collaborative spirit
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carousel-container" ref={carouselRef}>
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonialsData.map((testimonial, index) => (
                <div key={testimonial.id} className="carousel-slide">
                  <div 
                    className="testimonial-card-compact"
                    style={{ '--card-gradient': getGradient(index) }}
                  >
                    {/* Decorative gradient overlay */}
                    <div className="card-gradient-overlay"></div>
                    
                    {/* Content */}
                    <div className="card-content">
                      <div className="quote-icon">❝</div>
                      
                      <p className="testimonial-text-compact">
                        {testimonial.content}
                      </p>
                      
                      {/* Skill Tags */}
                      {testimonial.skills && testimonial.skills.length > 0 && (
                        <div className="skill-tags-compact">
                          {testimonial.skills.slice(0, 3).map((skill, i) => (
                            <span key={i} className="skill-tag-compact">{skill}</span>
                          ))}
                          {testimonial.skills.length > 3 && (
                            <span className="skill-tag-compact more">+{testimonial.skills.length - 3}</span>
                          )}
                        </div>
                      )}
                      
                      {/* Footer */}
                      <div className="card-footer">
                        <div className="author-section">
                          <div 
                            className="author-avatar-compact"
                            style={{ background: getGradient(index) }}
                          >
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="author-info-compact">
                            <h4 className="author-name-compact">{testimonial.name}</h4>
                            <p className="author-role-compact">{testimonial.role}</p>
                            <p className="author-company-compact">
                              <span className="company-icon">🏢</span>
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="rating-section-compact">
                          {renderStars(testimonial.rating)}
                          <span className="rating-text-compact">{testimonial.rating}/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="carousel-nav">
            <button 
              className="nav-btn nav-prev" 
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            
            <div className="carousel-indicators">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === activeSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-btn nav-next" 
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-value">{testimonialsData.length}+</div>
            <div className="stat-label">Endorsements</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">4.9</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-value">100%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials