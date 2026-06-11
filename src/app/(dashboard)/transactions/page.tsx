"use client";
import React, { useState } from 'react';

const autoCorrectDictionary: Record<string, string> = {
  "mio": "HOBBY_ENGINE", "mot": "HOBBY_ENGINE", "eng": "HOBBY_ENGINE", "bore": "HOBBY_ENGINE",
  "svr": "INFRASTRUCTURE", "host": "INFRASTRUCTURE", "vrc": "INFRASTRUCTURE", "dom": "INFRASTRUCTURE",
  "pro": "INCOME_PROJECT", "csh": "INCOME_PROJECT", "jasa": "INCOME_PROJECT"
};

export default function TransactionsPage() {
  const [query, setQuery] = useState('');
  const [corrected, setCorrected] = useState('');

  const rawData = [
    { id: "TX-9082", date: '2026-06-12', time: '14:32:01', desc: 'Sewa Hosting Vercel Edge Pro Node Tier-3', cat: 'INFRASTRUCTURE', type: 'out', amt: 150000 },
    { id: "TX-9081", date: '2026-06-11', time: '09:15:44', desc: 'Project Jasa API Development Architecture Deployment', cat: 'INCOME_PROJECT', type: 'in', amt: 2500000 },
    { id: "TX-9080", date: '2026-06-10', time: '19:40:12', desc: 'Suku Cadang Blok Mio 59mm Kawahara Racing Bore Up Kit', cat: 'HOBBY_ENGINE', type: 'out', amt: 450000 },
    { id: "TX-9079", date: '2026-06-08', time: '11:20:55', desc: 'Registrasi Domain Premium Top Level Matrix Engine Extension', cat: 'INFRASTRUCTURE', type: 'out', amt: 600000 },
    { id: "TX-9078", date: '2026-06-05', time: '16:02:11', desc: 'Maintenance Paket Repository Server Distributed AWS Node', cat: 'INFRASTRUCTURE', type: 'out', amt: 350000 },
    { id: "TX-9077", date: '2026-06-02', time: '08:11:30', desc: 'Beli Noken As Custom Mio Stroke Up Kawahara Performance', cat: 'HOBBY_ENGINE', type: 'out', amt: 280000 },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value; setQuery(val);
    const clean = val.toLowerCase().trim();
    if (autoCorrectDictionary[clean]) setCorrected(autoCorrectDictionary[clean]);
    else setCorrected('');
  };

  const filtered = rawData.filter(t => {
    const target = corrected || query; if (!target) return true;
    return t.desc.toLowerCase().includes(target.toLowerCase()) || t.cat.toLowerCase().includes(target.toLowerCase());
  });

  return (
    <div className="pt-20 p-6 bg-[#02040a] min-h-screen text-slate-300 font-mono tracking-tight max-w-7xl mx-auto space-y-6">
      <style dangerouslySetInnerHTML={{__html: `#global-header-greeting, header p, .header-greet { display: none !important; }`}} />
      
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-white/[0.03] pb-4">
        <div>
          <h1 className="text-sm font-black text-white tracking-widest uppercase">QUANT LEDGER JOURNAL</h1>
          <p className="text-[10px] text-slate-500 mt-0.5">High-capacity cryptographic transaction logging system file stream.</p>
        </div>
      </div>

      <div className="relative">
        <input type="text" value={query} onChange={handleSearch} placeholder="EXEC_FILTER_ROUTE [KEYWORDS: mio, vrc, eng, pro]..." className="w-full bg-[#090d16] border border-white/[0.05] rounded-xl px-4 py-3.5 text-xs font-mono text-slate-200 focus:outline-none focus:border-emerald-500 shadow-2xl" />
        {corrected && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-black tracking-widest bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">ROUTING HIT: {corrected}</span>}
      </div>

      <div className="bg-[#090d16] rounded-xl shadow-2xl overflow-hidden border border-white/[0.04]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#0e1422] border-b border-white/[0.04] text-slate-400 font-bold tracking-wider text-[10px] uppercase">
                <th className="p-4">TX_HASH_ID</th>
                <th className="p-4">TIMESTAMP_NODE</th>
                <th className="p-4">ASSET_DESCRIPTION</th>
                <th className="p-4">BLOCK_TAG</th>
                <th className="p-4 text-right">VOLUME_LIQUID</th>
              </tr>
            </thead>
            <tbody className="text-slate-300 divide-y divide-white/[0.02]">
              {filtered.map((t) => (
                <tr key={t.id} className="hover:bg-white/[0.01] transition-all">
                  <td className="p-4 text-indigo-400 font-bold">{t.id}</td>
                  <td className="p-4 text-slate-500 text-[11px]">{t.date} <span className="text-slate-700">{t.time}</span></td>
                  <td className="p-4 font-sans font-bold text-slate-200 tracking-tight text-sm">{t.desc}</td>
                  <td className="p-4"><span className="px-2 py-0.5 rounded text-[9px] font-black bg-[#02040a] text-slate-400 border border-white/[0.05]">{t.cat}</span></td>
                  <td className={`p-4 text-right font-bold font-mono text-sm ${t.type === 'in' ? 'text-emerald-400' : 'text-rose-400'}`}>{t.type === 'in' ? '▲' : '▼'} Rp {t.amt.toLocaleString('id-ID')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}