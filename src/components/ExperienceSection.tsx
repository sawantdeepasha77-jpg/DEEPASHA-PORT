import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Building2, UtensilsCrossed, Megaphone, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const getPillarIcon = (title: string) => {
    switch (title) {
      case 'REAL ESTATE':
        return <Building2 className="h-5 w-5 text-purple-400" />;
      case 'RESTAURANTS':
        return <UtensilsCrossed className="h-5 w-5 text-purple-400" />;
      case 'CAMPAIGNS':
        return <Megaphone className="h-5 w-5 text-purple-400" />;
      case 'INFLUENCER MARKETING':
      default:
        return <Users className="h-5 w-5 text-purple-400" />;
    }
  };

  return (
    <section
      id="experience"
      className="relative w-full border-t border-white/[0.06] bg-[#050507] py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute left-1/4 bottom-10 h-80 w-80 rounded-full bg-purple-800/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase">
            03 — EXPERIENCE
          </span>
          <span className="h-[1px] w-12 bg-purple-500/30" />
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-section-title font-display font-bold text-white">
              HANDS-ON LEARNING &amp; AGENCY WORK
            </h2>
            <p className="mt-2 max-w-xl text-base text-zinc-400">
              Real client campaigns, fast turnaround times, and practical social media execution.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-4 py-1.5 text-xs font-mono text-purple-200">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>ACTIVE INTERNSHIP • 2026</span>
          </div>
        </div>

        {/* Main Internship Card (ONE unified internship) */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-purple-500/20 bg-[#0E0919]/80 backdrop-blur-xl shadow-[0_0_40px_rgba(147,51,234,0.08)]">
          {/* Internship Top Meta Bar */}
          <div className="border-b border-white/[0.08] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-purple-950/40 to-transparent">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950/80 border border-purple-500/30 px-3 py-1 rounded-md">
                  {EXPERIENCE_DATA.year}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  {EXPERIENCE_DATA.duration}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                {EXPERIENCE_DATA.role}
              </h3>
              <p className="font-mono text-sm sm:text-base font-semibold text-[#D8B4FE]">
                {EXPERIENCE_DATA.company}
              </p>
            </div>

            <p className="max-w-md text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {EXPERIENCE_DATA.summary}
            </p>
          </div>

          {/* 4 Work Focus Areas Tabs/Grid */}
          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                CORE SCOPE &amp; ACCOUNT DOMAINS
              </span>
              <span className="font-mono text-[11px] text-purple-400">
                4 INTEGRATED DOMAINS
              </span>
            </div>

            {/* Interactive Domain Pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {EXPERIENCE_DATA.pillars.map((pillar, idx) => {
                const isActive = activePillarIndex === idx;
                return (
                  <button
                    key={pillar.title}
                    id={`exp-pillar-tab-${idx}`}
                    onClick={() => setActivePillarIndex(idx)}
                    className={`flex flex-col items-start gap-2 rounded-2xl p-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'bg-purple-950/80 border border-purple-500/60 shadow-[0_0_20px_rgba(147,51,234,0.2)]'
                        : 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/40 border border-purple-500/30">
                        {getPillarIcon(pillar.title)}
                      </div>
                      <span className="font-mono text-[11px] text-zinc-500">0{idx + 1}</span>
                    </div>
                    <span
                      className={`font-display text-sm sm:text-base font-bold tracking-tight mt-1 ${
                        isActive ? 'text-white' : 'text-zinc-300'
                      }`}
                    >
                      {pillar.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Showcase Detail */}
            <motion.div
              key={activePillarIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 rounded-2xl border border-white/10 bg-[#160E26]/60 p-6 sm:p-7"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-xs text-purple-300 uppercase tracking-widest">
                    ACTIVE FOCUS
                  </span>
                  <h4 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                    {EXPERIENCE_DATA.pillars[activePillarIndex].title} — {EXPERIENCE_DATA.pillars[activePillarIndex].focus}
                  </h4>
                </div>
              </div>

              <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-4xl">
                {EXPERIENCE_DATA.pillars[activePillarIndex].description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {EXPERIENCE_DATA.pillars[activePillarIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-purple-950/60 border border-purple-500/30 px-3 py-1 text-xs font-mono text-purple-200"
                  >
                    • {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Key Internship Takeaways */}
            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                  PRACTICAL LEARNINGS &amp; GROWTH
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXPERIENCE_DATA.keyLearnings.map((learning, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-white/[0.02] border border-white/[0.05] p-3.5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-zinc-300">{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
