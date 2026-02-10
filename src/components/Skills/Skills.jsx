import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const skillsRef = useRef()
  const carouselRef = useRef()

  // Import skillData from data.js structure
  const skillData = {
    "Programming Languages": [
      { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    "Frontend Technologies": [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
    ],
    "Backend Technologies": [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
    ],
    "API Development": [
      { name: "REST API Design & Integration", icon: "https://img.icons8.com/fluency/96/api-settings.png" }
    ],
    "Databases": [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ],
    "Cloud Platforms": [
      { name: "Oracle Cloud Infrastructure", icon: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
    ],
    "AI Technologies": [
      { name: "Generative AI", icon: "https://img.icons8.com/fluency/96/artificial-intelligence.png" },
      { name: "Large Language Models", icon: "https://img.icons8.com/fluency/96/brain.png" },
      { name: "RAG", icon: "https://miro.medium.com/0*Vj3xryR54H9H4_TB.jpg" },
      { name: "Conversational AI", icon: "https://img.icons8.com/fluency/96/chatbot.png" },
      { name: "Amazon Q", icon: "https://upload.wikimedia.org/wikipedia/en/5/5b/Amazon-q-logo.jpg" },
      { name: "Amazon Bedrock", icon: "https://img.icons8.com/fluency/96/cloud.png" }
    ],
    "Enterprise Platforms": [
      { name: "Oracle Digital Assistant", icon: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg" },
      { name: "Oracle HCM", icon: "https://img.icons8.com/fluency/96/organization.png" }
    ],
    "Tools": [
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
    ]
  }

  const categoryColors = {
    "Programming Languages": { gradient: 'linear-gradient(135deg, #f7df1e 0%, #f0db4f 100%)', accent: '#f7df1e' },
    "Frontend Technologies": { gradient: 'linear-gradient(135deg, #e44d26 0%, #264de4 100%)', accent: '#e44d26' },
    "Backend Technologies": { gradient: 'linear-gradient(135deg, #68a063 0%, #339933 100%)', accent: '#68a063' },
    "API Development": { gradient: 'linear-gradient(135deg, #00d4ff 0%, #0080ff 100%)', accent: '#00d4ff' },
    "Databases": { gradient: 'linear-gradient(135deg, #47a248 0%, #4db33d 100%)', accent: '#47a248' },
    "Cloud Platforms": { gradient: 'linear-gradient(135deg, #ff9900 0%, #f90 100%)', accent: '#ff9900' },
    "AI Technologies": { gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)', accent: '#ff6b6b' },
    "Enterprise Platforms": { gradient: 'linear-gradient(135deg, #f80000 0%, #c74634 100%)', accent: '#f80000' },
    "Tools": { gradient: 'linear-gradient(135deg, #ff6c37 0%, #ff9068 100%)', accent: '#ff6c37' }
  }

  const categories = Object.keys(skillData)

  useEffect(() => {
    // Auto rotate categories
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % categories.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPaused, categories.length])

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % categories.length)
  }

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const currentCategory = categories[activeCategory]
  const currentSkills = skillData[currentCategory]
  const currentColors = categoryColors[currentCategory]

  return (
    <section id="skills" className="skills-section-carousel" ref={skillsRef}>
      {/* Animated Background */}
      <div className="skills-bg-elements">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="skills-bg-blob" 
            style={{ 
              animationDelay: `${i * 1.2}s`,
              width: `${120 + i * 30}px`,
              height: `${120 + i * 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>

      <div className="skills-container-carousel">
        {/* Header */}
        <div className="skills-header-carousel">
          <div className="header-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">Tech Stack</span>
          </div>
          <h2 className="skills-title-carousel">
            Technical
            <span className="title-gradient"> Expertise</span>
          </h2>
          <p className="skills-subtitle-carousel">
            Comprehensive overview of technologies and tools I work with
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="category-pills">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`category-pill ${index === activeCategory ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
              style={{
                '--pill-gradient': categoryColors[category].gradient,
                '--pill-accent': categoryColors[category].accent
              }}
            >
              <span className="pill-dot"></span>
              {category}
            </button>
          ))}
        </div>

        {/* Skills Carousel */}
        <div 
          className="skills-carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Category Title Banner */}
          <div 
            className="category-banner"
            style={{ 
              background: currentColors.gradient,
            }}
          >
            <div className="banner-content">
              <h3 className="banner-title">{currentCategory}</h3>
              {/* <div className="banner-count">
                <span className="count-number">{currentSkills.length}</span>
                <span className="count-label">Skills</span>
              </div> */}
            </div>
          </div>

          {/* Skills Display */}
          <div className="skills-carousel-container" ref={carouselRef}>
            <div className="skills-display">
              {currentSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="skill-item"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--skill-gradient': currentColors.gradient
                  }}
                >
                  <div className="skill-icon-wrapper">
                    <div className="skill-icon-bg"></div>
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon-img"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="skill-icon-fallback">
                      {skill.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="carousel-controls">
            <button 
              className="control-arrow prev"
              onClick={prevCategory}
              aria-label="Previous category"
            >
              ←
            </button>
            
            <div className="carousel-dots">
              {categories.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === activeCategory ? 'active' : ''}`}
                  onClick={() => setActiveCategory(index)}
                  aria-label={`Go to ${categories[index]}`}
                  style={{
                    '--dot-color': categoryColors[categories[index]].accent
                  }}
                />
              ))}
            </div>
            
            <button 
              className="control-arrow next"
              onClick={nextCategory}
              aria-label="Next category"
            >
              →
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="category-progress">
          {categories.map((_, index) => (
            <div
              key={index}
              className={`progress-segment ${index === activeCategory ? 'active' : ''} ${index < activeCategory ? 'completed' : ''}`}
              style={{
                '--progress-gradient': categoryColors[categories[index]].gradient
              }}
            />
          ))}
        </div>

        {/* Quick Stats */}
        {/* <div className="skills-stats">
          <div className="stat-card">
            <div className="stat-icon">💻</div>
            <div className="stat-content">
              <div className="stat-number">{Object.values(skillData).flat().length}+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <div className="stat-number">{categories.length}</div>
              <div className="stat-label">Categories</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚡</div>
            <div className="stat-content">
              <div className="stat-number">100%</div>
              <div className="stat-label">Proficiency</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Skills