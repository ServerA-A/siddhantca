"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  MapPin,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Award,
  BadgeCheck,
  ChevronRight,
  Zap,
  Shield,
  Sun,
  Bot,
  ArrowUp,
  Code2,
  Cpu,
  Users,
  Trophy,
  Calendar,
  ExternalLink,
  Sparkles,
  CircuitBoard,
  Cog,
  Download,
  Menu,
  X,
} from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

const skills = {
  Languages: { items: ["C", "C++", "Python", "Verilog"], icon: Code2, color: "from-blue-500 to-cyan-400" },
  "Tools & Platforms": {
    items: ["AutoCAD", "Creo", "Proteus", "TinkerCAD", "MATLAB", "Cadence", "DSCH", "Arduino IDE", "Altium Designer"],
    icon: Cog,
    color: "from-violet-500 to-purple-400",
  },
  "Soft Skills": { items: ["Solution Oriented", "Collaborative", "Adaptable", "Team Management"], icon: Users, color: "from-pink-500 to-rose-400" },
};

const internships = [
  {
    company: "THDCIL, Uttarakhand",
    role: "Hydro Intern",
    period: "Jul 2025",
    icon: Zap,
    bullets: [
      "Gained hands-on exposure to working principles and electricity generation of hydro power plants",
      "Assisted in maintenance and operational support of machinery and equipment",
      "Observed safety protocols and plant operations for large-scale power production systems",
    ],
  },
  {
    company: "AutomateX – PLC Based Training",
    role: "Student Intern",
    period: "Jul 2025",
    icon: CircuitBoard,
    bullets: [
      "Developed ladder logic structures for working of industrial automation setups",
      "Worked with PLC simulation tools: LogixPro, TwidoSuite, and Ladder Logic",
      "Gained practical exposure to industrial control processes and automation configurations",
    ],
  },
];

const projects = [
  {
    title: "Solar Tracking System",
    date: "Sep 2025",
    icon: Sun,
    color: "from-amber-400 to-orange-500",
    tech: ["LDR Module", "Motor Driver", "Solar Panel"],
    description: "Dual-axis solar tracker that automatically adjusts panel orientation based on light intensity, maximizing energy capture throughout the day.",
  },
  {
    title: "Obstacle Avoidance Robot",
    date: "Jan 2025",
    icon: Bot,
    color: "from-emerald-400 to-teal-500",
    tech: ["C++", "Arduino IDE", "Ultrasonic Sensor"],
    description: "Autonomous robot car with real-time obstacle detection using ultrasonic sensor and Arduino, achieving accurate automatic path correction.",
  },
  {
    title: "Home Security System",
    date: "Nov 2024",
    icon: Shield,
    color: "from-blue-400 to-indigo-500",
    tech: ["C++", "Arduino IDE", "GSM", "PIR Sensor", "Soldering"],
    description: "Smart security system integrating GSM, PIR and ultrasonic sensors with Arduino for automated intrusion detection and instant mobile alerts.",
  },
];

const certificates = [
  { title: "Verilog HDL: VLSI Hardware Design Comprehensive Masterclass", date: "Mar 2025", icon: Cpu },
  { title: "Complete A.I. & M.L., Data Science Bootcamp", date: "Feb 2025", icon: Sparkles },
  { title: "Computer Science 101: Master the Theory Behind Programming", date: "Mar 2024", icon: Code2 },
];

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech – Electrical and Electronics Engineering",
    score: "CGPA: 7.07",
    period: "Aug 2023 – Present",
    current: true,
  },
  {
    institution: "Ishu Model Sen. Sec. School",
    location: "Rehan, Himachal Pradesh",
    degree: "Intermediate (XII)",
    score: "79%",
    period: "May 2022 – May 2023",
    current: false,
  },
  {
    institution: "Noorpur Public School",
    location: "Nurpur, Himachal Pradesh",
    degree: "Matriculation (X)",
    score: "86%",
    period: "Mar 2020 – Apr 2021",
    current: false,
  },
];

const achievements = [
  { text: "1st position in batch-level Analytical Skills Competition at LPU", icon: Trophy },
  { text: "National-level badminton player in competitive tournaments", icon: Award },
];

