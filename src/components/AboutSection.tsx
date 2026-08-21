import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INTERESTS_DATA } from '../data/portfolioData';
import { Sparkles, Activity, Compass, Sun, ArrowUpRight, HelpCircle, Flame, Eye, Globe } from 'lucide-react';
import { InterestItem } from '../types';
import { FloatingBrowserMockup } from './FloatingCreativeElements';

export const AboutSection: React.FC = () => {
  const [activeInterest, setActiveInterest] = useState<InterestItem | null>(INTERESTS_DATA[0]);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-purple-400" />;
      case 'Activity':
        return <Activity className="h-5 w-5 text-purple-400" />;
      case 'Sun':
        return <Sun className="h-5 w-5 text-purple-400" />;
      case 'Compass':
      default:
        return <Compass className="h-5 w-5 text-purple-400" />;
    }
  };

  return (
    <section
      id="about"
      className="relative w-full border-t border-white/[0.06] bg-[#07050B] py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-purple-900/15 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-indigo-900/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        {/* Section Marker */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            01 — ABOUT
          </span>
          <span className="h-[1px] w-12 bg-purple-500/30" />
        </div>

        {/* Section Heading */}
        <h2
          id="about-main-heading"
          className="text-section-title font-display font-black text-white max-w-4xl tracking-tight"
        >
          OKAY, BUT WHO’S DEEPASHA?
        </h2>

        {/* Narrative Copy + 3D Workstation Card */}
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-zinc-200">
              I'm a <span className="text-white font-semibold underline decoration-purple-500/50 underline-offset-8">TYBBA Digital Business student</span> figuring out where creativity, brands and the internet meet.
            </p>

            <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-zinc-400">
              I like understanding why people connect with certain brands, why some content makes you stop scrolling, and how a simple idea can turn into something people remember.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-purple-500/30 bg-purple-950/50 px-3.5 py-1 text-xs font-mono text-purple-200 shadow-sm">
                Curious by Default
              </span>
              <span className="rounded-full border border-purple-500/30 bg-purple-950/50 px-3.5 py-1 text-xs font-mono text-purple-200 shadow-sm">
                Content &amp; Culture
              </span>
              <span className="rounded-full border border-purple-500/30 bg-purple-950/50 px-3.5 py-1 text-xs font-mono text-purple-200 shadow-sm">
                Brand Observation
              </span>
            </div>
          </div>

          {/* 3D Browser & Creative Direction Philosophy Card */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <FloatingBrowserMockup />

            <div className="flex flex-col justify-between rounded-2xl border border-purple-500/20 bg-[#120D1D]/70 p-6 backdrop-blur-md shadow-lg">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-purple-300 uppercase">
                  <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                  <span>MY PHILOSOPHY</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300 italic">
                  “I am still learning, experimenting, and figuring things out — but I genuinely enjoy the craft of understanding why ideas move people.”
                </p>
              </div>

              <div className="mt-4 border-t border-white/10 pt-3 text-xs font-mono text-zinc-400 flex items-center justify-between">
                <span>DEEPASHA SAWANT</span>
                <span className="text-purple-400 font-semibold">TYBBA • 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Editorial Spread: "WHAT I'M INTO" */}
        <div className="mt-28">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="font-mono text-xs font-semibold tracking-widest text-purple-400 uppercase">
                02 — EXPLORATION
              </span>
              <h3 className="mt-1 font-display text-2xl md:text-4xl font-bold tracking-tight text-white">
                WHAT I'M INTO
              </h3>
            </div>
            <p className="hidden text-right text-xs font-mono text-zinc-400 sm:block">
              HOVER / CLICK TO UNVEIL
            </p>
          </div>

          {/* Editorial Big Typography Interactive List */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-7 flex flex-col gap-2">
              {INTERESTS_DATA.map((item, idx) => {
                const isSelected = activeInterest?.id === item.id;
                return (
                  <button
                    key={item.id}
                    id={`interest-item-${item.id}`}
                    onClick={() => setActiveInterest(item)}
                    onMouseEnter={() => setActiveInterest(item)}
                    className={`group relative flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-300 interest-pill ${
                      isSelected
                        ? 'bg-[#1E1133] border border-purple-500/60 shadow-[0_0_30px_rgba(147,51,234,0.2)]'
                        : 'border border-transparent bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold text-purple-400/80">
                        0{idx + 1}
                      </span>
                      <span
                        className={`font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-all duration-300 ${
                          isSelected
                            ? 'text-white translate-x-1'
                            : 'text-zinc-400 group-hover:text-zinc-200'
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {item.note && (
                        <span className="hidden sm:inline-block rounded-full bg-purple-950/80 border border-purple-400/30 px-3 py-0.5 text-[10px] font-mono text-purple-300">
                          {item.note}
                        </span>
                      )}
                      <ArrowUpRight
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isSelected
                            ? 'text-purple-300 translate-x-0.5 -translate-y-0.5'
                            : 'text-zinc-500 group-hover:text-zinc-300'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interest Detail Card Reveal */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                {activeInterest && (
                  <motion.div
                    key={activeInterest.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="h-full flex flex-col justify-between rounded-3xl border border-purple-500/40 bg-gradient-to-b from-[#190F2C] via-[#120822] to-[#0D0618] p-7 backdrop-blur-xl shadow-[0_20px_50px_rgba(147,51,234,0.18)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-900/50 border border-purple-500/40 shadow-inner">
                          {renderIcon(activeInterest.iconName)}
                        </div>
                        <span className="font-mono text-xs uppercase tracking-widest text-purple-300 font-semibold">
                          PERSONAL INTEREST
                        </span>
                      </div>

                      <h4 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {activeInterest.title}
                      </h4>

                      <p className="mt-1 font-mono text-xs text-purple-300">
                        {activeInterest.subtitle}
                      </p>

                      {activeInterest.note && (
                        <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-purple-950/90 border border-purple-400/40 px-3 py-1 text-xs text-purple-200 shadow-sm">
                          <HelpCircle className="h-3.5 w-3.5 text-purple-400" />
                          <span className="font-medium">{activeInterest.note}</span>
                        </div>
                      )}

                      <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                        {activeInterest.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/10">
                      <div className="flex flex-wrap gap-2">
                        {activeInterest.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-mono text-zinc-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
