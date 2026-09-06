
import React, { useEffect } from 'react';
import Button from './ui/Button';
import { ArrowLeft, Check, Code2, Smartphone, Megaphone, Layout, Zap, ArrowRight, Server, Globe, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesPageProps {
  onBack: () => void;
  onContact: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onBack, onContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'web',
      title: 'Web Development',
      icon: <Code2 size={32} />,
      color: 'bg-toon-blue',
      description: 'High-performance websites built on modern stacks. We don\'t do templates; we engineer digital experiences that load instantly and convert visitors.',
      deliverables: [
        'Custom React / Next.js Architecture',
        'Headless CMS Integration (Sanity, Contentful)',
        'Performance Optimization (Core Web Vitals)',
        'SEO-Ready Structure & Schema',
        'Interactive 3D Elements (Three.js)',
        'WCAG 2.1 Accessibility Compliance'
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Apps',
      icon: <Smartphone size={32} />,
      color: 'bg-toon-yellow',
      description: 'Native-feel iOS and Android apps built with React Native. Smooth, responsive, and scalable applications that users actually want to keep on their home screen.',
      deliverables: [
        'Cross-Platform Development (iOS & Android)',
        'Push Notification Systems',
        'App Store & Play Store Submission',
        'Offline Functionality & Sync',
        'Biometric Authentication',
        'Real-time Data Sockets'
      ]
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      icon: <Megaphone size={32} />,
      color: 'bg-toon-pink',
      description: 'Data-driven campaigns that convert. We stop the scroll and get your brand noticed with high-voltage creative and surgical targeting.',
      deliverables: [
        'PPC Campaign Management (Google & Meta)',
        'Social Media Strategy & Content',
        'Conversion Rate Optimization (CRO)',
        'Analytics Dashboards & Reporting',
        'Email Marketing Automation',
        'A/B Testing Frameworks'
      ]
    },
    {
      id: 'design',
      title: 'Product Design',
      icon: <Layout size={32} />,
      color: 'bg-toon-purple',
      description: 'User-centric interfaces that look good and work better. We combine brutalist aesthetics with behavioral psychology to guide users to action.',
      deliverables: [
        'User Research & User Personas',
        'Wireframing & Interactive Prototyping',
        'High-Fidelity UI Design System',
        'Motion Design & Micro-interactions',
        'Usability Testing & Iteration',
        'Developer Handoff Documentation'
      ]
    }
  ];

  const models = [
    {
      title: 'Project Based',
      subtitle: 'One-off Builds',
      action: 'Get a Quote',
      icon: <Globe size={24} />,
      features: ['Defined Scope', 'Clear Timeline', 'Milestone Payments', 'Post-Launch Support'],
      color: 'bg-white'
    },
    {
      title: 'Retainer',
      subtitle: 'Ongoing Growth',
      action: "Let's Partner",
      icon: <Zap size={24} className="text-toon-yellow" />,
      features: ['Dedicated Team', 'Priority Support', 'Unlimited Requests', 'Strategic Consulting'],
      color: 'bg-toon-dark',
      textColor: 'text-white',
      highlight: true
    },
    {
      title: 'Consulting',
      subtitle: 'Expert Advice',
      action: 'Book a Call',
      icon: <Server size={24} />,
      features: ['Code Audits', 'Tech Strategy', 'Emergency Fixes', 'Team Augmentation'],
      color: 'bg-white'
    }
  ];

  return (
    <div className="min-h-screen bg-toon-bg pt-28 pb-20 px-4 md:px-8 font-body text-toon-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Navigation */}
        <div className="mb-12">
            <Button onClick={onBack} variant="outline" size="sm" className="mb-6 hover:bg-toon-dark hover:text-white border-2 border-toon-dark">
                <ArrowLeft size={16} /> Back to RapidRedy
            </Button>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-6"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-toon-blue to-toon-purple">Expertise</span>
            </motion.h1>
            <p className="text-xl max-w-2xl font-medium text-gray-600">
              We provide a full spectrum of digital services to help ambitious brands scale. From code to creative, we handle it all.
            </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
            {services.map((service, index) => (
                <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-4 border-toon-dark p-8 shadow-hard hover:shadow-hard-xl transition-all hover:-translate-y-1 group relative overflow-hidden"
                >
                    {/* Decorative Background Icon */}
                    <div className={`absolute -right-8 -bottom-8 opacity-5 text-toon-dark transform rotate-[-15deg] group-hover:scale-110 transition-transform duration-500`}>
                       {React.cloneElement(service.icon as React.ReactElement<any>, { size: 200 })}
                    </div>

                    <div className="flex items-start justify-between mb-8 relative z-10">
                        <div className={`w-16 h-16 ${service.color} border-2 border-toon-dark flex items-center justify-center shadow-hard-sm group-hover:rotate-12 transition-transform`}>
                            {service.icon}
                        </div>
                        <span className="font-mono text-sm font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-1 rounded">
                          0{index + 1}
                        </span>
                    </div>
                    
                    <h3 className="font-heading font-black text-3xl mb-4 uppercase relative z-10">{service.title}</h3>
                    <p className="font-body text-lg text-gray-700 mb-8 leading-relaxed relative z-10 border-l-4 border-gray-100 pl-4">
                        {service.description}
                    </p>

                    <div className="bg-gray-50 border-2 border-gray-200 p-6 relative z-10">
                        <h4 className="font-heading font-bold text-xs uppercase mb-4 text-gray-500 tracking-wider">What's Included</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.deliverables.map((item, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm font-bold text-toon-dark">
                                    <Check size={16} className="mt-0.5 text-toon-green shrink-0 stroke-[3px]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Engagement Models */}
        <div className="mb-24">
            <div className="text-center mb-16">
                <h2 className="font-heading font-black text-4xl md:text-6xl uppercase mb-4">Engagement Models</h2>
                <p className="text-lg text-gray-600 font-medium">Flexible ways to work with us, tailored to your growth stage.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {models.map((model, idx) => (
                   <motion.div 
                      key={model.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`${model.color} ${model.textColor || 'text-toon-dark'} p-8 border-4 border-toon-dark text-center relative flex flex-col h-full ${model.highlight ? 'shadow-hard-xl md:-translate-y-4 z-10' : 'shadow-hard'}`}
                   >
                      {model.highlight && (
                        <div className="absolute top-0 left-0 w-full bg-toon-yellow text-toon-dark font-mono text-xs font-black py-2 uppercase tracking-widest border-b-4 border-toon-dark">
                          Most Popular
                        </div>
                      )}
                      
                      <div className={`mt-2 mb-4 flex justify-center ${model.highlight ? 'pt-8' : ''}`}>
                        <div className="p-3 bg-toon-bg border-2 border-toon-dark rounded-full">
                           {model.icon}
                        </div>
                      </div>
                      
                      <h3 className="font-heading font-black text-2xl uppercase mb-1">{model.title}</h3>
                      <p className={`text-sm mb-6 font-bold uppercase tracking-wide ${model.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{model.subtitle}</p>
                      
                      {/* Removed Price Display */}
                      <div className="mb-8">
                         <div className={`text-xl font-bold italic opacity-80 ${model.highlight ? 'text-toon-yellow' : 'text-toon-blue'}`}>
                           Let's discuss your needs
                         </div>
                      </div>
                      
                      <ul className="text-left space-y-3 mb-8 text-sm font-bold flex-grow">
                          {model.features.map((feat, i) => (
                            <li key={i} className="flex gap-3 items-center">
                              <Check size={16} className={model.highlight ? 'text-toon-green' : 'text-toon-blue'} /> 
                              <span className={model.highlight ? 'text-gray-300' : 'text-gray-600'}>{feat}</span>
                            </li>
                          ))}
                      </ul>
                      
                      <Button 
                        fullWidth 
                        onClick={onContact} 
                        className={model.highlight ? 'bg-toon-yellow border-white text-toon-dark hover:bg-white' : ''}
                        variant={model.highlight ? 'primary' : 'outline'}
                      >
                         {model.action} <MessageSquare size={16} className="ml-2" />
                      </Button>
                   </motion.div>
                ))}
            </div>
        </div>

        {/* Final CTA */}
        <div className="bg-toon-purple border-4 border-toon-dark p-12 md:p-24 text-center relative overflow-hidden shadow-hard-xl">
             <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
             {/* Decorative Circles */}
             <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-4 border-white/20"></div>
             <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border-4 border-toon-yellow/20"></div>

             <div className="relative z-10">
                 <h2 className="font-heading font-black text-4xl md:text-7xl text-white uppercase mb-8 leading-none drop-shadow-md">
                     Ready to dominate?
                 </h2>
                 <Button size="lg" onClick={onContact} className="bg-toon-yellow text-xl px-12 py-6 border-toon-dark shadow-hard hover:shadow-hard-xl hover:-translate-y-1 transition-all">
                     Let's Talk <ArrowRight size={24} />
                 </Button>
             </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
