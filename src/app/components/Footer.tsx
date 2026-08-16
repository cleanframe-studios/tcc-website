export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="text-slate-500 text-sm font-medium">
          © 2026 Tax Clinic Corner. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500">
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
    </footer>
  );
}