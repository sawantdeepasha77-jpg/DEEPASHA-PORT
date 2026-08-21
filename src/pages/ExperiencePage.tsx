import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Building2, UtensilsCrossed, Megaphone, Users, CheckCircle2, ArrowLeft, ArrowUpRight, ChevronDown, Layers, Calendar, MapPin, Target, Briefcase, Award } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { ExperiencePillarDetail } from '../types';
import { Restaurants3DVisual, RealEstate3DVisual, Campaigns3DVisual, Influencer3DVisual } from '../components/3d/Experience3DVisuals';

interface ExperiencePageProps {
  onNavigateHome: () => void;
  onNavigateWork: () => void;
  onNavigateContact: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({
  onNavigateHome,
  onNavigateWork,
  onNavigateContact,
}) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('restaurants');
  const [expandedPillarId, setExpandedPillarId] = useState<string | null>(null);

  const selectedPillar = EXPERIENCE_DATA.pillars.find((p) => p.id === selectedPillarId) || EXPERIENCE_DATA.pillars[0];

  const render3DVisual = (type: ExperiencePillarDetail['icon3DType']) => {
    switch (type) {
      case 'restaurants':
        return <Restaurants3DVisual />;
      case 'real-estate':
        return <RealEstate3DVisual />;
      case 'campaigns':
        return <Campaigns3DVisual />;
      case 'influencer':
      default:
        return <Influencer3DVisual />;
    }
  };

  const getPillarIcon = (type: ExperiencePillarDetail['icon3DType']) => {
    switch (type) {
      case 'restaurants':
        return <UtensilsCrossed className="h-5 w-5 text-purple-400" />;
      case 'real-estate':
        return <Building2 className="h-5 w-5 text-indigo-400" />;
      case 'campaigns':
        return <Megaphone className="h-5 w-5 text-fuchsia-400" />;
      case 'influencer':
      default:
        return <Users className="h-5 w-5 text-purple-400" />;
    }
  };

