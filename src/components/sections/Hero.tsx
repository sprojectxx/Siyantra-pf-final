import { useState, useEffect } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { motion, useMotionValue, useTransform, useSpring, useScroll } from 'motion/react';
import { ArrowRight, Sparkles, Activity, Shield, Bot, Layout, ArrowUpRight, Target, TrendingUp, Layers } from 'lucide-react';

export default function Hero() {
  const { navigate } = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse coordinates for subtle parallax layers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize values between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Motion values for smooth physical mouse-follow layers
  const springConfig = { damping: 30, stiffness: 100 };

  const moveX1 = useSpring(useMotionValue(0), springConfig);
  const moveY1 = useSpring(useMotionValue(0), springConfig);
  const moveX2 = useSpring(useMotionValue(0), springConfig);
  const moveY2 = useSpring(useMotionValue(0), springConfig);
  const moveX3 = useSpring(useMotionValue(0), springConfig);
  const moveY3 = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    moveX1.set(mousePosition.x * 25);
    moveY1.set(mousePosition.y * 25);
    moveX2.set(mousePosition.x * -15);
    moveY2.set(mousePosition.y * -15);
    moveX3.set(mousePosition.x * 40);
    moveY3.set(mousePosition.y * 40);
  }, [mousePosition, moveX1, moveY1, moveX2, moveY2, moveX3, moveY3]);

  // Scroll-based parallax values with spring smoothing
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { damping: 45, stiffness: 200, mass: 0.8 });

  // Transform scroll position into parallax Y offsets
  const yBgGlow1 = useTransform(smoothScrollY, [0, 800], [0, 160]);
  const yBgGlow2 = useTransform(smoothScrollY, [0, 800], [0, 100]);

  const yWidget1 = useTransform(smoothScrollY, [0, 800], [0, -140]);
  const yWidget2 = useTransform(smoothScrollY, [0, 800], [0, -90]);
  const yWidget3 = useTransform(smoothScrollY, [0, 800], [0, -180]);
  const yWidget4 = useTransform(smoothScrollY, [0, 800], [0, -110]);
  const yWidget5 = useTransform(smoothScrollY, [0, 800], [0, -150]);
  const yWidget6 = useTransform(smoothScrollY, [0, 800], [0, -70]);

  const yHeroText = useTransform(smoothScrollY, [0, 500], [0, 80]);
  const opacityHeroText = useTransform(smoothScrollY, [0, 500], [1, 0]);

  // Metric stats
  const stats = [
    { value: '50+', label: 'Projects Engineered' },
    { value: '12+', label: 'Countries Served' },
    { value: '20+', label: 'Modern Technologies' },
    { value: '24/7', label: 'Proactive Support' }
  ];

  return (
    <section className="relative min-h-screen pt-32 flex flex-col justify-between overflow-hidden dot-grid" id="hero">
      {/* Absolute gradient glows to enrich depth */}
      <motion.div style={{ y: yBgGlow1 }} className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-brand-accent/3 rounded-full blur-[100px] pointer-events-none" />
      <motion.div style={{ y: yBgGlow2 }} className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Interactive Background Widgets - Styled and aligned like Design HTML */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none hidden xl:block select-none">

        {/* Layer 1: The Main Mini CRM Browser (Middle-Back Left) */}
        <motion.div style={{ y: yWidget1 }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ x: moveX1, y: moveY1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-28 left-8 w-72 bg-white rounded-2xl border border-brand-border shadow-md p-4 rotate-[-3deg] pointer-events-auto"
          >
            <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="font-mono text-[9px] text-brand-muted">siyantra-pipeline.io</span>
              <Activity className="w-3.5 h-3.5 text-brand-accent" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center bg-brand-card p-2 rounded-lg border border-brand-border">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent font-bold text-xs">P</div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-brand-text leading-none">PulseCRM Lead</span>
                    <span className="text-[8px] text-brand-muted">Qualifying Stage</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">94% Fit</span>
              </div>

              {/* Mini SVG Chart */}
              <div className="mt-1 h-12 w-full flex items-end">
                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                  <path
                    d="M 0,25 Q 20,5 40,18 T 80,4 T 100,20"
                    fill="none"
                    stroke="#FF7A00"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 0,25 Q 20,5 40,18 T 80,4 T 100,20 L 100,30 L 0,30 Z"
                    fill="url(#gradient-chart-hero)"
                    opacity="0.1"
                  />
                  <defs>
                    <linearGradient id="gradient-chart-hero" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF7A00" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Layer 2: Floating AI Chatbot Mockup (Front-Left Bottom) */}
        <motion.div style={{ y: yWidget2 }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ x: moveX2, y: moveY2 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-28 left-16 w-64 bg-brand-text rounded-2xl border border-neutral-800 shadow-2xl p-4 rotate-[4deg] pointer-events-auto z-10 text-white"
          >
            <div className="flex items-center gap-1.5 mb-3 border-b border-neutral-800 pb-2">
              <Bot className="w-4 h-4 text-brand-accent" />
              <span className="font-display font-bold text-[11px] text-white">Siyantra Autonomous Agent</span>
            </div>
            <div className="flex flex-col gap-2 font-sans text-[10px]">
              <div className="bg-neutral-800 p-2 rounded-xl rounded-tl-none text-neutral-300 max-w-[85%] text-left">
                Analyzing client request for automated Stripe billing hooks...
              </div>
              <div className="bg-brand-accent text-white p-2 rounded-xl rounded-tr-none self-end max-w-[85%] text-right font-medium">
                Action: Initialized Node triggers. 100% completed.
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Layer 3: Floating Analytics Widget (Top-Right) */}
        <motion.div style={{ y: yWidget3 }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ x: moveX3, y: moveY3 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-36 right-12 w-52 bg-white rounded-xl border border-brand-border shadow-lg p-4 rotate-[2deg] pointer-events-auto z-10 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-mono text-[8px] text-brand-muted uppercase tracking-wider">SYSTEM UPTIME</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="flex items-baseline gap-1.5 text-left">
              <span className="text-2xl font-display font-extrabold text-brand-text">99.98%</span>
              <span className="text-[9px] font-bold text-emerald-500 flex items-center leading-none">
                <ArrowUpRight className="w-3 h-3" /> +0.02%
              </span>
            </div>
            <div className="w-full bg-brand-border h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full w-[99.98%]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Layer 4: Rich n8n Automation Panel (Bottom-Right) */}
        <motion.div style={{ y: yWidget4 }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ x: moveX2, y: moveY1 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-28 right-12 w-64 bg-white rounded-2xl border border-brand-border p-4 shadow-md rotate-[-3deg] pointer-events-auto z-10"
          >
            <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[9px] text-brand-muted uppercase">n8n workflow runner</span>
              </div>
              <Activity className="w-3.5 h-3.5 text-brand-accent animate-spin" style={{ animationDuration: '8s' }} />
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                  <Layout className="w-3.5 h-3.5 text-brand-accent" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold text-brand-text leading-none">Webhook Trigger</span>
                  <span className="text-[8px] text-brand-muted mt-0.5">Invoice Paid</span>
                </div>
              </div>

              {/* Connecting line */}
              <div className="w-[1px] h-3 border-l border-dashed border-brand-accent ml-3.5" />

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-neutral-950 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold text-brand-text leading-none">AI Parser Node</span>
                  <span className="text-[8px] text-brand-muted mt-0.5">Status: Success (0.4s)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Layer 5: Meta & Google Ads Campaign Performance Card (Middle-Right) */}
        <motion.div style={{ y: yWidget5 }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ x: moveX1, y: moveY2 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute top-[44%] right-4 w-56 bg-brand-text text-white rounded-2xl border border-neutral-850 p-4 shadow-xl rotate-[4deg] pointer-events-auto z-10"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-3">
              <span className="font-mono text-[8px] text-neutral-450 uppercase tracking-wider">ad campaigns</span>
              <Target className="w-3.5 h-3.5 text-brand-accent" />
            </div>

            <div className="flex flex-col gap-2 text-left font-sans">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-neutral-350">Google Ads ROAS</span>
                <span className="text-[10px] font-mono font-bold text-emerald-400">4.8x</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-neutral-350">Meta CTR</span>
                <span className="text-[10px] font-mono font-bold text-emerald-400">5.2%</span>
              </div>
              
              {/* Mini visual indicator bars */}
              <div className="mt-1.5 flex gap-1 items-end h-6 justify-center">
                <div className="w-2.5 bg-neutral-800 rounded-t h-[40%]" />
                <div className="w-2.5 bg-neutral-800 rounded-t h-[55%]" />
                <div className="w-2.5 bg-brand-accent rounded-t h-[80%]" />
                <div className="w-2.5 bg-neutral-800 rounded-t h-[50%]" />
                <div className="w-2.5 bg-brand-accent rounded-t h-[95%]" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Layer 6: CRM Deal Status Card (Middle-Left) */}
        <motion.div style={{ y: yWidget6 }} className="absolute inset-0 pointer-events-none">
          <motion.div
            style={{ x: moveX3, y: moveY3 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-[48%] left-4 w-60 bg-white rounded-2xl border border-brand-border p-4 shadow-lg rotate-[-2deg] pointer-events-auto z-10"
          >
            <div className="flex items-center justify-between border-b border-brand-border pb-2.5 mb-2.5">
              <span className="font-mono text-[8px] text-brand-muted uppercase tracking-wider">crm pipeline</span>
              <Layers className="w-3.5 h-3.5 text-brand-accent" />
            </div>

            <div className="flex flex-col gap-2 text-left">
              <span className="text-[10px] font-bold text-brand-text leading-none">Apex Capital Partners</span>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[8px] text-brand-muted">Stage: Deal Closed Won</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="w-full bg-brand-border h-1 rounded-full overflow-hidden mt-1.5">
                <div className="bg-emerald-500 h-full rounded-full w-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Main Centered Content */}
      <motion.div
        style={{ y: yHeroText, opacity: opacityHeroText }}
        className="max-w-4xl mx-auto px-6 md:px-8 w-full text-center relative z-10 my-auto flex flex-col items-center"
      >

        {/* Giant Display Headline styled exactly like Design HTML */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="font-display text-5xl sm:text-7xl lg:text-[84px] xl:text-[92px] leading-[1.05] sm:leading-[0.92] font-extrabold tracking-tight text-brand-text mb-8"
        >
          Building Intelligent <br />
          Software for <br />
          <span className="text-brand-accent">
            Modern Businesses.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          We create AI-powered software, custom websites, automation systems, CRMs, and SaaS platforms that help companies grow faster through precision engineering.
        </motion.p>

        {/* Interactive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap gap-4 items-center justify-center w-full sm:w-auto"
        >
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-brand-accent text-white rounded-full font-bold shadow-lg shadow-brand-accent/20 hover:bg-brand-hover transition-all duration-300 flex items-center gap-2 cursor-pointer group animate-none"
            id="hero-cta-btn"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => navigate('/portfolio')}
            className="px-8 py-4 bg-white border border-brand-border text-brand-text rounded-full font-bold hover:bg-brand-card transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            id="hero-secondary-btn"
          >
            View Portfolio
          </button>
        </motion.div>
      </motion.div>

      {/* Metrics & Stack Mastery Area - Styled exactly like Design HTML */}
      <div className="w-full relative z-10 mt-16 bg-brand-card border-t border-brand-border py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Stats block */}
          <div className="flex flex-wrap gap-12 sm:gap-16 justify-center lg:justify-start w-full lg:w-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1, ease: 'easeOut' }}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="font-display text-3xl font-bold text-brand-text">
                  {stat.value}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-widest text-brand-muted font-bold mt-1">
                  {stat.label.replace(' Engineered', '').replace(' Served', '').replace(' Modern', '')}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Marquee Preview */}
          <div className="hidden sm:flex flex-col items-center lg:items-end w-full lg:flex-1 lg:ml-20">
            <span className="font-mono text-[10px] font-bold text-brand-muted mb-3 uppercase tracking-[0.2em] w-full text-center lg:text-right">
              Stack Mastery
            </span>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-end opacity-40 font-mono text-sm font-black text-brand-text tracking-wider">
              <span>NEXT.JS</span>
              <span>OPENAI</span>
              <span>STRIPE</span>
              <span>NODE.JS</span>
              <span>SUPABASE</span>
              <span>DOCKER</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
