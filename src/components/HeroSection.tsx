import React from 'react';
import { motion } from 'motion/react';
import { MASCOT_IMAGE } from '../data/portfolioData';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4 md:px-8"
    >
      {/* Subtle shapeless purple atmospheric diffusion (No geometric circles, rings, or sharp discs) */}
      <div
        className="pointer-events-none absolute inset-0 subtle-purple-diffuse opacity-75"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[450px] bg-gradient-to-b from-[#9333ea]/10 via-[#7928ca]/5 to-transparent blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Student Credential Pill / Label */}
        <motion.div
          id="hero-student-pill"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-[#120B1D]/80 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C084FC] animate-pulse" />
          <span className="font-mono text-[11px] md:text-xs font-semibold tracking-wider text-purple-200 uppercase">
            TYBBA DIGITAL BUSINESS • MARKETING • BRANDS • CONTENT
          </span>
        </motion.div>

        {/* Hero Salutation */}
        <motion.p
          id="hero-intro-text"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm md:text-base font-semibold tracking-[0.25em] text-zinc-400 uppercase mb-2"
        >
          HEY, I'M
        </motion.p>

        {/* Central Visual Composition: Giant Typography + Seamless Mascot Cutout */}
        <div className="relative my-2 flex w-full flex-col items-center justify-center select-none">
          {/* Background DEEPASHA Typography - Sized down to fit comfortably with generous margin */}
          <motion.div
            id="hero-giant-typography-container"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl sm:max-w-4xl flex items-center justify-center px-4"
          >
            <svg
              viewBox="0 0 1000 170"
              className="w-full h-auto max-h-[22vw] max-w-full overflow-visible select-none"
              aria-label="DEEPASHA"
            >
              <text
                x="50%"
                y="70%"
                textAnchor="middle"
                fill="#FFFFFF"
                className="font-display font-black"
                style={{
                  fontSize: '124px',
                  fontWeight: 900,
                  letterSpacing: '0.02em',
                  filter: 'drop-shadow(0 0 40px rgba(168,85,247,0.25))',
                }}
              >
                DEEPASHA
              </text>
            </svg>
          </motion.div>

          {/* Central Cutout Mascot: Adjusted slightly lower so name and character complement each other seamlessly */}
          <motion.div
            id="hero-mascot-wrapper"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative -mt-6 sm:-mt-10 md:-mt-16 lg:-mt-22 z-20 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-40 sm:w-52 md:w-64 lg:w-76 aspect-square">
              <img
                id="hero-mascot-image"
                src={MASCOT_IMAGE}
                alt="Deepasha Sawant — TYBBA student mascot portrait"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain filter drop-shadow-[0_8px_30px_rgba(147,51,234,0.22)]"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf('/images/mascot.png') === -1) {
                    target.src = '/images/mascot.png';
                  }
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Supporting Line & Persona Hook */}
        <motion.div
          id="hero-supporting-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 mt-2 max-w-xl px-4"
        >
          <p
            id="hero-supporting-line"
            className="text-lg md:text-2xl font-light tracking-tight text-zinc-200"
          >
            Figuring out brands, content &amp; everything in between.
          </p>

          <p className="mt-3 text-xs md:text-sm text-zinc-400 font-normal">
            Learning, experimenting, and exploring why ideas connect with culture.
          </p>

          {/* Scroll Action Indicator */}
          <div className="mt-10 flex items-center justify-center">
            <button
              id="hero-scroll-btn"
              onClick={onExploreClick}
              className="group flex flex-col items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 transition-colors hover:text-purple-300"
            >
              <span className="flex items-center gap-1.5 uppercase">
                EXPLORE MY WORLD
                <Sparkles className="h-3 w-3 text-purple-400" />
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-purple-400/50"
              >
                <ArrowDown className="h-3.5 w-3.5 text-zinc-300 group-hover:text-white" />
              </motion.div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
