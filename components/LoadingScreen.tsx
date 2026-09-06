
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // 1. Loading Simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Smooth increment
        const increment = Math.random() < 0.2 ? 5 : 1.5;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  // 2. Completion Logic
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 800);
      }, 500);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-toon-dark flex flex-col items-center justify-center overflow-hidden"
      initial={{ y: 0 }}
      animate={isComplete ? { y: '-100%' } : { y: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1], // "EaseInQuart" shutter effect
        delay: 0.1 
      }}
    >
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Animated Logo */}
        <div className="mb-12 relative">
           <motion.h1 
             className="font-heading font-black text-6xl md:text-8xl tracking-tighter text-white relative z-10 select-none"
             initial={{ scale: 0.95, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
             RAPID<span className="text-toon-purple inline-block">REDY</span>
           </motion.h1>
           
           {/* Subtle Glitch Shadow Effect */}
           <motion.h1 
             className="font-heading font-black text-6xl md:text-8xl tracking-tighter text-toon-blue absolute top-0 left-0 -z-10 opacity-30 select-none mix-blend-screen"
             animate={{ 
                 x: [-1, 2, -1, 0],
                 opacity: [0.3, 0.1, 0.3]
             }}
             transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 0.5, ease: "easeInOut" }}
           >
             RAPIDREDY
           </motion.h1>
           
           <motion.h1 
             className="font-heading font-black text-6xl md:text-8xl tracking-tighter text-toon-yellow absolute top-0 left-0 -z-10 opacity-30 select-none mix-blend-screen"
             animate={{ 
                 x: [1, -2, 1, 0],
                 opacity: [0.3, 0.1, 0.3]
             }}
             transition={{ repeat: Infinity, duration: 3, repeatDelay: 0.2, ease: "easeInOut" }}
           >
             RAPIDREDY
           </motion.h1>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-64 md:w-80">
          <div className="flex justify-between text-[10px] font-mono font-bold text-gray-500 mb-2 tracking-widest uppercase">
            <span>System Status</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden border border-gray-700 shadow-hard-sm">
            <motion.div 
              className="h-full bg-gradient-to-r from-toon-yellow to-orange-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]"
              style={{ width: `${progress}%` }}
              layoutId="progressBar"
            />
          </div>
          
          <div className="mt-4 h-4 overflow-hidden text-center">
             <motion.div
               key={Math.floor(progress / 25)} // Change text fewer times for smoother feel
               initial={{ y: 10, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: -10, opacity: 0 }}
               className="font-mono text-[10px] text-toon-purple font-bold tracking-widest uppercase"
             >
               {progress < 25 ? "Initializing Core..." :
                progress < 50 ? "Loading Modules..." :
                progress < 75 ? "Connecting Neural Net..." :
                progress < 99 ? "Optimizing Assets..." :
                "Ready for Launch"}
             </motion.div>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 w-full h-3 bg-gray-900 border-t border-gray-700 z-10 flex items-center justify-center">
          <motion.div 
            className="h-full bg-toon-purple/50" 
            initial={{ width: 0 }}
            animate={{ width: isComplete ? '100%' : `${progress}%` }}
            transition={{ ease: "linear" }}
          />
      </div>

    </motion.div>
  );
};

export default LoadingScreen;
