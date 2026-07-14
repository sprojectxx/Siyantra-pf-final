import { useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Shield, Users, Layers, LayoutGrid, ArrowRight, CheckCircle2, User, HelpCircle } from 'lucide-react';

export default function CRMPage() {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'pipeline' | 'roles' | 'analytics'>('pipeline');
  const [selectedRole, setSelectedRole] = useState<'admin' | 'rep' | 'viewer'>('admin');

  // Pipeline Kanban Mockup Data
  const kanbanStages = {
    Prospects: [
      { id: '1', name: 'Apex Capital Co.', budget: '$45,000', fit: '98%' },
      { id: '2', name: 'Nova Logistics Ltd.', budget: '$22,500', fit: '90%' }
    ],
    Negotiation: [
      { id: '3', name: 'Quantum FinTech', budget: '$60,000', fit: '94%' }
    ],
    Won: [
      { id: '4', name: 'Summit Retail Corp', budget: '$18,000', fit: '100%' }
    ]
  };

  // Role Permissions Data
  const rolePermissions = {
    admin: { label: 'Administrator', access: 'All Read / Write / Delete permissions', scope: 'Global Database & Keys' },
    rep: { label: 'Sales Representative', access: 'Read / Write self; Read-only team', scope: 'Assigned Accounts Only' },
    viewer: { label: 'Analyst/Viewer', access: 'Read-only metrics, no editing', scope: 'Aggregated Reports Only' }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-32 pb-24 dot-grid min-h-screen text-left"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Page Banner */}
        <div className="border-b border-brand-border pb-12 mb-16 max-w-4xl">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold">
            CAPABILITY / INTERNAL SOFTWARE
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-brand-text tracking-tighter mt-4 leading-none">
            Tailored CRM & <br />
            Internal Databases.
          </h1>
          <p className="font-display text-2xl text-brand-muted tracking-tight mt-6 leading-relaxed max-w-2xl">
            We build proprietary dashboards and sales engines mapped precisely to your team’s internal metrics. Zero seat fees. Complete custom pipelines.
          </p>
        </div>

        {/* Dashboard Showcase Title */}
        <div className="mb-12 max-w-xl">
          <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
            INTERACTIVE ENVIRONMENT MOCKUP
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-text tracking-tight mt-2">
            No Static Screenshots. <br />
            Explore Your Live Dashboard Preview.
          </h2>
          <p className="text-xs text-brand-muted mt-2 leading-relaxed">
            Siyantra CRMs are tailored to fit. Below, switch tabs to interact with active pipeline managers, user permission arrays, and performance trackers.
          </p>
        </div>

        {/* Live Interactive CRM Shell */}
        <div className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-xl mb-24 grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
          
          {/* Dashboard Left Sidebar */}
          <div className="lg:col-span-3 bg-brand-card border-r border-brand-border p-5 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-brand-text text-white flex items-center justify-center font-bold text-xs">C</div>
                <span className="font-display font-extrabold text-xs tracking-tight text-brand-text">PULSE CRM AI</span>
              </div>

              {/* Navigation tabs */}
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer ${
                    activeTab === 'pipeline' ? 'bg-white text-brand-accent border border-brand-border' : 'text-brand-muted hover:text-brand-text'
                  }`}
                >
                  <LayoutGrid className="w-4.5 h-4.5" />
                  Deals Pipeline
                </button>

                <button
                  onClick={() => setActiveTab('roles')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer ${
                    activeTab === 'roles' ? 'bg-white text-brand-accent border border-brand-border' : 'text-brand-muted hover:text-brand-text'
                  }`}
                >
                  <Shield className="w-4.5 h-4.5" />
                  Role Management
                </button>

                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer ${
                    activeTab === 'analytics' ? 'bg-white text-brand-accent border border-brand-border' : 'text-brand-muted hover:text-brand-text'
                  }`}
                >
                  <Activity className="w-4.5 h-4.5" />
                  Team Analytics
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-brand-border">
              <div className="w-7 h-7 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold text-xs shadow-2xs">SA</div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-brand-text">Siyantra Admin</span>
                <span className="text-[8px] text-brand-muted">Root Operations</span>
              </div>
            </div>
          </div>

          {/* Tab Display Panel */}
          <div className="lg:col-span-9 p-6 bg-white flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeTab === 'pipeline' && (
                <motion.div
                  key="pipeline"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-display text-base font-extrabold text-brand-text">Sales pipeline Kanban</h3>
                      <p className="text-[11px] text-brand-muted">Drag deals or track scoring metrics in real time.</p>
                    </div>
                    <span className="text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md font-bold">
                      ACTIVE REVENUE: $145.5K
                    </span>
                  </div>

                  {/* Kanban Columns Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(kanbanStages).map(([stage, cards]) => (
                      <div key={stage} className="bg-brand-card rounded-xl border border-brand-border p-3 flex flex-col gap-2.5">
                        <div className="flex justify-between items-center pb-1 border-b border-brand-border/60">
                          <span className="font-mono text-[9px] text-brand-text font-bold uppercase">{stage}</span>
                          <span className="w-4 h-4 rounded-full bg-white border border-brand-border text-brand-muted flex items-center justify-center text-[8px] font-bold">
                            {cards.length}
                          </span>
                        </div>
                        {cards.map((c) => (
                          <div key={c.id} className="bg-white p-2.5 rounded-lg border border-brand-border shadow-3xs flex flex-col gap-1.5 hover:border-brand-accent transition-colors">
                            <span className="text-[10px] font-bold text-brand-text">{c.name}</span>
                            <div className="flex justify-between items-center text-[9px] font-mono mt-1">
                              <span className="text-brand-muted">{c.budget}</span>
                              <span className="text-emerald-500 font-bold bg-emerald-50 px-1 py-0.2 rounded">{c.fit} Fit</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'roles' && (
                <motion.div
                  key="roles"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-6"
                >
                  <div>
                    <h3 className="font-display text-base font-extrabold text-brand-text">Role-Based Permission Matrix</h3>
                    <p className="text-[11px] text-brand-muted">Establish tight cryptographic user separation natively.</p>
                  </div>

                  <div className="flex gap-2">
                    {Object.keys(rolePermissions).map((role) => (
                      <button
                        key={role}
                        onClick={() => setSelectedRole(role as any)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          selectedRole === role 
                            ? 'bg-brand-text text-white shadow-3xs' 
                            : 'bg-brand-card border border-brand-border text-brand-muted hover:text-brand-text'
                        }`}
                      >
                        {rolePermissions[role as keyof typeof rolePermissions].label}
                      </button>
                    ))}
                  </div>

                  <div className="bg-brand-card rounded-xl border border-brand-border p-5 flex flex-col gap-4 text-left">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] text-brand-accent font-bold uppercase">DATABASE RESOLUTION</span>
                      <h4 className="font-display text-sm font-extrabold text-brand-text">
                        {rolePermissions[selectedRole].label} Specifications
                      </h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-1 border-t border-brand-border/60 pt-4">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[9px] text-brand-muted font-mono uppercase">ACCESS MATRIX</span>
                        <span className="text-xs text-brand-text font-bold">{rolePermissions[selectedRole].access}</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[9px] text-brand-muted font-mono uppercase">DATA SCOPE</span>
                        <span className="text-xs text-brand-text font-bold">{rolePermissions[selectedRole].scope}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-6 text-left"
                >
                  <div>
                    <h3 className="font-display text-base font-extrabold text-brand-text">Active Funnel Statistics</h3>
                    <p className="text-[11px] text-brand-muted">Automated CRM trigger metrics computed over Postgres.</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-brand-card rounded-xl border border-brand-border p-4 flex flex-col justify-between h-24">
                      <span className="font-mono text-[9px] text-brand-muted uppercase">ACTIVE LEADS</span>
                      <span className="text-2xl font-display font-extrabold text-brand-text">14,290</span>
                    </div>
                    <div className="bg-brand-card rounded-xl border border-brand-border p-4 flex flex-col justify-between h-24">
                      <span className="font-mono text-[9px] text-brand-muted uppercase">CONVERSION SPEED</span>
                      <span className="text-2xl font-display font-extrabold text-brand-text">4.2 Days</span>
                    </div>
                    <div className="bg-brand-card rounded-xl border border-brand-border p-4 flex flex-col justify-between h-24">
                      <span className="font-mono text-[9px] text-brand-muted uppercase">ACQUISITION ROI</span>
                      <span className="text-2xl font-display font-extrabold text-brand-accent">340%</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="border-t border-brand-border pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-brand-muted">
              <span>SECURITY PROTOCOL: SHA-256 ENCRYPTED</span>
              <span>VER: 2.1.0-STABLE</span>
            </div>
          </div>
        </div>

        {/* Dense Features Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-xl font-extrabold text-brand-text">Sales Pipeline & Kanban Controls</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              We design drag-and-drop systems, automatic pricing models, and trigger workflows that synchronize deals instantly as contacts qualify.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-xl font-extrabold text-brand-text">Inventories & Accounting Ledgers</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              No more external spreadsheets. We map your raw material stocks, invoice billing, and active supply logs directly inside the PostgreSQL system.
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
