import { useRouter } from '../../hooks/useRouter';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { TrendingUp, Target, Mail, Activity, ArrowRight, CheckCircle2, Award, Sparkles } from 'lucide-react';

export default function MarketingPage() {
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
        <div className="border-b border-brand-border pb-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] text-brand-accent-text uppercase tracking-widest font-bold">
              CAPABILITY / ACQUISITION
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-brand-text tracking-tighter mt-4 leading-tight">
              Performance Marketing & <br />
              Technical SEO.
            </h1>
            <p className="font-display text-2xl text-brand-muted tracking-tight mt-6 leading-relaxed">
              We don’t do blind branding. We engineer performance-driven traffic pipelines that target high-intent clients and track customer conversion rates.
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
                <span className="font-mono text-[8px] text-brand-muted uppercase">ACQUISITION CHANNELS</span>
                <span className="text-[8px] text-brand-accent-text font-bold uppercase">live tracker</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 flex-1 mt-3">
                {/* Google Ads Card */}
                <div className="bg-brand-card rounded-xl border border-brand-border p-3 flex flex-col justify-between text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-mono font-bold text-neutral-800">Google Ads</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  </div>
                  <div className="my-auto">
                    <span className="text-[8px] text-brand-muted block uppercase">ROAS</span>
                    <span className="text-xs font-extrabold text-brand-text">4.8x ROI</span>
                  </div>
                  {/* Animated Bars */}
                  <div className="flex gap-1 items-end h-5 mt-1">
                    {[30, 75, 45, 90].map((val, idx) => (
                      <motion.div
                        key={idx}
                        animate={{ height: [`20%`, `${val}%`, `20%`] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.15, ease: 'easeInOut' }}
                        className="bg-brand-accent w-full rounded-t-xs"
                      />
                    ))}
                  </div>
                </div>

                {/* Meta Ads Card */}
                <div className="bg-brand-card rounded-xl border border-brand-border p-3 flex flex-col justify-between text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-mono font-bold text-neutral-800">Meta Ads</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
                  </div>
                  <div className="my-auto">
                    <span className="text-[8px] text-brand-muted block uppercase">CTR</span>
                    <span className="text-xs font-extrabold text-brand-text">5.2%</span>
                  </div>
                  {/* Animated pulses */}
                  <div className="flex items-center justify-center h-7 relative">
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                      className="absolute w-5 h-5 rounded-full bg-brand-accent/20 border border-brand-accent/30"
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_6px_#FF7A00]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marketing Services Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              style={{ y: idx % 2 === 0 ? ySec1 : ySec2 }}
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
            </motion.div>
          ))}
        </div>

        {/* Performance Reports Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-12 mb-16">
          <motion.div
            style={{ y: ySec3 }}
            className="lg:col-span-6"
          >
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
          </motion.div>

          <motion.div
            style={{ y: ySec4 }}
            className="lg:col-span-6 bg-white rounded-2xl border border-brand-border p-6 shadow-3xs flex flex-col gap-4"
          >
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
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
