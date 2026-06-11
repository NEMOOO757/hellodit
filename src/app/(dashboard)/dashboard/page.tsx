"use client";
import React, { useState, useEffect, useRef } from 'react';

function QuantumWave3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    let id: number; let w = (canvas.width = canvas.offsetWidth); let h = (canvas.height = canvas.offsetHeight);
    let phase = 0;
    const draw = () => {
      ctx.clearRect(0,0,w,h); ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)'; ctx.lineWidth = 1;
      const rows = 12; const cols = 25; const gapX = w / cols; const gapY = h / rows;
      for (let i = 0; i < rows; i++) {
        ctx.beginPath();
        for (let j = 0; j <= cols; j++) {
          const x = j * gapX;
          const distort = Math.sin(j * 0.3 + phase) * Math.cos(i * 0.4 + phase) * 20;
          const y = i * gapY + distort + 30;
          if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      phase += 0.02; id = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { if(canvas) { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; } };
    window.addEventListener('resize', resize); return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize); };
  }, []);
  return (
    <div className="relative w-full h-[260px] bg-[#02040a] rounded-xl overflow-hidden border border-white/[0.05] shadow-2xl">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent p-8 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10px] font-mono font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">QUANTUM WAVE MATRIX ACTIVE</span>
        </div>
        <h1 className="text-3xl font-black text-white tracking-tighter uppercase font-mono">HELLODIT CORE TERMINAL</h1>
        <p className="text-slate-500 font-mono text-xs mt-1 max-w-2xl leading-relaxed">High-performance decentralised financial logging infrastructure. Engineered with mathematical vector grids for multi-channel asset verification and edge packet storage caching.</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [chartData, setChartData] = useState([
    { h: 70, l: 30, o: 60, c: 45, v: 80, isUp: false },
    { h: 85, l: 40, o: 45, c: 75, v: 120, isUp: true },
    { h: 90, l: 50, o: 75, c: 60, v: 95, isUp: false },
    { h: 65, l: 20, o: 60, c: 35, v: 60, isUp: false },
    { h: 95, l: 30, o: 35, c: 80, v: 150, isUp: true }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prev => {
        const next = [...prev.slice(1)];
        const last = prev[prev.length - 1];
        const change = (Math.random() - 0.5) * 20;
        const newC = Math.max(20, Math.min(95, last.c + change));
        const newO = last.c;
        const isUp = newC >= newO;
        next.push({
          h: Math.max(newC, newO) + Math.random() * 10,
          l: Math.min(newC, newO) - Math.random() * 10,
          o: newO,
          c: newC,
          v: Math.floor(Math.random() * 100) + 50,
          isUp
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 p-6 bg-[#02040a] min-h-screen text-slate-300 font-mono tracking-tight max-w-7xl mx-auto space-y-6 select-none">
      <style dangerouslySetInnerHTML={{__html: `#global-header-greeting, header p, .header-greet { display: none !important; }`}} />

      <QuantumWave3D />

      {/* LIVE INTERACTIVE TRADING CANDLESTICK ENGINE */}
      <div className="bg-[#090d16] p-6 rounded-xl border border-white/[0.04] shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-white/[0.03] pb-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-black text-white tracking-widest uppercase">SYS_FLOW_FEED_1H</h2>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded animate-pulse">● LIVE DATA TICKER</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-0.5">Primary Node Core Index Status: Aggressive Ingestion Mode</p>
          </div>
          <div className="grid grid-cols-2 md:flex md:gap-6 text-xs">
            <div><span className="text-slate-500">MAX_THRESHOLD:</span> <span className="text-emerald-400 font-bold">Rp 3,100,000</span></div>
            <div><span className="text-slate-500">MIN_LIMIT:</span> <span className="text-rose-500 font-bold">Rp 1,200,000</span></div>
          </div>
        </div>

        {/* FLUID KANDELSTIK RENDERER */}
        <div className="h-64 flex items-end justify-around border-b border-l border-white/[0.05] pb-2 pl-2 relative">
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-[0.02]">
            <div className="w-full border-b border-white"></div>
            <div className="w-full border-b border-white"></div>
            <div className="w-full border-b border-white"></div>
          </div>
          {chartData.map((cd, idx) => (
            <div key={idx} className="w-16 h-full flex flex-col justify-end items-center relative group">
              {/* Wick Line */}
              <div className={`absolute w-[1px]`} style={{ height: `${cd.h - cd.l}%`, bottom: `${cd.l}%`, backgroundColor: cd.isUp ? '#10b981' : '#f43f5e' }}></div>
              {/* Candle Body */}
              <div className={`w-8 rounded-sm z-10 border transition-all duration-500`} style={{ height: `${Math.abs(cd.c - cd.o)}%`, bottom: `${Math.min(cd.c, cd.o)}%`, backgroundColor: cd.isUp ? 'rgba(16,185,129,0.15)' : 'rgba(244,63,94,0.15)', borderColor: cd.isUp ? '#10b981' : '#f43f5e' }}></div>
              {/* Volume Bar */}
              <div className="w-6 bg-white/[0.03] group-hover:bg-indigo-500/20 transition-all rounded-t-sm" style={{ height: `${cd.v * 0.2}%` }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* HEAVY DATA SCROLL CONTAINERS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#090d16] p-5 rounded-xl border border-white/[0.04] space-y-4">
          <h3 className="text-xs font-black text-white uppercase tracking-wider">NETWORK NODE UTILIATION</h3>
          <div className="space-y-3 text-[11px]">
            <div>
              <div className="flex justify-between text-slate-500 mb-1"><span>EDGE PACKET CACHE ENGINE</span><span className="text-white">92.4%</span></div>
              <div className="w-full bg-[#02040a] h-1 rounded-full overflow-hidden border border-white/[0.05]"><div className="bg-emerald-500 h-full w-[92.4%]"></div></div>
            </div>
            <div>
              <div className="flex justify-between text-slate-500 mb-1"><span>MIO 59MM ENGINE ALLOCATION</span><span className="text-amber-400">45.0%</span></div>
              <div className="w-full bg-[#02040a] h-1 rounded-full overflow-hidden border border-white/[0.05]"><div className="bg-amber-400 h-full w-[45%]"></div></div>
            </div>
          </div>
        </div>

        <div className="bg-[#090d16] p-5 rounded-xl border border-white/[0.04] lg:col-span-2 space-y-3">
          <h3 className="text-xs font-black text-white uppercase tracking-wider">LIVE TRANSLATION PACKET SYSTEM LOGS</h3>
          <div className="space-y-1 h-[110px] overflow-y-auto pr-2 text-[10px] text-slate-500 scrollbar-thin">
            <p className="p-2 bg-[#02040a] rounded border-l border-emerald-500/50 flex justify-between"><span>[OK] SECURE_INGEST: Memory frame mapped to postgres cluster database.</span><span className="text-slate-700">0.01ms</span></p>
            <p className="p-2 bg-[#02040a] rounded border-l border-indigo-500/50 flex justify-between"><span>[METRIC] HYDRATION_CHECK: Build status verification cleared. Leak risk 0.00%</span><span className="text-slate-700">0.05ms</span></p>
            <p className="p-2 bg-[#02040a] rounded border-l border-amber-500/50 flex justify-between"><span>[WARN] PACKET_DEPRECATION: ESLint config module bypassed on Edge runtime environment.</span><span className="text-slate-700">1.22ms</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}