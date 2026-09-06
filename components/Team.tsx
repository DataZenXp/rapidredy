
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  const team = [
    {
      name: 'Alex Mercer',
      role: 'Founder & Strategy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      color: 'bg-toon-blue'
    },
    {
      name: 'Sarah Jenkins',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      color: 'bg-toon-purple'
    },
    {
      name: 'Marcus Chen',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      color: 'bg-toon-yellow'
    },
    {
      name: 'Elena Silva',
      role: 'Marketing Lead',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      color: 'bg-toon-pink'
    }
  ];

  return (
    <Section id="team" className="bg-white relative">
      <SectionTitle color="bg-toon-orange" rotate={2}>The Squad</SectionTitle>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Card Background Shadow */}
            <div className={`absolute inset-0 ${member.color} border-4 border-toon-dark translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform`}></div>
            
            {/* Card Content */}
            <div className="relative bg-white border-4 border-toon-dark p-4 flex flex-col items-center text-center h-full">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-toon-dark mb-4 grayscale group-hover:grayscale-0 transition-all bg-gray-200">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              
              <h3 className="font-heading font-black text-xl uppercase mb-1">{member.name}</h3>
              <p className="font-mono text-xs font-bold text-toon-dark/60 uppercase tracking-widest mb-4">{member.role}</p>
              
              <div className="flex gap-3 mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="p-2 hover:bg-gray-100 rounded-full border-2 border-transparent hover:border-toon-dark transition-all">
                  <Twitter size={16} />
                </a>
                <a href="#" className="p-2 hover:bg-gray-100 rounded-full border-2 border-transparent hover:border-toon-dark transition-all">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="p-2 hover:bg-gray-100 rounded-full border-2 border-transparent hover:border-toon-dark transition-all">
                  <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Team;
