'use client';

import React, { useEffect, useState } from 'react';
import { GlassCard } from '@/components/shared/glass-card';
import { useBudgetStore } from '@/store/budget-store';
import { useCurrencyFormat } from '@/hooks/use-currency-format';
import { t } from '@/lib/i18n';
import { useSettingsStore } from '@/store/settings-store';
import { cn } from '@/lib/utils';

export function BudgetRing() {
  const getBudgetUtilizations = useBudgetStore(state => state.getBudgetUtilizations);
  const locale = useSettingsStore(state => state.locale);
  const { format } = useCurrencyFormat();
  
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const utils = getBudgetUtilizations();
    const tb = utils.reduce((sum, u) => sum + u.budget.limit, 0);
    const ts = utils.reduce((sum, u) => sum + u.budget.spent, 0);
    setTotalBudget(tb);
    setTotalSpent(ts);
    setPercentage(tb > 0 ? Math.min(100, (ts / tb) * 100) : 0);
    
    // Animate stroke on mount
    setTimeout(() => setMounted(true), 100);
  }, [getBudgetUtilizations]);

  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = mounted ? circumference - (percentage / 100) * circumference : circumference;

  const isDanger = percentage >= 90;
  const isWarning = percentage >= 75 && !isDanger;
  
  const strokeColor = isDanger ? '#FF4A4A' : isWarning ? '#FFB800' : '#00F5A0';
  const glowShadow = isDanger ? 'drop-shadow(0 0 8px rgba(255, 74, 74, 0.5))' : isWarning ? 'drop-shadow(0 0 8px rgba(255, 184, 0, 0.5))' : 'drop-shadow(0 0 8px rgba(0, 245, 160, 0.5))';

  return (
    <GlassCard className="p-6 h-full flex flex-col justify-center items-center relative">
      <h2 className="text-lg font-bold text-pure-white absolute top-6 left-6">{t(locale, 'dashboard.budgetOverview')}</h2>
      
      <div className="relative w-64 h-64 mt-8 flex items-center justify-center">
        {/* SVG Ring */}
        <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 200 200">
          {/* Background Ring */}
          <circle 
            cx="100" cy="100" r={radius} 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth="16" 
            fill="transparent" 
          />
          {/* Foreground Progress Ring */}
          <circle 
            cx="100" cy="100" r={radius} 
            stroke={strokeColor} 
            strokeWidth="16" 
            fill="transparent" 
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            style={{ filter: glowShadow }}
          />
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-medium text-slate-gray mb-1">{t(locale, 'budget.spent')}</p>
          <h3 className={cn(
            "text-3xl font-mono font-bold",
            isDanger ? "text-neon-red text-glow-red" : "text-pure-white"
          )}>
            {percentage.toFixed(0)}%
          </h3>
          <p className="text-xs text-slate-gray mt-1">
            {format(totalBudget - totalSpent)} {t(locale, 'budget.remaining').toLowerCase()}
          </p>
        </div>
      </div>
      
      <div className="w-full mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="bg-glass border border-glass-border rounded-lg p-3 text-center">
          <p className="text-slate-gray text-xs mb-1">Limit</p>
          <p className="font-mono font-medium">{format(totalBudget)}</p>
        </div>
        <div className="bg-glass border border-glass-border rounded-lg p-3 text-center">
          <p className="text-slate-gray text-xs mb-1">Spent</p>
          <p className="font-mono font-medium">{format(totalSpent)}</p>
        </div>
      </div>
    </GlassCard>
  );
}
