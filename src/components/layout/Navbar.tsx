import { useState, useEffect } from 'react';
import { useRouter } from '../../hooks/useRouter';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const { path, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Websites', href: '/services/web-development' },
    { label: 'Agents', href: '/services/ai-automation' },
    { label: 'SaaS', href: '/services/saas-development' },
    { label: "CRM's", href: '/services/crm-development' },
    { label: "Marketing", href: '/services/digital-marketing' },
  ];

  const handleLinkClick = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/' && path === '/') return true;
    if (href !== '/' && path === href) return true;
    // For services sub-pages, keep only exact match active or keep the main active if it matches
    return false;
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-4 right-4 lg:top-6 lg:left-1/2 lg:-translate-x-1/2 lg:right-auto z-50 w-[calc(100%-2rem)] lg:w-max max-w-[95%] transition-all duration-300"
      >
        <div className="backdrop-blur-xl bg-white/45 border border-black/[0.06] sm:border-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_12px_40px_-12px_rgba(0,0,0,0.08)] rounded-full p-2 flex items-center justify-between lg:justify-start gap-4 lg:gap-1.5 xl:gap-4 select-none">

          {/* Left: Logo Capsule */}
          <button
            onClick={() => handleLinkClick('/')}
            className="bg-brand-text text-white border border-transparent px-4 py-2 sm:px-5 sm:py-2.5 rounded-full flex items-center gap-2.5 group cursor-pointer text-left transition-all duration-300 shadow-sm"
            id="logo-btn"
          >
            {!logoError ? (
              <img
                src="/logo.webp"
                alt="SIYANTRA logo"
                onError={() => setLogoError(true)}
                className="w-6 h-6 object-contain group-hover:rotate-12 transition-transform duration-300"
              />
            ) : (
              <div className="w-6 h-6 bg-brand-accent rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-90 shadow-sm">
                <div className="w-2.5 h-2.5 bg-white rounded-xs rotate-45" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-white text-xs sm:text-[13px] tracking-tight leading-none">
                SIYANTRA
              </span>
              <span className="font-mono text-[7px] sm:text-[8px] text-white/60 tracking-widest uppercase leading-none mt-1">
                AI Solutions
              </span>
            </div>
          </button>

          {/* Middle: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative font-display text-[11px] xl:text-xs font-bold tracking-wider px-3.5 py-2.5 transition-all cursor-pointer rounded-full ${isActive(link.href) ? 'text-brand-text' : 'text-brand-muted hover:text-brand-text'
                  }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-0 bg-white/90 shadow-[0_2px_12px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] border border-black/[0.04] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right: Contact Us CTA */}
          <button
            onClick={() => handleLinkClick('/contact')}
            className="hidden lg:flex items-center gap-1.5 bg-brand-text text-white hover:bg-brand-accent rounded-full px-5 py-2.5 text-xs font-extrabold tracking-wide transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-[0_4px_12px_rgba(255,122,0,0.2)]"
            id="navbar-cta-btn"
          >
            contact us
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center mr-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-full bg-brand-text/5 border border-brand-text/10 text-brand-text hover:bg-brand-text/10 transition-colors cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-neutral-950/98 backdrop-blur-2xl flex flex-col justify-between pt-32 pb-12 px-6 lg:hidden"
            id="mobile-fullscreen-menu"
          >
            {/* Subtle background glow */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-4 mt-4 overflow-y-auto max-h-[60vh] pr-2">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left py-2 px-4 rounded-xl hover:bg-white/5 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <span className={`font-display text-2xl font-bold tracking-tight ${isActive(link.href) ? 'text-brand-accent' : 'text-neutral-200 group-hover:text-white'
                    }`}>
                    {link.label}
                  </span>
                  <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 border-t border-white/10 pt-6"
            >
              <button
                onClick={() => handleLinkClick('/contact')}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-brand-accent hover:bg-brand-hover text-white text-sm font-bold tracking-wide transition-all duration-300 shadow-lg shadow-brand-accent/20"
                id="mobile-menu-cta"
              >
                contact us
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-2 uppercase tracking-widest">
                <span>SIYANTRA AI SOLUTIONS</span>
                <span>© 2026</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
