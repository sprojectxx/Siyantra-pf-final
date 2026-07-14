import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Set up motion values for spring-based smooth tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 150, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Offset by half of glow width (300px)
      mouseY.set(e.clientY - 150);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      id="cursor-glow"
      className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-30 rounded-full blur-[80px]"
      style={{
        x: glowX,
        y: glowY,
        background: 'radial-gradient(circle, rgba(255,122,0,0.12) 0%, rgba(255,122,0,0.03) 50%, rgba(255,122,0,0) 100%)',
      }}
    />
  );
}
