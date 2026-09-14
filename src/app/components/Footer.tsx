import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
          <div className="max-w-md">
            <Image src="/tcc_logo.png" alt="Tax Clinic Corner Logo" width={160} height={40} className="h-10 w-auto object-contain mx-auto md:mx-0 mb-4" />
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Tax Clinic Corner is a national think-tank dedicated to simplifying Nigerian tax law through authoritative insights and professional discourse.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-blue-900/5 border border-blue-900/15 rounded-full text-blue-900 text-xs font-extrabold tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              CAC REGISTRATION: RC - 9820867
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500 md:pt-10">
            <a href="https://www.linkedin.com/company/taxcliniccorner/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/taxcliniccorner" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/share/1ZpdC82EFd/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">
              Facebook
            </a>
            <a href="https://x.com/TaxClinicCorner" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">
              X
            </a>
            <a href="https://www.youtube.com/@taxcliniccorner" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">
              YouTube
            </a>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500">
          <p>© 2026 Tax Clinic Corner. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Corporate Affairs Commission (RC - 9820867)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}