import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, ArrowLeft, Send, CheckCircle2, Copy, Check, Sparkles, MapPin, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'sawantdeepasha77@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#A855F7', '#EC4899', '#6366F1', '#ffffff'],
      });
    }, 800);
  };

  return (
    <div className="relative w-full min-h-screen pt-28 pb-24 px-6 md:px-12 bg-[#050507] text-[#FAFAFA] overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute right-1/4 top-16 h-[500px] w-[500px] rounded-full bg-purple-900/15 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-1/4 h-[450px] w-[450px] rounded-full bg-indigo-900/10 blur-[150px]"
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
            DEDICATED CONTACT PAGE
          </span>
        </div>

        {/* Hero Header */}
        <div className="mb-14">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#C084FC] uppercase flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              04 — GET IN TOUCH
            </span>
            <span className="h-[1px] w-12 bg-purple-500/30" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.08]">
            LET’S MAKE SOMETHING<br />
            <span className="bg-gradient-to-r from-[#D8B4FE] via-white to-[#C084FC] bg-clip-text text-transparent">
              PEOPLE STOP SCROLLING FOR.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Whether you have an upcoming project, a social media strategy requirement, or just want to chat about consumer psychology and brand culture — my inbox is always open.
          </p>
        </div>

        {/* Main Content Grid: Direct Links & 3D Hub vs Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Interactive 3D Hub */}
          <div className="lg:col-span-5 space-y-6">
            {/* Interactive 3D Status Hub */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-[#1C0D2E] via-[#120720] to-[#0A0413] p-7 backdrop-blur-xl shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-300 font-bold flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  STATUS: AVAILABLE FOR WORK
                </span>
                <span className="rounded-full bg-purple-950 border border-purple-400/40 px-2.5 py-0.5 font-mono text-[10px] text-purple-200">
                  2026
                </span>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 text-sm text-zinc-200">
                  <MapPin className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>Mumbai, India (Open to Remote &amp; On-Site)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-200">
                  <Clock className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>Response Time: Usually within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-200">
                  <MessageSquare className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>Available for: Full-time Roles, Brand Planning &amp; Social Strategy</span>
                </div>
              </div>
            </motion.div>

            {/* Email Quick Copy Card */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#0E0919]/80 p-6 backdrop-blur-xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 font-semibold block">
                DIRECT INBOX
              </span>
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-purple-950/40 border border-purple-500/30 p-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="h-4 w-4 text-purple-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-purple-200 truncate select-all">
                    {emailAddress}
                  </span>
                </div>
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="rounded-xl border border-purple-400/40 bg-purple-900/60 p-2 text-purple-200 transition-colors hover:bg-purple-600 hover:text-white"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              {copiedEmail && (
                <p className="font-mono text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Email address copied to clipboard!
                </p>
              )}
            </div>

            {/* Social & Professional Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                id="contact-linkedin-link"
                href="https://linkedin.com/in/deepasha-sawant"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0E0919]/70 p-4 transition-all hover:border-purple-500/40 hover:bg-[#140B24]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-900/30 border border-blue-500/30 text-blue-300">
                    <Linkedin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">LinkedIn</span>
                    <span className="font-mono text-[10px] text-zinc-400">Connect ↗</span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                id="contact-instagram-link"
                href="https://instagram.com/deepashasawant"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#0E0919]/70 p-4 transition-all hover:border-purple-500/40 hover:bg-[#140B24]"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-900/30 border border-pink-500/30 text-pink-300">
                    <Instagram className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Instagram</span>
                    <span className="font-mono text-[10px] text-zinc-400">Follow ↗</span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-purple-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/[0.08] bg-[#0E0919]/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-900/50 border border-purple-500/40 text-purple-300 shadow-xl">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <strong className="text-white">{formState.name}</strong>. I will get back to you shortly at <span className="text-purple-300 font-mono">{formState.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 rounded-full border border-purple-500/40 bg-purple-950/60 px-6 py-2.5 text-xs font-mono text-purple-200 hover:bg-purple-600 hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                        Send a Message
                      </h2>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Fill out the details below to start a conversation.
                      </p>
                    </div>
                    <Sparkles className="h-5 w-5 text-purple-400" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="font-mono text-xs text-zinc-300 uppercase tracking-wider block mb-2">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Sharma"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-purple-500 focus:bg-purple-950/30 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="font-mono text-xs text-zinc-300 uppercase tracking-wider block mb-2">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-purple-500 focus:bg-purple-950/30 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="font-mono text-xs text-zinc-300 uppercase tracking-wider block mb-2">
                      Topic / Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Brand Strategy / Agency Role / Freelance Project"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-purple-500 focus:bg-purple-950/30 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="font-mono text-xs text-zinc-300 uppercase tracking-wider block mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me a bit about your brand, project timeline, or ideas..."
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-purple-500 focus:bg-purple-950/30 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 py-4 text-xs font-mono font-bold tracking-wider text-white shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-purple-500/50 hover:scale-[1.01] active:scale-98 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>SENDING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>SEND MESSAGE →</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
