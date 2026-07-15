import { PROJECTS } from '../../constants/data';
import { useRouter } from '../../hooks/useRouter';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, FolderKanban, Check, Code } from 'lucide-react';

export default function PortfolioPage() {
  const { navigate } = useRouter();

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
        <div className="border-b border-brand-border pb-12 mb-16 max-w-4xl">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold">
            SIYANTRA CASE STUDIES
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-brand-text tracking-tighter mt-4 leading-none">
            Software Engineered <br />
            to Drive Tangible ROI.
          </h1>
          <p className="font-display text-2xl text-brand-muted tracking-tight mt-6 leading-relaxed max-w-2xl">
            We don’t show screenshots. We tell stories of operational transformation. Explore our comprehensive case studies detailing the challenge, custom solution, and metric result.
          </p>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <div
              key={proj.slug}
              className="p-6 rounded-2xl bg-white border border-brand-border shadow-3xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[510px] group relative"
              id={`portfolio-card-${proj.slug}`}
            >
              <div className="flex flex-col gap-5">
                
                {/* Header Meta */}
                <div className="flex justify-between items-center border-b border-brand-border/60 pb-3">
                  <span className="font-mono text-[9px] text-brand-muted tracking-widest uppercase">
                    {proj.industry}
                  </span>
                  <span className="font-mono text-[9px] font-bold text-brand-accent bg-orange-50 border border-orange-100 px-2 py-0.5 rounded">
                    {proj.category}
                  </span>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1">
                  <h2 className="font-display text-xl font-extrabold text-brand-text group-hover:text-brand-accent transition-colors">
                    {proj.title}
                  </h2>
                  <span className="text-xs text-brand-muted">Client: {proj.client}</span>
                </div>

                {/* Challenge & Solution previews */}
                <div className="flex flex-col gap-3 mt-1 text-xs text-brand-muted font-sans leading-relaxed">
                  <div>
                    <strong className="text-brand-text block mb-0.5">THE CHALLENGE</strong>
                    <p className="line-clamp-2">{proj.challenge}</p>
                  </div>
                  <div>
                    <strong className="text-brand-text block mb-0.5">THE SOLUTION</strong>
                    <p className="line-clamp-2">{proj.solution}</p>
                  </div>
                </div>
              </div>

              {/* Metrics block anchored at the bottom-middle of each card */}
              <div className="border-t border-brand-border/60 pt-4 mt-4 flex flex-col gap-4">
                {/* Metrics Highlight Pills */}
                <div className="grid grid-cols-3 gap-2 bg-brand-card p-2.5 rounded-xl border border-brand-border">
                  {proj.metrics.slice(0, 3).map((met, idx) => (
                    <div key={idx} className="flex flex-col text-center">
                      <span className="font-display text-[11px] font-extrabold text-brand-text leading-none mb-1">
                        {met.value}
                      </span>
                      <span className="font-mono text-[6px] text-brand-muted tracking-tight leading-none uppercase">
                        {met.label}
                      </span>
                    </div>
                  ))}
                </div>

                {proj.externalLink && (
                  <a
                    href={proj.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center text-xs font-bold text-brand-accent hover:underline group-hover:text-brand-accent transition-colors"
                  >
                    <span>Visit Live Platform</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
