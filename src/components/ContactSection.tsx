import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, ArrowUpRight, Copy, Check, Send, Sparkles, MessageCircle, Heart, Zap, Compass, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');

  const emailAddress = 'sawantdeepasha77@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Trigger subtle celebratory confetti
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#A855F7', '#C084FC', '#FFFFFF', '#7E22CE']
    });

    setFormSent(true);
    setTimeout(() => {
      // Create mailto fallback link with prefilled subject/body
      const mailtoLink = `mailto:${emailAddress}?subject=Connecting with Deepasha (${encodeURIComponent(
        senderName || 'Collaboration'
      )})&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative w-full border-t border-white/[0.06] bg-[#050507] py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Subtle purple atmospheric diffusion */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[500px] w-full max-w-4xl subtle-purple-diffuse opacity-75"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase">
            05 — CONTACT
          </span>
          <span className="h-[1px] w-12 bg-purple-500/30" />
        </div>

        {/* Master Copy */}
        <div className="space-y-2">
          <p className="font-mono text-sm sm:text-base font-semibold tracking-[0.2em] text-zinc-400 uppercase">
            YOU MADE IT THIS FAR.
          </p>
          <h2 className="text-section-title font-display font-black text-white leading-none tracking-tight">
            MIGHT AS WELL SAY HI.
          </h2>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D8B4FE] tracking-tight pt-2">
            SO... WHAT ARE WE MAKING?
          </p>
        </div>

        {/* Main Grid: 3D Creative Connect Hub + Contact Interactions */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Left: 3D Interactive Creative Hub (Replacing Mascot with pure 3D design & typography) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xs rounded-3xl border border-purple-500/30 bg-gradient-to-b from-[#170B2E] via-[#0E061E] to-[#080312] p-6 shadow-[0_20px_50px_rgba(147,51,234,0.25)] backdrop-blur-xl"
            >
              {/* Top Bar with Live Ping */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] font-bold text-zinc-200">OPEN TO COLLAB</span>
                </div>
                <span className="rounded-full bg-purple-500/20 px-2.5 py-0.5 font-mono text-[10px] text-purple-300 border border-purple-500/30">
                  MUMBAI / REMOTE
                </span>
              </div>

              {/* Center 3D Floating Token Graphic */}
              <div className="relative my-6 flex flex-col items-center justify-center py-4">
                {/* 3D Glowing Ambient Sphere */}
                <div className="absolute h-32 w-32 rounded-full bg-gradient-to-tr from-purple-600/40 via-fuchsia-500/30 to-indigo-600/30 blur-2xl animate-pulse" />

                {/* Floating 3D Creative Badge Layer */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/20 bg-gradient-to-br from-purple-600 to-indigo-900 shadow-2xl shadow-purple-900/50"
                >
                  <Sparkles className="h-10 w-10 text-white" />
                </motion.div>

                {/* Floating Micro Notification Badges */}
                <motion.div
                  animate={{
                    y: [-4, 4, -4],
                    x: [-3, 3, -3],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-1 -left-2 z-20 flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-[#1A0B33]/90 px-3 py-1 shadow-md backdrop-blur-md"
                >
                  <Flame className="h-3.5 w-3.5 text-pink-400" />
                  <span className="font-mono text-[10px] font-bold text-purple-200">BIG IDEAS</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [4, -4, 4],
                    x: [3, -3, 3],
                  }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-1 -right-2 z-20 flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-[#15092A]/90 px-3 py-1 shadow-md backdrop-blur-md"
                >
                  <Zap className="h-3.5 w-3.5 text-amber-300" />
                  <span className="font-mono text-[10px] font-bold text-zinc-200">LET'S TALK</span>
                </motion.div>
              </div>

              {/* Bottom Quote / Philosophy */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3 text-center">
                <p className="font-display text-xs font-semibold text-purple-200">
                  "Let's make something impossible to ignore."
                </p>
              </div>
            </motion.div>

            <p className="mt-4 text-center font-mono text-xs text-zinc-400">
              ALWAYS EXCITED TO CHAT ABOUT BRANDS, CONTENT &amp; IDEAS.
            </p>
          </div>

          {/* Right: Direct Actions & Interactive Message Box */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Email Copy Card */}
              <button
                id="contact-email-btn"
                onClick={handleCopyEmail}
                className="group flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#120B1F]/70 p-4 text-left transition-all hover:border-purple-400 hover:bg-[#1C1030] shadow-sm hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <Mail className="h-5 w-5 text-purple-400" />
                  {copiedEmail ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <Copy className="h-4 w-4 text-zinc-500 group-hover:text-purple-300" />
                  )}
                </div>
                <div className="mt-4">
                  <span className="font-mono text-[10px] uppercase text-zinc-400">
                    {copiedEmail ? 'COPIED TO CLIPBOARD!' : 'EMAIL ADDRESS'}
                  </span>
                  <p className="text-xs font-semibold text-white truncate">
                    {emailAddress}
                  </p>
                </div>
              </button>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href="https://linkedin.com/in/deepasha-sawant"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition-all hover:border-purple-500/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <Linkedin className="h-5 w-5 text-purple-400" />
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-4">
                  <span className="font-mono text-[10px] uppercase text-zinc-400">PROFESSIONAL</span>
                  <p className="text-xs font-semibold text-white">LINKEDIN</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                id="contact-instagram-link"
                href="https://instagram.com/deepashasawant"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition-all hover:border-purple-500/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <Instagram className="h-5 w-5 text-purple-400" />
                  <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-4">
                  <span className="font-mono text-[10px] uppercase text-zinc-400">SOCIAL</span>
                  <p className="text-xs font-semibold text-white">INSTAGRAM</p>
                </div>
              </a>
            </div>

            {/* Quick Interactive Message Form */}
            <form
              id="contact-quick-form"
              onSubmit={handleSendMessage}
              className="rounded-3xl border border-white/10 bg-[#0E0919]/90 p-6 sm:p-7 backdrop-blur-xl shadow-[0_0_40px_rgba(147,51,234,0.1)]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-300 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                  <span>DROP A QUICK NOTE</span>
                </span>
                <span className="font-mono text-[11px] text-zinc-500">LET'S CONNECT</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <input
                  id="contact-name-input"
                  type="text"
                  placeholder="Your Name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
                <input
                  id="contact-email-input"
                  type="email"
                  placeholder="Your Email (Optional)"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              <textarea
                id="contact-message-input"
                rows={3}
                required
                placeholder="Hey Deepasha! Let's talk about..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs text-white placeholder:text-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />

              <div className="mt-4 flex items-center justify-between">
                <p className="text-[11px] font-mono text-zinc-500">
                  Direct reply within 24h
                </p>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={formSent}
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#9333EA] to-[#7928CA] px-6 py-2.5 text-xs font-bold tracking-wider text-white shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] active:scale-95 disabled:opacity-50"
                >
                  <span>{formSent ? 'MESSAGE READY!' : 'SEND NOTE'}</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
