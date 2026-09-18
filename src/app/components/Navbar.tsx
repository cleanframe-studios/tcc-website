"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
    { 
      name: 'About', 
      href: '/about',
      dropdown: [
        { name: 'Mission', href: '/about' },
        { name: 'Vision', href: '/about' },
        { name: 'Socials', href: '/about' },
      ]
    },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Educational Conferences', href: '/services' },
        { name: 'Insight Hour & Broadcasts', href: '/services' },
        { name: 'Tax Clarity Cards', href: '/services' },
        { name: 'Community Learning Hubs', href: '/services' },
        { name: 'CSR & Outreach', href: '/services' },
      ]
    },
    { 
      name: 'Resources', 
      href: '/resources',
      dropdown: [
        { name: 'Statutes & Guidelines', href: '/resources' },
        { name: 'IRS Website', href: '/resources' },
        { name: 'Frequently Asked Questions', href: '/resources' },
      ]
    },
    { 
      name: 'Calculator', 
      href: '/calculator',
      dropdown: [
        { name: 'Individual / PAYE', href: '/calculator#individual' },
        { name: 'VAT', href: '/calculator#vat' },
        { name: 'Company Tax', href: '/calculator#company' },
      ]
    },
    { 
      name: 'Contact', 
      href: '/contact',
      dropdown: [
        { name: 'Contact Details', href: '/contact' },
      ]
    },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 animate-slide-down ${
        !isTransparent 
          ? "bg-white border-b border-slate-200 shadow-sm" 
          : "bg-white/10 backdrop-blur-xl border-b border-white/20"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image src="/tcc_logo.png" alt="Tax Clinic Corner Logo" width={160} height={40} priority className="h-8 sm:h-10 w-auto object-contain" />
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
        <div className="hidden md:flex items-center gap-2 text-sm font-bold">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  onClick={item.onClick}
                  className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 transform active:scale-95 ${
                    isActive 
                      ? (!isTransparent 
                          ? "bg-blue-900 text-white shadow-md font-extrabold" 
                          : "bg-amber-400 text-slate-900 shadow-lg font-extrabold drop-shadow-[0_0_12px_rgba(251,191,36,0.8)]")
                      : (!isTransparent 
                          ? "text-slate-600 hover:text-blue-900 hover:bg-slate-100/60 font-medium" 
                          : "text-white/90 hover:text-amber-200 hover:bg-white/10 font-medium")
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180 ${isActive ? 'opacity-100' : 'opacity-70'}`} />
                  )}
                </Link>

                {/* Desktop Dropdown Menu (Liquid Glass, Sharp Edges, Morph Animation) */}
                {item.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform origin-top -translate-y-2 scale-y-95 group-hover:translate-y-0 group-hover:scale-y-100 min-w-[220px]">
                    <div className="bg-white/70 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-white/80 flex flex-col rounded-none overflow-hidden">
                      {item.dropdown.map((drop) => (
                        <Link 
                          key={drop.name} 
                          href={drop.href} 
                          className="px-5 py-3.5 hover:bg-white/90 hover:backdrop-blur-3xl text-slate-600 hover:text-blue-900 text-sm font-semibold transition-all border-b border-slate-200/40 last:border-0 hover:pl-6"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
          MOBILE DROPDOWN NAVIGATION LINKS
          ========================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl py-6 px-6 flex flex-col gap-3 text-left animate-fade-in-up max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.name} className="flex flex-col">
                <Link 
                  href={item.href}
                  onClick={item.onClick}
                  className={`px-4 py-3 rounded-xl text-base transition-all duration-200 flex items-center justify-between ${
                    isActive 
                      ? "bg-blue-50 text-blue-900 font-extrabold border-l-4 border-blue-900 shadow-sm" 
                      : "text-slate-700 font-bold hover:bg-slate-50 hover:text-blue-900"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-blue-900"></span>}
                </Link>
                
                {/* Mobile Sub-menu */}
                {item.dropdown && (
                  <div className="flex flex-col pl-6 mt-1 mb-2 border-l-2 border-slate-100 ml-4 gap-1">
                    {item.dropdown.map((drop) => (
                      <Link 
                        key={drop.name} 
                        href={drop.href} 
                        className="py-2 text-sm font-medium text-slate-500 hover:text-blue-900"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}