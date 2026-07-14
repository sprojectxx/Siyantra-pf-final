import { useState } from 'react';
import { SERVICES } from '../../constants/data';
import { useRouter } from '../../hooks/useRouter';
import { motion } from 'motion/react';
import { ArrowRight, Laptop, Bot, Activity, Layers, TrendingUp } from 'lucide-react';

export default function ServicesOverview() {
  const { navigate } = useRouter();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Map service IDs to modern representative icons
  const getServiceIcon = (id: string) => {
    const size = 'w-6 h-6';
    switch (id) {
      case 'web-development':
        return <Laptop className={`${size} text-brand-accent`} />;
      case 'ai-automation':
        return <Bot className={`${size} text-amber-500`} />;
      case 'crm-development':
        return <Activity className={`${size} text-red-500`} />;
      case 'saas-development':
        return <Layers className={`${size} text-orange-600`} />;
      case 'digital-marketing':
        return <TrendingUp className={`${size} text-yellow-500`} />;
      default:
        return <Laptop className={`${size} text-brand-accent`} />;
    }
  };

  // Custom visual mockup content based on service category
  const renderMiniPreview = (id: string, isHovered: boolean) => {
    switch (id) {
      case 'web-development':
        return (
          <div className="relative w-full h-32 bg-white rounded-xl border border-brand-border overflow-hidden p-3 flex flex-col gap-2">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
            </div>
            <div className="grid grid-cols-12 gap-2 mt-1">
              <div className="col-span-4 bg-brand-card h-16 rounded border border-brand-border flex flex-col justify-center p-1.5">
                <div className="w-1/2 h-1.5 bg-neutral-200 rounded" />
                <div className="w-3/4 h-1 bg-neutral-100 rounded mt-1" />
              </div>
              <div className="col-span-8 bg-brand-card h-16 rounded border border-brand-border p-2 relative flex flex-col justify-between overflow-hidden">
                <div className="w-1/3 h-2 bg-brand-accent/20 rounded" />
                <motion.div
                  animate={{ width: isHovered ? '80%' : '40%' }}
                  transition={{ duration: 0.8 }}
                  className="h-1.5 bg-brand-accent rounded mt-2"
                />
                <div className="w-2/3 h-1 bg-neutral-100 rounded" />
              </div>
            </div>
          </div>
        );

      case 'ai-automation':
        return (
          <div className="relative w-full h-32 bg-white rounded-xl border border-brand-border overflow-hidden p-3 flex items-center justify-between">
            <div className="flex flex-col gap-2 items-center">
              <div className="w-8 h-8 rounded-lg bg-orange-50 border border-brand-accent/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-brand-accent" />
              </div>
              <span className="font-mono text-[7px] text-brand-muted">Lead In</span>
            </div>
            
            <div className="flex-1 px-2 flex items-center relative">
              <div className="w-full border-t border-dashed border-brand-border" />
              <motion.div
                animate={{ left: isHovered ? ['0%', '100%'] : '0%' }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_#FF7A00]"
              />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center">
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="font-mono text-[7px] text-brand-text">Scored CRM</span>
            </div>
          </div>
        );

      case 'crm-development':
        return (
          <div className="relative w-full h-32 bg-white rounded-xl border border-brand-border overflow-hidden p-3 flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-brand-border pb-1">
              <span className="font-mono text-[8px] text-brand-muted uppercase">Deals Pipeline</span>
              <span className="text-[9px] font-bold text-emerald-500">$18.5k</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 mt-2 flex-1">
              <div className="bg-brand-card rounded border border-brand-border p-1 flex flex-col justify-between h-14">
                <div className="w-1/2 h-1 bg-neutral-300 rounded" />
                <div className="w-full h-4 bg-orange-100 rounded-xs flex items-center justify-center">
                  <span className="text-[6px] font-bold text-brand-accent">Lead</span>
                </div>
              </div>
              <div className="bg-brand-card rounded border border-brand-border p-1 flex flex-col justify-between h-14">
                <div className="w-2/3 h-1 bg-neutral-300 rounded" />
                <motion.div
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  className="w-full h-4 bg-emerald-100 rounded-xs flex items-center justify-center"
                >
                  <span className="text-[6px] font-bold text-emerald-700">Audit</span>
                </motion.div>
              </div>
              <div className="bg-brand-card rounded border border-brand-border p-1 flex flex-col justify-between h-14">
                <div className="w-1/3 h-1 bg-neutral-300 rounded" />
                <div className="w-full h-4 bg-neutral-200 rounded-xs flex items-center justify-center">
                  <span className="text-[6px] font-bold text-brand-muted">Quote</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'saas-development':
        return (
          <div className="relative w-full h-32 bg-white rounded-xl border border-brand-border overflow-hidden p-3 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[8px] text-brand-muted">MONTHLY BILLING</span>
              <span className="text-[8px] text-brand-accent font-bold">STRIPIFY ACTIVE</span>
            </div>
            <div className="flex items-center gap-4 my-auto">
              <div className="w-10 h-10 rounded-full border-4 border-brand-accent/20 border-t-brand-accent flex items-center justify-center relative">
                <motion.div
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                />
                <span className="text-[8px] font-bold">MRR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-brand-text leading-none">$42,900</span>
                <span className="text-[8px] text-emerald-500 font-bold mt-1">+14.2% monthly</span>
              </div>
            </div>
          </div>
        );

      case 'digital-marketing':
        return (
          <div className="relative w-full h-32 bg-white rounded-xl border border-brand-border overflow-hidden p-3 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="font-mono text-[8px] text-brand-muted">GOOGLE & META ADS</span>
              <span className="text-[8px] font-bold text-brand-accent">ROI 4.2x</span>
            </div>
            <div className="flex items-end justify-between h-12 gap-1 px-1 mt-1">
              {[30, 45, 25, 60, 85, 55, 95].map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ height: '20%' }}
                  animate={{ height: isHovered ? `${val}%` : '20%' }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="bg-brand-accent w-full rounded-t-xs"
                />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-brand-card border-b border-brand-border relative" id="services">
      {/* Backgroud glow details */}
      <div className="absolute top-1/3 right-12 w-96 h-96 bg-brand-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-xl flex flex-col gap-3 mb-16">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold">
            SERVICES CAPABILITIES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight leading-tight">
            We Engineer Intelligent Infrastructure That Scales.
          </h2>
          <p className="text-sm text-brand-muted leading-relaxed">
            We bypass template solutions. Our team designs responsive web systems, tailored workflows, CRM dashboards, and robust SaaS products from the ground up.
          </p>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const isHovered = hoveredCard === service.id;
            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => navigate(service.path)}
                className={`group p-6 rounded-2xl bg-white border border-brand-border shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between gap-6 relative overflow-hidden ${
                  isHovered ? '-translate-y-1.5' : ''
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Accent Gradient Border Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${service.highlightColor} transition-transform duration-300 ${
                    isHovered ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />

                <div className="flex flex-col gap-4">
                  {/* Card Header & Icon */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center group-hover:bg-orange-50 group-hover:border-brand-accent/25 transition-colors duration-300 shadow-3xs">
                      {getServiceIcon(service.id)}
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-muted group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-lg font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-muted leading-relaxed min-h-[48px]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Animated Interactive Miniature Preview */}
                <div className="mt-2 bg-brand-card p-1.5 rounded-xl border border-brand-border/60">
                  {renderMiniPreview(service.id, isHovered)}
                </div>

                {/* Feature Tags list */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[9px] font-medium px-2 py-0.5 rounded-md bg-brand-card border border-brand-border text-brand-muted"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
