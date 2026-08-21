import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { ArrowLeft, ArrowUpRight, Sparkles, Eye, Target, Compass, Layers } from 'lucide-react';

interface WorkPageProps {
  onNavigateHome: () => void;
  onSelectProject: (id: string) => void;
  onNavigateContact: () => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onNavigateHome,
  onSelectProject,
  onNavigateContact,
}) => {
  return (
    <div className="relative w-full min-h-screen pt-28 pb-24 px-6 md:px-12 bg-[#050507] text-[#FAFAFA] overflow-hidden">
      {/* Background ambient glows */}
      <div
        className="pointer-events-none absolute right-1/4 top-16 h-[500px] w-[500px] rounded-full bg-purple-900/15 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-1/4 h-[450px] w-[450px] rounded-full bg-fuchsia-900/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        {/* Top Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-2 font-mono text-xs font-semibold text-purple-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO OVERVIEW</span>
          </button>

          <span className="font-mono text-xs text-purple-400/80 bg-purple-950/60 border border-purple-500/30 px-3.5 py-1 rounded-full">
            DEDICATED WORK PAGE
          </span>
        </div>

        {/* Hero Header */}
        <div className="mb-16">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              03 — SELECTED CASE STUDIES
            </span>
            <span className="h-[1px] w-12 bg-purple-500/30" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.08]">
            STRATEGIC THINKING.<br />
            <span className="bg-gradient-to-r from-[#D8B4FE] via-white to-[#C084FC] bg-clip-text text-transparent">
              CREATIVE EXECUTION.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Three deep case studies spanning content strategy frameworks, creative advertising repositioning, and clinical brand identity design.
          </p>
        </div>

        {/* 3 Large, Premium Interactive Case Study Cards */}
        <div className="flex flex-col gap-16 md:gap-24 mb-20">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                id={`work-page-card-${project.id}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-white/[0.08] bg-[#0E0919]/75 p-6 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/50 hover:bg-[#140B24]/90 hover:shadow-[0_20px_60px_rgba(147,51,234,0.2)]"
              >
                {/* 3D Corner Ambient Accent */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />

                {/* Info Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between z-10 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    {/* Number & Category Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-sm font-bold text-purple-400">
                        {project.number}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-purple-500" />
                      <span className="rounded-full border border-purple-500/40 bg-purple-950/80 px-3.5 py-1 font-mono text-xs font-semibold text-purple-200 uppercase shadow-sm">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-zinc-400">
                        {project.year}
                      </span>
                    </div>

                    {/* Brand Name */}
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-1.5 font-mono text-base font-semibold text-[#D8B4FE]">
                      {project.subtitle}
                    </p>

                    {/* Short one-line description */}
                    <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {project.oneLineDescription}
                    </p>

                    {/* Role & Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono text-zinc-300 transition-colors group-hover:border-purple-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <button
                      id={`open-study-${project.id}`}
                      onClick={() => onSelectProject(project.id)}
                      className="inline-flex items-center gap-2 rounded-full border border-purple-500/60 bg-purple-950/70 px-6 py-3 text-xs font-mono font-bold tracking-wider text-purple-200 transition-all duration-300 hover:border-purple-400 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] active:scale-95"
                    >
                      <Eye className="h-4 w-4" />
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>

                    <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
                      ROLE: {project.role.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* Visual Image Showcase */}
                <div
                  className={`lg:col-span-6 overflow-hidden rounded-2xl border border-white/15 relative cursor-pointer aspect-[16/10] group-hover:border-purple-400/60 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 z-10 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  onClick={() => onSelectProject(project.id)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0919] via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

                  {/* 3D Floating Explore Badge */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0C0618]/90 border border-purple-500/50 px-4 py-2 text-xs font-mono font-semibold text-purple-200 shadow-xl backdrop-blur-md group-hover:border-purple-400 transition-colors">
                    <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                    <span>READ FULL BREAKDOWN</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#0E0919]/90 p-8 sm:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-semibold block mb-1">
              HAVE A PROJECT OR COLLABORATION?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Let’s make something people stop scrolling for.
            </h3>
            <p className="text-zinc-400 text-sm mt-1">
              Reach out for full-time opportunities, brand planning, or creative strategy.
            </p>
          </div>

          <button
            onClick={onNavigateContact}
            className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3.5 text-xs font-mono font-bold text-white shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all shrink-0"
          >
            LET'S TALK ↗
          </button>
        </div>
      </div>
    </div>
  );
};
