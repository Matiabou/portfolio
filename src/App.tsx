import { useState, useEffect } from 'react';
import { Navigation } from './components/Navbar';
import { HeroSection } from './components/Inicio';
import { AboutSection } from './components/SobreMi';
import { ProjectsSection } from './components/Proyectos';
import { CertificationsSection } from './components/Certificaciones';
import { ContactSection } from './components/Contacto';
import { Footer } from './components/Footer';


const App = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa según el scroll
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'certificaciones', 'contacto'];
      const viewportHeight = window.innerHeight;
      let maxVisibleSection = null;
      let maxVisibleArea = 0;

      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calcular el área visible de la sección en el viewport
          const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
          const visibleArea = Math.max(0, visibleHeight);

          if (visibleArea > maxVisibleArea) {
            maxVisibleArea = visibleArea;
            maxVisibleSection = id;
          }
        }
      });

      if (maxVisibleSection) {
        setActiveSection(maxVisibleSection);
      }
    };

    // Throttle el evento de scroll para mejor rendimiento
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg- text-white">
      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;