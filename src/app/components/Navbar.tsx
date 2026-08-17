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
            DESKTOP NAVIGATION LINKS
            ========================================== */}
        <div 
          className={`hidden md:flex gap-8 text-sm font-bold transition-colors duration-300 ${
            !isTransparent ? "text-slate-600" : "text-white/90 drop-shadow-sm"
          }`}
        >
          <Link 
            href="/about" 
            className={`inline-block transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              !isTransparent ? "hover:text-blue-900" : "hover:text-amber-200 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            }`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`inline-block transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              !isTransparent ? "hover:text-blue-900" : "hover:text-amber-200 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            }`}
          >
            Services
          </Link>
          <Link 
            href="/resources" 
            className={`inline-block transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              !isTransparent ? "hover:text-blue-900" : "hover:text-amber-200 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            }`}
          >
            Resources
          </Link>
          <Link 
            href="/calculator" 
            className={`inline-block transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              !isTransparent ? "hover:text-blue-900" : "hover:text-amber-200 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            }`}
          >
            Calculator
          </Link>
          <Link 
            href="/contact" 
            className={`inline-block transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              !isTransparent ? "hover:text-blue-900" : "hover:text-amber-200 hover:drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]"
            }`}
          >
            Contact
          </Link>
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
          MOBILE DROPDOWN NAVIGATION LINKS
          ========================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-4 text-center animate-fade-in-up">
          <Link 
            href="/about" 
            className="text-slate-800 font-bold text-lg py-2 hover:text-blue-700 active:scale-95 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/services" 
            className="text-slate-800 font-bold text-lg py-2 hover:text-blue-700 active:scale-95 transition-colors"
          >
            Services
          </Link>
          <Link 
            href="/resources" 
            className="text-slate-800 font-bold text-lg py-2 hover:text-blue-700 active:scale-95 transition-colors"
          >
            Resources
          </Link>
          <Link 
            href="/calculator" 
            className="text-slate-800 font-bold text-lg py-2 hover:text-blue-700 active:scale-95 transition-colors"
          >
            Calculator
          </Link>
          <Link 
            href="/contact" 
            className="text-slate-800 font-bold text-lg py-2 hover:text-blue-700 active:scale-95 transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}