"use client";
import React from 'react';

export default function DashboardPage() {
  const jam = new Date().getHours();
  let ucapan = "Selamat Malam";
  if (jam < 11) ucapan = "Selamat Pagi";
  else if (jam < 15) ucapan = "Selamat Siang";
  else if (jam < 19) ucapan = "Selamat Sore";

  return (
    <div className="p-6 mt-12 font-sans tracking-tight">
      {/* Box Welcome Banner */}
      <div className="p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl shadow-xl border border-indigo-500/20 mb-6">
        <h1 className="text-3xl font-extrabold mb-2 tracking-tighter">{ucapan}, Selamat Datang di HelloDit 👋</h1>
        <p className="text-indigo-300 text-sm font-medium">Sistem Pencatatan Keuangan Digital & Ledger Transaksi</p>
      </div>

      {/* DIAGRAM TRADING MINI (MARKET OVERVIEW) */}
      <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Market & Cashflow Monitor</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        
        {/* Card Pemasukan ala Bullish Trading */}
        <div className="bg-slate-900 border border-emerald-500/30 p-5 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Total Income (Bullish)</p>
              <h3 className="text-2xl font-bold text-white font-mono mt-1 tracking-tighter">+Rp 2.500.000</h3>
            </div>
            <span className="text-xs font-bold bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20 font-mono">▲ 12.5%</span>
          </div>
          {/* Simulasi Mini Chart Line Hijau */}
          <div className="h-8 mt-4 flex items-end gap-1 opacity-80">
            <div className="w-full h-2 bg-emerald-500/20 rounded-sm"></div>
            <div className="w-full h-4 bg-emerald-500/30 rounded-sm"></div>
            <div className="w-full h-3 bg-emerald-500/40 rounded-sm"></div>
            <div className="w-full h-6 bg-emerald-500/60 rounded-sm"></div>
            <div className="w-full h-8 bg-emerald-500 rounded-sm"></div>
          </div>
        </div>

        {/* Card Pengeluaran ala Bearish Trading */}
        <div className="bg-slate-900 border border-rose-500/30 p-5 rounded-xl shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Total Outcome (Bearish)</p>
              <h3 className="text-2xl font-bold text-white font-mono mt-1 tracking-tighter">-Rp 600.000</h3>
            </div>
            <span className="text-xs font-bold bg-rose-500/10 text-rose-400 px-2 py-1 rounded border border-rose-500/20 font-mono">▼ 4.2%</span>
          </div>
          {/* Simulasi Mini Chart Line Merah */}
          <div className="h-8 mt-4 flex items-end gap-1 opacity-80">
            <div className="w-full h-7 bg-rose-500 rounded-sm"></div>
            <div className="w-full h-6 bg-rose-500/70 rounded-sm"></div>
            <div className="w-full h-4 bg-rose-500/40 rounded-sm"></div>
            <div className="w-full h-3 bg-rose-500/30 rounded-sm"></div>
            <div className="w-full h-2 bg-rose-500/20 rounded-sm"></div>
          </div>
        </div>

        {/* Card Net Profit (Sisa Saldo) */}
        <div className="bg-slate-900 border border-slate-700 p-5 rounded-xl shadow-sm">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Net Balance</p>
          <h3 className="text-2xl font-bold text-blue-400 font-mono mt-1 tracking-tighter">Rp 1.900.000</h3>
          <p className="text-xs text-slate-500 mt-2 font-medium">Spread condition: Stable</p>
        </div>

      </div>
    </div>
  );
}