"use client";
import React from 'react';

export default function BudgetsPage() {
  const categories = [
    { name: "Server Infrastructure", allocated: 1000000, used: 750000, color: "bg-indigo-600" },
    { name: "Motorcycle Engineering Hobby", allocated: 1000000, used: 450000, color: "bg-amber-500" },
    { name: "Daily Consumables", allocated: 500000, used: 0, color: "bg-emerald-500" },
  ];

  return (
    <div className="pt-24 p-6 font-sans tracking-tight max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tighter">Budget Allocation</h1>
        <p className="text-sm text-slate-500 font-medium">Batas alokasi penggunaan modal berdasarkan koridor pos biaya.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((c, i) => {
          const persen = (c.used / c.allocated) * 100;
          return (
            <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-base tracking-tight">{c.name}</h3>
              <div className="flex justify-between text-xs font-mono text-slate-500">
                <span>Used: Rp {c.used.toLocaleString('id-ID')}</span>
                <span>Limit: Rp {c.allocated.toLocaleString('id-ID')}</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className={`${c.color} h-full`} style={{ width: `${persen}%` }}></div>
              </div>
              <p className="text-right text-xs font-bold text-slate-700 font-mono">{persen.toFixed(0)}% Utilized</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}