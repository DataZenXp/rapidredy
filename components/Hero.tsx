import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SectionId } from '../types';
import Button from './ui/Button';
import Section from './ui/Section';
import Marquee from './ui/Marquee';
import { ArrowRight, Globe, Smartphone, TrendingUp, Info } from 'lucide-react';

interface HeroProps {
  onViewServices?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewServices }) => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <div className="relative overflow-hidden bg-toon-bg">
      {/* Animated Grid Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-30 bg-halftone will-change-transform"
        style={{
          backgroundSize: '40px 40px'
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"]
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear"
        }}
      />

      {/* Grid Background Overlay (Noise) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>

      <Section id={SectionId.HOME} className="min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center mb-16 relative z-10">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-8 text-left">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.div variants={textVariants}>
                <div className="inline-flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-white border-2 border-toon-dark shadow-hard-sm mb-6 md:mb-8">
                  <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-toon-green rounded-full animate-pulse"></span>
                  <span className="font-heading font-bold text-xs md:text-sm tracking-widest uppercase">Open for Work</span>
                </div>
              </motion.div>
              
              <motion.h1 variants={textVariants} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-toon-dark leading-[0.95] md:leading-[0.9] tracking-tighter mb-6 md:mb-8 uppercase break-words">
                We Build <span className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-toon-blue to-toon-purple italic pr-2">Digital</span><br/>
                <span className="relative inline-block mr-2 md:mr-4">
                  <span className="relative z-10">Products</span>
                  <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-3 md:h-4 text-toon-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
                That <br/>
                <span className="bg-toon-dark text-white px-2 mt-2 inline-block">Print Money.</span>
              </motion.h1>
              
              <motion.p variants={textVariants} className="text-lg md:text-2xl font-body text-toon-dark/80 mb-8 md:mb-10 max-w-2xl leading-relaxed border-l-4 border-toon-blue pl-4 md:pl-6">
                I'm a creative developer fusing <b>Code</b>, <b>Design</b>, and <b>Strategy</b> into one powerhouse toolkit. I turn complex problems into simple, high-impact web experiences.
              </motion.p>
              
              <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" fullWidth={true} onClick={scrollToContact} className="text-lg uppercase font-black bg-toon-blue text-white border-toon-dark hover:bg-blue-600 sm:w-auto">
                  Let's Talk <ArrowRight size={20} />
                </Button>
                <Button 
                  size="lg" 
                  fullWidth={true}
                  variant="outline" 
                  onClick={onViewServices} 
                  className="text-lg uppercase font-bold sm:w-auto"
                >
                  My Skills <Info size={20} />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Services Stack */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-6 relative">
             <motion.div 
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="bg-white p-6 border-4 border-toon-dark shadow-hard rotate-3 hover:rotate-0 transition-transform duration-300 bg-halftone"
             >
                <div className="bg-toon-purple w-12 h-12 flex items-center justify-center border-2 border-toon-dark mb-4">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="font-heading font-bold text-2xl uppercase mb-2">Web Dev</h3>
                <p className="font-body text-sm font-medium">React, Next.js, High Performance</p>
             </motion.div>

             <motion.div 
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.7 }}
               className="bg-toon-yellow p-6 border-4 border-toon-dark shadow-hard -rotate-2 hover:rotate-0 transition-transform duration-300 z-10 bg-halftone"
             >
                <div className="bg-white w-12 h-12 flex items-center justify-center border-2 border-toon-dark mb-4">
                  <Smartphone className="text-toon-dark" size={24} />
                </div>
                <h3 className="font-heading font-bold text-2xl uppercase mb-2">Mobile Apps</h3>
                <p className="font-body text-sm font-medium">iOS, Android, Cross-platform</p>
             </motion.div>

             <motion.div 
               initial={{ x: 100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.9 }}
               className="bg-toon-pink p-6 border-4 border-toon-dark shadow-hard rotate-2 hover:rotate-0 transition-transform duration-300 bg-halftone"
             >
                <div className="bg-white w-12 h-12 flex items-center justify-center border-2 border-toon-dark mb-4">
                  <TrendingUp className="text-toon-dark" size={24} />
                </div>
                <h3 className="font-heading font-bold text-2xl uppercase mb-2">Marketing</h3>
                <p className="font-body text-sm font-medium">SEO, PPC, Growth Strategy</p>
             </motion.div>
          </div>
        </div>

      </Section>

      {/* Tech Stack Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t-4 border-toon-dark bg-toon-dark">
        <Marquee 
          items={['Web Development', 'Mobile Apps', 'SEO Optimization', 'Clean Code', 'UI/UX Design', 'E-Commerce']} 
          speed={40}
          className="border-none"
        />
      </div>
    </div>
  );
};

export default Hero;