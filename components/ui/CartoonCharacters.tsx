
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

// --- CSS Styles for Internal SVG Animations ---
const ElementStyles = () => (
  <style>{`
    @keyframes tech-float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-12px) rotate(2deg); }
    }
    @keyframes tech-pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.95; }
    }
    @keyframes tech-blink {
      0%, 90%, 100% { transform: scaleY(1); }
      95% { transform: scaleY(0.1); }
    }
    @keyframes tech-twitch {
      0%, 100% { transform: rotate(0deg); }
      92% { transform: rotate(5deg); }
      94% { transform: rotate(-5deg); }
      96% { transform: rotate(3deg); }
      98% { transform: rotate(-3deg); }
    }
    @keyframes tech-spin-slow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .anim-float { animation: tech-float 6s ease-in-out infinite; transform-origin: center; }
    .anim-pulse { animation: tech-pulse 3s ease-in-out infinite; transform-origin: center; }
    .anim-blink { animation: tech-blink 4s infinite; transform-origin: center; }
    .anim-twitch { animation: tech-twitch 5s ease-in-out infinite; transform-origin: bottom center; }
    .anim-spin { animation: tech-spin-slow 12s linear infinite; transform-origin: center; }
  `}</style>
);

// --- 1. THE CODER (Code Bracket Character - FRIENDLY) ---
const CodeBracket = () => (
  <svg viewBox="0 0 200 200" className="w-24 h-24 md:w-56 md:h-56 drop-shadow-hard opacity-100">
    <defs>
      <linearGradient id="coderBodyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
    </defs>
    <g className="anim-float">
      {/* Floating Bracket Hands - Left (<) */}
      <path 
        d="M25 85 L8 110 L25 135" 
        fill="none" 
        stroke="#0F172A" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="anim-twitch"
      />
      
      {/* Floating Bracket Hands - Right (>) */}
      <path 
        d="M175 85 L192 110 L175 135" 
        fill="none" 
        stroke="#0F172A" 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="anim-twitch" 
        style={{ animationDelay: '0.5s' }}
      />

      {/* Body Container */}
      <rect x="35" y="40" width="130" height="130" rx="24" fill="url(#coderBodyGrad)" stroke="#0F172A" strokeWidth="6" />
      
      {/* Body Highlight (Toon Shine) */}
      <path d="M45 50 L145 50 A 15 15 0 0 1 155 60 L 155 75 Q 100 80 45 75 Z" fill="white" fillOpacity="0.25" />

      {/* Screen Face */}
      <rect x="50" y="60" width="100" height="85" rx="16" fill="#172554" stroke="#0F172A" strokeWidth="4" />

      {/* Face Group */}
      <g className="anim-blink">
          {/* Friendly Eyes */}
          <circle cx="75" cy="95" r="9" fill="#FACC15" />
          <circle cx="125" cy="95" r="9" fill="#FACC15" />

          {/* Friendly Eyebrows (Arched) */}
          <path d="M65 85 Q 75 80 85 85" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M115 85 Q 125 80 135 85" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Digital Smile */}
          <path d="M75 125 Q 100 140 125 125" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 5" fill="none" />
      </g>
    </g>
  </svg>
);

// --- 2. THE STRATEGIST (Marketing Target Character - CLEANER STRUCTURE) ---
const MarketingTarget = () => (
  <svg viewBox="0 0 200 200" className="w-24 h-24 md:w-56 md:h-56 drop-shadow-hard opacity-100">
    <defs>
      <radialGradient id="targetGrad" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#BE185D" />
      </radialGradient>
      <linearGradient id="legGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
    </defs>
    
    <g className="anim-float" style={{ animationDelay: '1s' }}>
      
      {/* Legs (Behind Body) - Adjusted connection points */}
      <g className="anim-twitch" style={{ transformOrigin: '100px 150px' }}>
        <path d="M85 140 L85 180" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
        <path d="M115 140 L115 180" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
        {/* Shoes */}
        <path d="M75 180 L95 180" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
        <path d="M105 180 L125 180" stroke="#0F172A" strokeWidth="8" strokeLinecap="round" />
      </g>

      {/* Main Body - Outer Ring */}
      <circle cx="100" cy="100" r="70" fill="#FACC15" stroke="#0F172A" strokeWidth="6" />
      {/* Shine on Outer Ring */}
      <path d="M60 40 Q 100 20 140 40" fill="none" stroke="white" strokeWidth="4" strokeOpacity="0.5" strokeLinecap="round" />

      {/* Middle Ring */}
      <circle cx="100" cy="100" r="50" fill="white" stroke="#0F172A" strokeWidth="5" />

      {/* Center Bullseye (Face Background) */}
      <circle cx="100" cy="100" r="30" fill="url(#targetGrad)" stroke="#0F172A" strokeWidth="4" />

      {/* Face (On the Bullseye) */}
      <g className="anim-blink">
        <circle cx="92" cy="95" r="4" fill="white" />
        <circle cx="108" cy="95" r="4" fill="white" />
        {/* Smile */}
        <path d="M92 108 Q 100 112 108 108" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Floating Magnet Accessory */}
      <g className="anim-pulse" style={{ transformOrigin: '150px 50px' }}>
        <path d="M150 40 L160 50" stroke="#0F172A" strokeWidth="4" strokeLinecap="round"/>
        <path d="M140 30 C 130 20 170 20 160 30 L 160 45 L 140 45 Z" fill="#EF4444" stroke="#0F172A" strokeWidth="3" />
        <path d="M140 40 L160 40" stroke="#0F172A" strokeWidth="2" />
        {/* Sparks */}
        <path d="M130 25 L125 20" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
        <path d="M170 25 L175 20" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

