"use client";
import React from 'react';

export default function SettingsPage() {
  return (
    <div className="pt-24 p-6 font-sans tracking-tight max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tighter">System Configuration</h1>
        <p className="text-sm text-slate-500 font-medium">Konfigurasi profile, node database, dan preferensi arsitektur.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">User Profile Identifier</label>
          <input type="text" disabled value="TEGAR_ANALYST_TKJ" className="w-full bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-lg font-mono text-sm text-slate-500 cursor-not-allowed" />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Primary Node Engine</label>
          <select className="w-full bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-sm text-slate-800 font-medium">
            <option>Production-Vercel-Edge (Active)</option>
            <option>Localhost-Testing-Suite</option>
          </select>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button className="bg-slate-900 text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-slate-800 transition tracking-wider uppercase">
            SAVE PREFERENCES
          </button>
        </div>
      </div>
    </div>
  );
}