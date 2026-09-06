
import React, { useState } from 'react';
import { Menu, X, Rocket, User, Monitor, Briefcase, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId } from '../types';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: SectionId.HOME, label: 'Start', icon: <Rocket size={20} /> },
    { id: SectionId.ABOUT, label: 'About', icon: <User size={20} /> },
    { id: SectionId.SERVICES, label: 'Services', icon: <Monitor size={20} /> },
    { id: SectionId.WORK, label: 'Work', icon: <Briefcase size={20} /> },
    { id: SectionId.CONTACT, label: 'Hire Me', icon: <MessageSquare size={20} /> },
  ];

  const scrollToSection = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="bg-white/95 backdrop-blur-md border-2 border-toon-dark shadow-hard p-2 pointer-events-auto hidden md:flex gap-2">
          <div className="flex items-center px-4 border-r-2 border-toon-dark mr-2">
            <span className="font-heading font-black text-xl tracking-tighter">RAPID<span className="text-toon-purple">REDY</span></span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-5 py-2 font-heading font-bold text-toon-dark hover:bg-toon-dark hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden pointer-events-auto w-full flex justify-between items-center px-4">
           <div className="bg-white px-4 py-2 border-2 border-toon-dark shadow-hard">
            <span className="font-heading font-black text-xl tracking-tighter">RAPID<span className="text-toon-purple">REDY</span></span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-toon-yellow p-3 border-2 border-toon-dark shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-toon-dark flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full bg-white border-4 border-white hover:border-toon-yellow text-left p-6 shadow-none text-2xl font-heading font-black text-toon-dark flex items-center justify-between group active:scale-95 transition-transform"
                >
                  {item.label}
                  <span className="group-hover:text-toon-purple transition-colors">{item.icon}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
