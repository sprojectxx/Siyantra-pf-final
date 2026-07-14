import Hero from '../sections/Hero';
import TechReel from '../sections/TechReel';
import ServicesOverview from '../sections/ServicesOverview';
import WhySiyantra from '../sections/WhySiyantra';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <TechReel />
      <ServicesOverview />
      <WhySiyantra />
      <FAQ />
      <CTA />
    </motion.div>
  );
}
