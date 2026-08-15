import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MASCOT_IMAGE } from '../data/portfolioData';
import { Mail, Linkedin, Instagram, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';
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
      {/* Subtle purple atmospheric diffusion (No geometric circles) */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 h-[450px] w-full max-w-4xl subtle-purple-diffuse opacity-70"
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

        {/* Master Copy exactly matching PRD */}
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

        {/* Main Grid: Mascot Cutout Integration + Contact Interactions */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          {/* Left: Transparent Cutout Mascot (No square/rectangle/circle container) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-44 sm:w-56 md:w-68 aspect-square select-none pointer-events-none">
              <img
                src={MASCOT_IMAGE}
                alt="Deepasha Sawant Mascot"
                referrerPolicy="no-referrer"
                className="h-full w-full object-contain filter drop-shadow-[0_8px_30px_rgba(147,51,234,0.2)]"
              />
            </div>
            <p className="mt-2 text-center font-mono text-xs text-zinc-400">
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
                className="group flex flex-col justify-between rounded-2xl border border-purple-500/30 bg-[#120B1F]/70 p-4 text-left transition-all hover:border-purple-400 hover:bg-[#1C1030]"
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
