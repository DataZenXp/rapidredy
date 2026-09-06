
import React from 'react';
import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-toon-dark text-white border-t-4 border-toon-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="font-heading font-black text-3xl tracking-tighter mb-6">RAPID<span className="text-toon-purple">REDY</span></h2>
            <p className="font-body text-gray-400 max-w-sm mb-6">
              A high-voltage digital product agency. Merging code, design, and strategy to build things that matter.
            </p>
            <div className="font-mono text-sm text-toon-yellow mb-6">
              Rapidredy.com
            </div>
            <div className="flex gap-4">
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Github size={20} />} />
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg uppercase mb-6 text-toon-yellow">Services</h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mobile Apps</li>
              <li className="hover:text-white cursor-pointer transition-colors">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer transition-colors">Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg uppercase mb-6 text-toon-green">Explore</h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">About RapidRedy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Case Studies</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-mono">
          <p>© {new Date().getFullYear()} Rapidredy.com. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:bg-white hover:text-toon-dark hover:border-white transition-all">
    {icon}
  </a>
);

export default Footer;
