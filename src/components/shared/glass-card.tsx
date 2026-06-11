'use client';

import React, { useRef } from 'react';
import { useMousePosition } from '@/hooks/use-mouse-position';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: 'mint' | 'cyan' | 'red' | 'none';
  interactive?: boolean;
}

export function GlassCard({ children, className, glowColor = 'none', interactive = false, ...props }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { elementX, elementY } = useMousePosition(ref);

  const glowColors = {
    mint: 'rgba(0, 245, 160, 0.15)',
    cyan: 'rgba(0, 210, 255, 0.15)',
    red: 'rgba(255, 74, 74, 0.15)',
    none: 'transparent',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden glass-card transition-all duration-300',
        interactive && 'cursor-pointer hover:-translate-y-1 hover:shadow-lg',
        glowColor === 'mint' && 'hover:shadow-glow-mint',
        glowColor === 'cyan' && 'hover:shadow-glow-cyan',
        glowColor === 'red' && 'hover:shadow-glow-red',
        className
      )}
      {...props}
    >
      {/* Radial gradient that follows the mouse */}
      {interactive && glowColor !== 'none' && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle 200px at ${elementX * 100}% ${elementY * 100}%, ${glowColors[glowColor]}, transparent 100%)`,
          }}
        />
      )}
      
      {/* Content wrapper to ensure it stays above the glow background */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
