import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative w-full border-t border-white/[0.06] bg-[#050507] py-10 px-6 md:px-12 text-zinc-400"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row text-xs font-mono">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-display font-bold text-white tracking-wider">
            DEEPASHA SAWANT
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="text-zinc-400">TYBBA DIGITAL BUSINESS</span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="text-zinc-500">© 2026</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/deepasha-sawant"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors uppercase"
          >
            LINKEDIN
          </a>
          <a
            href="https://instagram.com/deepashasawant"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-colors uppercase"
          >
            INSTAGRAM
          </a>
          <a
            href="mailto:sawantdeepasha77@gmail.com"
            className="hover:text-purple-300 transition-colors uppercase"
          >
            EMAIL
          </a>

          <button
            onClick={scrollToTop}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:border-purple-400 hover:text-white transition-colors ml-2"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
