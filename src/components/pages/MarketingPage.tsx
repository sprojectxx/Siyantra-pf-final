import { useRouter } from '../../hooks/useRouter';
import { motion } from 'motion/react';
import { TrendingUp, Target, Mail, Activity, ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';

export default function MarketingPage() {
  const { navigate } = useRouter();

  const services = [
    { title: 'Technical SEO Strategy', desc: 'Lighthouse audits, dynamic sitemaps, structured schema data, and mobile-first speed parameters ensuring page rankings.', icon: <Target className="w-5 h-5 text-brand-accent" /> },
    { title: 'Ad Acquisition Funnels', desc: 'Laser-focused Google Ads and Meta campaigns mapped directly to high-intent search keywords and qualified profiles.', icon: <TrendingUp className="w-5 h-5 text-amber-500" /> },
    { title: 'Brand Positioning', desc: 'Crafting premium brand messaging, narratives, and digital presentations that stand out from corporate templates.', icon: <Award className="w-5 h-5 text-red-500" /> }
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
        
        {/* Banner Section */}
        <div className="border-b border-brand-border pb-12 mb-16 max-w-4xl">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold">
            CAPABILITY / ACQUISITION
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-brand-text tracking-tighter mt-4 leading-tight">
            Performance Marketing & <br />
            Technical SEO.
          </h1>
          <p className="font-display text-2xl text-brand-muted tracking-tight mt-6 leading-relaxed max-w-2xl">
            We don’t do blind branding. We engineer performance-driven traffic pipelines that target high-intent clients and track customer conversion rates.
          </p>
        </div>

        {/* Marketing Services Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-brand-border shadow-3xs flex flex-col justify-between h-64 hover:border-brand-accent transition-colors"
            >
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-base font-extrabold text-brand-text">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
              <span className="font-mono text-[9px] text-brand-muted tracking-widest uppercase">
                STRATEGY VERTICAL 0{idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Performance Reports Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-12 mb-16">
          <div className="lg:col-span-6">
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              DATA TRANSPARENCY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mt-2 mb-6">
              Full-Funnel Acquisition Reports
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed mb-4">
              Stop guessing. Siyantra constructs automated web metrics platforms tracking traffic source paths, CTA triggers, email conversions, and ROI parameters.
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              We integrate deep tracking protocols (Google Analytics, Custom Event logs) securely without impacting page speed or client privacy requirements.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white rounded-2xl border border-brand-border p-6 shadow-3xs flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="font-mono text-[9px] text-brand-muted uppercase">TRAFFIC PATH PERFORMANCE</span>
              <span className="font-mono text-[9px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded">AVERAGE ROI: 4.2x</span>
            </div>

            <div className="flex flex-col gap-3 font-sans text-xs">
              <div className="flex justify-between items-center bg-brand-card p-2.5 rounded-lg border border-brand-border">
                <div className="flex items-center gap-2">
                  <span className="text-sm">🔎</span>
                  <span className="font-bold text-brand-text">Organic SEO Google</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-brand-text">+142% visits</div>
                  <div className="text-[10px] text-brand-muted">Lighthouse 100 Speed</div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-brand-card p-2.5 rounded-lg border border-brand-border">
                <div className="flex items-center gap-2">
                  <span className="text-sm">💬</span>
                  <span className="font-bold text-brand-text">Meta Targeted Ads</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-brand-text">5.4x ROI score</div>
                  <div className="text-[10px] text-brand-muted">Budget Scored Match</div>
                </div>
              </div>

              <div className="flex justify-between items-center bg-brand-card p-2.5 rounded-lg border border-brand-border">
                <div className="flex items-center gap-2">
                  <span className="text-sm">✉️</span>
                  <span className="font-bold text-brand-text">Trigger Email Automation</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-brand-text">42% open rate</div>
                  <div className="text-[10px] text-brand-muted">Warm Qualified Lead</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
