import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-heading font-black border-4 border-toon-dark rounded-none transition-all flex items-center justify-center gap-2 relative";
  
  const variants = {
    primary: "bg-toon-yellow text-toon-dark hover:bg-toon-blue hover:text-white",
    secondary: "bg-toon-purple text-white hover:bg-toon-yellow hover:text-toon-dark",
    outline: "bg-white text-toon-dark hover:bg-toon-dark hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm shadow-hard-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px]",
    md: "px-6 py-4 text-base shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px]",
    lg: "px-10 py-5 text-xl shadow-hard-lg active:shadow-none active:translate-x-[6px] active:translate-y-[6px]",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;