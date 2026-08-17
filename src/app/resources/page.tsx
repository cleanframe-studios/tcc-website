import { Download, FileText } from 'lucide-react';

export default function Resources() {
  const documents = [
    {
      id: 'ntaa',
      code: 'NTAA',
      name: 'Nigerian Tax Administration Act 2025',
      description: 'Comprehensive statutory guidelines for tax administration, assessment procedures, and compliance across jurisdictions.',
      file: '/documents/NTAA.pdf'
    },
    {
      id: 'nta',
      code: 'NTA',
      name: 'Nigeria Tax Act 2025',
      description: 'The foundational fiscal framework governing national tax obligations, duties, and statutory exemptions.',
      file: '/documents/NTA.pdf'
    },
    {
      id: 'jrb',
      code: 'JRB',
      name: 'Joint Revenue Board Establishment Act 2025',
      description: 'Unified operational standards, inter-state harmonization directives, and administrative protocols.',
      file: '/documents/JTB.pdf'
    },
    {
      id: 'nrs',
      code: 'NRS',
      name: 'Nigeria Revenue Service Establishment Act 2025',
      description: 'Official revenue mobilization policies, tax collection directives, and institutional modernization guidelines.',
      file: '/documents/NRS.pdf'
    }
  ];

  return (
    <main className="min-h-screen bg-transparent">
      
      {/* SECTION 1: Header Canvas */}
      <section className="tcc-canvas pt-32 pb-20 px-6 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-in-up">
            Official Repository
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
            Tax Laws & Regulatory <br/> Documents.
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
            Access and download verified statutory acts, administrative frameworks, and official regulatory guidelines.
          </p>
        </div>
      </section>

      {/* SECTION 2: Download Grid */}
      <section className="py-28 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((doc) => (
              <div 
                key={doc.id} 
                className="p-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:bg-white/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shadow-sm text-white">
                      <FileText className="w-7 h-7" />
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 font-extrabold text-xs tracking-wider">
                      {doc.code}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-white mb-3">
                    {doc.name}
                  </h2>
                  <p className="text-blue-100 leading-relaxed text-sm mb-8">
                    {doc.description}
                  </p>
                </div>

                <a 
                  href={doc.file}
                  download
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-white text-blue-900 text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-102 active:scale-95 hover:bg-blue-50 shadow-xl btn-shine"
                >
                  <Download className="w-4 h-4" /> Download Official PDF
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}