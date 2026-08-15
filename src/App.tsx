import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ThreeScene } from './components/ThreeScene';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const yOffset = -40;
      const y = contactEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      const yOffset = -40;
      const y = aboutEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050507] text-[#FAFAFA] antialiased selection:bg-[#7928CA] selection:text-white">
      {/* Custom Interactive Purple Cursor */}
      <CustomCursor />

      {/* Subtle 3D WebGL Floating Atmosphere */}
      <ThreeScene />

      {/* Main Top Navigation */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Sections */}
      <main className="relative z-10 w-full">
        {/* 01. Hero Section */}
        <HeroSection onExploreClick={scrollToAbout} />

        {/* 02. About & Interests */}
        <AboutSection />

        {/* 03. Agency Experience (Maitra Entertainment) */}
        <ExperienceSection />

        {/* 04. Creative Case Studies (Amul, Steelman, Skintown Clinic) */}
        <WorkSection />

        {/* 05. Contact Section */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

