import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Sparkles, Check, ArrowRight, Bot, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'ai-automation',
    budget: '$10k - $25k',
    details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
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
            CONNECT WITH US
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold text-brand-text tracking-tighter mt-4 leading-none">
            Start Your Project <br />
            with Siyantra.
          </h1>
          <p className="font-display text-2xl text-brand-muted tracking-tight mt-6 leading-relaxed max-w-2xl">
            Ready to scale? Connect with our lead systems architects to establish technical scope, budget parameters, and project timelines.
          </p>
        </div>

        {/* Form and Contacts Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contacts info (Left Column) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
                OUR DIRECTORIES
              </span>
              <h2 className="font-display text-xl font-extrabold text-brand-text">
                Direct Channels
              </h2>
              <p className="text-xs text-brand-muted leading-relaxed font-sans">
                We respond to all verified enterprise briefing inquiries within 2 hours under standard SLA schedules.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hari@siyantraaisolution.com&su=Project%20Inquiry%20-%20Siyantra%20AI%20Solutions&body=Hello%20Hari%2C%0A%0AI%20would%20like%20to%20inquire%20about%20building%20a%20project%20with%20Siyantra%20AI%20Solutions.%0A%0AHere%20are%20some%20details%20of%20what%20I%20want%20to%20build%3A%0A-%20Project%20Description%3A%20%0A-%20Target%20Timeline%3A%20%0A-%20Expected%20Budget%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you!%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white p-4 rounded-xl border border-brand-border shadow-3xs hover:border-brand-accent hover:shadow-2xs transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-brand-muted uppercase">EMAIL ENQUIRIES</span>
                  <span className="text-sm font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                    hari@siyantraaisolution.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/917984666368"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white p-4 rounded-xl border border-brand-border shadow-3xs hover:border-brand-accent hover:shadow-2xs transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-brand-muted uppercase">INSTANT CHAT</span>
                  <span className="text-sm font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                    Whatsapp
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Input Panel (Right Column) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-brand-border p-6 sm:p-10 shadow-lg">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-brand-accent font-bold uppercase tracking-wider">
                    SECURE INTAKE FORM
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-brand-text">
                    Submit Project Parameters
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-brand-text uppercase font-mono">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Sarah Jenkins"
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-card text-sm text-brand-text focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-brand-text uppercase font-mono">Work Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="sarah@corp.com"
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-card text-sm text-brand-text focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-brand-text uppercase font-mono">Company Name</label>
                    <input
                      required
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Corp Inc."
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-card text-sm text-brand-text focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-brand-text uppercase font-mono">Capability Required</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-xl border border-brand-border bg-brand-card text-xs text-brand-text focus:outline-none focus:border-brand-accent focus:bg-white transition-all"
                    >
                      <option value="web-development">Web Development</option>
                      <option value="ai-automation">AI & Automation</option>
                      <option value="crm-development">CRM Development</option>
                      <option value="saas-development">SaaS Platforms</option>
                      <option value="digital-marketing">Digital Marketing</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-brand-text uppercase font-mono">Project Requirements Brief</label>
                  <textarea
                    required
                    rows={4}
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Describe your current systems friction and timeline expectations..."
                    className="px-4 py-3 rounded-xl border border-brand-border bg-brand-card text-sm text-brand-text focus:outline-none focus:border-brand-accent focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit Trigger */}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-text text-white text-xs font-bold tracking-wide hover:bg-brand-accent transition-colors cursor-pointer flex items-center justify-center gap-2 self-start"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Transmit Parameters
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success Callback Panel */
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 shadow-2xs">
                  <Check className="w-6 h-6" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display text-xl font-extrabold text-brand-text">Briefing Received & Qualified</h3>
                  <p className="text-xs text-brand-muted max-w-md px-6">
                    Hello <span className="font-bold text-brand-text">{formData.name}</span>, thank you for contacting Siyantra. Your request has bypassed triage and has been logged directly inside our operations queue.
                  </p>
                </div>

                {/* Auto-scoring telemetries */}
                <div className="w-full bg-brand-card border border-brand-border rounded-2xl p-4 text-left font-mono text-[9px] text-brand-muted flex flex-col gap-1 mt-4">
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold mb-1">
                    <Bot className="w-3.5 h-3.5" />
                    <span>SIYANTRA AUTO-QUALIFICATION ENGINE</span>
                  </div>
                  <span>&gt; Mapping client domain: [{formData.email.split('@')[1]}] ... OK</span>
                  <span>&gt; Categorizing capability vertical: [{formData.projectType}] ... MATCH</span>
                  <span>&gt; Assessing target budget scale: [{formData.budget}] ... VERIFIED</span>
                  <span>&gt; Estimated SLA assignment: Brief call in under 2 hours</span>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 border border-brand-border rounded-lg text-xs font-medium text-brand-text hover:bg-brand-card transition-colors cursor-pointer"
                >
                  Edit Submission Parameters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
}