  return (
    <div className="relative w-full min-h-screen pt-28 pb-24 px-6 md:px-12 bg-[#050507] text-[#FAFAFA] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute right-1/4 top-16 h-[500px] w-[500px] rounded-full bg-purple-900/15 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-1/4 h-[450px] w-[450px] rounded-full bg-fuchsia-900/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        {/* Top Breadcrumb Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-2 font-mono text-xs font-semibold text-purple-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO OVERVIEW</span>
          </button>

          <span className="font-mono text-xs text-purple-400/80 bg-purple-950/60 border border-purple-500/30 px-3.5 py-1 rounded-full">
            DEDICATED EXPERIENCE PAGE
          </span>
        </div>

        {/* Hero Header */}
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              02 — AGENCY EXPERIENCE
            </span>
            <span className="h-[1px] w-12 bg-purple-500/30" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white tracking-tight leading-[1.08]">
            HANDS-ON LEARNING &amp;<br />
            <span className="bg-gradient-to-r from-[#D8B4FE] via-white to-[#C084FC] bg-clip-text text-transparent">
              AGENCY EXECUTION.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
            A comprehensive look into my ongoing internship at <strong className="text-white font-semibold">Maitra Entertainment</strong>, spanning social media management, brand strategy, content calendars, and creator activations.
          </p>
        </div>

        {/* Master Internship Card: Maitra Entertainment */}
        <div className="mb-14 overflow-hidden rounded-3xl border border-purple-500/30 bg-[#0E0919]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(147,51,234,0.14)]">
          {/* Header Banner */}
          <div className="border-b border-white/[0.08] p-6 sm:p-10 bg-gradient-to-r from-purple-950/70 via-purple-900/30 to-[#0E0919] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-bold text-purple-300 bg-purple-950/80 border border-purple-500/50 px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Briefcase className="h-3.5 w-3.5 text-purple-400" />
                  <span>{EXPERIENCE_DATA.role}</span>
                </span>
                <span className="font-mono text-xs text-purple-200 flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-purple-400" />
                  <span>{EXPERIENCE_DATA.dates}</span>
                </span>
                <span className="font-mono text-xs text-zinc-400 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-purple-400" />
                  <span>{EXPERIENCE_DATA.location}</span>
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {EXPERIENCE_DATA.company}
              </h2>

              <p className="mt-2 text-sm sm:text-base text-purple-200/90 max-w-2xl leading-relaxed">
                {EXPERIENCE_DATA.summary}
              </p>
            </div>

            {/* Tools Used Badges */}
            <div className="flex flex-col gap-2 rounded-2xl bg-white/[0.03] border border-white/10 p-4 max-w-xs">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-purple-300">
                TOOLS &amp; PLATFORMS USED
              </span>
              <div className="flex flex-wrap gap-1.5">
                {EXPERIENCE_DATA.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Context Banner */}
          <div className="px-6 py-4 bg-purple-950/30 border-b border-white/[0.06] flex items-center justify-between text-xs font-mono text-purple-300">
            <span>STRUCTURE: 1 MASTER INTERNSHIP • 4 CORE ACCOUNT DOMAINS</span>
            <span className="hidden sm:inline-block">CLICK ANY DOMAIN TO EXPAND DETAILED BREAKDOWN</span>
          </div>
        </div>

        {/* 4 Major Work Domains Interactive Grid */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase">
                SCOPE OF WORK
              </span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                FOUR INTEGRATED WORK DOMAINS
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-400 hidden sm:block">
              SELECT TO VIEW 3D &amp; DELIVERABLES
            </span>
          </div>

          {/* 4 Domain Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {EXPERIENCE_DATA.pillars.map((pillar) => {
              const isSelected = selectedPillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  id={`experience-pillar-btn-${pillar.id}`}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`group relative flex flex-col justify-between rounded-2xl p-5 text-left transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#23133B] to-[#140A24] border-2 border-purple-400 shadow-[0_0_30px_rgba(147,51,234,0.3)] scale-[1.02]'
                      : 'bg-[#0E0919]/70 border border-white/[0.08] hover:border-purple-500/40 hover:bg-[#140B24]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isSelected ? 'bg-purple-600 text-white' : 'bg-purple-950/60 text-purple-300'
                      } border border-purple-500/40 shadow-inner`}>
                        {getPillarIcon(pillar.icon3DType)}
                      </div>
                      <span className="font-mono text-xs font-bold text-purple-400">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="font-mono text-xs text-purple-300 mt-1">
                      {pillar.category}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-400">{pillar.workItems.length} Key Scopes</span>
                    <span className={`font-semibold ${isSelected ? 'text-purple-200' : 'text-zinc-500'}`}>
                      {isSelected ? 'ACTIVE VIEW' : 'EXPLORE →'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Domain Deep-Dive Interactive Presentation */}
          <motion.div
            key={selectedPillar.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl border border-purple-500/40 bg-gradient-to-b from-[#160B29] via-[#0E071A] to-[#0A0413] p-6 sm:p-10 backdrop-blur-xl shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Scope & Work Items */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950/80 border border-purple-500/40 px-3 py-0.5 rounded-md">
                      DOMAIN {selectedPillar.number}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {selectedPillar.category}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {selectedPillar.title}
                  </h3>
                  <p className="font-mono text-sm sm:text-base text-purple-300 font-semibold mt-1">
                    {selectedPillar.focus}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {selectedPillar.shortDescription}
                </p>

                {/* Core Work Deliverables List */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <h4 className="font-mono text-xs font-bold text-purple-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-400" />
                    <span>SPECIFIC WORK INCLUDED</span>
                  </h4>
                  <div className="space-y-2.5">
                    {selectedPillar.workItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Creative Highlights */}
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    CREATIVE HIGHLIGHTS &amp; BEST PRACTICES
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedPillar.creativeHighlights.map((highlight, idx) => (
                      <div key={idx} className="rounded-xl border border-purple-500/20 bg-purple-950/30 p-3 text-xs text-zinc-300">
                        “{highlight}”
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Visual & Detailed Breakdown Sections */}
              <div className="lg:col-span-5 space-y-6">
                {/* 3D Visual Token */}
                <div className="overflow-hidden rounded-2xl">
                  {render3DVisual(selectedPillar.icon3DType)}
                </div>

                {/* Detailed Breakdown Accordion / Cards */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs font-bold text-purple-300 uppercase tracking-wider">
                    DETAILED EXECUTION BREAKDOWN
                  </h4>
                  {selectedPillar.detailedBreakdown.map((breakdown, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/10 bg-[#120722]/80 p-4 transition-all hover:border-purple-500/40"
                    >
                      <h5 className="font-display text-sm font-bold text-white mb-1">
                        {breakdown.heading}
                      </h5>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                        {breakdown.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {breakdown.deliverables.map((deliv, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-purple-950/60 border border-purple-500/30 px-2 py-0.5 font-mono text-[9px] text-purple-200"
                          >
                            ✓ {deliv}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Agency Learnings Grid */}
        <div className="mb-16 rounded-3xl border border-white/[0.08] bg-[#0E0919]/70 p-6 sm:p-10 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              WHAT THIS AGENCY IMMERSION TAUGHT ME
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EXPERIENCE_DATA.keyLearnings.map((learning, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-purple-500/30 hover:bg-white/[0.04]"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-purple-900/50 border border-purple-500/40 font-mono text-xs font-bold text-purple-300">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {learning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="rounded-3xl border border-purple-500/30 bg-[#0E0919]/90 p-8 sm:p-10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold block mb-1">
              EXPLORE MY STRATEGY
            </span>
            <h3 className="font-display text-2xl font-bold text-white">
              Ready to see the 3 Selected Case Studies?
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              Dive into Amul, Steelman, and SkinTown Clinic case studies.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onNavigateWork}
              className="rounded-full bg-purple-600 hover:bg-purple-500 px-6 py-3 text-xs font-mono font-bold text-white shadow-lg transition-all"
            >
              VIEW CASE STUDIES →
            </button>
            <button
              onClick={onNavigateContact}
              className="rounded-full border border-purple-500/40 bg-purple-950/60 px-6 py-3 text-xs font-mono font-bold text-purple-200 hover:bg-purple-600 hover:text-white transition-all"
            >
              LET'S TALK ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
