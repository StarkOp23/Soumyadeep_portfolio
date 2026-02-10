// src/App.jsx (Updated)
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Timeline/Experience'
import Education from './components/Timeline/Education'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './styles/global.css'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize GSAP animations AFTER components are mounted
    const initAnimations = () => {
      // Animate sections on scroll
      gsap.utils.toArray('.section-animate').forEach((section, i) => {
        // First make section visible immediately
        gsap.set(section, { opacity: 1, y: 0 });
        
        // Then set up scroll animation
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse',
              refreshPriority: 1,
            }
          }
        )
      })
      
      // Force ScrollTrigger refresh
      ScrollTrigger.refresh();
    }
    
    // Small delay to ensure DOM is ready
    setTimeout(initAnimations, 100);
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="section-animate">
          <About />
        </section>
        <section id="skills" className="section-animate">
          <Skills />
        </section>
        <section id="experience" className="section-animate">
          <Experience />
        </section>
        <section id="education" className="section-animate">
          <Education />
        </section>
        <section id="testimonials" className="section-animate">
          <Testimonials />
        </section>
        <section id="contact" className="section-animate">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App