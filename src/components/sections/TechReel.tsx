import { useState } from 'react';
import { TECHNOLOGIES } from '../../constants/data';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Cpu, Code, Server, HelpCircle } from 'lucide-react';

export default function TechReel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Helper to pick category icon representation
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code className="w-3.5 h-3.5 text-brand-accent" />;
      case 'AI & Orchestration':
      case 'Intelligence API':
        return <Sparkles className="w-3.5 h-3.5 text-orange-500" />;
      case 'Database & Auth':
      case 'Relational Database':
      case 'NoSQL Database':
        return <Server className="w-3.5 h-3.5 text-amber-500" />;
      default:
        return <Cpu className="w-3.5 h-3.5 text-neutral-500" />;
    }
  };

  // We double the list to ensure a seamless infinite looping animation
  const doubledTechs = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="py-20 bg-white border-y border-brand-border relative overflow-hidden" id="tech-reel">
      {/* Decorative gradients on edges for fade-out styling */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] text-brand-accent-text uppercase tracking-widest font-bold">
            PROVEN ECOSYSTEM
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight">
            Our Core Technology Stack
          </h2>
        </div>
        <p className="text-sm text-brand-muted max-w-sm">
          We engineer with modern, battle-tested tools to guarantee speed, modular security, and horizontal scalability.
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="w-full flex overflow-x-hidden relative py-6">
        <div 
          className="flex gap-4 items-center whitespace-nowrap animate-marquee hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          {doubledTechs.map((tech, idx) => {
            const isHovered = hoveredIndex === idx;
            
            return (
              <div
                key={`${tech.name}-${idx}`}
                className="relative inline-flex items-center"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isHovered
                      ? 'bg-brand-card border-brand-accent shadow-[0_0_20px_rgba(255,122,0,0.12)] -translate-y-1.5'
                      : 'bg-brand-card border-brand-border'
                  }`}
                >
                  {/* Category bullet indicator */}
                  <div className="w-5 h-5 rounded-md bg-white border border-brand-border flex items-center justify-center shadow-2xs">
                    {getCategoryIcon(tech.category)}
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-brand-text tracking-tight">
                      {tech.name}
                    </span>
                    <span className="font-mono text-[8px] text-brand-muted tracking-wider uppercase">
                      {tech.category}
                    </span>
                  </div>
                </div>

                {/* Tooltip Overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-neutral-950 text-white p-3 rounded-lg text-xs w-48 shadow-xl z-30 flex flex-col gap-1 text-center whitespace-normal pointer-events-none"
                    >
                      <span className="font-bold text-[10px] tracking-wider text-brand-accent uppercase font-mono">
                        {tech.category}
                      </span>
                      <p className="text-neutral-300 text-[11px] leading-relaxed">
                        {tech.desc}
                      </p>
                      {/* Arrow tail */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-950 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
