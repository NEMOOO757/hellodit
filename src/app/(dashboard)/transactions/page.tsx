"use client";
import React, { useState } from 'react';

export default function TransactionsPage() {
  const [transactions] = useState([
    { id: 1, date: '2026-06-12', time: '14:32', desc: 'Sewa Hosting Vercel', category: 'INFRASTRUCTURE', type: 'outcome', amount: 150000 },
    { id: 2, date: '2026-06-11', time: '09:15', desc: 'Project Jasa Website', category: 'INCOME_PROJ', type: 'income', amount: 2500000 },
    { id: 3, date: '2026-06-10', time: '19:40', desc: 'Suku Cadang Mio 59mm', category: 'HOBBY_ENG', type: 'outcome', amount: 450000 },
  ]);

  return (
    <div className="p-6 mt-12 font-sans tracking-tight">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tighter">Ledger Order History</h1>
          <p className="text-sm text-slate-500 font-medium">Real-time financial transaction records.</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold border border-slate-700 hover:bg-slate-800 transition shadow-sm">
          + EXECUTE TRANSACTION
        </button>
      </div>

      {/* Tampilan Tabel Ala Trading Orderbook */}
      <div className="bg-slate-950 rounded-xl shadow-xl overflow-hidden border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <th className="p-4">Timestamp</th>
              <th className="p-4">Asset / Description</th>
              <th className="p-4">Tag Block</th>
              <th className="p-4 text-right">Volume (Amount)</th>
            </tr>
          </thead>
          <tbody className="text-sm font-mono text-slate-300">
            {transactions.map((t) => (
              <tr key={t.id} className="border-b border-slate-900/60 hover:bg-slate-900/40 transition">
                <td className="p-4 text-slate-500 text-xs">
                  {t.date} <span className="text-slate-600 font-normal">{t.time}</span>
                </td>
                <td className="p-4 font-sans font-bold text-slate-200 tracking-tight">{t.desc}</td>
                <td className="p-4">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700">
                    {t.category}
                  </span>
                </td>
                <td className={`p-4 text-right font-bold text-base ${t.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {t.type === 'income' ? '▲' : '▼'} Rp {t.amount.toLocaleString('id-ID')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}