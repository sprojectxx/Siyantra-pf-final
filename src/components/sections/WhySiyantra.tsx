import { ShieldCheck, Sparkles, Compass, Eye, Cpu, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhySiyantra() {
  const qualities = [
    {
      title: 'Premium Craftsmanship',
      icon: <Sparkles className="w-5 h-5 text-brand-accent" />,
      tagline: 'Apple × Stripe Aesthetics',
      description: 'We don’t do generic. Every line of code, margin, font choice, and microinteraction is crafted with obsessive attention to detail, creating digital interfaces that feel like elite consumer products.',
      badge: 'PIXEL-PERFECT',
      details: ['Minimal design principles', 'Fluid 60FPS physics', 'No bloated templates']
    },
    {
      title: 'Adaptive Intelligence',
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      tagline: 'Autonomous AI Workflows',
      description: 'We engineer agentic pipelines, scoring algorithms, and data triggers that work behind the scenes. Your product is not just a form; it is an intelligent asset that grows with machine-learning capabilities.',
      badge: 'AI-FIRST SYSTEM',
      details: ['LLM & RAG Orchestration', 'Self-healing triggers', 'Predictive lead analysis']
    },
    {
      title: 'Uncompromised Trust',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      tagline: 'Enterprise-Grade Security',
      description: 'You own everything. Siyantra transfers 100% of IP and source code back to your corporate accounts. We package everything in standardized Docker containers deployed safely on your cloud nodes.',
      badge: '100% OWNER CONTRACT',
      details: ['No vendor lock-in', 'Strict SLA reliability', 'Secure data isolation']
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-brand-border relative overflow-hidden" id="why-siyantra">
      {/* Decorative dot background details */}
      <div className="absolute inset-0 bg-[radial-gradient(#FAFAFA_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-16 gap-3">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold">
            THE SIYANTRA STANDARD
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            Designed for Businesses That Refuse to Compromise.
          </h2>
          <p className="text-sm text-brand-muted leading-relaxed">
            We don’t build generic websites. We engineer high-performance digital engines defined by three core pillars.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {qualities.map((q, idx) => (
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="p-8 rounded-2xl bg-brand-card border border-brand-border flex flex-col justify-between hover:border-brand-accent/40 transition-colors group shadow-3xs"
            >
              <div className="flex flex-col gap-6">
                
                {/* Icon Header */}
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-lg bg-white border border-brand-border flex items-center justify-center shadow-3xs group-hover:scale-105 transition-transform">
                    {q.icon}
                  </div>
                  <span className="font-mono text-[9px] font-extrabold tracking-wider bg-white border border-brand-border px-2 py-0.5 rounded-md text-brand-text">
                    {q.badge}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[11px] font-bold text-brand-accent uppercase leading-none">
                    {q.tagline}
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-brand-text">
                    {q.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed mt-2 font-sans">
                    {q.description}
                  </p>
                </div>
              </div>

              {/* Bullet Features list inside card */}
              <div className="mt-8 pt-6 border-t border-brand-border/60 flex flex-col gap-2.5">
                {q.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    <span className="text-xs text-brand-text font-medium">{detail}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
