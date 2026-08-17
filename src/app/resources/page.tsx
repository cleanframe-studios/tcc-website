"use client";

import { useState } from 'react';
import { Download, FileText, Search, ExternalLink, Building2 } from 'lucide-react';

export default function Resources() {
  const [docSearch, setDocSearch] = useState('');
  const [stateSearch, setStateSearch] = useState('');

  const documents = [
    { id: 'ntaa', code: 'NTAA', name: 'Nigerian Tax Administration Act 2025', file: '/documents/NTAA.pdf' },
    { id: 'nta', code: 'NTA', name: 'Nigeria Tax Act 2025', file: '/documents/NTA.pdf' },
    { id: 'jrb', code: 'JRB', name: 'Joint Revenue Board Establishment Act 2025', file: '/documents/JTB.pdf' },
    { id: 'nrs', code: 'NRS', name: 'Nigeria Revenue Service Establishment Act 2025', file: '/documents/NRS.pdf' }
  ];

  const stateIRS = [
    { state: "Abia State", name: "Abia State Internal Revenue Service", url: "https://abiastate.gov.ng" },
    { state: "Adamawa State", name: "Adamawa State Internal Revenue Service", url: "https://adamawastate.gov.ng" },
    { state: "Akwa Ibom State", name: "Akwa Ibom State Internal Revenue Service", url: "https://aksirs.gov.ng" },
    { state: "Anambra State", name: "Anambra State Internal Revenue Service", url: "https://anambrairs.gov.ng" },
    { state: "Bauchi State", name: "Bauchi State Internal Revenue Service", url: "https://bauchiir.gov.ng" },
    { state: "Bayelsa State", name: "Bayelsa State Internal Revenue Service", url: "https://byirs.bayelsa.gov.ng" },
    { state: "Benue State", name: "Benue State Internal Revenue Service", url: "https://birs.be.gov.ng" },
    { state: "Borno State", name: "Borno State Internal Revenue Service", url: "https://bornoirs.bornostate.gov.ng" },
    { state: "Cross River State", name: "Cross River State Internal Revenue Service", url: "https://crirs.cr.gov.ng" },
    { state: "Delta State", name: "Delta State Internal Revenue Service", url: "https://dtirs.deltastate.gov.ng" },
    { state: "Ebonyi State", name: "Ebonyi State Internal Revenue Service", url: "https://ebonyi.gov.ng" },
    { state: "Edo State", name: "Edo State Internal Revenue Service", url: "https://irs.edostate.gov.ng" },
    { state: "Ekiti State", name: "Ekiti State Internal Revenue Service", url: "https://ekitistaterevenue.com" },
    { state: "Enugu State", name: "Enugu State Internal Revenue Service", url: "https://esirs.en.gov.ng" },
    { state: "FCT, Abuja", name: "Federal Capital Territory Internal Revenue Service", url: "https://fctirs.gov.ng" },
    { state: "Gombe State", name: "Gombe State Internal Revenue Service", url: "https://girs.gombe.state.ng" },
    { state: "Imo State", name: "Imo State Internal Revenue Service", url: "https://imoirs.imostate.gov.ng" },
    { state: "Jigawa State", name: "Jigawa State Internal Revenue Service", url: "https://jigawastate.gov.ng" },
    { state: "Kaduna State", name: "Kaduna State Internal Revenue Service", url: "https://kadirs.kdsg.gov.ng" },
    { state: "Kano State", name: "Kano State Internal Revenue Service", url: "https://kirs.gov.ng" },
    { state: "Katsina State", name: "Katsina State Internal Revenue Service", url: "https://ktsirs.katsinastate.gov.ng" },
    { state: "Kebbi State", name: "Kebbi State Internal Revenue Service", url: "https://kebbistate.gov.ng" },
    { state: "Kogi State", name: "Kogi State Internal Revenue Service", url: "https://kgirs.kogi.gov.ng" },
    { state: "Kwara State", name: "Kwara State Internal Revenue Service", url: "https://kwrs.kwara.gov.ng" },
    { state: "Lagos State", name: "Lagos State Internal Revenue Service (LIRS)", url: "https://www.lirs.gov.ng" },
    { state: "Nasarawa State", name: "Nasarawa State Internal Revenue Service", url: "https://nsirs.nasarawastate.gov.ng" },
    { state: "Niger State", name: "Niger State Internal Revenue Service", url: "https://irs.nigerstate.gov.ng" },
    { state: "Ogun State", name: "Ogun State Internal Revenue Service", url: "https://ogirs.ogunstate.gov.ng" },
    { state: "Ondo State", name: "Ondo State Internal Revenue Service", url: "https://odirs.ondo.gov.ng" },
    { state: "Osun State", name: "Osun State Internal Revenue Service", url: "https://osunirs.osun.state.ng" },
    { state: "Oyo State", name: "Oyo State Internal Revenue Service", url: "https://oyirs.oyostate.gov.ng" },
    { state: "Plateau State", name: "Plateau State Internal Revenue Service", url: "https://psirs.plateaustate.gov.ng" },
    { state: "Rivers State", name: "Rivers State Internal Revenue Service", url: "https://rivirs.ng" },
    { state: "Sokoto State", name: "Sokoto State Internal Revenue Service", url: "https://sokotostate.gov.ng" },
    { state: "Taraba State", name: "Taraba State Internal Revenue Service", url: "https://tarabastate.gov.ng" },
    { state: "Yobe State", name: "Yobe State Internal Revenue Service", url: "https://yobeirs.gov.ng" },
    { state: "Zamfara State", name: "Zamfara State Internal Revenue Service", url: "https://zamfarastate.gov.ng" }
  ];

  const filteredDocs = documents.filter(doc =>
    doc.name.toLowerCase().includes(docSearch.toLowerCase()) ||
    doc.code.toLowerCase().includes(docSearch.toLowerCase())
  );

  const filteredStates = stateIRS.filter(item =>
    item.state.toLowerCase().includes(stateSearch.toLowerCase()) ||
    item.name.toLowerCase().includes(stateSearch.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-transparent">
      
      {/* HEADER */}
      <section className="tcc-canvas pt-32 pb-16 px-6 border-b border-slate-200/65">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-in-up">
            Official Repository & Portals
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
            Tax Laws & State Revenue <br/> Directories.
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-base leading-relaxed animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
            Download verified statutory acts and access official portals for all state internal revenue services across Nigeria.
          </p>
        </div>
      </section>

      {/* SECTION 1: DOWNLOADABLE ACTS */}
      <section className="py-20 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white border-b border-blue-900/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-8 text-white flex items-center gap-3">
            <FileText className="w-6 h-6 text-amber-400" /> Statutory Tax Acts
          </h2>

          <div className="relative mb-8">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </span>
            <input 
              type="text"
              placeholder="Search tax acts..."
              value={docSearch}
              onChange={(e) => setDocSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder-blue-200 shadow-xl focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-4">
            {filteredDocs.map((doc) => (
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
                    <h3 className="text-base md:text-lg font-extrabold text-white group-hover:text-amber-200 transition-colors">
                      {doc.name}
                    </h3>
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
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: STATE IRS DIRECTORY */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-3">
              <Building2 className="w-6 h-6 text-amber-400" /> State Internal Revenue Services (SIRS) & FCT
            </h2>
            
            <div className="relative w-full md:w-72">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text"
                placeholder="Search state..."
                value={stateSearch}
                onChange={(e) => setStateSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredStates.map((item, index) => (
              <a 
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/15 hover:border-amber-400/50 transition-all duration-300"
              >
                <div>
                  <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                    {item.state}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-blue-200 transition-colors">
                    {item.name}
                  </h4>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}