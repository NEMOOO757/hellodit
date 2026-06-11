"use client";
import React from 'react';

export default function BudgetsPage() {
  const goals = [
    { title: "SERVER STATE CLUSTER CLOUD (AWS/VERCEL)", target: 5000000, current: 1500000, color: "bg-indigo-500", desc: "Escalating server edge runtimes to secure multi-region latency deployment." },
    { title: "BORE UP ENGINE MIO KAWAHARA 59MM CYLINDER", target: 2000000, current: 1350000, color: "bg-amber-500", desc: "Allocating cash reserves for mechanical parts acquisition and engine head machining." },
    { title: "LIQUID EMERGENCY CAPITAL LEDGER BACKUP", target: 10000000, current: 4000000, color: "bg-emerald-500", desc: "Core defensive liquidity buffer network protection threshold." },
  ];

  return (
    <div className="pt-20 p-6 bg-[#02040a] min-h-screen text-slate-300 font-mono tracking-tight max-w-7xl mx-auto space-y-6">
      <style dangerouslySetInnerHTML={{__html: `#global-header-greeting, header p, .header-greet { display: none !important; }`}} />
      <div className="border-b border-white/[0.03] pb-4">
        <h1 className="text-sm font-black text-white tracking-widest uppercase">CAPITAL LIQUIDITY PIPELINE</h1>
        <p className="text-[10px] text-slate-500 mt-0.5">Asset destination thresholds and capital allocation control matrix.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {goals.map((g, i) => {
          const pct = (g.current / g.target) * 100;
          return (
            <div key={i} className="bg-[#090d16] p-6 rounded-xl border border-white/[0.04] shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-white text-xs tracking-wider border-b border-white/[0.02] pb-2">{g.title}</h3>
                <p className="text-[11px] font-sans font-medium text-slate-500 leading-relaxed">{g.desc}</p>
              </div>
              <div className="space-y-3">
                <div className="space-y-1 text-[10px]">
                  <div className="flex justify-between text-slate-400"><span>INGESTED CAPACITY:</span><span className="text-white font-bold">Rp {g.current.toLocaleString('id-ID')}</span></div>
                  <div className="flex justify-between text-slate-600"><span>TARGET LEVEL:</span><span>Rp {g.target.toLocaleString('id-ID')}</span></div>
                </div>
                <div className="w-full bg-[#02040a] h-1.5 rounded-full overflow-hidden border border-white/[0.05]">
                  <div className={`${g.color} h-full transition-all duration-500`} style={{ width: `${pct}%` }}></div>
                </div>
                <p className="text-right text-[9px] font-black text-slate-400 font-mono">{pct.toFixed(1)}% GATEWAY RECORDED</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}