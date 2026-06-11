'use client';

import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useSettingsStore } from '@/store/settings-store';
import { useUIStore } from '@/store/ui-store';
import { cn } from '@/lib/utils';
import { t } from '@/lib/i18n';

export function Topbar() {
  const { currency, setCurrency, locale, setLocale } = useSettingsStore();
  const { notifications } = useUIStore();
  const unreadCount = notifications.length;

  // Greeting logic
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return locale === 'id' ? 'Selamat Pagi' : 'Good Morning';
    if (hour < 18) return locale === 'id' ? 'Selamat Siang' : 'Good Afternoon';
    return locale === 'id' ? 'Selamat Malam' : 'Good Evening';
  };

  return (
    <header className="sticky top-0 z-30 h-20 px-6 flex items-center justify-between bg-obsidian/80 backdrop-blur-xl border-b border-glass-border">
      
      {/* Search Bar - hidden on mobile, visible on md */}
      <div className="hidden md:flex items-center flex-1 max-w-md">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-gray" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-glass-border rounded-xl leading-5 bg-glass text-pure-white placeholder-slate-gray focus:outline-none focus:ring-1 focus:ring-cyber-mint focus:border-cyber-mint sm:text-sm transition-colors"
            placeholder={t(locale, 'common.search')}
          />
        </div>
      </div>

      <div className="flex-1 md:hidden"></div> {/* Spacer for mobile */}

      {/* Greeting - Hidden on smaller screens */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
        <p className="text-sm font-medium text-slate-gray">
          {getGreeting()}, <span className="text-pure-white">Tegar!</span> 🚀
        </p>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        
        {/* Language Toggle */}
        <div className="hidden sm:flex bg-glass border border-glass-border rounded-lg p-1">
          <button
            onClick={() => setLocale('en')}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-md transition-colors",
              locale === 'en' ? "bg-holo-cyan/20 text-holo-cyan shadow-glow-cyan" : "text-slate-gray hover:text-pure-white"
            )}
          >
            EN
          </button>
          <button
            onClick={() => setLocale('id')}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-md transition-colors",
              locale === 'id' ? "bg-holo-cyan/20 text-holo-cyan shadow-glow-cyan" : "text-slate-gray hover:text-pure-white"
            )}
          >
            ID
          </button>
        </div>

        {/* Currency Toggle */}
        <div className="hidden sm:flex bg-glass border border-glass-border rounded-lg p-1">
          <button
            onClick={() => setCurrency('IDR')}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-md transition-colors",
              currency === 'IDR' ? "bg-cyber-mint/20 text-cyber-mint shadow-glow-mint" : "text-slate-gray hover:text-pure-white"
            )}
          >
            IDR
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-md transition-colors",
              currency === 'USD' ? "bg-cyber-mint/20 text-cyber-mint shadow-glow-mint" : "text-slate-gray hover:text-pure-white"
            )}
          >
            USD
          </button>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-full text-slate-gray hover:text-pure-white hover:bg-glass transition-colors">
          <span className="sr-only">View notifications</span>
          <Bell className="h-6 w-6" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-neon-red ring-2 ring-obsidian shadow-glow-red animate-pulse" />
          )}
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-glass-border">
          <div className="hidden sm:block text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-mint opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-mint"></span>
              </span>
              <p className="text-sm font-medium text-pure-white">Tegar Aditya</p>
            </div>
            <p className="text-[10px] text-slate-gray">tegaraditya884@gmail.com</p>
          </div>
          <div className="relative h-10 w-10 rounded-full bg-gradient-to-tr from-cyber-mint to-holo-cyan p-0.5 shadow-glow-mint cursor-pointer group hover:scale-105 transition-transform">
            <div className="h-full w-full rounded-full bg-obsidian flex items-center justify-center overflow-hidden">
              {/* Initials fallback */}
              <span className="text-sm font-bold text-pure-white tracking-widest group-hover:text-cyber-mint transition-colors">TA</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
