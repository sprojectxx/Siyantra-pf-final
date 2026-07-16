import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useRouter } from '../../hooks/useRouter';

export default function CTA() {
  const { navigate } = useRouter();

  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-border text-center">
      {/* Glow Backdrops */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,122,0,0.04)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center">
        
        {/* Sparkles design item */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/50 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
          <span className="font-mono text-[9px] font-bold text-brand-accent-text tracking-wider uppercase">
            REACH OUT TO SIYANTRA
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-text tracking-tighter mb-6 max-w-3xl mx-auto leading-tight">
          Let’s Build <br className="sm:hidden" />
          Something Extraordinary.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto leading-relaxed mb-10 font-sans">
          Whether you need to scale operations through custom AI agents, automate transactional pipelines, or launch a modular SaaS dashboard—we are ready.
        </p>

        {/* Custom Actions Buttons */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-text text-white text-sm font-semibold tracking-wide hover:bg-brand-accent hover:scale-102 transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer group"
            id="contact-us-cta-btn"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
