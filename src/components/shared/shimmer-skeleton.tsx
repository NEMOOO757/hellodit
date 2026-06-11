import React from 'react';
import { cn } from '@/lib/utils';

interface ShimmerSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circle' | 'card' | 'chart';
  width?: string | number;
  height?: string | number;
}

export function ShimmerSkeleton({ variant = 'text', width, height, className, ...props }: ShimmerSkeletonProps) {
  const baseClasses = 'relative overflow-hidden bg-slate-800/50 rounded-md';
  
  const variantClasses = {
    text: 'h-4 w-full',
    circle: 'rounded-full',
    card: 'h-32 w-full rounded-2xl',
    chart: 'h-64 w-full rounded-2xl',
  };

  const styles = {
    width: width,
    height: height,
  };

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      style={styles}
      {...props}
    >
      {/* Shimmer element */}
      <div 
        className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </div>
  );
}
