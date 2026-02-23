import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import Terminal from './components/Terminal';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Finale from './components/Finale';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-black selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <Terminal />
        <ServicesSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Finale />
      </main>
      <footer className="py-12 px-6 bg-black text-white text-center border-t border-white/20">
        <p className="font-bold uppercase tracking-widest text-[10px]">© 2026 Aaruhya Portfolio — Systems Operational</p>
      </footer>
      <ScrollToTop />
    </div>
  );
}

export default App;
