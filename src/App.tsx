import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';
import { LanguageProvider } from './context/LanguageContext';

// Add import for SectionShortcuts
import SectionShortcuts from './components/SectionShortcuts';
import EducationExperience from './components/EducationExperience';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh();
    
    // Smooth scrolling setup
    const lenis = document.querySelector('[data-lenis-prevent]');
    if (lenis) {
      gsap.set(lenis, { overflow: 'hidden' });
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="relative bg-[#0d0d0d] text-white overflow-x-hidden">
        <CustomCursor />
        <LanguageToggle />
        {/* Section Shortcuts at the top */}
        <SectionShortcuts />
        <LoadingScreen />
        <Hero />
        <Skills />
        <Projects />
        <EducationExperience />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;