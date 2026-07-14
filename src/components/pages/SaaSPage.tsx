import { useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { motion } from 'motion/react';
import { Layers, ShieldAlert, CreditCard, Activity, Cloud, RefreshCw, Key, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SaaSPage() {
  const { navigate } = useRouter();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const saasArchitectureNodes = [
    { id: 'client', name: 'Edge Client Interface', desc: 'Sleek React 19 SPA served via global Vercel server. Renders page states sub-second.', icon: <Layers className="w-5 h-5 text-brand-accent" /> },
    { id: 'auth', name: 'Session & Auth Layer', desc: 'Secure middleware confirming JWT certificates and user roles prior to database fetches.', icon: <Key className="w-5 h-5 text-amber-500" /> },
    { id: 'database', name: 'Multi-Tenant Database', desc: 'PostgreSQL instance separated with secure user access. Houses tenant keys securely.', icon: <Activity className="w-5 h-5 text-red-500" /> },
    { id: 'billing', name: 'Stripe Billing Hooks', desc: 'Instant subscription webhooks tracking trial limits, invoice credits, and payments.', icon: <CreditCard className="w-5 h-5 text-emerald-500" /> },
    { id: 'cloud', name: 'Container Isolation', desc: 'Dockerized microservices hosted on AWS nodes with autoscaling clusters.', icon: <Cloud className="w-5 h-5 text-blue-500" /> }
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
            CAPABILITY / CLOUD PRODUCTS
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-brand-text tracking-tighter mt-4 leading-tight">
            SaaS Platform & <br />
            Multi-Tenant Engineering.
          </h1>
          <p className="font-display text-2xl text-brand-muted tracking-tight mt-6 leading-relaxed max-w-2xl">
            We transform business ideas into robust cloud software. Multi-tenant database structures, billing models, and server infrastructure designed to handle transactions.
          </p>
        </div>

        {/* System Architecture Section */}
        <div className="mb-24">
          <div className="max-w-xl mb-12">
            <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
              SYSTEM ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mt-2">
              SaaS Multi-Tenant Pipeline Map
            </h2>
            <p className="text-xs text-brand-muted mt-2 leading-relaxed">
              Hover over or select nodes to trace the data flow from client inputs down through secure DB registers and Stripe recurring webhooks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Architecture nodes selector list */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {saasArchitectureNodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 flex items-start gap-4 ${
                      isActive 
                        ? 'bg-brand-card border-brand-accent shadow-md -translate-y-0.5' 
                        : 'bg-white border-brand-border'
                    }`}
                    id={`architecture-node-${node.id}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center">
                      {node.icon}
                    </div>
                    <div className="flex flex-col gap-0.5 text-left">
                      <h4 className="font-display text-sm font-bold text-brand-text group-hover:text-brand-accent">
                        {node.name}
                      </h4>
                      <p className="text-xs text-brand-muted font-sans leading-relaxed">
                        {node.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Simulated Traffic Console */}
            <div className="lg:col-span-5 bg-brand-text text-white p-6 sm:p-8 rounded-2xl border border-neutral-800 shadow-xl flex flex-col justify-between h-[420px]">
              <div className="flex flex-col gap-4 text-left">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
                  <span className="font-mono text-[9px] text-brand-accent font-bold tracking-widest uppercase">
                    ACTIVE FLOW MONITOR
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[8px] text-emerald-500">LIVE COLDSTART PASS</span>
                  </div>
                </div>

                <div className="font-mono text-[10px] text-neutral-400 flex flex-col gap-2.5 mt-2">
                  <span>$ siyantra-saas --start-cluster-check</span>
                  <span className="text-neutral-500">&gt; Allocating node memory parameters... [100% OK]</span>
                  <span className="text-neutral-500">&gt; Secure SSL certificate handshake... [SECURE]</span>
                  
                  {activeNode ? (
                    <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700 text-white mt-4 flex flex-col gap-1">
                      <span className="text-brand-accent font-bold uppercase text-[9px] tracking-wider">
                        ACTIVE NODE CONSOLE: {activeNode.toUpperCase()}
                      </span>
                      <p className="text-[11px] leading-relaxed text-neutral-300">
                        Analyzing queue telemetry on [{activeNode}]. High speed caching triggered. Active response pipeline scored.
                      </p>
                    </div>
                  ) : (
                    <div className="border border-dashed border-neutral-800 p-4 rounded-lg text-neutral-600 text-[11px] text-center mt-4">
                      Hover over architecture layers to trigger dynamic console telemetry data
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between text-[9px] font-mono text-neutral-600 border-t border-neutral-800 pt-4">
                <span>DATABASE COUPLING: STRIPED MULTI-TENANT</span>
                <span>SECURE JWT PROTOCOLS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Capabilities Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-brand-border pt-16 mb-16">
          <div className="flex flex-col gap-4 text-left">
            <h3 className="font-display text-lg font-bold text-brand-text">Authentication & Session Layers</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              We compile secure, lightweight, and modern authentication handlers protecting individual data silos. Supports OAuth, key authorizations, and automated session invalidation triggers.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-left">
            <h3 className="font-display text-lg font-bold text-brand-text">Multi-Tenant Subscriptions</h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              We couple Stripe recurring billing gateways directly with tenant databases, handling automatic trial allocations, tier limit restrictions, and secure invoice lookups.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
