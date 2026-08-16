"use client";

import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function HeroCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>(
    Array.from({ length: 8 }, (_, index) => ({ x: -100, y: -100, id: index }))
  );
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      document.body.style.cursor = 'auto';
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsHeroVisible(false);
        document.body.style.cursor = 'auto';
      } else {
        setIsHeroVisible(true);
        document.body.style.cursor = 'none';
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.cursor = 'auto';
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/' || !isHeroVisible) return;

    document.body.style.cursor = 'none';
    let idCounter = 100;

    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight - 100) return;
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTrail((prev) => [
        ...prev.slice(1),
        { x: e.clientX, y: e.clientY, id: idCounter++ }
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, [pathname, isHeroVisible]);

  if (pathname !== '/' || !isHeroVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Gold Gradient Trail Particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-2.5 h-2.5 rounded-full bg-linear-to-r from-amber-500 to-yellow-300 shadow-[0_0_10px_#fbbf24]"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (index / trail.length) * 0.75,
            scale: `${(index / trail.length) * 1.1}`,
          }}
        />
      ))}

      {/* Special Gold Cursor with Little Shield on its Head */}
      <div
        className="absolute pointer-events-none transition-transform duration-75 ease-out flex items-center justify-center"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Little Shield on its Head */}
        <div className="absolute -top-3.5 -right-3 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse">
          <Shield className="w-4 h-4 fill-amber-300 text-amber-500" />
        </div>

        {/* Main Gold Gradient Core */}
        <div className="w-5 h-5 rounded-full bg-linear-to-tr from-yellow-600 via-amber-400 to-yellow-200 shadow-[0_0_15px_rgba(251,191,36,0.9)] border border-white/60 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-inner" />
        </div>
      </div>
    </div>
  );
}