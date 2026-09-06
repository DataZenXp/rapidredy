
import React, { useState, useRef, useEffect } from 'react';
import Section from './ui/Section';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import { SectionId } from '../types';
import { Send, CheckCircle, ArrowRight, ChevronDown, AlertCircle, Loader2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  'Web Development',
  'Mobile App',
  'Digital Marketing',
  'UI/UX Design',
  'Other'
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: services[0],
    details: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // Simulate Network Request with Validation
    setTimeout(() => {
      // Basic Validation
      if (!formData.name.trim() || !formData.email.trim()) {
        setFormState('error');
        // Clear error after 3 seconds
        setTimeout(() => setFormState('idle'), 3000);
        return;
      }
      
      // Success Logic
      setFormState('success');
      setFormData({ name: '', company: '', email: '', service: services[0], details: '' });
      // Reset form state after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectService = (service: string) => {
    setFormData(prev => ({ ...prev, service }));
    setIsDropdownOpen(false);
  };

  return (
    <Section id={SectionId.CONTACT} className="mb-10 md:mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="bg-toon-dark text-white border-4 border-toon-dark shadow-hard-xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* CTA Side */}
            <div className="p-8 md:p-16 flex flex-col justify-center relative overflow-hidden bg-toon-purple border-b-4 lg:border-b-0 lg:border-r-4 border-toon-dark">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl uppercase mb-4 md:mb-6 leading-[0.9]">
                  Let's Build <br/>
                  <span className="text-toon-yellow">Something Cool</span>
                </h2>
                <p className="font-body text-lg md:text-xl font-medium mb-8 md:mb-10 text-white/90 max-w-md">
                  Ready to scale? Tell us about your project at RapidRedy, and let's see if we're a match.
                </p>

                <ul className="space-y-4 font-heading font-bold text-base md:text-lg mb-8 md:mb-12">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-toon-green fill-white shrink-0" /> Rapid Execution
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-toon-green fill-white shrink-0" /> Free Strategy Call
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-toon-green fill-white shrink-0" /> Clean Code Guaranteed
                  </li>
                </ul>

                <div className="flex items-center gap-2 opacity-50 font-mono text-xs md:text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Accepting new projects for {new Date().toLocaleString('default', { month: 'long' })}
                </div>
              </motion.div>
            </div>

            {/* Form Side */}
            <div className="p-6 md:p-16 bg-white text-toon-dark relative">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="font-heading font-bold text-sm uppercase tracking-wider block">Name <span className="text-red-500">*</span></label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className={`w-full p-3 md:p-4 bg-gray-50 border-4 border-gray-200 focus:border-toon-dark focus:shadow-hard outline-none transition-all font-body font-bold rounded-none focus:ring-4 focus:ring-toon-yellow/50 text-base ${formState === 'error' && !formData.name ? 'border-red-500 bg-red-50' : ''}`}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-heading font-bold text-sm uppercase tracking-wider block">Company</label>
                    <input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      type="text" 
                      className="w-full p-3 md:p-4 bg-gray-50 border-4 border-gray-200 focus:border-toon-dark focus:shadow-hard outline-none transition-all font-body font-bold rounded-none focus:ring-4 focus:ring-toon-yellow/50 text-base"
                      placeholder="Rapid Growth Inc."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-heading font-bold text-sm uppercase tracking-wider block">Email <span className="text-red-500">*</span></label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className={`w-full p-3 md:p-4 bg-gray-50 border-4 border-gray-200 focus:border-toon-dark focus:shadow-hard outline-none transition-all font-body font-bold rounded-none focus:ring-4 focus:ring-toon-yellow/50 text-base ${formState === 'error' && !formData.email ? 'border-red-500 bg-red-50' : ''}`}
                    placeholder="hello@rapidredy.com"
                  />
                </div>

                {/* Custom Select Component */}
                <div className="space-y-2" ref={dropdownRef}>
                  <label className="font-heading font-bold text-sm uppercase tracking-wider block">Service Needed</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full p-3 md:p-4 bg-gray-50 border-4 border-gray-200 focus:border-toon-dark focus:shadow-hard outline-none transition-all font-body font-bold rounded-none text-left flex justify-between items-center hover:bg-gray-100 text-base"
                    >
                      {formData.service}
                      <ChevronDown size={24} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} strokeWidth={3} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-white border-4 border-toon-dark shadow-hard z-50 max-h-60 overflow-y-auto"
                        >
                          {services.map((service) => (
                            <div
                              key={service}
                              onClick={() => handleSelectService(service)}
                              className={`p-3 md:p-4 font-bold cursor-pointer hover:bg-toon-yellow hover:text-toon-dark flex justify-between items-center transition-colors border-b border-gray-100 last:border-b-0 ${formData.service === service ? 'bg-toon-purple text-white hover:bg-toon-purple/90 hover:text-white' : 'text-toon-dark'}`}
                            >
                              {service}
                              {formData.service === service && <Check size={20} strokeWidth={3} />}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-heading font-bold text-sm uppercase tracking-wider block">Project Details</label>
                  <textarea 
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 md:p-4 bg-gray-50 border-4 border-gray-200 focus:border-toon-dark focus:shadow-hard outline-none transition-all font-body font-bold resize-none rounded-none focus:ring-4 focus:ring-toon-yellow/50 text-base"
                    placeholder="Tell us about your goals, timeline, and budget..."
                  ></textarea>
                </div>

                <div className="mt-6 md:mt-8 relative">
                  <AnimatePresence mode="wait">
                    {formState === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 rounded-r flex items-center gap-2 overflow-hidden"
                      >
                        <AlertCircle size={20} className="shrink-0" />
                        <span className="font-bold text-sm">Please fill in all required fields correctly.</span>
                      </motion.div>
                    )}
                    {formState === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        className="bg-green-50 border-l-4 border-green-500 text-green-700 p-3 rounded-r flex items-center gap-2 overflow-hidden"
                      >
                        <CheckCircle size={20} className="shrink-0" />
                        <span className="font-bold text-sm">Inquiry sent to RapidRedy! We'll be in touch.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button 
                    type="submit" 
                    size="lg" 
                    fullWidth 
                    className={`bg-toon-yellow border-toon-dark text-lg md:text-xl uppercase transition-all ${formState === 'loading' ? 'opacity-80 cursor-wait' : ''}`}
                    disabled={formState === 'loading' || formState === 'success'}
                  >
                    {formState === 'loading' ? (
                      <><Loader2 className="animate-spin" /> Sending...</>
                    ) : formState === 'success' ? (
                      <><CheckCircle /> Sent!</>
                    ) : (
                      <>Send Inquiry <ArrowRight className="ml-2" /></>
                    )}
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
