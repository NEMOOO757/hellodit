'use client';

import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

import { HTMLMotionProps } from 'motion/react';

interface GlowButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading = false, children, disabled, ...props }, ref) => {
    
    const baseClasses = 'relative inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-obsidian disabled:opacity-50 disabled:pointer-events-none rounded-lg overflow-hidden';
    
    const variants = {
      primary: 'bg-cyber-mint/10 text-cyber-mint border border-cyber-mint/50 hover:bg-cyber-mint/20 hover:shadow-glow-mint focus:ring-cyber-mint',
      secondary: 'bg-holo-cyan/10 text-holo-cyan border border-holo-cyan/50 hover:bg-holo-cyan/20 hover:shadow-glow-cyan focus:ring-holo-cyan',
      danger: 'bg-neon-red/10 text-neon-red border border-neon-red/50 hover:bg-neon-red/20 hover:shadow-glow-red focus:ring-neon-red',
      ghost: 'bg-transparent text-slate-gray hover:text-pure-white hover:bg-white/5 focus:ring-slate-gray border border-transparent',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-8 text-base',
      icon: 'h-10 w-10',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </motion.button>
    );
  }
);

GlowButton.displayName = 'GlowButton';
