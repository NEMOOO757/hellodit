"use client";
import React, { useState } from 'react';

// DICTIONARY AUTO-CORRECT PIPELINE DATA
const autoCorrectMap: Record<string, string> = {
  "svr": "INFRASTRUCTURE",
  "serv": "INFRASTRUCTURE",
  "web": "INFRASTRUCTURE",
  "host": "INFRASTRUCTURE",
  "mio": "HOBBY_ENG",
  "mot": "HOBBY_ENG",
  "eng": "HOBBY_ENG",
  "hby": "HOBBY_ENG",
  "inc": "INCOME_PROJ",
  "duit": "INCOME_PROJ",
  "pro": "INCOME_PROJ"
};

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [correctedWord, setCorrectedWord] = useState('');
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');
  const [currency, setCurrency] = useState<'IDR' | 'USD'>('IDR');
  
  const exchangeRate = 16200;

  const rawTransactions = [
    { id: 1, date: '2026-06-12', time: '14:32', desc: 'Sewa Hosting Vercel Pro', category: 'INFRASTRUCTURE', type: 'outcome', amount: 150000 },
    { id: 2, date: '2026-06-11', time: '09:15', desc: 'Project Jasa Development Website', category: 'INCOME_PROJ', type: 'income', amount: 2500000 },
    { id: 3, date: '2026-06-10', time: '19:40', desc: 'Beli Suku Cadang Mio 59mm Kawahara', category: 'HOBBY_ENG', type: 'outcome', amount: 450000 },
    { id: 4, date: '2026-06-08', time: '11:20', desc: 'Sewa Domain Premium App', category: 'INFRASTRUCTURE', type: 'outcome', amount: 600000 },
  ];

  // REAL-TIME AUTO CORRECT SEARCH HANDLER ENGINE
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);

    const cleanInput = val.toLowerCase().trim();
    if (autoCorrectMap[cleanInput]) {
      setCorrectedWord(autoCorrectMap[cleanInput]);
    } else {
      setCorrectedWord('');
    }
  };

  // FILTER LOGIC COMBINED WITH AUTO-CORRECT PIPELINE
  const filteredTransactions = rawTransactions.filter(t => {
    const filterKey = correctedWord || searchQuery;
    if (!filterKey) return true;
    
    return (
      t.desc.toLowerCase().includes(filterKey.toLowerCase()) ||
      t.category.toLowerCase().includes(filterKey.toLowerCase())
    );
  });

  const formatValue = (valInIDR: number) => {
    if (currency === 'USD') {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(valInIDR / exchangeRate);
    }
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(valInIDR);
  };

  return (
    <div className="pt-24 p-6 font-sans tracking-tight max-w-7xl mx-auto space-y-6">
      
      {/* SWITCHER PANEL CONTROLLER */}
      <div className="flex justify-end items-center gap-3 bg-slate-900/50 p-2 rounded-xl border border-slate-800 w-max ml-auto">
        <div className="flex rounded-md overflow-hidden border border-slate-700 bg-slate-950 p-0.5 text-[10px] font-bold font-mono">
          <button onClick={() => setLang('ID')} className={`px-2 py-1 rounded transition-all ${lang === 'ID' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>ID</button>
          <button onClick={() => setLang('EN')} className={`px-2 py-1 rounded transition-all ${lang === 'EN' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>EN</button>
        </div>
        <div className="flex rounded-md overflow-hidden border border-slate-700 bg-slate-950 p-0.5 text-[10px] font-bold font-mono">
          <button onClick={() => setCurrency('IDR')} className={`px-2 py-1 rounded transition-all ${currency === 'IDR' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}>IDR</button>
          <button onClick={() => setCurrency('USD')} className={`px-2 py-1 rounded transition-all ${currency === 'USD' ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}>USD</button>
        </div>
      </div>

      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tighter">
            {lang === 'ID' ? 'Ledger Riwayat Transaksi' : 'Ledger Order History'}
          </h1>
          <p className="text-sm text-slate-500 font-medium">
            {lang === 'ID' ? 'Sistem pencatatan mutasi volume finansial.' : 'Precise financial volume tracking system.'}
          </p>
        </div>
      </div>

      {/* SMART SEARCH ROW WITH REAL-TIME AUTO CORRECT ALERT */}
      <div className="space-y-2">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={lang === 'ID' ? "Ketik kata kunci pencarian (ex: mio, svr, host)..." : "Type keywords to search..."}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm font-mono text-slate-200 focus:outline-none focus:border-indigo-500 transition shadow-inner"
          />
          {correctedWord && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold font-mono bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded border border-indigo-500/30">
              Auto-Correct Route: {correctedWord} ⚡
            </span>
          )}
        </div>
        {correctedWord && (
          <p className="text-[11px] font-medium text-indigo-500 pl-1">
            * {lang === 'ID' ? `Mendeteksi kata kunci alternatif. Menampilkan kategori: ${correctedWord}` : `Alternative keyword routed to filter category: ${correctedWord}`}
          </p>
        )}
      </div>

      {/* MATRIX QUANT ORDERBOOK TABLE */}
      <div className="bg-slate-950 rounded-xl shadow-2xl overflow-hidden border border-slate-800">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <th className="p-4">Timestamp</th>
              <th className="p-4">{lang === 'ID' ? 'Deskripsi Aset' : 'Asset Description'}</th>
              <th className="p-4">Tag Block</th>
              <th className="p-4 text-right">Volume</th>
            </tr>
          </thead>
          <tbody className="text-sm font-mono text-slate-300">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((t) => (
                <tr key={t.id} className="border-b border-slate-900/60 hover:bg-slate-900/40 transition">
                  <td className="p-4 text-slate-500 text-xs">{t.date} <span className="text-slate-600 font-normal">{t.time}</span></td>
                  <td className="p-4 font-sans font-bold text-slate-200 tracking-tight">{t.desc}</td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400 border border-slate-700">
                      {t.category}
                    </span>
                  </td>
                  <td className={`p-4 text-right font-bold text-base ${t.type === 'income' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {t.type === 'income' ? '▲' : '▼'} {formatValue(t.amount)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-600 font-mono text-xs">
                  [EMPTY NODE] No matching data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}