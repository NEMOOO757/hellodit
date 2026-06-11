'use client';

import React from 'react';
import { PageHeader } from '@/components/shared/page-header';
import { useSettingsStore } from '@/store/settings-store';
import { t } from '@/lib/i18n';

export default function TransactionsPage() {
  const locale = useSettingsStore(state => state.locale);

  return (
    <div className="space-y-8">
      <PageHeader 
        title={t(locale, 'transactions.title')}
        subtitle={t(locale, 'transactions.subtitle')}
      />

      <div className="bg-glass border border-glass-border rounded-2xl p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
        <h2 className="text-2xl font-bold text-pure-white mb-4">Phase 2: Transaction Ledger</h2>
        <p className="text-slate-gray max-w-md">
          This module is part of Phase 2. It will contain the high-performance paginated table, multi-column filtering, and CSV import/export pipeline.
        </p>
      </div>
    </div>
  );
}
