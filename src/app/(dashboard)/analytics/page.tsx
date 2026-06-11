"use client";
import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="pt-24 p-6 font-sans tracking-tight max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tighter">Performance Analytics</h1>
        <p className="text-sm text-slate-500 font-medium">Matriks data analitik dan grafik pertumbuhan ekuitas bersih.</p>
      </div>

      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-xl">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-6">Equity Growth Scale (Harian)</h3>
        {/* Histogram Simulator */}
        <div className="h-64 flex items-end gap-3 px-4 border-b border-slate-800 pb-2">
          <div className="w-full bg-indigo-500 h-[20%] rounded-t-sm relative group">
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-slate-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition">20%</span>
          </div>
          <div className="w-full bg-indigo-500 h-[45%] rounded-t-sm relative group">
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-slate-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition">45%</span>
          </div>
          <div className="w-full bg-indigo-500 h-[35%] rounded-t-sm relative group">
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-slate-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition">35%</span>
          </div>
          <div className="w-full bg-emerald-500 h-[75%] rounded-t-sm relative group">
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-slate-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition">75%</span>
          </div>
          <div className="w-full bg-emerald-500 h-[90%] rounded-t-sm relative group">
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-slate-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition">90%</span>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-2 px-1">
          <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI (TODAY)</span>
        </div>
      </div>
    </div>
  );
}