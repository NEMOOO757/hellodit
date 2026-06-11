import React from 'react';

export default function DashboardPage() {
  // Membuat ucapan dinamis berdasarkan jam di laptop user
  const jam = new Date().getHours();
  let ucapan = "Selamat Malam";
  if (jam < 11) ucapan = "Selamat Pagi";
  else if (jam < 15) ucapan = "Selamat Siang";
  else if (jam < 19) ucapan = "Selamat Sore";

  return (
    // mt-6 artinya memberi jarak atas agar tidak menutupi tombol ID/EN di header
    <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-md mb-6">
      <h1 className="text-2xl font-bold mb-1">{ucapan}, Selamat Datang di HelloDit 👋</h1>
      <p className="text-sm text-blue-100">Sistem Pencatatan Keuangan Digital & Ledger Transaksi</p>
    </div>
  );
}