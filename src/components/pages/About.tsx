import { useRouter } from '../../hooks/useRouter';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Target, Compass, Award, Shield, Code2, Layers, Database, Cloud, Cpu, GitBranch } from 'lucide-react';

export default function About() {
  const { navigate } = useRouter();

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

  const milestones = [
    { year: 'Intelligent First', title: 'Why AI & Automation First?', desc: 'Legacy development is stagnant. We built Siyantra to fuse modern reactive frontend UI with robust back-of-house AI scoring systems.' },
    { year: 'Zero Lock-in', title: 'Absolute Transparency', desc: 'Siyantra does not lease systems. Upon handoff, all repository access, cloud instances, and billing setups belong to you.' },
    { year: '100% Custom Code', title: 'Say No to No-Code Clutter', desc: 'No-code websites crash under custom scale. Every system we deliver is programmed natively in React, Node, or Python.' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-32 pb-24 dot-grid min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Editorial Title Banner */}
        <div className="border-b border-brand-border pb-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          <div className="lg:col-span-7 text-left">
            <span className="font-mono text-[10px] text-brand-accent-text uppercase tracking-widest font-bold">
              SIYANTRA MANIFESTO
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-brand-text tracking-tighter mt-4 leading-none">
              We don’t build <br className="sm:hidden" /> websites.
            </h1>
            <p className="font-display text-2xl sm:text-3xl text-brand-muted tracking-tight mt-6 leading-relaxed">
              We engineer digital products that help modern businesses scale through AI, automation, and custom software.
            </p>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ y: yWidget }}
              className="w-full max-w-sm bg-white rounded-2xl border border-brand-border shadow-xl p-5 relative overflow-hidden h-48 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center border-b border-brand-border/60 pb-2">
                <span className="font-mono text-[8px] text-brand-muted uppercase">TECHNOLOGY MATRIX</span>
                <span className="text-[8px] font-mono font-bold text-brand-accent-text">Standardized</span>
              </div>
              <div className="grid grid-cols-3 gap-3 my-auto text-left">
                {[
                  { name: 'React', icon: <Code2 className="w-3.5 h-3.5 text-blue-500" /> },
                  { name: 'Node.js', icon: <Layers className="w-3.5 h-3.5 text-emerald-500" /> },
                  { name: 'Postgres', icon: <Database className="w-3.5 h-3.5 text-indigo-500" /> },
                  { name: 'AWS', icon: <Cloud className="w-3.5 h-3.5 text-orange-500" /> },
                  { name: 'OpenAI', icon: <Cpu className="w-3.5 h-3.5 text-amber-500" /> },
                  { name: 'n8n', icon: <GitBranch className="w-3.5 h-3.5 text-purple-500" /> }
                ].map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    animate={{ y: [0, idx % 2 === 0 ? 3 : -3, 0] }}
                    transition={{ duration: 3 + idx * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="bg-brand-card border border-brand-border rounded-xl p-2 flex flex-col items-center justify-center gap-1.5 text-center shadow-3xs"
                  >
                    {tech.icon}
                    <span className="text-[8px] font-mono font-bold text-neutral-800">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Narrative Split Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <motion.div
            style={{ y: ySec1 }}
            className="lg:col-span-5"
          >
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              OUR STRATEGY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text mt-2 mb-6 tracking-tight">
              Aesthetics Married to Deep Intelligence.
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed mb-4">
              Many agencies design pretty visuals that lack functional utility. Others construct dense databases coupled with poor UI. Siyantra lives at the intersection.
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              Inspired by the design rigor of Apple, the structural perfection of Stripe, and the blazing execution of Linear—we create software designed to turn browsers into active buyers.
            </p>
          </motion.div>

          <motion.div
            style={{ y: ySec2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-brand-card p-6 rounded-2xl border border-brand-border">
              <span className="text-xs font-mono text-brand-accent font-bold">01 / PREMIUM</span>
              <h3 className="font-display text-lg font-bold text-brand-text mt-3 mb-1">Elite Presentation</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                A gorgeous, premium off-white space utilizing beautiful typography, micro-animations, and balanced padding. Your site behaves like high-end desktop software.
              </p>
            </div>

            <div className="bg-brand-card p-6 rounded-2xl border border-brand-border">
              <span className="text-xs font-mono text-brand-accent font-bold">02 / INTELLIGENT</span>
              <h3 className="font-display text-lg font-bold text-brand-text mt-3 mb-1">Autonomous Logic</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Your web app is connected directly to custom LLMs, active automation workers, CRM databases, and trigger flows that run seamlessly in the background.
              </p>
            </div>

            <div className="bg-brand-card p-6 rounded-2xl border border-brand-border">
              <span className="text-xs font-mono text-brand-accent font-bold">03 / TRUSTWORTHY</span>
              <h3 className="font-display text-lg font-bold text-brand-text mt-3 mb-1">Absolute IP Transfer</h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                You own 100% of the code, keys, and configurations. No licensing hooks, no secret proprietary dependencies. Complete digital freedom.
              </p>
            </div>

            <div className="bg-brand-text p-6 rounded-2xl border border-neutral-800 text-white flex flex-col justify-between">
              <div>
                <Sparkles className="w-5 h-5 text-brand-accent" />
                <h3 className="font-display text-lg font-bold mt-3 mb-1">Ready to scale?</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Connect with our lead architects to run a preliminary score audit on your existing web infrastructure.
                </p>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="mt-6 flex items-center gap-1.5 text-xs font-bold text-brand-accent hover:text-white transition-colors cursor-pointer self-start group"
              >
                Start a conversation
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Philosophy Milestones */}
        <div className="bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-12 mb-16">
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              HOW WE OPERATE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mt-2">
              Engineering Principles Over Standard Checklists
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                style={{ y: idx % 2 === 0 ? ySec3 : ySec4 }}
                className="flex flex-col gap-3 relative z-10 text-left"
              >
                <span className="font-mono text-xs font-bold text-brand-accent bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md self-start">
                  {milestone.year}
                </span>
                <h3 className="font-display text-lg font-bold text-brand-text mt-1">
                  {milestone.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="mb-24">
          <div className="max-w-xl mb-12 text-left">
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              LEADERSHIP TEAM
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mt-2">
              The Minds Behind Siyantra
            </h2>
            <p className="text-xs text-brand-muted mt-2 leading-relaxed">
              We compile premium frontend experiences coupled with secure, scalable back-of-house integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              style={{ y: ySec1 }}
              className="bg-white p-6 rounded-2xl border border-brand-border shadow-3xs flex flex-col sm:flex-row gap-6 items-center text-left"
            >
              <img
                src="/hari.webp"
                alt="Hari Krishna"
                className="w-24 h-24 rounded-full object-cover border-2 border-brand-accent/20 bg-brand-card shadow-3xs"
              />
              <div className="flex flex-col justify-between h-full gap-2">
                <div>
                  <span className="font-mono text-[8px] text-brand-accent font-bold tracking-widest uppercase">FOUNDER</span>
                  <h3 className="font-display text-lg font-bold text-brand-text mt-1">Hari Krishna</h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-sans mt-1">
                    Leading the technical vision and custom automation architecture. Specialized in high-throughput node synchronization and custom LLM interfaces.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: ySec2 }}
              className="bg-white p-6 rounded-2xl border border-brand-border shadow-3xs flex flex-col sm:flex-row gap-6 items-center text-left"
            >
              <img
                src="/bala.webp"
                alt="Bala Rahul"
                className="w-24 h-24 rounded-full object-cover border-2 border-brand-accent/20 bg-brand-card shadow-3xs"
              />
              <div className="flex flex-col justify-between h-full gap-2">
                <div>
                  <span className="font-mono text-[8px] text-brand-accent font-bold tracking-widest uppercase">CO-FOUNDER</span>
                  <h3 className="font-display text-lg font-bold text-brand-text mt-1">Bala Rahul</h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-sans mt-1">
                    Directing product operations, custom CRM layouts, and client operations. Dedicated to delivering sub-second load times and modular API integrations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
