
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import { SectionId, Project } from '../types';
import { featuredProjects } from '../data/projects';
import { ArrowUpRight, BarChart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectsProps {
  onViewAll?: () => void;
  onProjectClick?: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAll, onProjectClick }) => {
  const projects = featuredProjects;

  return (
    <Section id={SectionId.WORK} className="bg-toon-bg">
      <SectionTitle color="bg-toon-purple" rotate={-2}>Selected Work</SectionTitle>

      <div className="flex flex-col gap-12 md:gap-24 max-w-5xl mx-auto mb-16 md:mb-20">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-12 items-center`}
          >
            {/* Image Side */}
            <div 
              className="w-full md:w-1/2 relative group cursor-pointer" 
              onClick={() => onProjectClick && onProjectClick(project)}
            >
              <div className={`absolute inset-0 border-4 border-toon-dark ${project.color} translate-x-2 translate-y-2 md:translate-x-3 md:translate-y-3 z-0 transition-transform group-hover:translate-x-4 group-hover:translate-y-4`}></div>
              <div className="relative z-10 border-4 border-toon-dark overflow-hidden aspect-video md:aspect-[4/3] bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  decoding="async"
                  // @ts-ignore
                  fetchPriority="low"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-toon-dark/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 md:px-3 border-2 border-toon-dark bg-white font-mono text-[10px] md:text-xs font-bold uppercase shadow-hard-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="font-heading font-black text-3xl md:text-5xl mb-3 md:mb-4 text-toon-dark leading-none">{project.title}</h3>
              <p className="font-body text-base md:text-lg font-medium text-toon-dark/80 mb-6 leading-relaxed border-l-4 border-gray-300 pl-4">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  className="bg-toon-yellow w-full sm:w-auto" 
                  onClick={() => onProjectClick && onProjectClick(project)}
                >
                  View Case Study <ArrowUpRight size={20} />
                </Button>
                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-200 border-2 border-toon-dark rounded-xl font-bold text-sm">
                  <BarChart size={16} /> ROI Focused
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* View All Projects CTA */}
      <div className="flex justify-center pb-6 md:pb-10">
        <Button 
          size="lg" 
          fullWidth={true}
          onClick={onViewAll}
          className="bg-white text-toon-dark border-4 border-toon-dark rounded-2xl px-8 py-4 md:px-16 md:py-6 text-lg md:text-xl font-black uppercase tracking-wider shadow-[8px_8px_0px_0px_#0F172A] hover:shadow-[12px_12px_0px_0px_#8B5CF6] hover:-translate-y-1 transition-all duration-300 group w-full md:w-auto mx-4"
        >
          View All Projects
          <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />
        </Button>
      </div>

    </Section>
  );
};

export default Projects;
