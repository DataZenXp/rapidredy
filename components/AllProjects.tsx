
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { projectsData, projectCategories } from '../data/projects';

interface AllProjectsProps {
  onBack: () => void;
  onProjectClick?: (project: Project) => void;
}

const categories = projectCategories;

const AllProjects: React.FC<AllProjectsProps> = ({ onBack, onProjectClick }) => {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-toon-bg pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <Button onClick={onBack} variant="outline" size="sm" className="mb-6 hover:bg-toon-dark hover:text-white border-2 border-toon-dark">
              <ArrowLeft size={16} /> Back to RapidRedy
            </Button>
            <h1 className="font-heading font-black text-5xl md:text-7xl text-toon-dark uppercase tracking-tighter leading-none">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-toon-purple to-toon-blue">Projects</span>
            </h1>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 font-heading font-bold text-sm uppercase border-2 border-toon-dark rounded-lg transition-all ${
                  filter === cat 
                    ? 'bg-toon-dark text-white shadow-hard-sm translate-x-[2px] translate-y-[2px]' 
                    : 'bg-white text-toon-dark hover:bg-gray-100 hover:-translate-y-1 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={project.id}
              className="group relative cursor-pointer"
              onClick={() => onProjectClick && onProjectClick(project)}
            >
              {/* Card */}
              <div className="bg-white border-4 border-toon-dark p-0 shadow-hard hover:shadow-hard-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden border-b-4 border-toon-dark relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 font-mono text-xs font-bold uppercase bg-white border-2 border-toon-dark shadow-hard-sm`}>
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-black text-2xl mb-2 uppercase leading-none">{project.title}</h3>
                    <div className={`h-1 w-12 ${project.color} mb-4`}></div>
                  </div>
                  
                  <button className="w-full flex items-center justify-between font-heading font-bold text-sm uppercase bg-gray-5 p-3 border-2 border-transparent hover:border-toon-dark hover:bg-white transition-all group-hover:shadow-sm">
                    View Case Study <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <div className="mt-24 p-12 bg-toon-dark text-white text-center border-4 border-toon-dark shadow-hard-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="relative z-10">
                <h3 className="font-heading font-black text-3xl md:text-5xl mb-6 uppercase">Ready to start yours?</h3>
                <Button onClick={onBack} className="bg-toon-yellow border-white text-toon-dark text-xl px-10 py-4">
                    Get in Touch
                </Button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AllProjects;
