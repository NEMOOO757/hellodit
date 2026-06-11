'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from 'lucide-react';
import { PageHeader } from '@/components/shared/page-header';
import { ShimmerSkeleton } from '@/components/shared/shimmer-skeleton';
import { useSettingsStore } from '@/store/settings-store';
import { useFinanceStore } from '@/store/finance-store';
import { useCurrencyFormat } from '@/hooks/use-currency-format';
import { t } from '@/lib/i18n';
import { motion } from 'motion/react';

// Dynamic imports for heavy components
// const Hero3D = dynamic(() => import('@/components/dashboard/hero-3d'), { 
//  ssr: false,
//  loading: () => <ShimmerSkeleton variant="card" className="h-[280px]" />
// });

const MetricCard = dynamic(() => import('@/components/dashboard/metric-card').then(mod => mod.MetricCard), {
  loading: () => <ShimmerSkeleton variant="card" className="h-[140px]" />
});

const CashflowChart = dynamic(() => import('@/components/dashboard/cashflow-chart').then(mod => mod.CashflowChart), {
  loading: () => <ShimmerSkeleton variant="chart" className="h-[400px]" />
});

const BudgetRing = dynamic(() => import('@/components/dashboard/budget-ring').then(mod => mod.BudgetRing), {
  loading: () => <ShimmerSkeleton variant="card" className="h-[400px]" />
});

const RecentTransactions = dynamic(() => import('@/components/dashboard/recent-transactions').then(mod => mod.RecentTransactions), {
  loading: () => <ShimmerSkeleton variant="card" className="h-[350px]" />
});

export default function DashboardPage() {
  const locale = useSettingsStore(state => state.locale);
  const { format } = useCurrencyFormat();
  
  const getTotalBalance = useFinanceStore(state => state.getTotalBalance);
  const getMonthlyIncome = useFinanceStore(state => state.getMonthlyIncome);
  const getMonthlyExpenses = useFinanceStore(state => state.getMonthlyExpenses);
  const getNetSavingsRate = useFinanceStore(state => state.getNetSavingsRate);
  const getMonthlyChange = useFinanceStore(state => state.getMonthlyChange);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="space-y-8">
      <PageHeader 
        title={t(locale, 'dashboard.title')}
        subtitle={t(locale, 'dashboard.subtitle')}
      />

      <Hero3D />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <MetricCard 
            title={t(locale, 'dashboard.totalBalance')}
            value={format(getTotalBalance())}
            change={5.2}
            icon={<Wallet className="w-5 h-5" />}
            trendText={t(locale, 'dashboard.vsLastMonth')}
            glowColor="cyan"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <MetricCard 
            title={t(locale, 'dashboard.monthlyIncome')}
            value={format(getMonthlyIncome())}
            change={getMonthlyChange('income')}
            icon={<TrendingUp className="w-5 h-5" />}
            trendText={t(locale, 'dashboard.vsLastMonth')}
            glowColor="mint"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <MetricCard 
            title={t(locale, 'dashboard.monthlyExpenses')}
            value={format(getMonthlyExpenses())}
            change={getMonthlyChange('expenses')}
            icon={<TrendingDown className="w-5 h-5" />}
            trendText={t(locale, 'dashboard.vsLastMonth')}
            glowColor="none"
          />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <MetricCard 
            title={t(locale, 'dashboard.savingsRate')}
            value={`${getNetSavingsRate().toFixed(1)}%`}
            change={2.1}
            icon={<PiggyBank className="w-5 h-5" />}
            trendText={t(locale, 'dashboard.vsLastMonth')}
            glowColor="mint"
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CashflowChart />
        </div>
        <div className="lg:col-span-1">
          <BudgetRing />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>
        <div className="lg:col-span-1">
          {/* We'll add goal tracking here later */}
          <div className="h-full bg-glass border border-glass-border rounded-2xl p-6 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 rounded-full bg-holo-cyan/10 flex items-center justify-center mb-4">
               <PiggyBank className="w-8 h-8 text-holo-cyan" />
             </div>
             <h3 className="text-lg font-bold text-pure-white mb-2">{t(locale, 'budget.title')}</h3>
             <p className="text-slate-gray text-sm">{t(locale, 'budget.comingSoon')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
