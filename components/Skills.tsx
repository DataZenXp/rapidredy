
import React from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import { SectionId, ServiceItem } from '../types';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Megaphone, Layout, ShoppingCart, Search } from 'lucide-react';

interface SkillsProps {
  onServiceClick?: () => void;
}

// NOTE: This component serves as the "Services" section
const Services: React.FC<SkillsProps> = ({ onServiceClick }) => {
  const services: ServiceItem[] = [
    { 
      title: 'Web Development', 
      description: 'Custom React & Next.js websites built for speed, SEO, and conversion. No templates, just pure performance.',
      icon: <Code2 size={32} />, 
      tags: ['React', 'Next.js', 'Typescript'],
      color: 'bg-toon-blue' 
    },
    { 
      title: 'App Development', 
      description: 'Native-feel mobile experiences for iOS and Android. Seamless performance and intuitive UX.',
      icon: <Smartphone size={32} />, 
      tags: ['React Native', 'iOS', 'Android'],
      color: 'bg-toon-purple' 
    },
    { 
      title: 'Digital Marketing', 
      description: 'Data-driven campaigns that put your brand in front of the right people at the right time.',
      icon: <Megaphone size={32} />, 
      tags: ['PPC', 'Social Ads', 'Content'],
      color: 'bg-toon-pink' 
    },
    { 
      title: 'UI/UX Design', 
      description: 'Bold interfaces that guide users to action. We combine aesthetics with behavioral psychology.',
      icon: <Layout size={32} />, 
      tags: ['Figma', 'Prototyping', 'User Testing'],
      color: 'bg-toon-yellow' 
    },
    { 
      title: 'E-Commerce', 
      description: 'Scalable online stores that handle high volume. From Shopify to custom headless solutions.',
      icon: <ShoppingCart size={32} />, 
      tags: ['Shopify', 'Stripe', 'Headless'],
      color: 'bg-toon-green' 
    },
    { 
      title: 'SEO Strategy', 
      description: 'Dominate search results. We optimize technical structure and content to rank you #1.',
      icon: <Search size={32} />, 
      tags: ['Audit', 'Backlinks', 'Keywords'],
      color: 'bg-toon-orange' 
    },
  ];

  return (
    <Section id={SectionId.SERVICES} className="bg-toon-dark relative">
      <SectionTitle color="bg-white" rotate={0}>Our Services</SectionTitle>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            onClick={onServiceClick}
            className="group relative h-full cursor-pointer"
          >
            {/* Shadow Block */}
            <div className={`absolute inset-0 bg-white border-4 border-white translate-x-3 translate-y-3`}></div>
            
            {/* Content Block */}
            <div className={`relative h-full bg-toon-dark border-4 border-white p-6 flex flex-col transition-transform`}>
              <div className={`w-16 h-16 ${service.color} border-2 border-white flex items-center justify-center mb-6 shadow-hard-sm group-hover:rotate-12 transition-transform`}>
                {service.icon}
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-white mb-4 uppercase tracking-wide">{service.title}</h3>
              <p className="font-body text-gray-300 mb-6 flex-grow leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono font-bold uppercase px-2 py-1 bg-white text-toon-dark">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
