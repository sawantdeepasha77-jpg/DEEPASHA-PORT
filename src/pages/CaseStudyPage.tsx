import React from 'react';
import { motion } from 'motion/react';
import { ProjectCaseStudy } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2, ChevronRight, Layers, Target, Compass, Lightbulb, TrendingUp, Award, Quote } from 'lucide-react';

interface CaseStudyPageProps {
  project: ProjectCaseStudy;
  onBackToWork: () => void;
  onSelectProject: (id: string) => void;
  onNavigateContact: () => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  project,
  onBackToWork,
  onSelectProject,
  onNavigateContact,
}) => {
  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS_DATA[currentIndex - 1] : PROJECTS_DATA[PROJECTS_DATA.length - 1];
  const nextProject = currentIndex < PROJECTS_DATA.length - 1 ? PROJECTS_DATA[currentIndex + 1] : PROJECTS_DATA[0];

  const story = project.storytelling;

  return (
    <div className="relative w-full min-h-screen pt-28 pb-24 px-6 md:px-12 bg-[#050507] text-[#FAFAFA] overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute right-1/4 top-20 h-[500px] w-[500px] rounded-full bg-purple-900/15 blur-[170px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-1/4 h-[450px] w-[450px] rounded-full bg-fuchsia-900/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl">
        {/* Navigation Breadcrumb & Quick Switcher */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            onClick={onBackToWork}
            className="group inline-flex items-center gap-2 font-mono text-xs font-semibold text-purple-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO ALL CASE STUDIES</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-zinc-400">
              CASE STUDY {project.number} OF 03
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onSelectProject(prevProject.id)}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-zinc-300 hover:bg-purple-900/40 hover:text-white transition-colors"
                title={`Previous: ${prevProject.title}`}
              >
                ← {prevProject.title}
              </button>
              <button
                onClick={() => onSelectProject(nextProject.id)}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-mono text-zinc-300 hover:bg-purple-900/40 hover:text-white transition-colors"
                title={`Next: ${nextProject.title}`}
              >
                {nextProject.title} →
              </button>
            </div>
          </div>
        </div>

        {/* Hero Header Presentation */}
        <div className="mb-12">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-purple-400 bg-purple-950/80 border border-purple-500/40 px-3.5 py-1 rounded-full">
              CASE STUDY {project.number}
            </span>
            <span className="rounded-full border border-purple-500/30 bg-purple-900/40 px-3 py-1 font-mono text-xs font-semibold text-purple-200 uppercase">
              {project.category}
            </span>
            <span className="font-mono text-xs text-zinc-400">
              {project.year} • {project.type}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight leading-[1.05]">
            {project.title}
          </h1>

          <p className="mt-3 text-lg sm:text-2xl font-mono font-semibold text-[#D8B4FE]">
            {project.subtitle}
          </p>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-3xl">
            {project.overview}
          </p>

          {/* Role badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#120822] border border-purple-500/30 px-4 py-2 text-xs font-mono text-purple-200 shadow-sm">
            <Target className="h-4 w-4 text-purple-400" />
            <span>MY ROLE &amp; SCOPE: {project.role}</span>
          </div>
        </div>

        {/* Featured Visual Image Banner */}
        <div className="mb-16 overflow-hidden rounded-3xl border border-purple-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] aspect-[16/9] relative group">
          <img
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-50" />
        </div>

        {/* Tags */}
        <div className="mb-16 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/[0.04] border border-white/10 px-3.5 py-1 text-xs font-mono text-zinc-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* STORYTELLING FLOW: The Brief → The Challenge → The Strategy → The Idea → Execution → Takeaway */}
        {/* ========================================================================= */}

        <div className="space-y-16">
          {/* STEP 1: THE BRIEF */}
          <section id="case-study-brief" className="rounded-3xl border border-white/[0.08] bg-[#0E0919]/80 p-6 sm:p-10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-950 border border-purple-500/40 font-mono text-xs font-bold text-purple-300">
                01
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {story.brief.heading}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-6">
              {story.brief.description}
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-2.5">
              <span className="font-mono text-xs uppercase tracking-wider text-purple-300 font-semibold block mb-2">
                CORE OBJECTIVES:
              </span>
              {story.brief.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>

          {/* STEP 2: THE CHALLENGE */}
          <section id="case-study-challenge" className="rounded-3xl border border-rose-500/20 bg-[#120716]/80 p-6 sm:p-10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-950 border border-rose-500/40 font-mono text-xs font-bold text-rose-300">
                02
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {story.challenge.heading}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-6">
              {story.challenge.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {story.challenge.points.map((pt, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs text-zinc-300 leading-relaxed">
                  <span className="font-mono text-[10px] text-rose-300 font-bold block mb-1">FRICTION {idx + 1}</span>
                  {pt}
                </div>
              ))}
            </div>
          </section>

          {/* STEP 3: THE STRATEGY */}
          <section id="case-study-strategy" className="rounded-3xl border border-indigo-500/30 bg-[#0E0922]/80 p-6 sm:p-10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-950 border border-indigo-500/40 font-mono text-xs font-bold text-indigo-300">
                03
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {story.strategy.heading}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-6">
              {story.strategy.description}
            </p>

            <div className="space-y-3">
              {story.strategy.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl border border-indigo-500/20 bg-indigo-950/30 p-3.5 text-xs sm:text-sm text-zinc-200">
                  <Compass className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>

          {/* STEP 4: THE IDEA */}
          <section id="case-study-idea" className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-[#1C0D30] via-[#120722] to-[#0A0413] p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-900 border border-purple-400/40 font-mono text-xs font-bold text-purple-200">
                04
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {story.idea.heading}
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-purple-100 font-medium leading-relaxed mb-6">
              {story.idea.description}
            </p>

            {story.idea.quote && (
              <div className="my-6 rounded-2xl border border-purple-500/40 bg-purple-950/60 p-6 relative">
                <Quote className="h-6 w-6 text-purple-400/40 absolute top-4 right-4" />
                <p className="font-display text-base sm:text-lg italic text-purple-200 leading-relaxed">
                  {story.idea.quote}
                </p>
              </div>
            )}

            <div className="space-y-2.5">
              {story.idea.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <Sparkles className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </section>

          {/* STEP 5: EXECUTION */}
          <section id="case-study-execution" className="rounded-3xl border border-white/[0.08] bg-[#0E0919]/80 p-6 sm:p-10 backdrop-blur-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-950 border border-purple-500/40 font-mono text-xs font-bold text-purple-300">
                05
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {story.execution.heading}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-6">
              {story.execution.description}
            </p>

            {/* Deliverables tags */}
            <div className="mb-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <span className="font-mono text-xs uppercase tracking-wider text-purple-300 font-semibold block mb-3">
                KEY DELIVERABLES PRODUCED:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {story.execution.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step by step cards */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold block">
                EXECUTION BREAKDOWN:
              </span>
              {story.execution.steps.map((step, idx) => (
                <div key={idx} className="rounded-2xl border border-purple-500/20 bg-[#140B24]/80 p-5">
                  <h3 className="font-display text-base font-bold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* STEP 6: OUTCOME / KEY TAKEAWAY */}
          <section id="case-study-takeaway" className="rounded-3xl border border-purple-500/50 bg-gradient-to-b from-[#180E2B] to-[#0D0618] p-6 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(147,51,234,0.18)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-600 font-mono text-xs font-bold text-white shadow-md">
                06
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {story.takeaway.heading}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed mb-6">
              {story.takeaway.description}
            </p>

            <div className="rounded-2xl border border-purple-500/30 bg-purple-950/40 p-5 space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-purple-300 font-bold block">
                WHAT THIS CASE STUDY PROVED:
              </span>
              {story.takeaway.learnings.map((learning, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-purple-100">
                  <Award className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{learning}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Case Study Navigation Footer */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={onBackToWork}
            className="font-mono text-xs font-semibold text-purple-300 hover:text-white transition-colors flex items-center gap-2"
          >
            ← BACK TO ALL CASE STUDIES
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onSelectProject(nextProject.id)}
              className="rounded-full border border-purple-500/40 bg-purple-950/60 px-5 py-2.5 text-xs font-mono font-bold text-purple-200 hover:bg-purple-600 hover:text-white transition-all"
            >
              NEXT: {nextProject.title} →
            </button>
            <button
              onClick={onNavigateContact}
              className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2.5 text-xs font-mono font-bold text-white shadow-lg transition-all"
            >
              LET'S TALK ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
