import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, Compass, MousePointer, Globe, Play, Flame, Layers } from 'lucide-react';

export const FloatingBrowserMockup: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border border-purple-500/20 bg-[#10081E]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl p-3.5 ${className}`}
    >
      {/* 3D Browser Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-0.5 border border-white/10 font-mono text-[9px] text-purple-300">
          <Globe className="h-2.5 w-2.5" />
          <span>brand-strategy.design/live</span>
        </div>
        <div className="w-8" />
      </div>

      {/* Content Preview */}
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 rounded-xl bg-purple-950/40 border border-purple-500/20 p-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[9px] text-purple-300 font-semibold uppercase">Organic Reach</span>
            <span className="text-[10px] font-bold text-emerald-400">+312%</span>
          </div>
          <div className="h-8 w-full rounded bg-purple-500/10 flex items-end gap-1 p-1">
            <div className="h-3 w-full bg-purple-400/40 rounded-sm" />
            <div className="h-5 w-full bg-purple-400/60 rounded-sm" />
            <div className="h-4 w-full bg-purple-400/50 rounded-sm" />
            <div className="h-7 w-full bg-gradient-to-t from-purple-500 to-pink-400 rounded-sm shadow-sm" />
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl bg-white/5 border border-white/10 p-2 text-center">
          <Sparkles className="h-3.5 w-3.5 text-purple-300 mx-auto" />
          <span className="font-mono text-[8px] text-zinc-400 uppercase">Retention</span>
          <span className="text-xs font-bold text-white">4.8x</span>
        </div>
      </div>
    </motion.div>
  );
};

export const Floating3DCursorBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      animate={{
        y: [-4, 4, -4],
        rotate: [-1, 1, -1],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-[#1A0C2E]/90 px-3.5 py-1.5 shadow-[0_10px_25px_rgba(168,85,247,0.25)] backdrop-blur-md ${className}`}
    >
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-white shadow-sm">
        <MousePointer className="h-3 w-3 fill-white" />
      </div>
      <span className="font-mono text-[10px] font-bold text-purple-200 uppercase tracking-wider">
        CREATIVE DIRECTION
      </span>
    </motion.div>
  );
};

export const FloatingNotificationCard: React.FC<{
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentColor?: string;
  className?: string;
}> = ({ title, subtitle, icon, accentColor = 'from-purple-500 to-indigo-600', className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.3 }}
      className={`flex items-center gap-3 rounded-2xl border border-white/15 bg-[#120822]/85 px-3.5 py-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl ${className}`}
    >
      <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${accentColor} shadow-md text-white`}>
        {icon}
      </div>
      <div className="text-left">
        <p className="font-mono text-[9px] font-semibold text-purple-300 uppercase tracking-wider">{title}</p>
        <p className="text-xs font-bold text-white">{subtitle}</p>
      </div>
    </motion.div>
  );
};
