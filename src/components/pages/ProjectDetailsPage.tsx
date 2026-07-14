import { PROJECTS } from '../../constants/data';
import { useRouter } from '../../hooks/useRouter';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ShieldAlert, Sparkles, Code, Terminal, Server, BarChart3, Quote } from 'lucide-react';

export default function ProjectDetailsPage() {
  const { path, navigate } = useRouter();
  
  // Extract project slug from URL path (e.g., /project/pulse-crm -> pulse-crm)
  const slug = path.split('/').pop() || '';
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-40 pb-24 text-center dot-grid min-h-screen flex flex-col justify-center items-center px-6">
        <ShieldAlert className="w-12 h-12 text-brand-accent mb-4 animate-bounce" />
        <h1 className="font-display text-3xl font-extrabold text-brand-text">Case Study Not Found</h1>
        <p className="text-sm text-brand-muted mt-2 max-w-sm leading-relaxed">
          The requested system narrative split is empty or has moved. Explore our core work collection instead.
        </p>
        <button
          onClick={() => navigate('/portfolio')}
          className="mt-6 px-6 py-2.5 bg-brand-text text-white text-xs font-bold rounded-lg hover:bg-brand-accent transition-colors cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-32 pb-24 dot-grid min-h-screen text-left"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Back navigation button */}
        <button
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-muted hover:text-brand-text transition-colors cursor-pointer mb-10 group"
          id="back-to-portfolio-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        {/* Case Study Header Banner */}
        <div className="border-b border-brand-border pb-12 mb-16">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-widest bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-md">
              {project.category}
            </span>
            <span className="font-mono text-[9px] text-brand-muted font-bold uppercase tracking-widest border border-brand-border px-2.5 py-1 rounded-md">
              {project.industry}
            </span>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-text tracking-tighter mt-4 leading-tight max-w-4xl">
            {project.title}: Mapped & Engineered.
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mt-8 border-t border-brand-border pt-8 text-xs font-mono text-brand-muted">
            <div className="flex flex-col">
              <span className="font-bold text-brand-text text-[10px] uppercase">CLIENT PARTNER</span>
              <span className="mt-1 font-sans text-sm">{project.client}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-text text-[10px] uppercase">PROJECT SECTOR</span>
              <span className="mt-1 font-sans text-sm">{project.industry}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-text text-[10px] uppercase">TECHNOLOGIES COUPLING</span>
              <span className="mt-1 font-sans text-sm">{project.technology.join(', ')}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-brand-text text-[10px] uppercase">IP STATUS</span>
              <span className="mt-1 text-emerald-500 font-bold">100% TRANSFERRED</span>
            </div>
          </div>
        </div>

        {/* Narrative Flow Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Main Story (Left Column) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* 1. Problem Definition */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
                01 / THE CORE DISRUPTION
              </span>
              <h2 className="font-display text-2xl font-extrabold text-brand-text tracking-tight">
                Identifying the Operational Friction
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed font-sans mt-1">
                {project.problemDetails}
              </p>
              <div className="bg-red-50/50 border border-red-100 p-4 rounded-xl text-xs text-red-800 leading-relaxed font-sans mt-2">
                <strong>Anomalous Vector:</strong> {project.challenge}
              </div>
            </div>

            {/* 2. Research & Exploration */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
                02 / RESEARCH & SCHEMATIC BLUEPRINTS
              </span>
              <h2 className="font-display text-2xl font-extrabold text-brand-text tracking-tight">
                Auditing Gaps & Drafting JSON Wireframes
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed font-sans mt-1">
                {project.researchDetails}
              </p>
              <div className="bg-brand-card border border-brand-border p-4 rounded-xl text-xs text-brand-muted leading-relaxed font-sans mt-2">
                We mapped each database dependency and OAuth credential lifecycle inside custom mockups, ensuring that the final data flows remained secure.
              </div>
            </div>

            {/* 3. Engineering & Deployment */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
                03 / ATOMIC SYNTHESIS
              </span>
              <h2 className="font-display text-2xl font-extrabold text-brand-text tracking-tight">
                Natively Compiling React & Postgres Structures
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed font-sans mt-1">
                {project.developmentDetails}
              </p>
              <p className="text-sm text-brand-muted leading-relaxed font-sans">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Sidebar Highlights & Metrics (Right Column) */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28">
            
            {/* Metric Scorecard */}
            <div className="bg-brand-text text-white p-6 rounded-2xl border border-neutral-800 shadow-xl flex flex-col gap-5">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                <span className="font-mono text-[9px] text-brand-accent font-bold tracking-widest uppercase">
                  VERIFIED STATS
                </span>
                <BarChart3 className="w-4 h-4 text-brand-accent" />
              </div>
              
              <div className="flex flex-col gap-5">
                {project.metrics.map((met, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-3xl font-display font-extrabold text-white">
                      {met.value}
                    </span>
                    <span className="text-[10px] text-neutral-400 font-sans tracking-wide uppercase mt-1">
                      {met.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-brand-card border border-brand-border p-6 rounded-2xl text-left flex flex-col gap-4 relative">
              <Quote className="w-8 h-8 text-brand-accent/15 absolute top-4 right-4" />
              <p className="text-xs text-brand-muted leading-relaxed font-sans italic">
                "Siyantra completely transformed how we qualifed and scored deals. By deploying their customized CRM, we bypassed manual tracking entirely and cut response times down to under 5 minutes."
              </p>
              <div className="flex flex-col border-t border-brand-border/60 pt-3">
                <span className="text-xs font-bold text-brand-text">{project.client} VP</span>
                <span className="text-[10px] text-brand-muted">Lead Systems Operations</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
