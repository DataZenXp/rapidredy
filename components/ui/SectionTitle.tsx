
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  color?: string;
  rotate?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, color = 'bg-toon-pink', rotate = -2 }) => {
  return (
    <div className="flex justify-center mb-10 md:mb-16">
      <motion.h2 
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1, rotate: rotate }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.5 }}
        className={`font-heading font-bold text-3xl md:text-6xl text-toon-dark border-4 border-toon-dark ${color} px-6 py-3 md:px-8 md:py-4 rounded-full shadow-hard text-center mx-2`}
      >
        {children}
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
