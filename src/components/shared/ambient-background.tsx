'use client';

import React, { useEffect, useRef } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';

export function AmbientBackground() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const blobRef1 = useRef<HTMLDivElement>(null);
  const blobRef2 = useRef<HTMLDivElement>(null);
  const blobRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;

      if (blobRef1.current) {
        const x = Math.sin(time * 0.5) * 100;
        const y = Math.cos(time * 0.3) * 100;
        blobRef1.current.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.sin(time) * 0.1})`;
      }
      
      if (blobRef2.current) {
        const x = Math.cos(time * 0.4) * -150;
        const y = Math.sin(time * 0.6) * 120;
        blobRef2.current.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.cos(time) * 0.15})`;
      }

      if (blobRef3.current) {
        const x = Math.sin(time * 0.7) * 80;
        const y = Math.cos(time * 0.2) * -100;
        blobRef3.current.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.sin(time * 1.5) * 0.05})`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile]);

  if (isMobile) {
    // Simplify for mobile to save battery
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyber-mint/5 rounded-full blur-[100px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-holo-cyan/5 rounded-full blur-[100px]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen opacity-70">
      <div 
        ref={blobRef1}
        className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-cyber-mint/10 rounded-full blur-[120px] will-change-transform" 
      />
      <div 
        ref={blobRef2}
        className="absolute bottom-[10%] right-[10%] w-[800px] h-[800px] bg-holo-cyan/10 rounded-full blur-[150px] will-change-transform" 
      />
      <div 
        ref={blobRef3}
        className="absolute top-[40%] right-[40%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] will-change-transform" 
      />
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}