const stats = [
  { value: "3+", label: "Projects" },
  { value: "2", label: "Internships" },
  { value: "3", label: "Certificates" },
  { value: "9+", label: "Tools" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

/* ─────────────────── PAGE ─────────────────── */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* ── Noise overlay ── */}
      <div className="noise-overlay" />

      {/* ── Ambient orbs ── */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-indigo-600/[0.07] blur-[100px] sm:blur-[150px] animate-glow-pulse" />
        <div className="absolute top-1/2 -right-48 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-violet-600/[0.06] blur-[100px] sm:blur-[140px] animate-glow-pulse animation-delay-500" />
        <div className="absolute -bottom-32 left-1/3 h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] rounded-full bg-fuchsia-600/[0.05] blur-[80px] sm:blur-[130px] animate-glow-pulse animation-delay-300" />
      </div>

      {/* ────────── NAVBAR ────────── */}
      <nav className="fixed top-0 z-50 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mt-3 sm:mt-4 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-black/60 px-4 sm:px-6 py-3 backdrop-blur-xl">
            <a href="#" className="text-xl font-extrabold gradient-text tracking-tight">
              SS<span className="text-indigo-400">.</span>
            </a>
            <ul className="hidden items-center gap-1 md:flex">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="nav-link rounded-lg px-3 py-2 text-sm text-[var(--color-muted)] transition-all hover:text-white hover:bg-white/[0.04]"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://linkedin.com/in/sidhant79"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-[var(--color-muted)] transition-all hover:border-indigo-500/30 hover:text-white hover:bg-white/[0.04]"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://github.com/sharmasidhant335-netizen"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-[var(--color-muted)] transition-all hover:border-indigo-500/30 hover:text-white hover:bg-white/[0.04]"
              >
                <Github size={15} />
              </a>
              <a
                href="/CV_202602172103398633_12314731.pdf"
                download
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5 text-xs font-semibold text-emerald-300 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/[0.15]"
              >
                <Download size={13} />
                CV
              </a>
              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-[var(--color-muted)] transition-all hover:text-white md:hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="mt-2 rounded-2xl border border-white/[0.06] bg-black/80 p-4 backdrop-blur-xl md:hidden mobile-menu-enter">
              <ul className="space-y-1">
                {navItems.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-4 py-3 text-sm text-[var(--color-muted)] transition-all hover:text-white hover:bg-white/[0.04]"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-3 border-t border-white/[0.06] pt-3">
                <a
                  href="https://linkedin.com/in/sidhant79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-[var(--color-muted)] transition-all hover:text-white"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://github.com/sharmasidhant335-netizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-[var(--color-muted)] transition-all hover:text-white"
                >
                  <Github size={15} />
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="relative">
        {/* ────────── HERO ────────── */}
        <section className="relative min-h-screen overflow-hidden">
          {/* dot grid */}
          <div className="dot-grid absolute inset-0 opacity-40" />

          <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 text-center">
            {/* status badge */}
            <div className="animate-fade-in-up opacity-0 mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-indigo-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                Open to Opportunities
              </span>
            </div>

            {/* name */}
            <h1 className="animate-fade-in-up opacity-0 animation-delay-100 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-8xl">
              <span className="gradient-text">Sidhant</span>
              <br />
              <span className="gradient-text-subtle">Sharma</span>
            </h1>

            {/* subtitle */}
            <p className="animate-fade-in-up opacity-0 animation-delay-200 mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
              EEE undergrad building at the intersection of{" "}
              <span className="text-indigo-400 font-medium">hardware</span> and{" "}
              <span className="text-violet-400 font-medium">software</span>
              {" "}— from solar trackers to smart security systems.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-in-up opacity-0 animation-delay-300 mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-indigo-600 px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_32px_rgba(99,102,241,0.4)]"
              >
                View My Work
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-white/80 backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.08]"
              >
                About Me
              </a>
              <a
                href="/CV_202602172103398633_12314731.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-5 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-emerald-300 backdrop-blur transition-all hover:border-emerald-500/40 hover:bg-emerald-500/[0.15] hover:shadow-[0_0_24px_rgba(16,185,129,0.2)]"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* stats bar */}
            <div className="animate-fade-in-up opacity-0 animation-delay-500 mt-12 sm:mt-20 grid w-full max-w-lg grid-cols-2 sm:grid-cols-4 divide-x-0 sm:divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
              {stats.map((s, i) => (
                <div key={s.label} className={`stat-card ${i < 2 ? 'border-b sm:border-b-0 border-white/[0.06]' : ''}`}>
                  <div className="stat-number">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* scroll indicator */}
            <div className="absolute bottom-6 sm:bottom-10 animate-fade-in opacity-0 animation-delay-800 hidden sm:flex">
              <div className="flex flex-col items-center gap-2 text-[var(--color-muted)]">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <div className="h-8 w-[1.5px] bg-gradient-to-b from-indigo-500/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ────────── ABOUT ────────── */}
        <section id="about" className="relative py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="section-label">
              <span>About Me</span>
            </div>
            <div className="grid gap-12 md:grid-cols-5">
              <div className="md:col-span-3">
                <h2 className="mb-6 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
                  Passionate about building things that{" "}
                  <span className="gradient-text">make a real impact</span>
                </h2>
                <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
                  <p>
                    I&apos;m a B.Tech Electrical &amp; Electronics Engineering student at Lovely Professional
                    University, driven by curiosity about how things work at the circuit level and how
                    software can bring hardware to life.
                  </p>
                  <p>
                    From designing autonomous robots and solar tracking systems to exploring VLSI design
                    and industrial automation with PLCs, I love working on projects that bridge the gap
                    between embedded engineering and intelligent software systems.
                  </p>
                  <p>
                    Currently expanding my horizons into AI/ML and data science while continuing to
                    sharpen my skills in Verilog HDL and embedded C++.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)]">Quick Info</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Location", value: "Phagwara, Punjab" },
                      { label: "University", value: "LPU" },
                      { label: "Degree", value: "B.Tech EEE" },
                      { label: "CGPA", value: "7.07" },
                      { label: "Interests", value: "Embedded, VLSI, AI/ML" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between border-b border-white/[0.04] pb-3 last:border-0 last:pb-0">
                        <span className="text-sm text-[var(--color-muted)]">{item.label}</span>
                        <span className="text-sm font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────── SKILLS ────────── */}
        <section id="skills" className="relative py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="section-label">
              <span>Technical Skills</span>
            </div>
            <h2 className="mb-10 sm:mb-16 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
              My <span className="gradient-text">toolbox</span>
            </h2>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {Object.entries(skills).map(([category, { items, icon: Icon, color }], i) => (
                <div
                  key={category}
                  className={`glass-card rounded-2xl p-5 sm:p-8 opacity-0 animate-fade-in-up animation-delay-${(i + 1) * 200}`}
                >
                  <div className={`mb-4 sm:mb-5 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${color} bg-opacity-10`}>
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[var(--color-background)]/80">
                      <Icon size={22} className="text-white/80" />
                    </div>
                  </div>
                  <h3 className="mb-1 text-lg font-bold">{category}</h3>
                  <p className="mb-5 text-xs text-[var(--color-muted)]">{items.length} skills</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span key={s} className="skill-badge">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────── EXPERIENCE ────────── */}
        <section id="experience" className="relative py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="section-label">
              <span>Work Experience</span>
            </div>
            <h2 className="mb-10 sm:mb-16 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
              Where I&apos;ve <span className="gradient-text">contributed</span>
            </h2>

            <div className="relative pl-8 sm:pl-10 md:pl-12">
              {/* vertical line */}
              <div className="timeline-line" />

              <div className="space-y-12">
                {internships.map((job, i) => {
                  const Icon = job.icon;
                  return (
                    <div key={i} className="relative">
                      <div className="timeline-dot" />
                      <div className={`glass-card rounded-2xl p-5 sm:p-8 opacity-0 animate-fade-in-up animation-delay-${(i + 1) * 200}`}>
                        <div className="mb-4 sm:mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                              <Icon size={20} />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold">{job.company}</h3>
                              <p className="text-sm font-medium text-indigo-400">{job.role}</p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] px-4 py-1.5 text-xs font-semibold text-indigo-300">
                            <Calendar size={12} />
                            {job.period}
                          </span>
                        </div>
                        <ul className="space-y-3">
                          {job.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-muted)]">
                              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/60" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ────────── PROJECTS ────────── */}
        <section id="projects" className="relative py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="section-label">
              <span>Featured Projects</span>
            </div>
            <h2 className="mb-10 sm:mb-16 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
              Things I&apos;ve <span className="gradient-text">built</span>
            </h2>

            <div className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="gradient-border-card opacity-0 animate-fade-in-up animation-delay-${(i + 1) * 200}">
                    <div className="relative rounded-2xl bg-[rgba(8,8,16,0.95)] p-5 sm:p-8">
                      {/* header */}
                      <div className="mb-6 flex items-center justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color}`}>
                          <Icon size={22} className="text-white" />
                        </div>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-[var(--color-muted)]">
                          <Calendar size={11} />
                          {p.date}
                        </span>
                      </div>

                      {/* title & description */}
                      <h3 className="mb-3 text-xl font-bold">{p.title}</h3>
                      <p className="mb-6 text-sm leading-relaxed text-[var(--color-muted)]">
                        {p.description}
                      </p>

                      {/* tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[0.7rem] font-medium text-[var(--color-muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ────────── CERTIFICATES & ACHIEVEMENTS ────────── */}
        <section id="certificates" className="relative py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
              {/* Certificates */}
              <div>
                <div className="section-label">
                  <span>Certificates</span>
                </div>
                <h2 className="mb-8 sm:mb-10 text-2xl sm:text-3xl font-bold tracking-tight">
                  Continuous <span className="gradient-text">learning</span>
                </h2>
                <div className="space-y-4">
                  {certificates.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={i}
                        className={`glass-card flex items-center gap-4 rounded-xl px-5 py-4 opacity-0 animate-fade-in-up animation-delay-${(i + 1) * 100}`}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium leading-snug">{c.title}</p>
                          <p className="text-xs text-[var(--color-muted)] mt-0.5">{c.date}</p>
                        </div>
                        <BadgeCheck size={18} className="hidden sm:block shrink-0 text-indigo-400" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="section-label">
                  <span>Achievements</span>
                </div>
                <h2 className="mb-8 sm:mb-10 text-2xl sm:text-3xl font-bold tracking-tight">
                  Notable <span className="gradient-text">wins</span>
                </h2>
                <div className="space-y-4">
                  {achievements.map((a, i) => {
                    const Icon = a.icon;
                    return (
                      <div
                        key={i}
                        className={`glass-card flex items-center gap-4 rounded-xl px-5 py-5 opacity-0 animate-fade-in-up animation-delay-${(i + 1) * 200}`}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 text-amber-400">
                          <Icon size={22} />
                        </div>
                        <p className="text-sm font-medium leading-relaxed">{a.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────── EDUCATION ────────── */}
        <section id="education" className="relative py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="section-label">
              <span>Education</span>
            </div>
            <h2 className="mb-10 sm:mb-16 text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">
              Academic <span className="gradient-text">journey</span>
            </h2>

            <div className="relative pl-8 sm:pl-10 md:pl-12">
              <div className="timeline-line" />

              <div className="space-y-10">
                {education.map((ed, i) => (
                  <div key={i} className="relative">
                    <div className="timeline-dot" />
                    <div className={`glass-card rounded-2xl p-5 sm:p-8 opacity-0 animate-fade-in-up animation-delay-${(i + 1) * 200}`}>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-base sm:text-lg font-bold">{ed.institution}</h3>
                            {ed.current && (
                              <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[0.65rem] font-semibold text-emerald-400 border border-emerald-500/20">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm font-medium text-indigo-400">{ed.degree}</p>
                          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-[var(--color-muted)]">
                            <span className="inline-flex items-center gap-1">
                              <MapPin size={12} /> {ed.location}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Calendar size={12} /> {ed.period}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center self-start rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 sm:px-5 py-2 sm:py-3">
                          <span className="text-xl sm:text-2xl font-extrabold gradient-text">{ed.score}</span>
                          <span className="text-[0.65rem] text-[var(--color-muted)] uppercase tracking-wider">Score</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ────────── CTA ────────── */}
        <section className="relative py-16 sm:py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="glass-card relative overflow-hidden rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center md:p-20">
              {/* glow behind */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[100px]" />
              </div>
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold tracking-tight md:text-5xl">
                Let&apos;s <span className="gradient-text">connect</span>
              </h2>
              <p className="mx-auto mb-8 sm:mb-10 max-w-md text-sm sm:text-base text-[var(--color-muted)]">
                I&apos;m always open to discussing new projects, internship opportunities,
                or interesting engineering challenges.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://linkedin.com/in/sidhant79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]"
                >
                  <Linkedin size={16} />
                  Connect on LinkedIn
                  <ExternalLink size={14} className="opacity-50 transition-opacity group-hover:opacity-100" />
                </a>
                <a
                  href="https://github.com/sharmasidhant335-netizen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium text-white/80 backdrop-blur transition-all hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <Github size={16} />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ────────── FOOTER ────────── */}
      <footer className="relative border-t border-white/[0.04]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:gap-6 px-4 sm:px-6 py-8 sm:py-10 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-extrabold gradient-text">SS.</span>
            <span className="text-sm text-[var(--color-muted)]">
              © {new Date().getFullYear()} Sidhant Sharma
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[
              { href: "https://linkedin.com/in/sidhant79", icon: Linkedin },
              { href: "https://github.com/sharmasidhant335-netizen", icon: Github },
            ].map(({ href, icon: SIcon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-muted)] transition-all hover:text-white hover:bg-white/[0.06]"
              >
                <SIcon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Back to top ── */}
      <a
        href="#"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-black/60 text-white/70 shadow-2xl backdrop-blur-lg transition-all hover:border-indigo-500/30 hover:text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
      >
        <ArrowUp size={16} />
      </a>
    </div>
  );
}
