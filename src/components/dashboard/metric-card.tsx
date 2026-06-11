'use client';

import React from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { StatBadge } from '@/components/shared/stat-badge';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  trendText?: string;
  glowColor?: 'mint' | 'cyan' | 'none';
}

export function MetricCard({ title, value, change, icon, trendText, glowColor = 'none' }: MetricCardProps) {
  return (
    <GlassCard glowColor={glowColor} interactive className="p-5 flex flex-col justify-between h-full">
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-medium text-slate-gray">{title}</p>
        <div className={cn(
          "p-2 rounded-xl bg-glass border border-glass-border shadow-inner",
          glowColor === 'mint' && "text-cyber-mint",
          glowColor === 'cyan' && "text-holo-cyan",
          glowColor === 'none' && "text-pure-white"
        )}>
          {icon}
        </div>
      </div>
      
      <div>
        <h3 className={cn(
          "text-2xl font-mono font-bold tracking-tight mb-2",
          glowColor === 'mint' && "text-glow-mint",
          glowColor === 'cyan' && "text-glow-cyan"
        )}>
          {value}
        </h3>
        
        <div className="flex items-center gap-2">
          <StatBadge value={change} />
          {trendText && <span className="text-xs text-slate-gray">{trendText}</span>}
        </div>
      </div>
    </GlassCard>
  );
}
