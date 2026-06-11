"use client";
import React from 'react';

export default function SettingsPage() {
  return (
    <div className="pt-20 p-6 bg-[#02040a] min-h-screen text-slate-300 font-mono tracking-tight max-w-4xl mx-auto space-y-6">
      <style dangerouslySetInnerHTML={{__html: `#global-header-greeting, header p, .header-greet { display: none !important; }`}} />
      <div className="border-b border-white/[0.03] pb-4">
        <h1 className="text-sm font-black text-white tracking-widest uppercase">SYSTEM CORE ENVIROMENTS</h1>
        <p className="text-[10px] text-slate-500 mt-0.5">Cryptographic keys, advanced webhooks pipeline targets, and multi-node system preferences.</p>
      </div>

      <div className="bg-[#090d16] p-6 rounded-xl border border-white/[0.04] shadow-2xl space-y-6 text-xs">
        <div className="border-b border-white/[0.02] pb-4"><h3 className="font-bold text-white uppercase text-[11px] tracking-wider">CRYPTOGRAPHIC NODE INTERACTION</h3></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-slate-500 tracking-wider">SYSTEM_IDENTIFICATION_HASH</label>
            <input type="text" disabled value="SHA256//HED-NODE-99X-TEGAR-TKJ-PROD" className="w-full bg-[#02040a] border border-white/[0.05] px-3 py-3 rounded-lg text-slate-500 cursor-not-allowed text-[11px]" />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-slate-500 tracking-wider">INGESTION_STORAGE_TARGET</label>
            <select className="w-full bg-[#02040a] border border-white/[0.05] px-3 py-3 rounded-lg text-slate-300 focus:outline-none focus:border-emerald-500 text-[11px]">
              <option>VERCEL_KV_POSTGRES_LIVE_CLUSTER_01</option>
              <option>LOCAL_MEMORY_SQLITE_FALLBACK_NODE</option>
            </select>
          </div>
        </div>

        <div className="p-4 bg-[#02040a] rounded-xl border border-white/[0.04] space-y-2">
          <div className="flex justify-between items-center text-[10px] font-black text-slate-400"><span>ENCRYPTION SYSTEM DEPLOYMENT STATUS</span><span className="text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">AES-256 INTERNAL ENCRYPT COMPLIANT</span></div>
          <p className="text-[11px] font-sans font-medium text-slate-500 leading-relaxed">Semua paket mutasi transaksi finansial dienkripsi pada tingkat runtime sebelum diterbangkan ke dalam distributed database storage.</p>
        </div>

        <div className="flex justify-end pt-2">
          <button className="bg-white text-slate-950 font-sans px-6 py-2.5 rounded-lg text-xs font-black border border-white hover:bg-slate-200 transition tracking-widest uppercase">SAVE REPOSITORY PREFERENCES</button>
        </div>
      </div>
    </div>
  );
}