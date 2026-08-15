import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectCaseStudy } from '../types';
import { X, ArrowUpRight, CheckCircle2, Sparkles, Layers, Target, Compass } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          id="project-modal-dialog"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative my-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-500/30 bg-[#0C0716] text-white shadow-[0_0_60px_rgba(147,51,234,0.25)] p-6 sm:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            id="project-modal-close-btn"
            onClick={onClose}
            className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-300 transition-colors hover:bg-purple-900/40 hover:text-white"
            aria-label="Close project modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header Metadata */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-sm font-bold text-purple-400">
              PROJECT {project.number}
            </span>
            <span className="h-1 w-1 rounded-full bg-purple-500" />
            <span className="rounded-full border border-purple-500/40 bg-purple-950/70 px-3 py-1 font-mono text-xs font-semibold text-purple-200 uppercase">
              {project.type}
            </span>
            <span className="font-mono text-xs text-zinc-400">
              YEAR {project.year}
            </span>
          </div>

          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="mt-1 font-mono text-base sm:text-lg text-purple-300 font-medium">
            {project.subtitle}
          </p>

          {/* Role badge */}
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white/[0.04] border border-white/10 px-3 py-1.5 text-xs font-mono text-zinc-300">
            <Target className="h-3.5 w-3.5 text-purple-400" />
            <span>ROLE: {project.role}</span>
          </div>

          {/* Project Featured Image */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 aspect-video relative group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0716] via-transparent to-transparent opacity-60" />
          </div>

          {/* Overview text */}
          <div className="mt-8 border-b border-white/10 pb-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2">
              PROJECT OVERVIEW
            </h3>
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Strategic Highlights */}
          <div className="mt-8">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-purple-300 mb-4">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span>CORE STRATEGIC HIGHLIGHTS</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between"
                >
                  <h4 className="font-display text-sm font-bold text-white mb-2">
                    {highlight.heading}
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {highlight.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Section Breakdown */}
          <div className="mt-10 space-y-6">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
              <Layers className="h-4 w-4 text-purple-400" />
              <span>DEEP DIVE &amp; EXECUTION BREAKDOWN</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.breakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-purple-500/20 bg-[#140B22]/70 p-5"
                >
                  <h4 className="font-display text-base font-bold text-purple-200 mb-2">
                    {item.sectionTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables List */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-4">
              DELIVERABLES INCLUDED
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Takeaway */}
          <div className="mt-8 rounded-xl border border-purple-500/40 bg-purple-950/40 p-4 text-xs font-mono text-purple-200">
            {project.metricsOrTakeaway}
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-full bg-purple-600 px-6 py-2.5 text-xs font-bold tracking-wider text-white hover:bg-purple-500 transition-colors"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
