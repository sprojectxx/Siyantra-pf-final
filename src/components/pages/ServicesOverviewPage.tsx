import { SERVICES } from '../../constants/data';
import { useRouter } from '../../hooks/useRouter';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Laptop, Bot, Activity, Layers, TrendingUp, Sparkles, Code, Terminal, CheckCircle2 } from 'lucide-react';

export default function ServicesOverviewPage() {
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

  const getIcon = (id: string) => {
    const s = 'w-5 h-5 text-brand-accent';
    switch (id) {
      case 'web-development': return <Laptop className={s} />;
      case 'ai-automation': return <Bot className={s} />;
      case 'crm-development': return <Activity className={s} />;
      case 'saas-development': return <Layers className={s} />;
      case 'digital-marketing': return <TrendingUp className={s} />;
      default: return <Laptop className={s} />;
    }
  };

  const steps = [
    { num: '01', title: 'Audit & Scoring', desc: 'We analyze your current pipeline speed, technical debt, and API gaps, scoring parameters to calculate optimization ROI.' },
    { num: '02', title: 'Modular Architecture', desc: 'Our team maps out visual wireframes, database schemas, and AI workflow flows in detailed Figma and JSON blueprints.' },
    { num: '03', title: 'Bespoke Production', desc: 'Engineers write clean, type-safe React, Node, or Python applications, integrating robust models and real-time gateways.' },
    { num: '04', title: 'Container Hand-off', desc: 'We bundle your system into portable Docker containers deployed onto scalable servers, complete with 100% intellectual property transfer.' }
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
        
        {/* Page Banner Header */}
        <div className="border-b border-brand-border pb-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative text-left">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] text-brand-accent-text uppercase tracking-widest font-bold">
              OUR CAPABILITIES
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-brand-text tracking-tighter mt-4 leading-none">
              Digital Engineering <br />
              Built for Perpetual Scale.
            </h1>
            <p className="font-display text-2xl text-brand-muted tracking-tight mt-6 leading-relaxed">
              Explore our specialized development branches. We write custom architectures designed to integrate, score, and automate transactions.
            </p>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ y: yWidget }}
              className="w-full max-w-sm bg-brand-text text-white rounded-2xl border border-neutral-850 shadow-2xl p-5 relative overflow-hidden h-48 flex flex-col justify-between text-left"
            >
              {/* Window Controls */}
              <div className="flex justify-between items-center border-b border-neutral-800 pb-2.5">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest">siyantra-console</span>
              </div>
              
              {/* Console Logs */}
              <div className="font-mono text-[9px] flex flex-col gap-2 flex-1 mt-3.5 text-neutral-300">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">siyantra-build --production</span>
                  <span className="text-emerald-450 font-bold">READY</span>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span>
                    <span>web-framework: loaded (0.4s)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500">✔</span>
                    <span>agent-pipeline: initialized</span>
                  </div>
                  <div className="flex items-center gap-2 flex-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                    <span className="text-neutral-400">compiling multi-tenant router...</span>
                  </div>
                </div>
              </div>
              
              {/* Terminal Input Prompt */}
              <div className="border-t border-neutral-800 pt-2 flex items-center gap-1 font-mono text-[9px] text-neutral-450">
                <span>$</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-1 h-3 bg-brand-accent"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dense Service List Section */}
        <div className="flex flex-col gap-12 mb-24">
          {SERVICES.map((serv, idx) => (
            <motion.div
              key={serv.id}
              style={{ y: idx % 2 === 0 ? ySec1 : ySec2 }}
              className="p-8 rounded-2xl bg-white border border-brand-border shadow-3xs flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start relative overflow-hidden group hover:border-brand-accent/40 hover:shadow-xs transition-all duration-300"
              id={`capability-block-${serv.id}`}
            >
              {/* Vertical Color Strip */}
              <div className={`absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b ${serv.highlightColor}`} />

              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center">
                  {getIcon(serv.id)}
                </div>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-brand-text group-hover:text-brand-accent transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-muted tracking-wider uppercase mt-1">
                    SIYANTRA SERVICE V2.0
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 text-left">
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  {serv.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                      <span className="text-xs text-brand-text font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-3 lg:h-full lg:flex lg:flex-col lg:justify-between lg:items-end w-full">
                <div className="hidden lg:block font-mono text-sm text-neutral-200 font-bold tracking-widest">
                  // {serv.id.toUpperCase()}
                </div>
                <button
                  onClick={() => navigate(serv.path)}
                  className="w-full lg:w-auto mt-6 lg:mt-0 px-5 py-3 rounded-xl bg-brand-card border border-brand-border text-brand-text text-xs font-bold tracking-wide hover:bg-brand-text hover:text-white hover:border-brand-text transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  id={`explore-btn-${serv.id}`}
                >
                  Explore Capability
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operational Lifecycle Pipeline */}
        <div className="bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-12">
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              OUR LIFECYCLE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mt-2">
              The 4-Step Siyantra Cycle
            </h2>
            <p className="text-xs text-brand-muted leading-relaxed mt-2">
              We operate under strict engineering parameters to maintain speed, clarity, and visual precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((st, idx) => (
              <motion.div
                key={idx}
                style={{ y: idx % 2 === 0 ? ySec3 : ySec4 }}
                className="flex flex-col gap-3 relative z-10"
              >
                <span className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand-accent to-orange-100">
                  {st.num}
                </span>
                <h3 className="font-display text-base font-extrabold text-brand-text">
                  {st.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {st.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
