import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface BrandIntroProps {
  onComplete: () => void;
}

export default function BrandIntro({ onComplete }: BrandIntroProps) {
  const [logoError, setLogoError] = useState(false);
  useEffect(() => {
    // Prevent body scrolling during the intro animation
    document.body.style.overflow = 'hidden';
    
    // Trigger completion after the internal fade-out finishes (3.1 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 3100);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-brand-bg flex flex-col items-center justify-center select-none"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { 
          duration: 0.9, 
          ease: 'easeInOut' 
        } 
      }}
    >
      {/* Centered vertical stack to ensure perfect alignment of all elements */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 text-center max-w-md px-4">
        {/* 
          FUTURE-PROOF LOGO CAPSULE
          Larger, centered logo-mark. You can swap this block with your custom logo file in the future.
        */}
        {!logoError ? (
          <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 bg-neutral-950 rounded-2xl flex items-center justify-center shadow-xl border border-neutral-800 p-2 overflow-hidden"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.8,
              times: [0, 0.25, 0.78, 1],
              ease: ['easeOut', 'linear', 'easeIn'],
              delay: 0.15
            }}
          >
            <img
              src="/logo.png"
              alt="SIYANTRA Logo"
              onError={() => setLogoError(true)}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ) : (
          <motion.div
            className="w-18 h-18 sm:w-22 sm:h-22 bg-brand-accent rounded-full flex items-center justify-center shadow-lg shadow-brand-accent/20"
            initial={{ scale: 0, rotate: -225, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 1, 0],
              rotate: [-225, 0, 0, 90],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.8,
              times: [0, 0.25, 0.78, 1],
              ease: ['easeOut', 'linear', 'easeIn'],
              delay: 0.15
            }}
          >
            <motion.div
              className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded-xs rotate-45"
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1, 0],
                rotate: [0, 45, 45, 135],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 2.5,
                times: [0, 0.25, 0.78, 1],
                ease: ['easeOut', 'linear', 'easeIn'],
                delay: 0.45
              }}
            />
          </motion.div>
        )}

        {/* Brand text container - scaled up and vertically centered */}
        <div className="overflow-hidden flex flex-col justify-center items-center">
          <motion.div
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-brand-text tracking-tight leading-none"
            initial={{ y: 50, opacity: 0 }}
            animate={{ 
              y: [50, 0, 0, -20],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.4,
              times: [0, 0.25, 0.78, 1],
              ease: ['easeOut', 'linear', 'easeIn'],
              delay: 0.55
            }}
          >
            SIYANTRA
          </motion.div>
          
          <motion.span
            className="font-mono text-xs sm:text-sm md:text-base text-brand-muted tracking-[0.4em] mr-[-0.4em] uppercase mt-3 sm:mt-4 leading-none font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: [20, 0, 0, -10],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 2.2,
              times: [0, 0.25, 0.78, 1],
              ease: ['easeOut', 'linear', 'easeIn'],
              delay: 0.75
            }}
          >
            AI SOLUTIONS
          </motion.span>
        </div>

        {/* Elegant tracking indicator line - perfectly centered below text stack */}
        <motion.div 
          className="w-24 sm:w-32 h-[1.5px] bg-gradient-to-r from-transparent via-brand-accent to-transparent mt-2"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 2.3,
            times: [0, 0.25, 0.78, 1],
            ease: ['easeOut', 'linear', 'easeIn'],
            delay: 0.65
          }}
        />
      </div>
    </motion.div>
  );
}
