import { useState } from 'react';
import { FAQS } from '../../constants/data';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-24 bg-white border-b border-brand-border relative" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-16 gap-3">
          <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold">
            COMMON QUESTIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-brand-muted leading-relaxed">
            Everything you need to know about our engineering process, intellectual property rights, SLAs, and cloud architectures.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="flex flex-col border-t border-brand-border">
          {FAQS.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="border-b border-brand-border py-5 transition-colors"
                id={`faq-item-${faq.id}`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center text-left py-2 font-display text-base md:text-lg font-bold text-brand-text hover:text-brand-accent transition-colors duration-200 cursor-pointer group"
                >
                  <span className="pr-4">{faq.question}</span>
                  {/* Subtle rotating state */}
                  <span className="relative flex items-center justify-center w-5 h-5">
                    <span className={`absolute w-3.5 h-[1.5px] bg-brand-text group-hover:bg-brand-accent transition-transform duration-300`} />
                    <span className={`absolute w-3.5 h-[1.5px] bg-brand-text group-hover:bg-brand-accent transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-90'}`} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-brand-muted leading-relaxed pt-2 pb-4 font-sans max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
