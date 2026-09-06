
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { SectionId } from '../types';
import { Cpu, Target, Eye, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { label: 'Projects Shipped', value: '50+', color: 'bg-toon-purple text-white' },
    { label: 'Years Exp.', value: '5+', color: 'bg-toon-green text-toon-dark' },
    { label: 'Happy Clients', value: '40+', color: 'bg-toon-yellow text-toon-dark' },
  ];

  return (
    <Section id={SectionId.ABOUT} className="relative bg-white border-y-4 border-toon-dark">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Cpu size={200} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-toon-pink px-4 py-1 border-2 border-toon-dark font-heading font-bold uppercase mb-6 shadow-hard-sm">
            About Me
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase leading-none mb-6 md:mb-8">
            Code, Design &<br/>
            <span className="text-stroke-2 text-transparent bg-clip-text bg-toon-dark">Everything In Between</span>
          </h2>
          
          <div className="prose prose-lg font-body text-toon-dark font-medium leading-relaxed mb-8 text-base md:text-lg">
            <p>
              Hi, I'm the mind behind RapidRedy. I'm not just a coder; I'm a product builder. I bridge the gap between "making it look good" and "making it work perfectly."
            </p>
            <p>
              In a world of generic templates, I build <strong>custom solutions</strong>. Whether it's a high-conversion website, a seamless mobile app, or a marketing strategy that cuts through the noise, I execute with precision and personality.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            {stats.map((stat, i) => (
              <div key={i} className={`flex-1 min-w-[100px] p-3 md:p-4 border-4 border-toon-dark ${stat.color} shadow-hard text-center`}>
                <div className="font-heading font-black text-2xl md:text-3xl">{stat.value}</div>
                <div className="font-mono text-[10px] md:text-xs uppercase font-bold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard 
            icon={<Target size={32} />}
            title="Strategic"
            desc="I don't just code; I solve business problems."
            color="bg-toon-blue"
            delay={0.1}
          />
          <FeatureCard 
            icon={<Zap size={32} />}
            title="Fast"
            desc="Obsessed with 100/100 Lighthouse scores."
            color="bg-toon-yellow"
            delay={0.2}
          />
          <FeatureCard 
            icon={<Eye size={32} />}
            title="Visual"
            desc="Design that pops and UX that flows naturally."
            color="bg-toon-pink"
            delay={0.3}
          />
          <FeatureCard 
            icon={<Cpu size={32} />}
            title="Modern"
            desc="Using the latest tech stacks (React, Next, Node)."
            color="bg-toon-purple"
            textColor="text-white"
            delay={0.4}
          />
        </div>
      </div>
    </Section>
  );
};

const FeatureCard = ({ icon, title, desc, color, textColor = "text-toon-dark", delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5, boxShadow: "8px 8px 0px 0px #0F172A" }}
    className={`${color} ${textColor} border-4 border-toon-dark p-5 md:p-6 shadow-hard h-full flex flex-col justify-between`}
  >
    <div className="bg-white/20 w-fit p-3 rounded-lg border-2 border-toon-dark mb-4 backdrop-blur-sm">
      {icon}
    </div>
    <div>
      <h4 className="font-heading font-black text-lg md:text-xl uppercase mb-2">{title}</h4>
      <p className="font-body text-sm font-semibold opacity-90 leading-tight">{desc}</p>
    </div>
  </motion.div>
);

export default About;
