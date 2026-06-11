"use client";
import React, { useState } from 'react';

export default function TransactionsPage() {
  // Data dummy transaksi biar aplikasi langsung kelihatan hidup
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2026-06-12', desc: 'Sewa Hosting Vercel', category: 'IT Infrastructure', type: 'outcome', amount: 150000 },
    { id: 2, date: '2026-06-11', desc: 'Project Jasa Pembuatan Website', category: 'Income', type: 'income', amount: 2500000 },
    { id: 3, date: '2026-06-10', desc: 'Beli Suku Cadang Mio 59mm', category: 'Hobby', type: 'outcome', amount: 450000 },
  ]);

  return (
    <div className="p-6 mt-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Ledger Transaksi</h1>
          <p className="text-sm text-gray-500">Kelola dan pantau semua arus kas masuk dan keluar.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
          + Tambah Transaksi
        </button>
      </div>

      {/* Tampilan Tabel */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-gray-600 text-sm font-semibold">
              <th className="p-4">Tanggal</th>
              <th className="p-4">Deskripsi</th>
              <th className="p-4">Kategori</th>
              <th className="p-4 text-right">Jumlah</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {transactions.map((t) => (
              <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition">
                <td className="p-4">{t.date}</td>
                <td className="p-4 font-medium text-gray-900">{t.desc}</td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                    {t.category}
                  </span>
                </td>
                <td className={`p-4 text-right font-semibold ${t.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {t.type === 'income' ? '+' : '-'} Rp {t.amount.toLocaleString('id-ID')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}