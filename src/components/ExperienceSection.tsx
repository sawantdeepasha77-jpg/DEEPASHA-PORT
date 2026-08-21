import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Building2, UtensilsCrossed, Megaphone, Users, Sparkles, CheckCircle2, TrendingUp, Play, Flame } from 'lucide-react';

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
        className="pointer-events-none absolute left-1/4 bottom-10 h-80 w-80 rounded-full bg-purple-800/15 blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            03 — EXPERIENCE
          </span>
          <span className="h-[1px] w-12 bg-purple-500/30" />
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-section-title font-display font-black text-white">
              HANDS-ON LEARNING &amp; AGENCY WORK
            </h2>
            <p className="mt-2 max-w-xl text-base text-zinc-400">
              Real client campaigns, fast turnaround times, and practical social media execution.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/60 px-4 py-1.5 text-xs font-mono text-purple-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            <span>ACTIVE INTERNSHIP • 2026</span>
          </div>
        </div>

        {/* Main Internship Card with 3D Accents */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0E0919]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(147,51,234,0.12)]">
          {/* Internship Top Meta Bar */}
          <div className="border-b border-white/[0.08] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-purple-950/50 via-purple-900/20 to-transparent">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-purple-300 bg-purple-950/80 border border-purple-500/40 px-3 py-1 rounded-lg">
                  {EXPERIENCE_DATA.dates}
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  {EXPERIENCE_DATA.location}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                {EXPERIENCE_DATA.role}
              </h3>
              <p className="font-mono text-sm sm:text-base font-semibold text-[#D8B4FE]">
                {EXPERIENCE_DATA.company}
              </p>
            </div>

            <div className="flex flex-col gap-2 max-w-md">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {EXPERIENCE_DATA.summary}
              </p>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> Real-time Execution
                </span>
                <span className="rounded-full bg-purple-950/60 border border-purple-500/30 px-2.5 py-0.5 font-mono text-[10px] text-purple-300">
                  Multi-Account Strategy
                </span>
              </div>
            </div>
          </div>

          {/* 4 Work Focus Areas Tabs/Grid */}
          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                CORE SCOPE &amp; ACCOUNT DOMAINS
              </span>
              <span className="font-mono text-[11px] text-purple-400">
                4 INTEGRATED DOMAINS
              </span>
            </div>

            {/* Interactive Domain Pills with 3D Depth */}
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
                        ? 'bg-purple-950/90 border border-purple-500/70 shadow-[0_0_25px_rgba(147,51,234,0.25)] scale-[1.02]'
                        : 'bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-purple-500/30'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-900/40 border border-purple-500/30 shadow-inner">
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
              className="mt-6 rounded-2xl border border-purple-500/20 bg-[#160E26]/80 p-6 sm:p-7 shadow-lg"
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
                {EXPERIENCE_DATA.pillars[activePillarIndex].shortDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {EXPERIENCE_DATA.pillars[activePillarIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-purple-950/70 border border-purple-500/40 px-3 py-1 text-xs font-mono text-purple-200"
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
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-semibold">
                  PRACTICAL LEARNINGS &amp; GROWTH
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXPERIENCE_DATA.keyLearnings.map((learning, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] p-4 transition-colors hover:border-purple-500/30 hover:bg-white/[0.04]"
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
