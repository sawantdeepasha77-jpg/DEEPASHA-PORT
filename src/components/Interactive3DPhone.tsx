import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Heart, MessageCircle, Share2, Sparkles, TrendingUp, Zap, Flame, Camera, Layers } from 'lucide-react';

export const Interactive3DPhone: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position physics for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 180, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-22, 22]), springConfig);
  const translateZ = useSpring(isHovered ? 40 : 0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-4 py-8"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic 3D Atmospheric Glow */}
      <div 
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-gradient-to-tr from-purple-600/30 via-fuchsia-500/20 to-indigo-600/30 blur-3xl transition-opacity duration-700"
        style={{ opacity: isHovered ? 0.9 : 0.5 }}
      />

      {/* Floating 3D Notification Pill #1 - Top Left */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          x: [-3, 3, -3],
          rotate: [-2, 2, -2],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -left-6 sm:-left-12 z-30 flex items-center gap-2.5 rounded-2xl border border-purple-500/30 bg-[#160B28]/90 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl pointer-events-auto"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-md">
          <Flame className="h-4 w-4 text-white animate-bounce" />
        </div>
        <div className="text-left">
          <p className="font-mono text-[10px] font-semibold text-purple-300 uppercase tracking-wider">VIRAL HOOK</p>
          <p className="text-xs font-bold text-white">+480% Engagement</p>
        </div>
      </motion.div>

      {/* Floating 3D Notification Pill #2 - Bottom Right */}
      <motion.div
        animate={{
          y: [6, -6, 6],
          x: [3, -3, 3],
          rotate: [2, -2, 2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-6 -right-6 sm:-right-12 z-30 flex items-center gap-2.5 rounded-2xl border border-purple-400/30 bg-[#130A24]/90 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl pointer-events-auto"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-md">
          <Zap className="h-4 w-4 text-yellow-300" />
        </div>
        <div className="text-left">
          <p className="font-mono text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">STRATEGY</p>
          <p className="text-xs font-bold text-white">Scroll-Stopping ✦</p>
        </div>
      </motion.div>

      {/* Floating 3D Creative Camera Accent - Top Right */}
      <motion.div
        animate={{
          y: [5, -8, 5],
          rotate: [6, -6, 6],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -top-8 -right-4 sm:-right-8 z-30 hidden sm:flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 shadow-lg backdrop-blur-md"
      >
        <Camera className="h-3.5 w-3.5 text-purple-300" />
        <span className="font-mono text-[10px] text-zinc-300 font-medium">CAMPAIGN READY</span>
      </motion.div>

      {/* 3D Smartphone Device Body */}
      <motion.div
        id="interactive-3d-phone"
        style={{
          rotateX,
          rotateY,
          translateZ,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-64 sm:w-72 h-[460px] rounded-[42px] border-[6px] border-zinc-800 bg-[#0B0614] shadow-[0_25px_60px_-15px_rgba(168,85,247,0.35),0_0_0_1px_rgba(255,255,255,0.1)] p-3 overflow-hidden select-none transition-shadow duration-500"
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 h-5 w-24 rounded-full bg-black/90 border border-white/10 flex items-center justify-between px-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-zinc-900 border border-purple-500/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
        </div>

        {/* Screen Content Wrapper */}
        <div className="relative h-full w-full rounded-[32px] overflow-hidden bg-gradient-to-b from-[#180D2E] via-[#0E071D] to-[#080312] border border-white/10 flex flex-col justify-between p-3.5 pt-8">
          
          {/* Glass Specular Sheen Effect */}
          <div 
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 opacity-60 mix-blend-overlay" 
            aria-hidden="true"
          />

          {/* Top Bar inside Screen */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span className="font-mono text-[10px] font-bold text-purple-200 tracking-wider">CREATIVE FEED</span>
            </div>
            <span className="rounded-full bg-purple-500/20 px-2 py-0.5 font-mono text-[9px] font-semibold text-purple-300 border border-purple-500/30">
              LIVE
            </span>
          </div>

          {/* Center Showcase Card inside Phone Screen */}
          <div className="relative my-auto flex flex-col gap-3">
            {/* Visual Media Showcase Box */}
            <div className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-indigo-950/60 p-3 flex flex-col justify-between shadow-inner">
              {/* Background Geometric Fluid Art */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-pink-600/20 to-transparent opacity-80" />
              <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-purple-500/30 blur-2xl" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="rounded-md bg-black/50 px-2 py-0.5 font-mono text-[9px] font-medium text-zinc-300 backdrop-blur-md">
                  #BrandStory
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-white bg-purple-500/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                  <TrendingUp className="h-3 w-3 text-green-300" /> 98.4%
                </span>
              </div>

              <div className="relative z-10">
                <p className="font-display text-sm font-extrabold text-white leading-tight">
                  High-Retention Storytelling
                </p>
                <p className="text-[10px] text-purple-200/90 font-medium line-clamp-1 mt-0.5">
                  Turning attention into authentic brand affinity.
                </p>
              </div>
            </div>

            {/* Interaction Bar */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-pink-400 text-[11px] font-semibold">
                  <Heart className="h-3.5 w-3.5 fill-pink-400" />
                  <span>14.2k</span>
                </div>
                <div className="flex items-center gap-1 text-purple-300 text-[11px] font-semibold">
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>1.8k</span>
                </div>
                <div className="flex items-center gap-1 text-indigo-300 text-[11px] font-semibold">
                  <Share2 className="h-3.5 w-3.5" />
                  <span>940</span>
                </div>
              </div>
              <span className="font-mono text-[9px] text-zinc-400">0:15 / 0:30</span>
            </div>
          </div>

          {/* Bottom Card - Strategy Snapshot */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-400 animate-ping" />
                <span className="font-mono text-[10px] font-semibold text-zinc-300">CONTENT PILLARS</span>
              </div>
              <span className="font-mono text-[9px] text-purple-300">HHH MODEL</span>
            </div>
          </div>

        </div>

        {/* Glossy Edge Highlights (3D bevel simulation) */}
        <div className="pointer-events-none absolute inset-0 rounded-[38px] border border-white/20" />
      </motion.div>
    </div>
  );
};