// --- 3. THE BUILDER (App Cube Character - PERFECT ISOMETRIC ALIGNMENT) ---
const AppCube = () => (
  <svg viewBox="0 0 200 200" className="w-24 h-24 md:w-56 md:h-56 drop-shadow-hard opacity-100">
    <defs>
      {/* Gradients for Isometric Facets */}
      <linearGradient id="cubeTop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="cubeLeft" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
      <linearGradient id="cubeRight" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5B21B6" />
        <stop offset="100%" stopColor="#4C1D95" />
      </linearGradient>
    </defs>

    <g className="anim-float" style={{ animationDelay: '2s' }}>
      
      {/* Floating Gear (Behind) */}
      <g className="anim-spin" style={{ transformOrigin: '160px 50px', opacity: 0.8 }}>
        <circle cx="160" cy="50" r="15" fill="#FACC15" stroke="#0F172A" strokeWidth="3" />
        <path d="M160 30 L160 70 M140 50 L180 50" stroke="#0F172A" strokeWidth="3" />
      </g>

      {/* --- CUBE CONSTRUCTION --- */}
      {/* 1. Faces (Fills Only) - No Strokes to prevent overlaps */}
      <path d="M100 40 L160 70 L100 100 L40 70 Z" fill="url(#cubeTop)" stroke="none" />
      <path d="M160 70 L160 140 L100 170 L100 100 Z" fill="url(#cubeRight)" stroke="none" />
      <path d="M40 70 L100 100 L100 170 L40 140 Z" fill="url(#cubeLeft)" stroke="none" />

      {/* 2. Internal Seams (The "Y") - One continuous path for clean joints */}
      <path d="M40 70 L100 100 L160 70 M100 100 L100 170" fill="none" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

      {/* 3. Outer Outline - Drawn last for clean edges */}
      <path d="M100 40 L160 70 L160 140 L100 170 L40 140 L40 70 Z" fill="none" stroke="#0F172A" strokeWidth="6" strokeLinejoin="round" />
      
      {/* --- END CONSTRUCTION --- */}

      {/* Yellow Highlight (Hard Hat Style) - INSET to avoid outline clash */}
      <path d="M46 72 L100 45 L154 72" fill="none" stroke="#FACC15" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Face on Left Panel (Skewed for perspective) */}
      {/* Adjusted translate to (42, 105) to center face vertically */}
      <g transform="translate(42, 105)">
        <g className="anim-blink">
          <circle cx="15" cy="15" r="5" fill="white" />
          <circle cx="45" cy="15" r="5" fill="white" />
          <path d="M20 25 Q 30 30 40 25" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </g>

      {/* Floating Hands (Blocks) */}
      <rect x="15" y="90" width="18" height="18" rx="4" fill="#FACC15" stroke="#0F172A" strokeWidth="3" className="anim-float" style={{ animationDuration: '4s' }} />
      <rect x="165" y="100" width="18" height="18" rx="4" fill="#FACC15" stroke="#0F172A" strokeWidth="3" className="anim-float" style={{ animationDuration: '5s' }} />

    </g>
  </svg>
);

// --- CONFIG ---
const elements = [
  { 
    id: 'target', 
    Component: MarketingTarget, 
    position: 'bottom-right',
    triggerRange: [0.10, 0.25] // About section
  },
  { 
    id: 'code', 
    Component: CodeBracket, 
    position: 'bottom-left',
    triggerRange: [0.30, 0.50] // Services section
  },
  { 
    id: 'cube', 
    Component: AppCube, 
    position: 'side-right',
    // Adjusted range: Appears during Work/Testimonials, disappears BEFORE Contact (0.8+)
    triggerRange: [0.55, 0.75] 
  },
];

const CartoonCharacters: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [activeId, setActiveId] = useState<string | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Check which character should be active based on scroll position
    const active = elements.find(el => latest >= el.triggerRange[0] && latest <= el.triggerRange[1]);
    
    if (active) {
      if (activeId !== active.id) setActiveId(active.id);
    } else {
      if (activeId !== null) setActiveId(null);
    }
  });

  return (
    <>
      <ElementStyles />
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        <AnimatePresence>
          {elements.map((el) => (
            activeId === el.id && (
              <CharacterWrapper 
                key={el.id}
                config={el} 
              />
            )
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

const CharacterWrapper: React.FC<{ config: typeof elements[0] }> = ({ config }) => {
  const isBottomLeft = config.position === 'bottom-left';
  const isBottomRight = config.position === 'bottom-right';
  const isSideRight = config.position === 'side-right';

  let initial = {};
  let animate = {};
  let exit = {};
  let className = "";

  // Adjusted offsets for mobile to prevent content overlap
  if (isBottomLeft) {
    className = "absolute -bottom-2 left-[-10px] md:-bottom-10 md:left-10";
    initial = { y: '100%', rotate: -20 };
    animate = { y: '-10%', rotate: -5 }; // Peek up
    exit = { y: '100%', rotate: -20 };
  } else if (isBottomRight) {
    className = "absolute -bottom-2 right-[-10px] md:-bottom-10 md:right-10";
    initial = { y: '100%', rotate: 20 };
    animate = { y: '-10%', rotate: 5 }; // Peek up
    exit = { y: '100%', rotate: 20 };
  } else if (isSideRight) {
    className = "absolute top-1/2 right-[-10px] md:right-0 -translate-y-1/2";
    initial = { x: '100%', rotate: 45 };
    animate = { x: '-20%', rotate: 0 }; // Peek in from side
    exit = { x: '100%', rotate: 45 };
  }

  const CharacterComponent = config.Component;

  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{ 
        type: "spring", 
        stiffness: 120, 
        damping: 15,
        mass: 1
      }}
    >
      <CharacterComponent />
    </motion.div>
  );
};

export default CartoonCharacters;
