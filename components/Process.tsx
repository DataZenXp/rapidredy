
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    { id: 1, title: 'Discovery', icon: <Search size={24} />, desc: 'We dig deep into your goals, audience, and competitors.', color: 'bg-toon-blue' },
    { id: 2, title: 'Strategy', icon: <PenTool size={24} />, desc: 'We blueprint the architecture, design system, and user journey.', color: 'bg-toon-yellow' },
    { id: 3, title: 'Build', icon: <Code size={24} />, desc: 'We code with clean, scalable, and high-performance standards.', color: 'bg-toon-purple' },
    { id: 4, title: 'Launch', icon: <Rocket size={24} />, desc: 'We deploy, optimize, and hand over the keys to your new engine.', color: 'bg-toon-green' }
  ];

  return (
    <Section id="process" className="bg-toon-bg relative border-b-4 border-toon-dark">
      <SectionTitle color="bg-toon-dark" rotate={0}><span className="text-white">The RapidRedy Process</span></SectionTitle>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-2 bg-toon-dark z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className={`w-24 h-24 mx-auto ${step.color} border-4 border-toon-dark rounded-full flex items-center justify-center shadow-hard mb-6 relative group`}>
                <div className="bg-white p-3 rounded-full border-2 border-toon-dark group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-toon-dark text-white rounded-full flex items-center justify-center font-heading font-bold border-2 border-white">
                  {step.id}
                </div>
              </div>
              
              <div className="text-center bg-white p-6 border-4 border-toon-dark shadow-hard-sm min-h-[200px] flex flex-col">
                <h3 className="font-heading font-black text-xl uppercase mb-3">{step.title}</h3>
                <p className="font-body text-sm font-medium text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;
