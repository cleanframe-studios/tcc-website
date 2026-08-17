"use client";

import { useState } from 'react';
import { Download, FileText, Search } from 'lucide-react';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');

  const documents = [
    {
      id: 'ntaa',
      code: 'NTAA',
      name: 'Nigerian Tax Administration Act 2025',
      file: '/documents/NTAA.pdf'
    },
    {
      id: 'nta',
      code: 'NTA',
      name: 'Nigeria Tax Act 2025',
      file: '/documents/NTA.pdf'
    },
    {
      id: 'jrb',
      code: 'JRB',
      name: 'Joint Revenue Board Establishment Act 2025',
      file: '/documents/JTB.pdf'
    },
    {
      id: 'nrs',
      code: 'NRS',
      name: 'Nigeria Revenue Service Establishment Act 2025',
      file: '/documents/NRS.pdf'
    }
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-transparent">
      
      {/* SECTION 1: Header Canvas */}
      <section className="tcc-canvas pt-32 pb-16 px-6 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-in-up">
            Official Repository
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
            Tax Laws & Regulatory <br/> Documents.
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-base leading-relaxed animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
            Access and download verified statutory acts and regulatory guidelines instantly.
          </p>
        </div>
      </section>

      {/* SECTION 2: Search & Document Rows */}
      <section className="py-16 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white min-h-[50vh]">
        <div className="max-w-4xl mx-auto">
          
          {/* Search Filter Bar */}
          <div className="relative mb-10">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </span>
            <input 
              type="text"
              placeholder="Search tax acts or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-blue-200 shadow-xl focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Document Rows */}
          <div className="flex flex-col gap-4">
            {filteredDocuments.length === 0 ? (
              <div className="text-center py-12 text-blue-200 font-medium bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                No documents found matching &quot;{searchQuery}&quot;.
              </div>
            ) : (
              filteredDocuments.map((doc) => (
                <div 
                  key={doc.id}
                  className="group flex items-center justify-between p-5 md:p-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white/20 hover:border-white/30"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/15 rounded-xl flex items-center justify-center shrink-0 text-white">
                      <FileText className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <span className="inline-block text-amber-300 font-bold text-xs tracking-wider mb-1">
                        {doc.code}
                      </span>
                      <h2 className="text-base md:text-lg font-extrabold text-white group-hover:text-amber-200 transition-colors">
                        {doc.name}
                      </h2>
                    </div>
                  </div>

                  <a 
                    href={doc.file}
                    download
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white text-blue-900 text-xs md:text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md shrink-0 btn-shine"
                  >
                    <Download className="w-4 h-4" /> 
                    <span className="hidden sm:inline">Download</span>
                  </a>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

    </main>
  );
}