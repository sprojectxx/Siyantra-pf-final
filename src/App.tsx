import { RouterProvider, useRouter } from './hooks/useRouter';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CursorGlow from './components/ui/CursorGlow';
import IntroWrapper from './components/animations/IntroWrapper';
import { lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';

// Lazy load subpages to reduce initial JS chunk size (Vite code splitting)
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const ServicesOverviewPage = lazy(() => import('./components/pages/ServicesOverviewPage'));
const WebDevPage = lazy(() => import('./components/pages/WebDevPage'));
const AIAutoPage = lazy(() => import('./components/pages/AIAutoPage'));
const CRMPage = lazy(() => import('./components/pages/CRMPage'));
const SaaSPage = lazy(() => import('./components/pages/SaaSPage'));
const MarketingPage = lazy(() => import('./components/pages/MarketingPage'));
const PortfolioPage = lazy(() => import('./components/pages/PortfolioPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));

import { AnimatePresence, motion } from 'motion/react';

function AppContent() {
  const { path } = useRouter();

  // Custom route router matching
  const renderPage = () => {
    if (path === '/') return <Home />;
    if (path === '/about') return <About />;
    if (path === '/services') return <ServicesOverviewPage />;
    if (path === '/services/web-development') return <WebDevPage />;
    if (path === '/services/ai-automation') return <AIAutoPage />;
    if (path === '/services/crm-development') return <CRMPage />;
    if (path === '/services/saas-development') return <SaaSPage />;
    if (path === '/services/digital-marketing') return <MarketingPage />;
    if (path === '/portfolio') return <PortfolioPage />;
    if (path === '/contact') return <ContactPage />;

    // Default 404 Fallback
    return (
      <div className="pt-40 pb-24 text-center min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-display text-4xl font-extrabold text-brand-text">404 - Not Found</h1>
        <p className="text-sm text-brand-muted mt-2">The requested view does not exist.</p>
        <a href="/" className="mt-4 text-xs font-bold text-brand-accent hover:underline">
          Go back home
        </a>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent selection:text-white flex flex-col justify-between">
      {/* Decorative premium cursorglow tracking layer */}
      <CursorGlow />

      {/* Floating navigation bar */}
      <Navbar />

      {/* Primary viewport content frame */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={path}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <Suspense fallback={
              <div className="pt-40 pb-24 text-center min-h-[40vh] flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
              </div>
            }>
              {renderPage()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Core corporate footer directory */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <IntroWrapper>
        <AppContent />
        <Analytics />
      </IntroWrapper>
    </RouterProvider>
  );
}
