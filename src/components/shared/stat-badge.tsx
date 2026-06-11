import React from 'react';
import { ArrowDownRight, ArrowUpRight, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatPercentage } from '@/lib/formatters';

interface StatBadgeProps {
  value: number;
  className?: string;
}

export function StatBadge({ value, className }: StatBadgeProps) {
  const isPositive = value > 0;
  const isNegative = value < 0;
  const isNeutral = value === 0;

  const getIcon = () => {
    if (isPositive) return <ArrowUpRight className="w-3 h-3 mr-1" />;
    if (isNegative) return <ArrowDownRight className="w-3 h-3 mr-1" />;
    return <Minus className="w-3 h-3 mr-1" />;
  };

  const getColorClass = () => {
    if (isPositive) return 'text-cyber-mint bg-cyber-mint/10 border-cyber-mint/20';
    if (isNegative) return 'text-neon-red bg-neon-red/10 border-neon-red/20';
    return 'text-slate-gray bg-slate-gray/10 border-slate-gray/20';
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border',
        getColorClass(),
        className
      )}
    >
      {getIcon()}
      {formatPercentage(value)}
    </span>
  );
}
