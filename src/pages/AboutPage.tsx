import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Activity, Compass, Sun, ArrowUpRight, HelpCircle, Heart, ArrowLeft, Lightbulb, Coffee, Flame, CheckCircle2, Target, Eye } from 'lucide-react';
import { INTERESTS_DATA, PERSONAL_PHILOSOPHY } from '../data/portfolioData';
import { InterestItem } from '../types';
import { FloatingBrowserMockup, Floating3DCursorBadge, FloatingNotificationCard } from '../components/FloatingCreativeElements';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onNavigateExperience: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateContact,
  onNavigateExperience,
}) => {
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
    <div className="relative w-full min-h-screen pt-28 pb-24 px-6 md:px-12 bg-[#050507] text-[#FAFAFA] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute right-1/4 top-16 h-[500px] w-[500px] rounded-full bg-purple-900/15 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-1/4 h-[450px] w-[450px] rounded-full bg-indigo-900/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        {/* Top Back Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-2 font-mono text-xs font-semibold text-purple-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO OVERVIEW</span>
          </button>

          <span className="font-mono text-xs text-purple-400/80 bg-purple-950/60 border border-purple-500/30 px-3.5 py-1 rounded-full">
            DEDICATED ABOUT PAGE
          </span>
        </div>

        {/* Hero Banner Header */}
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              01 — ABOUT ME
            </span>
            <span className="h-[1px] w-12 bg-purple-500/30" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.08]">
            CURIOUS BY DEFAULT.<br />
            <span className="bg-gradient-to-r from-[#D8B4FE] via-white to-[#C084FC] bg-clip-text text-transparent">
              CREATING FOR THE INTERNET.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Hi, I’m <strong className="text-white font-semibold">Deepasha Sawant</strong> — a TYBBA Digital Business student in Mumbai exploring where creative storytelling, human psychology, and modern brands intersect.
          </p>
        </div>

        {/* Narrative Section 1: Who I Am & My Background */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start mb-20">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
            <div className="rounded-3xl border border-white/[0.08] bg-[#0E0919]/70 p-6 sm:p-8 backdrop-blur-xl space-y-5">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2.5">
                <Target className="h-5 w-5 text-purple-400" />
                <span>Who I Am &amp; My Background</span>
              </h2>

              <p>
                I am currently in my final year pursuing <span className="text-purple-200 font-semibold">BBA in Digital Business (TYBBA)</span>. From an early stage, I was drawn to the dynamics of why certain products become cultural sensations while others fade into background noise.
              </p>

              <p>
                My background bridges structured business understanding (market segmentation, consumer behavior, media channels) with hands-on agency execution at <span className="text-white font-medium">Maitra Entertainment</span>, where I manage social media, plan monthly calendars, and coordinate creator collaborations.
              </p>

              <p>
                Rather than treating marketing as just numbers or dry corporate slide decks, I look at it as <span className="text-white font-medium italic">applied empathy</span> — understanding what someone feels when they see a post in their feed.
              </p>
            </div>

            {/* Interest in Digital Marketing */}
            <div className="rounded-3xl border border-purple-500/20 bg-[#0E0919]/70 p-6 sm:p-8 backdrop-blur-xl space-y-5">
              <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2.5">
                <Lightbulb className="h-5 w-5 text-purple-400" />
                <span>Why Digital Marketing?</span>
              </h2>

              <p>
                Digital marketing is the only industry where a tiny 15-second idea filmed on a phone can shift how thousands of people perceive a legacy brand overnight.
              </p>

              <p>
                I love dissecting the mechanics behind the scroll: Why does a specific hook stop thumbs? What makes aesthetic food videography make someone immediately book a table? How do you give a heritage brand modern cultural coolness without destroying its trust?
              </p>
            </div>
          </div>

          {/* Interactive 3D Workstation Mockup */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FloatingBrowserMockup />

            <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-[#180E2B] via-[#10071E] to-[#0A0413] p-6 backdrop-blur-xl shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-purple-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                  CURRENT FOCUS
                </span>
                <span className="rounded-full bg-purple-950 border border-purple-400/40 px-3 py-0.5 text-[10px] font-mono text-purple-200">
                  2026 ACTIVE
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-zinc-200">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>TYBBA Digital Business (Graduating 2026)</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-200">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Social Media Marketing Intern @ Maitra Entertainment</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-zinc-200">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Brand Strategy, Ad Copy &amp; Content Frameworks</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>BASED IN MUMBAI</span>
                <span className="text-purple-400">OPEN TO WORK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Section 2: What I Enjoy Creating & Approach */}
        <div className="mb-20">
          <div className="mb-8 border-b border-white/10 pb-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase">
              CREATIVE CRAFT
            </span>
            <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              WHAT I ENJOY CREATING &amp; MY APPROACH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/[0.08] bg-[#0E0919]/70 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300">
              <div>
                <span className="font-mono text-xs text-purple-400 font-bold block mb-2">01 — ARCHITECTURE</span>
                <h3 className="font-display text-xl font-bold text-white mb-3">Content Strategy &amp; Mapping</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Building structured frameworks like the Hero-Hub-Help model that turn random social posting into a predictable, brand-building engine.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-purple-300">
                • 30-Day Calendars • Touchpoint Mix
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-[#0E0919]/70 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300">
              <div>
                <span className="font-mono text-xs text-purple-400 font-bold block mb-2">02 — HOOKS &amp; COPY</span>
                <h3 className="font-display text-xl font-bold text-white mb-3">High-Retention Social Direction</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Writing sharp, conversational ad copies and video treatments that hook viewers in the first 2 seconds with clean visual aesthetics.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-purple-300">
                • Reel Treatments • Tagline Creation
              </div>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-[#0E0919]/70 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300">
              <div>
                <span className="font-mono text-xs text-purple-400 font-bold block mb-2">03 — POSITIONING</span>
                <h3 className="font-display text-xl font-bold text-white mb-3">Brand Identity &amp; Culture</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Finding the emotional heartbeat of a brand, removing corporate stiffness, and crafting messages that resonate with real people.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-purple-300">
                • Voice &amp; Tone • Audience Archetypes
              </div>
            </div>
          </div>

          {/* Philosophy Banner */}
          <div className="mt-8 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-[#150B24] to-purple-950/40 p-8 text-center backdrop-blur-xl">
            <p className="font-display text-xl sm:text-2xl font-bold text-purple-100 max-w-3xl mx-auto leading-relaxed italic">
              {PERSONAL_PHILOSOPHY.quote}
            </p>
            <span className="mt-4 inline-block font-mono text-xs text-purple-300 uppercase tracking-widest font-semibold">
              — MY CORE APPROACH
            </span>
          </div>
        </div>

        {/* Narrative Section 3: Personality / Fun Elements */}
        <div className="mb-20">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase">
                BEYOND MARKETING
              </span>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                PERSONALITY &amp; WHAT ENERGIZES ME
              </h2>
            </div>
            <p className="hidden text-right text-xs font-mono text-zinc-400 sm:block">
              CLICK TO EXPLORE EACH
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* Interactive Selector List */}
            <div className="lg:col-span-7 flex flex-col gap-2">
              {INTERESTS_DATA.map((item, idx) => {
                const isSelected = activeInterest?.id === item.id;
                return (
                  <button
                    key={item.id}
                    id={`about-page-interest-${item.id}`}
                    onClick={() => setActiveInterest(item)}
                    className={`group relative flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#1E1133] border border-purple-500/60 shadow-[0_0_30px_rgba(147,51,234,0.2)]'
                        : 'border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-purple-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold text-purple-400/80">
                        0{idx + 1}
                      </span>
                      <span
                        className={`font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${
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

            {/* Selected Detail View Card */}
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
                          PERSONAL CODE
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

        {/* Bottom CTA Block */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#0E0919]/90 p-8 sm:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold block mb-1">
              NEXT STEPS
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Want to see my agency work or chat?
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              Explore my internship experience at Maitra Entertainment or send a message.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onNavigateExperience}
              className="rounded-full border border-purple-500/40 bg-purple-950/60 px-6 py-3 text-xs font-mono font-bold text-purple-200 hover:bg-purple-600 hover:text-white transition-all"
            >
              VIEW EXPERIENCE →
            </button>
            <button
              onClick={onNavigateContact}
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-xs font-mono font-bold text-white shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all"
            >
              LET'S TALK ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
