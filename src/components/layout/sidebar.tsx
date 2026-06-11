'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { 
  Home, ArrowUpDown, PiggyBank, BarChart3, Settings, 
  Menu, X, LogOut, Hexagon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';
import { useSettingsStore } from '@/store/settings-store';
import { t } from '@/lib/i18n';

// Map string icon names to Lucide components
const IconMap: Record<string, React.ElementType> = {
  Home, ArrowUpDown, PiggyBank, BarChart3, Settings
};

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarCollapsed, setSidebarCollapsed, locale } = useSettingsStore();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const sidebarVariants = {
    expanded: { width: '280px' },
    collapsed: { width: '80px' },
  };

  const mobileVariants = {
    closed: { x: '-100%' },
    open: { x: 0 },
  };

  const SidebarContent = (
    <>
      <div className="flex h-20 items-center justify-between px-6 border-b border-glass-border">
        <Link href="/dashboard" className="flex items-center gap-3">
          <Hexagon className="w-8 h-8 text-cyber-mint" />
          {(!sidebarCollapsed || isMobileOpen) && (
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-mint to-holo-cyan">
              HelloDit
            </span>
          )}
        </Link>
        {/* Mobile close button */}
        <button className="md:hidden text-slate-gray hover:text-white" onClick={toggleMobile}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {NAV_ITEMS.map((item) => {
          const Icon = IconMap[item.icon] || Home;
          const isActive = pathname.startsWith(item.route);
          const label = locale === 'id' ? item.labelId : item.label;

          return (
            <Link key={item.route} href={item.route}>
              <div
                className={cn(
                  "relative flex items-center h-12 rounded-xl transition-all duration-300 group cursor-pointer",
                  sidebarCollapsed && !isMobileOpen ? "justify-center" : "px-4",
                  isActive 
                    ? "bg-glass border border-cyber-mint/30 shadow-glow-mint" 
                    : "hover:bg-glass/50 hover:border hover:border-glass-border"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-colors duration-300 flex-shrink-0",
                  isActive ? "text-cyber-mint" : "text-slate-gray group-hover:text-pure-white"
                )} />
                
                {(!sidebarCollapsed || isMobileOpen) && (
                  <span className={cn(
                    "ml-3 font-medium transition-colors duration-300",
                    isActive ? "text-pure-white" : "text-slate-gray group-hover:text-pure-white"
                  )}>
                    {label}
                  </span>
                )}

                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 w-1 h-8 bg-cyber-mint rounded-r-full shadow-glow-mint"
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-glass-border">
        <button 
          className={cn(
            "flex items-center w-full h-12 rounded-xl text-slate-gray hover:text-neon-red hover:bg-neon-red/10 transition-colors duration-300",
            sidebarCollapsed && !isMobileOpen ? "justify-center" : "px-4"
          )}
        >
          <LogOut className="w-5 h-5" />
          {(!sidebarCollapsed || isMobileOpen) && (
            <span className="ml-3 font-medium">Logout</span>
          )}
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-glass border border-glass-border text-pure-white backdrop-blur-md"
        onClick={toggleMobile}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity",
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMobile}
      />

      {/* Mobile Sidebar */}
      <motion.aside
        initial="closed"
        animate={isMobileOpen ? "open" : "closed"}
        variants={mobileVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="md:hidden fixed inset-y-0 left-0 z-50 w-72 bg-pitch-black/90 backdrop-blur-2xl border-r border-glass-border flex flex-col"
      >
        {SidebarContent}
      </motion.aside>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={sidebarCollapsed ? "collapsed" : "expanded"}
        animate={sidebarCollapsed ? "collapsed" : "expanded"}
        variants={sidebarVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="hidden md:flex flex-col h-screen sticky top-0 bg-pitch-black/80 backdrop-blur-2xl border-r border-glass-border z-40 overflow-hidden"
      >
        {SidebarContent}
        
        {/* Collapse Toggle */}
        <button 
          onClick={toggleSidebar}
          className="absolute right-[-12px] top-24 bg-glass border border-glass-border rounded-full p-1 hover:bg-cyber-mint/20 hover:text-cyber-mint transition-colors"
        >
          <Menu className="w-4 h-4" />
        </button>
      </motion.aside>
    </>
  );
}
