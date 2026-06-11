'use client';

import React from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { Topbar } from '@/components/layout/topbar';
import { AmbientBackground } from '@/components/shared/ambient-background';
import { CustomCursor } from '@/components/shared/custom-cursor';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-obsidian">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Topbar />
        
        {/* Background ambient lighting */}
        <AmbientBackground />
        <CustomCursor />
        
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-8 z-10">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
