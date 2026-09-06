
import React, { useEffect } from 'react';
import Button from './ui/Button';
import { Project } from '../types';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
  onContact?: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack, onContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-toon-bg pt-28 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation */}
        <Button onClick={onBack} variant="outline" size="sm" className="mb-8 hover:bg-toon-dark hover:text-white border-2 border-toon-dark">
          <ArrowLeft size={16} /> Back
        </Button>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex gap-2 mb-4">
             {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white border-2 border-toon-dark font-mono text-xs font-bold uppercase shadow-hard-sm">
                  {tag}
                </span>
             ))}
          </div>
          <h1 className="font-heading font-black text-5xl md:text-8xl text-toon-dark uppercase tracking-tighter leading-[0.9] mb-6">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-toon-dark/70 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full aspect-video border-4 border-toon-dark shadow-hard-xl mb-16 overflow-hidden bg-gray-200"
        >
           <img 
             src={project.image} 
             alt={project.title} 
             className="w-full h-full object-cover"
           />
           <div className={`absolute bottom-0 left-0 w-full h-2 ${project.color}`}></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                <div className="bg-white p-8 border-4 border-toon-dark shadow-hard">
                    <h3 className="font-heading font-black text-3xl mb-6 uppercase">The Challenge</h3>
                    <p className="font-body text-lg leading-relaxed text-gray-700 mb-6">
                        {project.challenge}
                    </p>
                </div>

                <div className="bg-white p-8 border-4 border-toon-dark shadow-hard">
                    <h3 className="font-heading font-black text-3xl mb-6 uppercase">The Solution</h3>
                    <ul className="space-y-4 font-body text-lg">
                        {project.solution.map((item, index) => (
                           <li key={index} className="flex items-start gap-3">
                               <CheckCircle className="text-toon-green shrink-0 mt-1" />
                               <span>{item}</span>
                           </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-8">
                <div className={`p-8 border-4 border-toon-dark shadow-hard ${project.color}`}>
                    <h3 className="font-heading font-black text-2xl mb-6 uppercase text-white drop-shadow-md">Impact</h3>
                    <div className="space-y-6">
                        {project.impact.map((stat, index) => (
                            <div key={index} className="bg-white/90 p-4 border-2 border-toon-dark">
                                <div className="font-heading font-black text-4xl text-toon-dark">{stat.value}</div>
                                <div className="font-mono text-xs uppercase font-bold text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-toon-dark text-white p-8 border-4 border-toon-dark shadow-hard">
                    <h3 className="font-heading font-black text-xl mb-4 uppercase">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-gray-800 border border-gray-600 rounded font-mono text-xs text-toon-purple">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button fullWidth className="bg-white hover:bg-gray-100 border-2 border-toon-dark text-toon-dark">
                     Visit Live Site <ExternalLink size={18} />
                  </Button>
                </a>
            </div>

        </div>

        {/* Next Step */}
        <div className="mt-20 pt-12 border-t-4 border-toon-dark text-center">
            <h3 className="font-heading font-black text-4xl mb-6">Like what you see?</h3>
            <Button 
                onClick={() => onContact && onContact()} 
                size="lg" 
                className="bg-toon-yellow text-xl px-12"
            >
                Start Your Project
            </Button>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
