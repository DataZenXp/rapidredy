
import React, { useState, useEffect } from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { SectionId } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alex Rivera",
    company: "FinTech Global",
    role: "CTO",
    quote: "RapidRedy didn't just build an app; they built an entire ecosystem. Their attention to detail and obsession with performance is unmatched.",
    color: "bg-toon-blue"
  },
  {
    id: 2,
    name: "Sarah Chen",
    company: "EcoStore",
    role: "Founder",
    quote: "Our conversion rates skyrocketed after the redesign. The RapidRedy team understood our brand voice perfectly and translated it into a stunning digital experience.",
    color: "bg-toon-green"
  },
  {
    id: 3,
    name: "Marcus Johnson",
    company: "Neon Energy",
    role: "Marketing Director",
    quote: "Fast, efficient, and incredibly creative. They turned our vague ideas into a concrete, high-voltage marketing campaign that delivered real ROI.",
    color: "bg-toon-pink"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    company: "StartUp Inc.",
    role: "CEO",
    quote: "Working with RapidRedy felt like having an internal team. They were responsive, proactive, and truly cared about our success.",
    color: "bg-toon-yellow"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <Section id={SectionId.TESTIMONIALS} className="bg-white border-y-4 border-toon-dark overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <SectionTitle color="bg-toon-yellow" rotate={2}>Client Love</SectionTitle>

      <div className="max-w-4xl mx-auto relative px-2 md:px-12 h-auto min-h-[400px] flex items-center justify-center mb-12 md:mb-0">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="w-full max-w-2xl relative"
          >
            <div className={`relative bg-white border-4 border-toon-dark p-6 md:p-12 shadow-hard ${testimonials[currentIndex].color} bg-opacity-10 backdrop-blur-sm mx-4`}>
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-toon-dark text-white p-2 md:p-3 border-2 border-toon-dark shadow-hard-sm rotate-3">
                <Quote size={20} className="md:w-8 md:h-8" />
              </div>
              
              <blockquote className="font-heading font-bold text-lg md:text-3xl text-toon-dark leading-tight mb-6 md:mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center gap-3 md:gap-4 border-t-2 border-toon-dark/20 pt-4 md:pt-6">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-toon-dark ${testimonials[currentIndex].color} flex items-center justify-center font-heading font-black text-base md:text-lg shrink-0`}>
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-bold text-base md:text-lg leading-none">{testimonials[currentIndex].name}</div>
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-toon-dark/70 font-bold mt-1">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Adjusted for mobile overlap prevention */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-0 md:px-0">
          <button 
            onClick={() => paginate(-1)}
            className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-toon-dark shadow-hard flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-transform rounded-full z-10 -ml-2 md:ml-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 bg-white border-4 border-toon-dark shadow-hard flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-transform rounded-full z-10 -mr-2 md:mr-0"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-4 md:mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 border-toon-dark transition-all ${idx === currentIndex ? 'bg-toon-purple w-5 md:w-6' : 'bg-white hover:bg-gray-200'}`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
