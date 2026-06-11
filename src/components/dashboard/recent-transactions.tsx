'use client';

import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/shared/glass-card';
import { useFinanceStore } from '@/store/finance-store';
import { useCurrencyFormat } from '@/hooks/use-currency-format';
import { t } from '@/lib/i18n';
import { useSettingsStore } from '@/store/settings-store';
import { formatDate } from '@/lib/formatters';
import { CATEGORIES } from '@/lib/constants';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

export function RecentTransactions() {
  const getRecentTransactions = useFinanceStore(state => state.getRecentTransactions);
  const recent = getRecentTransactions(5);
  const { format } = useCurrencyFormat();
  const locale = useSettingsStore(state => state.locale);

  return (
    <GlassCard className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-pure-white">{t(locale, 'dashboard.recentTransactions')}</h2>
        <Link 
          href="/transactions" 
          className="text-sm text-cyber-mint hover:text-holo-cyan transition-colors"
        >
          {t(locale, 'dashboard.viewAll')} &rarr;
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {recent.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-gray text-sm">
            {t(locale, 'transactions.noData')}
          </div>
        ) : (
          recent.map(txn => {
            const category = CATEGORIES.find(c => c.id === txn.category);
            const Icon = (Icons as any)[category?.icon || 'HelpCircle'] || Icons.HelpCircle;
            const isIncome = txn.type === 'income';

            return (
              <div 
                key={txn.id} 
                className="flex items-center justify-between p-3 rounded-xl hover:bg-glass/50 transition-colors border border-transparent hover:border-glass-border"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-inner"
                    style={{ backgroundColor: `${category?.color}20`, color: category?.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-pure-white text-sm">{txn.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-gray">
                        {locale === 'id' ? category?.labelId : category?.label}
                      </span>
                      <span className="text-slate-gray text-[10px]">•</span>
                      <span className="text-xs text-slate-gray">{formatDate(txn.date)}</span>
                    </div>
                  </div>
                </div>
                <div className={cn(
                  "font-mono font-medium text-sm text-right",
                  isIncome ? "text-cyber-mint" : "text-pure-white"
                )}>
                  {isIncome ? '+' : '-'}{format(txn.amount)}
                </div>
              </div>
            );
          })
        )}
      </div>
    </GlassCard>
  );
}
