import { useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { Laptop, ArrowRight, CheckCircle2, ShieldCheck, Zap, Code, Sparkles, HelpCircle, Heart, Landmark, GraduationCap, Building2, Cpu } from 'lucide-react';

export default function WebDevPage() {
  const { navigate } = useRouter();
  const [activeType, setActiveType] = useState<string>('saas');

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    damping: 25,
    stiffness: 100,
    mass: 0.2
  });
  const yWidget = useTransform(smoothScrollY, [0, 800], [0, -85]);
  const ySec1 = useTransform(smoothScrollY, [100, 1200], [35, -35]);
  const ySec2 = useTransform(smoothScrollY, [100, 1200], [60, -60]);
  const ySec3 = useTransform(smoothScrollY, [400, 1800], [25, -25]);
  const ySec4 = useTransform(smoothScrollY, [400, 1800], [50, -50]);

  const websiteTypes = [
    {
      id: 'corporate',
      title: 'Corporate Systems',
      desc: 'High-end structural layouts with custom asset integrations, interactive media nodes, and corporate database compliance.',
      icon: <Landmark className="w-4 h-4 text-orange-500" />,
      visual: 'COLUMNS & PILLARS'
    },
    {
      id: 'landing',
      title: 'High-Conversion Landers',
      desc: 'Optimized for marketing campaigns. Super lightweight, blazing speed, and built-in tracking triggers.',
      icon: <Zap className="w-4 h-4 text-amber-500" />,
      visual: 'SINGLE ACTION FLOW'
    },
    {
      id: 'portfolio',
      title: 'Interactive Portfolios',
      desc: 'Bespoke layouts for elite agencies, artists, and creators, featuring physical canvas dynamics and elegant copy.',
      icon: <Sparkles className="w-4 h-4 text-red-500" />,
      visual: 'FLUID PORTFOLIO CANVAS'
    },
    {
      id: 'saas',
      title: 'SaaS Interfaces',
      desc: 'Multi-tenant subscription gateways linked to Postgres databases, usage metric tools, and advanced graphs.',
      icon: <Laptop className="w-4 h-4 text-brand-accent" />,
      visual: 'DASHBOARD SHELL'
    },
    {
      id: 'ecommerce',
      title: 'Headless E-Commerce',
      desc: 'Modular stripe architectures, real-time inventory triggers, fast product filters, and sub-second checkout.',
      icon: <Code className="w-4 h-4 text-emerald-500" />,
      visual: 'HEADLESS CHECKOUT ENGINE'
    },
    {
      id: '3d-web',
      title: '3D WebGL Spaces',
      desc: 'Immersive, physics-based, interactive canvas representations that load instantly under standard browser sizes.',
      icon: <Cpu className="w-4 h-4 text-blue-500" />
    },
    {
      id: 'educational',
      title: 'Educational Portals',
      desc: 'Course management boards, video streaming controllers, interactive quizzes, and progression certificates.',
      icon: <GraduationCap className="w-4 h-4 text-indigo-500" />
    },
    {
      id: 'healthcare',
      title: 'Healthcare Panels',
      desc: 'HIPAA-compliant custom scheduling calendars, client medical notes, secure document storage, and forms.',
      icon: <Heart className="w-4 h-4 text-rose-500" />
    },
    {
      id: 'realestate',
      title: 'Real Estate Maps',
      desc: 'Interactive map finders, dynamic sliders for price ranges, high-fidelity gallery swipers, and agent triggers.',
      icon: <Building2 className="w-4 h-4 text-yellow-600" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-32 pb-24 dot-grid min-h-screen text-left"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="border-b border-brand-border pb-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] text-brand-accent-text uppercase tracking-widest font-bold">
              CAPABILITY / CORE DEV
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-brand-text tracking-tighter mt-4 leading-tight">
              Custom Website & <br />
              Full-Stack Development.
            </h1>
            <p className="font-display text-2xl text-brand-muted tracking-tight mt-6 leading-relaxed">
              We write clean, high-performance web systems using React, Vite, and Node.js. No slow page builders. No generic WordPress templates.
            </p>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ y: yWidget }}
              className="w-full max-w-sm bg-white rounded-2xl border border-brand-border shadow-xl p-5 relative overflow-hidden text-left"
            >
              <div className="flex justify-between items-center border-b border-brand-border pb-3 mb-4">
                <span className="font-mono text-[8px] text-brand-muted uppercase">ENGINEERING SCORES</span>
                <span className="text-[8px] text-emerald-600 font-bold uppercase">100% optimized</span>
              </div>
              <div className="flex justify-around items-center gap-2 mt-2">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center relative">
                    <span className="text-xs font-extrabold text-brand-success-text">100</span>
                  </div>
                  <span className="text-[8px] font-bold text-brand-muted font-mono uppercase">PERFORMANCE</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center relative">
                    <span className="text-xs font-extrabold text-brand-success-text">100</span>
                  </div>
                  <span className="text-[8px] font-bold text-brand-muted font-mono uppercase">ACCESSIBILITY</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 h-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center relative">
                    <span className="text-xs font-extrabold text-brand-success-text">100</span>
                  </div>
                  <span className="text-[8px] font-bold text-brand-muted font-mono uppercase">SEO READY</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Website Types Showcase Grid */}
        <div className="mb-24">
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              TAILORED SOLUTIONS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mt-2">
              Website Solutions Built for Your Target Vertical
            </h2>
            <p className="text-xs text-brand-muted mt-2">
              Every vertical requires a specific layout and structural strategy. We design and compile bespoke solutions for each.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteTypes.map((type, idx) => {
              const isActive = activeType === type.id;
              return (
                <motion.div
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  style={{ y: idx % 2 === 0 ? ySec1 : ySec2 }}
                  className={`p-6 rounded-2xl bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between h-48 group ${
                    isActive 
                      ? 'border-brand-accent shadow-[0_0_20px_rgba(255,122,0,0.08)] bg-brand-card' 
                      : 'border-brand-border hover:border-brand-text'
                  }`}
                  id={`type-card-${type.id}`}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <div className="w-8 h-8 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center group-hover:bg-white transition-colors">
                        {type.icon}
                      </div>
                      <span className="font-mono text-[8px] text-brand-muted uppercase">SIYANTRA APP</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-base font-bold text-brand-text">
                        {type.title}
                      </h3>
                      <p className="text-xs text-brand-muted leading-relaxed font-sans line-clamp-2">
                        {type.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-[10px] font-mono text-brand-accent font-bold pt-2">
                    <span>{isActive ? 'ACTIVE SPECIFICATION' : 'SELECT SPEC'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1.5' : 'group-hover:translate-x-1'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Custom Website Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-12 mb-24">
          <motion.div
            style={{ y: ySec3 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              CUSTOM VS WORDPRESS / PAGE BUILDERS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight">
              Why Custom Hand-Coded Architecture Always Wins
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              Standard page builders inject thousands of lines of bloated script, leading to slow load speeds, poor SEO scores, and continuous security vulnerabilities.
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              Siyantra writes structured, atomic React components. We render assets directly on the edge, creating a flawless 100/100 Lighthouse performance rating.
            </p>
            
            <div className="flex flex-col gap-3 pt-4 border-t border-brand-border">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                <span className="text-xs text-brand-text font-bold">Sub-second Load Times (Hydrates Instantly)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                <span className="text-xs text-brand-text font-bold">Absolute Security (No PHP/Database Hacking vectors)</span>
              </div>
            </div>
          </motion.div>

          {/* Performance chart mockup */}
          <motion.div
            style={{ y: ySec4 }}
            className="lg:col-span-6 bg-white rounded-2xl border border-brand-border p-6 flex flex-col gap-6 shadow-3xs"
          >
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="font-mono text-[9px] text-brand-muted font-bold">LIGHTHOUSE CORE VITAL AUDIT</span>
              <span className="text-[10px] font-bold text-emerald-500 font-mono">100/100 EXCELLENT</span>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-brand-text mb-1.5">
                  <span>Siyantra React Architecture</span>
                  <span className="text-brand-accent font-mono">99% Load Score</span>
                </div>
                <div className="w-full bg-brand-card h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-accent to-amber-500 h-full rounded-full w-[99%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-brand-text mb-1.5">
                  <span>WordPress / Elementor Site</span>
                  <span className="text-brand-muted font-mono">35% Load Score</span>
                </div>
                <div className="w-full bg-brand-card h-2.5 rounded-full overflow-hidden">
                  <div className="bg-red-400 h-full rounded-full w-[35%]" />
                </div>
              </div>
            </div>

            <div className="bg-brand-card border border-brand-border rounded-xl p-4 text-xs text-brand-muted leading-relaxed">
              <strong>Audit Insight:</strong> WordPress templates require heavy asset loads. A Siyantra static site compresses assets automatically, shaving off 3.5 seconds of client friction and preventing cart abandonment.
            </div>
          </motion.div>
        </div>

        {/* Features & Development Process Timeline */}
        <div className="bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-12">
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              MILESTONES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mt-2">
              Our Web Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              style={{ y: ySec3 }}
              className="flex flex-col gap-2 text-left"
            >
              <span className="font-mono text-xs font-bold text-brand-accent bg-orange-50 border border-orange-100 px-2 py-0.5 rounded self-start">Stage 1</span>
              <h4 className="font-display text-base font-extrabold text-brand-text mt-2">UX & Wireframing</h4>
              <p className="text-xs text-brand-muted leading-relaxed font-sans mt-1">We design detailed viewport canvases in Figma, mapping navigation nodes and viewport boundaries cleanly before coding.</p>
            </motion.div>
            <motion.div
              style={{ y: ySec4 }}
              className="flex flex-col gap-2 text-left"
            >
              <span className="font-mono text-xs font-bold text-brand-accent bg-orange-50 border border-orange-100 px-2 py-0.5 rounded self-start">Stage 2</span>
              <h4 className="font-display text-base font-extrabold text-brand-text mt-2">Component Programming</h4>
              <p className="text-xs text-brand-muted leading-relaxed font-sans mt-1">Our engineers compile atomic components utilizing React 19, custom Tailwind classes, and smooth Framer animations.</p>
            </motion.div>
            <motion.div
              style={{ y: ySec3 }}
              className="flex flex-col gap-2 text-left"
            >
              <span className="font-mono text-xs font-bold text-brand-accent bg-orange-50 border border-orange-100 px-2 py-0.5 rounded self-start">Stage 3</span>
              <h4 className="font-display text-base font-extrabold text-brand-text mt-2">Integration & Deploy</h4>
              <p className="text-xs text-brand-muted leading-relaxed font-sans mt-1">We connect Express REST APIs, configure environment configurations, and launch the site on premium cloud servers.</p>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
