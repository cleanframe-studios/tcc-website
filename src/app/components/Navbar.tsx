"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight - 80;
      if (window.scrollY > triggerPoint) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isTransparent = pathname === '/' && !isScrolled;

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.location.reload();
    }
  };

  const navItems = [
    { name: 'Home', href: '/', onClick: handleHomeClick },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'Calculator', href: '/calculator' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-down ${
        !isTransparent 
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm" 
          : "bg-white/10 backdrop-blur-xl border-b border-white/20"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <img src="/tcc_logo.png" alt="Tax Clinic Corner Logo" className="h-8 sm:h-10 w-auto object-contain" />
          <span 
            className={`text-sm sm:text-xl font-extrabold tracking-tighter transition-colors duration-300 ${
              !isTransparent ? "text-blue-900" : "text-white drop-shadow-md"
            }`}
          >
            TAX CLINIC CORNER.
          </span>
        </Link>

        {/* ==========================================
            DESKTOP NAVIGATION LINKS (Smooth Animated Pills)
            ========================================== */}
        <div className="hidden md:flex items-center gap-2 text-sm font-bold">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name}
                href={item.href}
                onClick={item.onClick}
                className={`px-4 py-2 rounded-full transition-all duration-300 transform active:scale-95 ${
                  isActive 
                    ? (!isTransparent 
                        ? "bg-blue-900 text-white shadow-md scale-105 font-extrabold" 
                        : "bg-amber-400 text-slate-900 shadow-lg scale-105 font-extrabold drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]")
                    : (!isTransparent 
                        ? "text-slate-600 hover:text-blue-900 hover:bg-slate-100/60 font-medium" 
                        : "text-white/90 hover:text-amber-200 hover:bg-white/10 font-medium")
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            !isTransparent ? "text-slate-800" : "text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
      </div>

      {/* ==========================================
          MOBILE DROPDOWN NAVIGATION LINKS (Distinct Active Cards)
          ========================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-3 text-left animate-fade-in-up">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name}
                href={item.href}
                onClick={item.onClick}
                className={`px-4 py-3 rounded-xl text-base transition-all duration-200 flex items-center justify-between ${
                  isActive 
                    ? "bg-blue-50 text-blue-900 font-extrabold border-l-4 border-blue-900 shadow-xs" 
                    : "text-slate-700 font-medium hover:bg-slate-50 hover:text-blue-900"
                }`}
              >
                <span>{item.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-blue-900"></span>}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}