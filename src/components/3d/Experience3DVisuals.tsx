import React from 'react';
import { motion } from 'motion/react';
import { UtensilsCrossed, Building2, Megaphone, Users, Sparkles, TrendingUp, Heart, Play, Film, MapPin, Award } from 'lucide-react';

export const Restaurants3DVisual: React.FC = () => {
  return (
    <motion.div
      whileHover={{ y: -4, rotateY: 5 }}
      transition={{ duration: 0.4 }}
      className="relative w-full rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#1C0D2E] via-[#120720] to-[#0A0413] p-5 shadow-[0_15px_40px_rgba(147,51,234,0.2)] backdrop-blur-xl overflow-hidden"
    >
      {/* 3D ambient glow */}
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-900/60 border border-purple-400/40 text-purple-300 shadow-inner">
            <UtensilsCrossed className="h-4.5 w-4.5" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-purple-300 font-bold uppercase tracking-wider block">
              HOSPITALITY CONTENT
            </span>
            <span className="text-xs font-bold text-white">Food &amp; Dining Direction</span>
          </div>
        </div>
        <span className="rounded-full bg-purple-950/80 border border-purple-500/40 px-2.5 py-0.5 font-mono text-[9px] text-purple-200">
          Reel Pacing
        </span>
      </div>

      {/* Visual Content Feed representation */}
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 rounded-xl bg-purple-950/40 border border-purple-500/20 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px] font-mono text-purple-300">
            <span className="flex items-center gap-1"><Play className="h-2.5 w-2.5 fill-purple-400 text-purple-400" /> Viral Hook</span>
            <span className="text-emerald-400 font-semibold">High Saves</span>
          </div>
          <div className="my-2 h-10 rounded-lg bg-[#281340]/60 border border-purple-500/30 flex items-center justify-center gap-2 text-[11px] font-medium text-purple-100">
            <Sparkles className="h-3 w-3 text-purple-400" />
            <span>Macro Shot + Trending Audio</span>
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-400">
            <span>Weekend Push</span>
            <span className="text-purple-300 font-bold">4.6x Share Rate</span>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl bg-white/[0.03] border border-white/10 p-2.5 text-center">
          <div className="flex items-center justify-center h-7 w-7 rounded-full bg-purple-900/40 mx-auto text-purple-300">
            <Heart className="h-3.5 w-3.5 fill-purple-400/40" />
          </div>
          <span className="font-mono text-[8px] text-zinc-400 uppercase">Aesthetic Menu</span>
          <span className="text-[11px] font-bold text-white">Curated Grid</span>
        </div>
      </div>
    </motion.div>
  );
};

