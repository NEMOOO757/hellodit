"use client";
import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="pt-20 p-6 bg-[#02040a] min-h-screen text-slate-300 font-mono tracking-tight max-w-7xl mx-auto space-y-6">
      <style dangerouslySetInnerHTML={{__html: `#global-header-greeting, header p, .header-greet { display: none !important; }`}} />
      <div className="border-b border-white/[0.03] pb-4">
        <h1 className="text-sm font-black text-white tracking-widest uppercase">HIGH-FREQUENCY ANALYTICS COMPILER</h1>
        <p className="text-[10px] text-slate-500 mt-0.5">Statistical packet distributions and historical ledger asset growth scales.</p>
      </div>

      <div className="bg-[#090d16] p-6 rounded-xl border border-white/[0.04] shadow-2xl space-y-6">
        <div className="flex justify-between items-center border-b border-white/[0.02] pb-4">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">EQUITY BATCH HISTOGRAM VECTOR MATRIX</h3>
          <span className="text-[9px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">[BUFFER_RATE: 0.02ms]</span>
        </div>

        {/* HIGH QUALITY ENGINE BAR TRADING CHART */}
        <div className="h-64 flex items-end gap-3 px-4 border-b border-white/[0.05] pb-2 relative">
          <div className="w-full bg-[#02040a] border border-white/[0.05] h-[20%] rounded-t hover:border-emerald-500/40 transition-all duration-300"></div>
          <div className="w-full bg-[#02040a] border border-white/[0.05] h-[55%] rounded-t hover:border-emerald-500/40 transition-all duration-300"></div>
          <div className="w-full bg-[#02040a] border border-white/[0.05] h-[35%] rounded-t hover:border-emerald-500/40 transition-all duration-300"></div>
          <div className="w-full bg-gradient-to-t from-indigo-500/10 to-indigo-500/30 border border-indigo-500/40 h-[70%] rounded-t relative"></div>
          <div className="w-full bg-gradient-to-t from-emerald-500/10 to-emerald-500/30 border border-emerald-400 h-[95%] rounded-t relative"></div>
          <div className="w-full bg-gradient-to-t from-emerald-500/10 to-emerald-500/30 border border-emerald-500/40 h-[85%] rounded-t relative"></div>
        </div>
        <div className="flex justify-between text-[9px] text-slate-600 font-bold px-2 tracking-widest">
          <span>PIPELINE_NODE_01</span><span>PIPELINE_NODE_02</span><span>PIPELINE_NODE_03</span><span>PIPELINE_NODE_04</span><span>PIPELINE_NODE_05</span><span>CURRENT_ACTIVE_BLOCK</span>
        </div>
      </div>
    </div>
  );
}