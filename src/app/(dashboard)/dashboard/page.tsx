"use client";
import React, { useState, useEffect, useRef } from 'react';

// ==========================================
// 1. ENGINE EFEK 3D PARTIKEL SIBER (SAFE MOUNT)
// ==========================================
function CyberHero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{ x: number; y: number; r: number; dx: number; dy: number }> = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.15)';
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.05)';

      particles.forEach((p, idx) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[180px] bg-slate-950 rounded-2xl overflow-hidden border border-indigo-500/30 shadow-2xl">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent p-6 flex flex-col justify-center z-10">
        <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 uppercase border border-indigo-500/30 px-2 py-0.5 rounded w-max mb-2 animate-pulse">
          3D Cyber Matrix Active
        </span>
        <h2 className="text-2xl font-black text-white tracking-tighter md:text-3xl">
          HELLODIT QUANT INFRASTRUCTURE
        </h2>
        <p className="text-slate-400 text-xs mt-1 font-medium max-w-md">
          High-frequency data node ledger tracking system. Safe environment, 0% Hydration Leak.
        </p>
      </div>
    </div>
  );
}

// ==========================================
// 2. CORE DASHBOARD ENGINE WITH MULTI-LANG & CURRENCY
// ==========================================
export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');
  const [currency, setCurrency] = useState<'IDR' | 'USD'>('IDR');

  // Kurs Dolar Dummy Konversi Instan
  const exchangeRate = 16200; 

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="pt-24 p-6 text-center font-mono text-slate-500">Loading Node Platform...</div>;

  const jam = new Date().getHours();
  let ucapan = lang === 'ID' ? "Selamat Malam" : "Good Evening";
  if (jam < 11) ucapan = lang === 'ID' ? "Selamat Pagi" : "Good Morning";
  else if (jam < 15) ucapan = lang === 'ID' ? "Selamat Siang" : "Good Afternoon";
  else if (jam < 19) ucapan = lang === 'ID' ? "Selamat Sore" : "Good Evening";

  // Fungsi Format Angka ke IDR atau USD secara Realtime
  const formatValue = (valInIDR: number) => {
    if (currency === 'USD') {
      const usdVal = valInIDR / exchangeRate;
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(usdVal);
    }
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(valInIDR);
  };

  return (
    <div className="pt-24 p-6 font-sans tracking-tight max-w-7xl mx-auto space-y-6">
      
      {/* CONTROL SWITCHER PANEL HEADER (IDR/USD & EN/ID) */}
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

      {/* COMPONENT 3D YANG SUDAH AMAN */}
      <CyberHero3D />

      {/* BANNER GREETING */}
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
        <h1 className="text-2xl font-black text-white tracking-tighter">
          {ucapan}, Tegar! 🚀
        </h1>
        <p className="text-slate-400 text-xs mt-1 font-medium">
          {lang === 'ID' 
            ? 'Metrik arsitektur infrastruktur keuangan digital Anda dipantau penuh.' 
            : 'Your digital financial infrastructure architecture metrics are fully monitored.'}
        </p>
      </div>

      {/* REAL-TIME MARKET CONVERTED CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-950 border border-emerald-500/30 p-5 rounded-xl shadow-md">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{lang === 'ID' ? 'Total Pemasukan' : 'Total Income'}</p>
          <h3 className="text-2xl font-bold text-white font-mono mt-1 tracking-tighter">+{formatValue(3100000)}</h3>
          <div className="h-2 mt-4 bg-emerald-500/10 rounded-sm overflow-hidden">
            <div className="h-full bg-emerald-500 w-[75%]"></div>
          </div>
        </div>

        <div className="bg-slate-950 border border-rose-500/30 p-5 rounded-xl shadow-md">
          <p className="text-xs font-bold text-rose-400 uppercase tracking-wider">{lang === 'ID' ? 'Total Pengeluaran' : 'Total Outcome'}</p>
          <h3 className="text-2xl font-bold text-white font-mono mt-1 tracking-tighter">-{formatValue(1200000)}</h3>
          <div className="h-2 mt-4 bg-rose-500/10 rounded-sm overflow-hidden">
            <div className="h-full bg-rose-500 w-[40%]"></div>
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl shadow-md">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{lang === 'ID' ? 'Sisa Saldo Bersih' : 'Net Portfolio Balance'}</p>
          <h3 className="text-2xl font-bold text-indigo-400 font-mono mt-1 tracking-tighter">{formatValue(1900000)}</h3>
          <p className="text-[10px] text-slate-500 mt-3 font-mono">NODE STATUS: LIQUIDITY STABLE</p>
        </div>
      </div>
    </div>
  );
}