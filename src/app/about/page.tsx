"use client";

import { ShieldCheck, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent">
      
      {/* SECTION 1: Header (Light/White) */}
      <section className="tcc-canvas pt-28 pb-20 px-6 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-blue-700 font-bold tracking-[0.3em] uppercase text-xs mb-4 block animate-fade-in-up">
            Our Institution
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
            Defining Fiscal Intelligence
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
            Tax Clinic Corner is a national think-tank dedicated to the modernization 
            and simplification of the Nigerian tax landscape through authoritative insights.
          </p>
        </div>
      </section>

      {/* SECTION 2: Pillars Grid (Dark Gradient) */}
      <section className="py-28 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-2">Core Foundations</h2>
            <p className="text-3xl font-extrabold">Driven by Purpose and Law</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Mission", text: "To simplify Nigerian tax laws and foster a transparent, efficient ecosystem through professional discourse." },
              { icon: Eye, title: "Vision", text: "A well-informed tax community characterized by voluntary compliance and high-level collaborative engagement." },
              { icon: ShieldCheck, title: "Integrity", text: "We lead by the law, ensuring every strategy provided is rooted in absolute fiscal compliance and integrity." }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/20"
              >
                <item.icon className="w-12 h-12 text-blue-300 mb-8 transition-colors duration-500" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Socials (Light/White - Alternating back) */}
      <section className="py-24 px-6 tcc-canvas border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Digital Community
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Connect With Our Socials
          </h2>
          <p className="text-slate-600 mb-12 max-w-xl mx-auto text-base leading-relaxed">
            Join the conversation and stay updated with the latest tax policies, professional insights, and regulatory frameworks across our official channels.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            
            {/* Icons with dark styling for light background */}
            {[
              { name: "LinkedIn", url: "https://www.linkedin.com/company/taxcliniccorner/", color: "hover:bg-[#0A66C2]", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
              { name: "X", url: "https://x.com/TaxClinicCorner", color: "hover:bg-black", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { name: "Facebook", url: "https://www.facebook.com/share/1ZpdC82EFd/", color: "hover:bg-[#1877F2]", path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
              { name: "Instagram", url: "https://www.instagram.com/taxcliniccorner", color: "hover:bg-[#E4405F]", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
              { name: "YouTube", url: "https://www.youtube.com/@taxcliniccorner", color: "hover:bg-[#FF0000]", path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-lg hover:border-transparent transition-all duration-300 group hover:-translate-y-1.5 ${social.color}`}
                title={social.name}
              >
                <svg className="w-7 h-7 fill-slate-600 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}