'use client';

import React, { useMemo } from 'react';
import {
  ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { GlassCard } from '@/components/shared/glass-card';
import { useFinanceStore } from '@/store/finance-store';
import { useCurrencyFormat } from '@/hooks/use-currency-format';
import { t } from '@/lib/i18n';
import { useSettingsStore } from '@/store/settings-store';

export function CashflowChart() {
  const getCashflowData = useFinanceStore(state => state.getCashflowData);
  const { format } = useCurrencyFormat();
  const locale = useSettingsStore(state => state.locale);
  
  const data = useMemo(() => getCashflowData(6), [getCashflowData]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-obsidian/90 backdrop-blur-xl border border-glass-border rounded-lg p-3 shadow-glow-cyan">
          <p className="font-medium text-pure-white mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-slate-gray capitalize">{entry.name}:</span>
              <span className="font-mono font-medium text-pure-white">{format(entry.value)}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <GlassCard className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold text-pure-white">{t(locale, 'dashboard.cashflowTitle')}</h2>
          <p className="text-sm text-slate-gray">Income vs Expenses (6 Months)</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyber-mint shadow-glow-mint" />
            <span className="text-slate-gray">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-holo-cyan/50" />
            <span className="text-slate-gray">Expenses</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D2FF" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#00D2FF" stopOpacity={0.2} />
              </linearGradient>
              <filter id="glow">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00F5A0" />
              </filter>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              tickFormatter={(value) => format(value).replace(/Rp|\$/g, '')}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
            
            <Bar 
              dataKey="expense" 
              name="Expenses" 
              fill="url(#barGradient)" 
              radius={[4, 4, 0, 0]} 
              barSize={32}
            />
            <Line 
              type="monotone" 
              dataKey="income" 
              name="Income" 
              stroke="#00F5A0" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#00F5A0', strokeWidth: 2, stroke: '#0B0F19' }} 
              activeDot={{ r: 6, fill: '#00F5A0', strokeWidth: 0, style: { filter: 'url(#glow)' } }}
              style={{ filter: 'url(#glow)' }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}
