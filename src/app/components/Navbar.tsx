"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      dropdown: ['Mission', 'Vision', 'Socials'],
    },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        'Educational Conferences',
        'Insight Hour & Broadcasts',
        'Tax Clarity Cards',
        'Community Learning Hubs',
        'CSR & Outreach',
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
      dropdown: ['Statutes & Guidelines', 'IRS Website', 'Frequently Asked Questions'],
    },
    {
      name: 'Calculator',
      href: '/calculator',
      dropdown: ['Individual / PAYE', 'VAT', 'Company Tax'],
    },
    {
      name: 'Contact',
      href: '/contact',
      dropdown: ['Contact Details'],
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? 'border-b border-white/15 bg-white/5 backdrop-blur-2xl'
          : 'border-b border-slate-200/80 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Tax Clinic Corner home">
          <Image
            src="/tcc_logo.png"
            alt="Tax Clinic Corner Logo"
            width={160}
            height={40}
            priority
            className="h-8 w-auto object-contain sm:h-10"
          />
          <span
            className={`text-sm font-extrabold tracking-tighter transition-colors duration-300 sm:text-xl ${
              isTransparent ? 'text-white drop-shadow-[0_8px_25px_rgba(15,23,42,0.55)]' : 'text-slate-900'
            }`}
          >
            TAX CLINIC CORNER.
          </span>
        </Link>

        <div className="hidden items-center gap-1.5 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <div key={item.name} className="group relative">
                <Link
                  href={item.href}
                  onClick={item.onClick}
                  className={`relative flex items-center px-4 py-2.5 transition-all duration-300 ease-out ${
                    isActive
                      ? isTransparent
                        ? 'rounded-none bg-amber-300/90 text-slate-950 shadow-[0_10px_30px_rgba(251,191,36,0.35)]'
                        : 'rounded-none bg-slate-900 text-white shadow-[0_10px_30px_rgba(15,23,42,0.15)]'
                      : isTransparent
                        ? 'text-white/90 hover:bg-white/5 hover:text-white'
                        : 'text-slate-700 hover:bg-slate-100/80 hover:text-slate-900'
                  }`}
                >
                  {item.name}
                </Link>

                {item.dropdown && (
                  <div
                    className={`desktop-dropdown ${isTransparent ? 'desktop-dropdown--transparent' : 'desktop-dropdown--solid'}`}
                    aria-hidden="true"
                  >
                    <div className="desktop-dropdown__panel">
                      {item.dropdown.map((dropText, idx) => (
                        <div
                          key={`${item.name}-${dropText}-${idx}`}
                          className={`desktop-dropdown__item ${isTransparent ? 'desktop-dropdown__item--transparent' : 'desktop-dropdown__item--solid'}`}
                        >
                          {dropText}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`rounded-lg p-2 transition-colors md:hidden ${
            isTransparent ? 'text-white' : 'text-slate-800'
          }`}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full border-b border-slate-200 bg-white/95 px-6 py-5 shadow-[0_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={item.onClick}
                  className={`px-4 py-3 text-base font-bold transition-all duration-200 ${
                    isActive
                      ? 'border-l-4 border-blue-900 bg-blue-50 text-blue-900'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
