import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, FileText, Check, X, ArrowRight, Bot } from 'lucide-react';

export default function CTA() {
  const [modalType, setModalType] = useState<'call' | 'quote' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'ai-automation',
    budget: '$10k - $25k',
    details: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate premium engineering verification wait
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'ai-automation',
      budget: '$10k - $25k',
      details: '',
    });
    setIsSubmitted(false);
    setModalType(null);
  };

  return (
    <section className="py-24 md:py-32 bg-brand-card border-b border-brand-border relative overflow-hidden" id="cta">
      {/* Background soft orange grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,122,0,0.04)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center">
        
        {/* Sparkles design item */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/50 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
          <span className="font-mono text-[9px] font-bold text-brand-accent tracking-wider uppercase">
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
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={() => setModalType('call')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-text text-white text-sm font-semibold tracking-wide hover:bg-brand-accent hover:scale-102 transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            id="book-call-btn"
          >
            <Calendar className="w-4 h-4" />
            Book Discovery Call
          </button>
          
          <button
            onClick={() => setModalType('quote')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white border border-brand-border hover:border-brand-text text-brand-text text-sm font-semibold tracking-wide hover:bg-brand-card transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            id="get-quote-btn"
          >
            <FileText className="w-4 h-4" />
            Get Free Quote
          </button>
        </div>

      </div>

      {/* Pop-up Booking & Quote Modal */}
      <AnimatePresence>
        {modalType && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={resetForm}
              className="absolute inset-0 bg-neutral-900/40 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-md bg-white rounded-2xl border border-brand-border shadow-2xl overflow-hidden p-6 sm:p-8 z-10"
              id="cta-form-modal"
            >
              {/* Close Button */}
              <button
                onClick={resetForm}
                className="absolute top-4 right-4 p-1.5 rounded-lg border border-brand-border hover:bg-brand-card text-brand-muted hover:text-brand-text transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
                      {modalType === 'call' ? 'CALENDAR INTEGRATION' : 'AUTOMATED ESTIMATOR'}
                    </span>
                    <h3 className="font-display text-xl font-extrabold text-brand-text">
                      {modalType === 'call' ? 'Schedule a Discovery Session' : 'Request a Project Quote'}
                    </h3>
                    <p className="text-xs text-brand-muted">
                      {modalType === 'call' 
                        ? 'Book a 15-minute briefing session to score your operational parameters.' 
                        : 'Get a preliminary scope assessment and estimated cost breakdown.'}
                    </p>
                  </div>

                  {/* Input Fields */}
                  <div className="flex flex-col gap-3 mt-2">
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-brand-text uppercase font-mono">Your Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-card text-sm text-brand-text focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-brand-text uppercase font-mono">Your Work Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-card text-sm text-brand-text focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-brand-text uppercase font-mono">Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-card text-xs text-brand-text focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                        >
                          <option value="web-development">Web Development</option>
                          <option value="ai-automation">AI & Automation</option>
                          <option value="crm-development">CRM Development</option>
                          <option value="saas-development">SaaS Dashboard</option>
                          <option value="digital-marketing">Digital Marketing</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-bold text-brand-text uppercase font-mono">Estimated Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-card text-xs text-brand-text focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                        >
                          <option value="$5k - $10k">$5k - $10k</option>
                          <option value="$10k - $25k">$10k - $25k</option>
                          <option value="$25k - $50k">$25k - $50k</option>
                          <option value="$50k+">$50k+</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-bold text-brand-text uppercase font-mono">Brief Description</label>
                      <textarea
                        rows={2}
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        placeholder="Tell us what you would like to engineer..."
                        className="px-3.5 py-2.5 rounded-lg border border-brand-border bg-brand-card text-sm text-brand-text focus:outline-none focus:border-brand-accent focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Trigger */}
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="mt-2 w-full py-3.5 rounded-xl bg-brand-text text-white text-xs font-bold tracking-wide hover:bg-brand-accent disabled:bg-neutral-300 transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Confirm Request
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Feedback Block */
                <div className="flex flex-col items-center text-center py-6 gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 shadow-2xs">
                    <Check className="w-6 h-6" />
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <h4 className="font-display text-lg font-bold text-brand-text">Request Transmitted Successfully</h4>
                    <p className="text-xs text-brand-muted px-4">
                      Thank you, <span className="font-bold text-brand-text">{formData.name}</span>! Our automation agents have qualified your parameters. An engineer will follow up shortly.
                    </p>
                  </div>

                  {/* Simulated processing pipeline logs */}
                  <div className="w-full bg-brand-card border border-brand-border rounded-xl p-3 text-left font-mono text-[9px] text-brand-muted flex flex-col gap-1 mt-2">
                    <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                      <Bot className="w-3 h-3" />
                      <span>SIYANTRA AUTO-QUALIFIER</span>
                    </div>
                    <span>&gt; Checking email domain structure... PASS</span>
                    <span>&gt; Routing project classification [{formData.projectType}]... OK</span>
                    <span>&gt; Assigned estimated SLA response: &lt; 2 Hours</span>
                  </div>

                  <button
                    onClick={resetForm}
                    className="mt-4 px-6 py-2 border border-brand-border rounded-lg text-xs font-medium text-brand-text hover:bg-brand-card transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
