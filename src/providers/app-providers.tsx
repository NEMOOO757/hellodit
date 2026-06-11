'use client';

import React, { useEffect, useState } from 'react';
import { useSettingsStore } from '@/store/settings-store';
import { useFinanceStore } from '@/store/finance-store';
import { useBudgetStore } from '@/store/budget-store';
import { AnimatePresence } from 'motion/react';

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const theme = useSettingsStore(state => state.theme);
  const initFinance = useFinanceStore(state => state.initializeWithMockData);
  const initBudget = useBudgetStore(state => state.initializeWithMockData);

  useEffect(() => {
    setMounted(true);
    // Initialize mock data on first load
    initFinance();
    initBudget();
  }, [initFinance, initBudget]);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove('light', 'dark');
      if (theme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.add('dark');
      }
    }
  }, [theme, mounted]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-obsidian" />;
  }

  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
}
