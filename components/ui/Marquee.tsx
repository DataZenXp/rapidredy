
import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  background?: string;
  textColor?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  items, 
  direction = 'left', 
  speed = 25, 
  className = '',
  background = 'bg-toon-dark',
  textColor = 'text-white'
}) => {
  return (
    <div className={`relative flex overflow-hidden border-y-4 border-toon-dark py-4 md:py-6 ${background} ${className}`}>
      <motion.div
        className={`flex whitespace-nowrap font-heading font-black text-xl md:text-3xl ${textColor} uppercase tracking-tighter will-change-transform`}
        animate={{
          x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div className="flex gap-10 md:gap-16 px-5 items-center">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span>{item}</span>
              <span className="text-toon-yellow scale-125 md:scale-150 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] select-none">
                ★
              </span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex gap-10 md:gap-16 px-5 items-center">
          {items.map((item, i) => (
            <React.Fragment key={`clone-${i}`}>
              <span>{item}</span>
              <span className="text-toon-yellow scale-125 md:scale-150 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] select-none">
                ★
              </span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
