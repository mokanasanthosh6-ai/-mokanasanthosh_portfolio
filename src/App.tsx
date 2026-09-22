import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundVisual from './components/BackgroundVisual';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LearningJourney from './components/LearningJourney';
import SocialAndContact from './components/SocialAndContact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080c15] text-[#e2e8f0] selection:bg-cyan-500/20 selection:text-cyan-300 font-sans">
      {/* Dynamic Background Network & Glow */}
      <BackgroundVisual />

      {/* Main Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main id="main-content" className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Learning Journey Timeline */}
        <LearningJourney />

        {/* 6. Social Links & Contact Section */}
        <SocialAndContact />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
