import { useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Footer() {
  const { navigate } = useRouter();
  const [logoError, setLogoError] = useState(false);

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  const columns = {
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Work', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
    Services: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'AI & Automation', href: '/services/ai-automation' },
      { label: 'CRM Development', href: '/services/crm-development' },
      { label: 'SaaS Development', href: '/services/saas-development' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
    ],
    Resources: [
      { label: 'Technology Stack', href: '/#tech-reel' },
      { label: 'Our Process', href: '/services' },
      { label: 'Client FAQ', href: '/#faq' },
    ],
    Contact: [
      { label: 'hari@siyantraaisolution.com', href: 'mailto:hari@siyantraaisolution.com' },
      { label: '+91 79846 66368', href: 'https://wa.me/917984666368' },
      { label: 'India / CA', href: '/contact' },
    ]
  };

  return (
    <footer className="bg-brand-card border-t border-brand-border py-16 md:py-24 relative overflow-hidden" id="footer">
      {/* Absolute decorative accent */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-16 md:mb-20">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-4 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleLinkClick('/')}
                className="flex items-center gap-2.5 group text-left cursor-pointer self-start"
                id="footer-logo-btn"
              >
            {!logoError ? (
              <div className="w-8 h-8 bg-neutral-950 rounded-lg flex items-center justify-center shadow-sm overflow-hidden p-0.5 border border-neutral-800">
                <img
                  src="/logo.png"
                  alt="SIYANTRA logo"
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-contain group-hover:rotate-12 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-90 shadow-sm">
                <div className="w-3.5 h-3.5 bg-white rounded-xs rotate-45" />
              </div>
            )}
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-brand-text text-[15px] tracking-tight leading-none">
                    SIYANTRA
                  </span>
                  <span className="font-mono text-[8px] text-brand-muted tracking-widest uppercase leading-none mt-1">
                    AI Solutions
                  </span>
                </div>
              </button>
              <p className="text-sm text-brand-muted max-w-xs leading-relaxed mt-2">
                We engineer premium, scalable digital products and intelligent automation frameworks that help modern businesses scale.
              </p>
            </div>

            {/* Micro Call-to-Action */}
            <button
              onClick={() => handleLinkClick('/contact')}
              className="mt-8 md:mt-12 flex items-center gap-1 text-sm font-semibold text-brand-accent-text hover:text-brand-hover hover:gap-2 transition-all cursor-pointer self-start"
              id="footer-action-link"
            >
              Let's build something extraordinary
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Directory Columns */}
          <div className="col-span-2 md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(columns).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-4">
                <span className="font-display text-xs font-bold tracking-widest text-brand-text uppercase">
                  {title}
                </span>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => {
                          if (link.href.startsWith('mailto:') || link.href.startsWith('tel:') || link.href.startsWith('https://')) {
                            window.open(link.href, '_blank');
                          } else if (link.href.startsWith('/#')) {
                            const elementId = link.href.substring(2);
                            navigate('/');
                            setTimeout(() => {
                              const el = document.getElementById(elementId);
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          } else {
                            handleLinkClick(link.href);
                          }
                        }}
                        className="text-sm text-brand-muted hover:text-brand-text transition-colors duration-200 cursor-pointer text-left hover:underline decoration-brand-accent decoration-2 underline-offset-4"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="border-t border-brand-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-600">
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
            <span>SIYANTRA AI SOLUTIONS</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
