import { useState, useEffect } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, ArrowRight, CheckCircle2, Cpu, Sparkles, Zap, MessageSquare, Terminal, RefreshCw, Mail, Sliders } from 'lucide-react';

export default function AIAutoPage() {
  const { navigate } = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const workflowSteps = [
    { label: 'Lead Inbound', desc: 'Prospect submits quote form, triggers self-healing webhook', icon: '📥' },
    { label: 'AI Agent Triage', desc: 'GPT models process request, structuring parameters', icon: '🤖' },
    { label: 'Qualification', desc: 'Analyzes budget and scores fit within seconds', icon: '📊' },
    { label: 'CRM Sync', desc: 'Inserts lead structured values into Postgres DB', icon: '🗄️' },
    { label: 'Email Outbound', desc: 'Drafts bespoke introduction with custom scheduling calendar links', icon: '✉️' },
    { label: 'Slack Alert', desc: 'Notifies sales channels with urgent context briefings', icon: '💬' },
    { label: 'Calendar Block', desc: 'Automated appointment reservation confirmation', icon: '🗓️' },
    { label: 'Sales Team Hand-off', desc: 'Rep receives deep briefing; closes 2.4x faster', icon: '💼' }
  ];

  // Auto-rotate pipeline highlights for visual storytelling
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-32 pb-24 dot-grid min-h-screen text-left"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="border-b border-brand-border pb-12 mb-16 max-w-4xl">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold">
            CAPABILITY / COGNITIVE SYSTEMS
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-brand-text tracking-tighter mt-4 leading-tight">
            AI Integrations & <br />
            Workflow Automation.
          </h1>
          <p className="font-display text-2xl text-brand-muted tracking-tight mt-6 leading-relaxed max-w-2xl">
            We build autonomous pipelines that link your databases with LLM logic, stripping away hundreds of hours of manual entry.
          </p>
        </div>

        {/* Animated Workflows Map */}
        <div className="mb-24">
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              DYNAMIC BLUEPRINT
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mt-2">
              Autonomous Lead-to-Close Pipeline
            </h2>
            <p className="text-xs text-brand-muted mt-2">
              Witness how Siyantra automates inbound deals. Hover over steps or watch the interactive runner cycle through each node.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Animated Step detail card */}
            <div className="lg:col-span-4 bg-brand-text text-white p-6 rounded-2xl border border-neutral-800 shadow-xl flex flex-col justify-between h-72">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-brand-accent font-bold tracking-widest uppercase">
                      ACTIVE PIPELINE STEP [{activeStep + 1}/8]
                    </span>
                    <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-3xl select-none">{workflowSteps[activeStep].icon}</span>
                    <h3 className="font-display text-lg font-bold">
                      {workflowSteps[activeStep].label}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans mt-2 min-h-[48px]">
                    {workflowSteps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between items-center text-[9px] font-mono text-neutral-500 border-t border-neutral-800 pt-4 mt-4">
                <span>SYSTEM SPEED: &lt; 200MS</span>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-brand-accent transition-colors cursor-pointer select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                  {isPlaying ? 'PAUSE CYCLE' : 'RESUME'}
                </button>
              </div>
            </div>

            {/* Right: Pipeline Node Connector Tree */}
            <div className="lg:col-span-8 bg-brand-card p-6 sm:p-8 rounded-2xl border border-brand-border grid grid-cols-2 sm:grid-cols-4 gap-4 relative select-none">
              
              {workflowSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsPlaying(false); // Pause auto-runner when user interacts manually
                    }}
                    className={`p-4 rounded-xl border transition-all duration-300 relative bg-white ${
                      isActive
                        ? 'border-transparent shadow-md -translate-y-1'
                        : 'border-brand-border hover:border-brand-text cursor-pointer'
                    }`}
                    id={`workflow-node-${idx}`}
                  >
                    {/* Glowing sliding highlight border */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNodeGlow"
                        className="absolute inset-0 rounded-xl border-2 border-brand-accent shadow-[0_0_12px_rgba(255,122,0,0.15)] pointer-events-none"
                        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                      >
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-brand-accent rounded-full border-2 border-white shadow-[0_0_8px_#FF7A00]" />
                      </motion.div>
                    )}

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{step.icon}</span>
                      <span className="font-mono text-[9px] text-brand-muted font-bold uppercase">
                        STEP 0{idx + 1}
                      </span>
                    </div>
                    
                    <h4 className="font-display text-xs font-extrabold text-brand-text leading-tight line-clamp-1">
                      {step.label}
                    </h4>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* AI Agent Types Grid */}
        <div className="mb-24">
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              AGENT ARCHITECTURE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mt-2">
              Our Core Agentic Classifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-3xs hover:border-brand-accent transition-colors flex flex-col justify-between h-56">
              <div className="flex flex-col gap-3">
                <MessageSquare className="w-5 h-5 text-brand-accent" />
                <h3 className="font-display text-base font-bold text-brand-text">Cognitive Support Agents</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Interactive chatbots connected directly to your custom documents. Trained to parse technical queries and return accurate SLA resolutions without human support friction.
                </p>
              </div>
              <span className="font-mono text-[9px] text-brand-muted uppercase">TYPE_01 // CHAT BOT</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-3xs hover:border-brand-accent transition-colors flex flex-col justify-between h-56">
              <div className="flex flex-col gap-3">
                <Sliders className="w-5 h-5 text-amber-500" />
                <h3 className="font-display text-base font-bold text-brand-text">Dynamic Pricing & Scoring</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Algorithms trained to analyze business metrics, score transactional parameters, and update regional pricing schedules automatically in real time.
                </p>
              </div>
              <span className="font-mono text-[9px] text-brand-muted uppercase">TYPE_02 // REGRESSOR</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-3xs hover:border-brand-accent transition-colors flex flex-col justify-between h-56">
              <div className="flex flex-col gap-3">
                <RefreshCw className="w-5 h-5 text-emerald-500" />
                <h3 className="font-display text-base font-bold text-brand-text">Self-Healing Sync Engines</h3>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Active background scripts that monitor API logs, automatically retry failed network steps, and align multi-cloud database values securely.
                </p>
              </div>
              <span className="font-mono text-[9px] text-brand-muted uppercase">TYPE_03 // CRON ENGINE</span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
