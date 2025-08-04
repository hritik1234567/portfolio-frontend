import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import IntroductionSection from './sections/IntroductionSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import AchievementsSection from './sections/AchievementsSection';
import CertificatesSection from './sections/CertificatesSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#232526] via-[#304352] to-[#485563]">
        <Navbar />
        <main className="max-w-6xl mx-auto pt-36 px-4">
          <IntroductionSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
          <CertificatesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
