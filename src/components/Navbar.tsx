import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050507]/80 backdrop-blur-md border-b border-white/[0.06] py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          {/* Brand Name / Logo */}
          <a
            id="nav-logo"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 tracking-wider"
          >
            <span className="font-display text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#C084FC]">
              DEEPASHA SAWANT
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-nav-links" className="hidden items-center gap-8 md:flex">
            <button
              id="nav-link-about"
              onClick={() => scrollToSection('about')}
              className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-300 transition-colors hover:text-white"
            >
              ABOUT
            </button>
            <button
              id="nav-link-experience"
              onClick={() => scrollToSection('experience')}
              className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-300 transition-colors hover:text-white"
            >
              EXPERIENCE
            </button>
            <button
              id="nav-link-work"
              onClick={() => scrollToSection('work')}
              className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-300 transition-colors hover:text-white"
            >
              WORK
            </button>
            <button
              id="nav-link-contact"
              onClick={() => scrollToSection('contact')}
              className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-300 transition-colors hover:text-white"
            >
              CONTACT
            </button>

            {/* CTA Button */}
            <button
              id="nav-cta-talk"
              onClick={onOpenContact}
              className="group relative flex items-center gap-1.5 rounded-full border border-[#9333EA]/60 bg-[#150B24]/70 px-5 py-2 text-xs font-semibold tracking-wider text-[#E9D5FF] transition-all duration-300 hover:border-[#C084FC] hover:bg-[#9333EA]/30 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              id="mobile-cta-btn"
              onClick={onOpenContact}
              className="flex items-center gap-1 rounded-full border border-[#9333EA]/60 bg-[#150B24] px-3.5 py-1.5 text-xs font-semibold text-[#E9D5FF]"
            >
              <span>TALK</span>
              <ArrowUpRight className="h-3 w-3" />
            </button>

            <button
              id="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 border-b border-white/10 bg-[#0A0711]/95 px-6 py-8 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              <button
                id="mobile-nav-link-about"
                onClick={() => scrollToSection('about')}
                className="text-left font-display text-xl font-bold uppercase tracking-wider text-white"
              >
                01 — ABOUT
              </button>
              <button
                id="mobile-nav-link-experience"
                onClick={() => scrollToSection('experience')}
                className="text-left font-display text-xl font-bold uppercase tracking-wider text-white"
              >
                02 — EXPERIENCE
              </button>
              <button
                id="mobile-nav-link-work"
                onClick={() => scrollToSection('work')}
                className="text-left font-display text-xl font-bold uppercase tracking-wider text-white"
              >
                03 — WORK
              </button>
              <button
                id="mobile-nav-link-contact"
                onClick={() => scrollToSection('contact')}
                className="text-left font-display text-xl font-bold uppercase tracking-wider text-white"
              >
                04 — CONTACT
              </button>

              <div className="pt-4">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#7C3AED] py-3 text-sm font-bold tracking-wider text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                >
                  <span>LET'S TALK</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
