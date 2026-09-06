
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import LoadingScreen from './components/LoadingScreen';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartoonCharacters from './components/ui/CartoonCharacters';
import { Project, SectionId } from './types';

// Lazy load heavy components to reduce initial bundle size
const AllProjects = lazy(() => import('./components/AllProjects'));
const ProjectDetails = lazy(() => import('./components/ProjectDetails'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'allProjects' | 'projectDetails' | 'services'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  // Handle scrolling after view change (Navigation Logic)
  useEffect(() => {
    if (currentView === 'home' && scrollTarget) {
      // Wait for DOM to render Home view
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setScrollTarget(null); // Reset target
      }, 300); // 300ms delay to ensure mounting
      return () => clearTimeout(timer);
    }
  }, [currentView, scrollTarget]);

  // Handle view resets (scroll to top)
  useEffect(() => {
    if (currentView === 'allProjects' || currentView === 'projectDetails' || currentView === 'services') {
      window.scrollTo(0, 0);
    }
  }, [currentView]);

  // Universal Navigation Handler
  const handleNavigate = (id: string) => {
    if (currentView !== 'home') {
      setScrollTarget(id);
      setCurrentView('home');
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('projectDetails');
  };

  // Simple Loading Spinner for Lazy Components
  const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-toon-bg">
      <Loader2 className="w-12 h-12 text-toon-purple animate-spin" />
    </div>
  );

  return (
    <div className="bg-toon-bg min-h-screen text-toon-dark font-body selection:bg-toon-yellow selection:text-black">
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Only show characters on the home view to prevent glitches on other pages */}
      {currentView === 'home' && <CartoonCharacters />}
      
      {/* Navbar with unified navigation handler */}
      <Navbar onNavigate={handleNavigate} />
      
      <main className="flex flex-col gap-0">
        {currentView === 'home' && (
          <>
            <Hero onViewServices={() => setCurrentView('services')} />
            <About />
            <Skills onServiceClick={() => setCurrentView('services')} />
            <Projects 
              onViewAll={() => setCurrentView('allProjects')} 
              onProjectClick={handleOpenProject}
            />
            <Process />
            <Testimonials />
            <Contact />
          </>
        )}
        
        <Suspense fallback={<PageLoader />}>
          {currentView === 'allProjects' && (
            <AllProjects 
              onBack={() => setCurrentView('home')} 
              onProjectClick={handleOpenProject}
            />
          )}

          {currentView === 'projectDetails' && selectedProject && (
            <ProjectDetails 
              project={selectedProject} 
              onBack={() => setCurrentView('home')}
              onContact={() => handleNavigate(SectionId.CONTACT)}
            />
          )}

          {currentView === 'services' && (
            <ServicesPage 
              onBack={() => setCurrentView('home')}
              onContact={() => handleNavigate(SectionId.CONTACT)}
            />
          )}
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
