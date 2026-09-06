
import React from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-5 md:px-8 relative overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