export const RealEstate3DVisual: React.FC = () => {
  return (
    <motion.div
      whileHover={{ y: -4, rotateY: 5 }}
      transition={{ duration: 0.4 }}
      className="relative w-full rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#180E2B] via-[#10071E] to-[#0A0413] p-5 shadow-[0_15px_40px_rgba(147,51,234,0.2)] backdrop-blur-xl overflow-hidden"
    >
      {/* 3D ambient glow */}
      <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-900/60 border border-indigo-400/40 text-indigo-300 shadow-inner">
            <Building2 className="h-4.5 w-4.5" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-purple-300 font-bold uppercase tracking-wider block">
              PROPERTY &amp; ARCHITECTURE
            </span>
            <span className="text-xs font-bold text-white">Luxury Living Storytelling</span>
          </div>
        </div>
        <span className="rounded-full bg-indigo-950/80 border border-indigo-500/40 px-2.5 py-0.5 font-mono text-[9px] text-indigo-200 flex items-center gap-1">
          <MapPin className="h-2.5 w-2.5" /> Prime Locations
        </span>
      </div>

      {/* Property Showcase Card Elements */}
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-xl bg-purple-950/40 border border-purple-500/20 p-2.5">
          <div className="flex items-center gap-2">
            <Film className="h-3.5 w-3.5 text-purple-400" />
            <span className="text-xs font-semibold text-zinc-200">Architectural Walkthrough</span>
          </div>
          <span className="font-mono text-[10px] text-purple-300 font-bold">4K Reel Format</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-2 text-center">
            <span className="font-mono text-[8px] text-zinc-400 uppercase block">Sunlight &amp; Finishes</span>
            <span className="text-xs font-bold text-white">Amenity Tours</span>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-2 text-center">
            <span className="font-mono text-[8px] text-zinc-400 uppercase block">Buyer Demographic</span>
            <span className="text-xs font-bold text-purple-300">HNW Focused</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Campaigns3DVisual: React.FC = () => {
  return (
    <motion.div
      whileHover={{ y: -4, rotateY: 5 }}
      transition={{ duration: 0.4 }}
      className="relative w-full rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#1C0D2E] via-[#120720] to-[#0A0413] p-5 shadow-[0_15px_40px_rgba(147,51,234,0.2)] backdrop-blur-xl overflow-hidden"
    >
      {/* 3D ambient glow */}
      <div className="absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-2xl pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-900/60 border border-fuchsia-400/40 text-fuchsia-300 shadow-inner">
            <Megaphone className="h-4.5 w-4.5" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-purple-300 font-bold uppercase tracking-wider block">
              CAMPAIGN LAUNCHES
            </span>
            <span className="text-xs font-bold text-white">Concepts &amp; Execution</span>
          </div>
        </div>
        <span className="rounded-full bg-fuchsia-950/80 border border-fuchsia-500/40 px-2.5 py-0.5 font-mono text-[9px] text-fuchsia-200">
          3-Phase Rollout
        </span>
      </div>

      {/* 3-Phase Interactive Bar */}
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-1.5 rounded-xl bg-purple-950/40 border border-purple-500/20 p-2 text-center">
          <div className="rounded-lg bg-white/5 py-1">
            <span className="font-mono text-[8px] text-zinc-400 block uppercase">Phase 01</span>
            <span className="text-[10px] font-bold text-purple-300">Tease</span>
          </div>
          <div className="rounded-lg bg-purple-600/30 border border-purple-400/40 py-1">
            <span className="font-mono text-[8px] text-purple-200 block uppercase">Phase 02</span>
            <span className="text-[10px] font-bold text-white">Reveal</span>
          </div>
          <div className="rounded-lg bg-white/5 py-1">
            <span className="font-mono text-[8px] text-zinc-400 block uppercase">Phase 03</span>
            <span className="text-[10px] font-bold text-purple-300">Sustain</span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/10 p-2.5">
          <span className="text-xs font-medium text-zinc-300">Disruptive Hooks &amp; Memes</span>
          <span className="font-mono text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
            <TrendingUp className="h-3 w-3" /> High Conversion
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export const Influencer3DVisual: React.FC = () => {
  return (
    <motion.div
      whileHover={{ y: -4, rotateY: 5 }}
      transition={{ duration: 0.4 }}
      className="relative w-full rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#180E2B] via-[#10071E] to-[#0A0413] p-5 shadow-[0_15px_40px_rgba(147,51,234,0.2)] backdrop-blur-xl overflow-hidden"
    >
      {/* 3D ambient glow */}
      <div className="absolute -left-8 -bottom-8 h-28 w-28 rounded-full bg-purple-500/20 blur-2xl pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-900/60 border border-purple-400/40 text-purple-300 shadow-inner">
            <Users className="h-4.5 w-4.5" />
          </div>
          <div>
            <span className="font-mono text-[10px] text-purple-300 font-bold uppercase tracking-wider block">
              CREATOR COLLABORATIONS
            </span>
            <span className="text-xs font-bold text-white">Niche PR &amp; Outreach</span>
          </div>
        </div>
        <span className="rounded-full bg-purple-950/80 border border-purple-500/40 px-2.5 py-0.5 font-mono text-[9px] text-purple-200 flex items-center gap-1">
          <Award className="h-2.5 w-2.5" /> Vetted Roster
        </span>
      </div>

      {/* Creator Matrix Card */}
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-xl bg-purple-950/40 border border-purple-500/20 p-2.5">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-200">On-Ground Tasting Visits</span>
          </div>
          <span className="font-mono text-[10px] text-purple-300">Active PR</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-2 text-center">
            <span className="font-mono text-[8px] text-zinc-400 uppercase block">Outreach Criteria</span>
            <span className="text-xs font-bold text-white">High Affinity</span>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-2 text-center">
            <span className="font-mono text-[8px] text-zinc-400 uppercase block">Live Tracking</span>
            <span className="text-xs font-bold text-purple-300">Deliverable Audit</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
