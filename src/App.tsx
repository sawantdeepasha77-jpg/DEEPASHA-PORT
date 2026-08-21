import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { ThreeScene } from './components/ThreeScene';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Overview / Home Section Components
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';

// Dedicated Standalone Pages
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { ContactPage } from './pages/ContactPage';

import { PageView } from './types';
import { PROJECTS_DATA } from './data/portfolioData';
import { trackPageView } from './utils/analytics';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string>('amul-content-strategy');

  // Handle URL hash routing on initial load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash || hash === 'home') {
        setCurrentView('home');
      } else if (hash === 'about') {
        setCurrentView('about');
      } else if (hash === 'experience') {
        setCurrentView('experience');
      } else if (hash === 'work') {
        setCurrentView('work');
      } else if (hash === 'contact' || hash === 'talk') {
        setCurrentView('contact');
      } else if (hash.startsWith('case-study')) {
        const parts = hash.split('/');
        if (parts[1] && PROJECTS_DATA.some((p) => p.id === parts[1])) {
          setSelectedProjectId(parts[1]);
        }
        setCurrentView('case-study');
      }
    };

    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  // Track Google Analytics page views whenever currentView or selectedProjectId changes
  useEffect(() => {
    let pagePath = '/';
    let pageTitle = 'Deepasha Sawant — Digital Business, Marketing & Creative Portfolio';

    if (currentView === 'about') {
      pagePath = '/#about';
      pageTitle = 'About Me — Deepasha Sawant';
    } else if (currentView === 'experience') {
      pagePath = '/#experience';
      pageTitle = 'Agency Experience — Deepasha Sawant';
    } else if (currentView === 'work') {
      pagePath = '/#work';
      pageTitle = 'Selected Case Studies — Deepasha Sawant';
    } else if (currentView === 'case-study') {
      const proj = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];
      pagePath = `/#case-study/${proj.id}`;
      pageTitle = `${proj.title} Case Study — Deepasha Sawant`;
    } else if (currentView === 'contact') {
      pagePath = '/#contact';
      pageTitle = 'Contact & Collaborate — Deepasha Sawant';
    }

    document.title = pageTitle;
    trackPageView(pagePath, pageTitle);
  }, [currentView, selectedProjectId]);

  const navigateTo = (view: PageView, projectId?: string) => {
    setCurrentView(view);
    if (projectId) {
      setSelectedProjectId(projectId);
      window.location.hash = `case-study/${projectId}`;
    } else if (view === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentProject =
    PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  return (
    <div className="relative min-h-screen w-full bg-[#050507] text-[#FAFAFA] antialiased selection:bg-[#7928CA] selection:text-white">
      {/* Custom Interactive Purple Cursor */}
      <CustomCursor />

      {/* Subtle 3D WebGL Floating Atmosphere */}
      <ThreeScene />

      {/* Main Top Navigation (No new tabs, pure intent-driven view switching) */}
      <Navbar currentView={currentView} onNavigate={navigateTo} />

      {/* Main View Router */}
      <main className="relative z-10 w-full min-h-screen">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* 01. Hero Section */}
              <HeroSection onExploreClick={() => navigateTo('about')} />

              {/* 02. About & Personal Direction */}
              <AboutSection />

              {/* 03. Agency Experience (Maitra Entertainment) */}
              <ExperienceSection />

              {/* 04. Creative Case Studies */}
              <WorkSection />

              {/* 05. Contact Section */}
              <ContactSection />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div
              key="about-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <AboutPage
                onNavigateHome={() => navigateTo('home')}
                onNavigateContact={() => navigateTo('contact')}
                onNavigateExperience={() => navigateTo('experience')}
              />
            </motion.div>
          )}

          {currentView === 'experience' && (
            <motion.div
              key="experience-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ExperiencePage
                onNavigateHome={() => navigateTo('home')}
                onNavigateWork={() => navigateTo('work')}
                onNavigateContact={() => navigateTo('contact')}
              />
            </motion.div>
          )}

          {currentView === 'work' && (
            <motion.div
              key="work-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <WorkPage
                onNavigateHome={() => navigateTo('home')}
                onSelectProject={(id) => navigateTo('case-study', id)}
                onNavigateContact={() => navigateTo('contact')}
              />
            </motion.div>
          )}

          {currentView === 'case-study' && (
            <motion.div
              key={`case-study-${currentProject.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CaseStudyPage
                project={currentProject}
                onBackToWork={() => navigateTo('work')}
                onSelectProject={(id) => navigateTo('case-study', id)}
                onNavigateContact={() => navigateTo('contact')}
              />
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div
              key="contact-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ContactPage onNavigateHome={() => navigateTo('home')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
