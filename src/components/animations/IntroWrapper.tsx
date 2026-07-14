import { useState, ReactNode } from 'react';
import { AnimatePresence } from 'motion/react';
import BrandIntro from './BrandIntro';

export default function IntroWrapper({ children }: { children: ReactNode }) {
  const [isIntroComplete, setIsIntroComplete] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isIntroComplete && (
          <BrandIntro onComplete={() => setIsIntroComplete(true)} />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
