import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Zap, Flame, Eye, Compass } from 'lucide-react';
import { Interactive3DPhone } from './Interactive3DPhone';
import { Floating3DCursorBadge, FloatingNotificationCard } from './FloatingCreativeElements';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-28 pb-20 px-4 md:px-8"
    >
      {/* Subtle purple atmospheric diffusion */}
      <div
        className="pointer-events-none absolute inset-0 subtle-purple-diffuse opacity-75"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[550px] bg-gradient-to-b from-[#9333ea]/15 via-[#7928ca]/8 to-transparent blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        {/* Creative Badge Pill */}
        <motion.div
          id="hero-badge-pill"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-[#140A24]/85 px-4 py-1.5 backdrop-blur-md shadow-[0_4px_20px_rgba(168,85,247,0.15)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C084FC] animate-pulse" />
          <span className="font-mono text-[11px] md:text-xs font-semibold tracking-wider text-purple-200 uppercase flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-purple-400" />
            BRAND STRATEGY &amp; CONTENT PLANNING
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
          DEEPASHA SAWANT
        </motion.p>

        {/* Main Hero Statement - "Making Brands Impossible to Scroll Past." */}
        <motion.h1
          id="hero-main-statement"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.08] my-3"
        >
          Making Brands{' '}
          <span className="relative inline-block bg-gradient-to-r from-[#D8B4FE] via-[#C084FC] to-[#F472B6] bg-clip-text text-transparent filter drop-shadow-[0_0_35px_rgba(192,132,252,0.35)]">
            Impossible to Scroll Past.
          </span>
        </motion.h1>

        {/* Central Visual Composition: Giant Typography + Interactive 3D Centerpiece */}
        <div className="relative my-4 flex w-full flex-col items-center justify-center select-none">
          {/* Background DEEPASHA Typography */}
          <motion.div
            id="hero-giant-typography-container"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-4xl flex items-center justify-center px-4"
          >
            <svg
              viewBox="0 0 1000 150"
              className="w-full h-auto max-h-[16vw] max-w-full overflow-visible select-none opacity-20 hover:opacity-30 transition-opacity duration-500"
              aria-label="DEEPASHA"
            >
              <text
                x="50%"
                y="70%"
                textAnchor="middle"
                fill="none"
                stroke="#C084FC"
                strokeWidth="2.5"
                strokeDasharray="8 4"
                className="font-display font-black"
                style={{
                  fontSize: '118px',
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                }}
              >
                DEEPASHA
              </text>
            </svg>
          </motion.div>

          {/* 3D Interactive Device & Creative Floating Assets */}
          <motion.div
            id="hero-3d-centerpiece"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative -mt-12 sm:-mt-16 md:-mt-20 z-20 flex items-center justify-center"
          >
            <Interactive3DPhone />
          </motion.div>
        </div>

        {/* Supporting Line & Persona Hook */}
        <motion.div
          id="hero-supporting-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 mt-2 max-w-xl px-4"
        >
          <p
            id="hero-supporting-line"
            className="text-base md:text-xl font-light tracking-tight text-zinc-200"
          >
            Exploring why ideas connect with culture through bold creative direction and high-retention storytelling.
          </p>

          {/* Floating 3D Cursor Badge */}
          <div className="mt-5 flex items-center justify-center">
            <Floating3DCursorBadge />
          </div>

          {/* Scroll Action Indicator */}
          <div className="mt-10 flex items-center justify-center">
            <button
              id="hero-scroll-btn"
              onClick={onExploreClick}
              className="group flex flex-col items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 transition-colors hover:text-purple-300"
            >
              <span className="flex items-center gap-1.5 uppercase">
                EXPLORE MY WORK
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
