import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { ArrowUpRight, Sparkles, Layers, Eye } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="relative w-full border-t border-white/[0.06] bg-[#07050B] py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-900/10 blur-[150px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase">
            04 — WORK
          </span>
          <span className="h-[1px] w-12 bg-purple-500/30" />
        </div>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-16">
          <div>
            <h2
              id="work-main-heading"
              className="text-section-title font-display font-bold text-white leading-tight"
            >
              A FEW THINGS<br />I’VE PLAYED WITH.
            </h2>
            <p className="mt-3 text-base text-zinc-400 max-w-lg">
              Creative case studies spanning brand strategy, content architecture, advertising concepts, and identity design.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-400">
            03 SELECTED CASE STUDIES
          </div>
        </div>

        {/* Asymmetrical Editorial Project Spreads */}
        <div className="flex flex-col gap-20 md:gap-28">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`project-card group relative grid grid-cols-1 gap-8 lg:grid-cols-12 items-center rounded-3xl border border-white/[0.07] bg-[#0E0919]/60 p-6 sm:p-10 backdrop-blur-md transition-all duration-500 hover:border-purple-500/40 hover:bg-[#130B22]/80 hover:shadow-[0_0_50px_rgba(147,51,234,0.12)]`}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                {/* Project Info Block */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    {/* Project Number & Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-sm font-bold text-purple-400">
                        {project.number}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-purple-500" />
                      <span className="rounded-full border border-purple-500/30 bg-purple-950/60 px-3 py-1 font-mono text-[11px] font-semibold text-purple-200 uppercase">
                        {project.type}
                      </span>
                      <span className="font-mono text-xs text-zinc-400">
                        {project.year}
                      </span>
                    </div>

                    {/* Project Title (Steelman and all titles have strict whitespace, zero overlap) */}
                    <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-purple-200 transition-colors">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-1.5 font-mono text-sm sm:text-base font-semibold text-[#D8B4FE]">
                      {project.subtitle}
                    </p>

                    {/* Overview description */}
                    <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {project.overview}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Trigger CTA */}
                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <button
                      id={`view-study-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-950/40 px-5 py-2.5 text-xs font-mono font-bold tracking-wider text-purple-200 transition-all duration-300 hover:border-purple-400 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>

                    <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
                      ROLE: {project.role}
                    </span>
                  </div>
                </div>

                {/* Project Visual Image Showcase */}
                <div
                  className={`lg:col-span-6 overflow-hidden rounded-2xl border border-white/10 relative cursor-pointer aspect-[16/10] group-hover:border-purple-400/40 transition-all duration-500 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0919] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/70 border border-white/20 px-3 py-1 text-[11px] font-mono text-purple-200 backdrop-blur-md">
                    <span>EXPLORE BREAKDOWN</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
