import { ShieldCheck, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent">
      
      {/* SECTION 1: Light Textured Canvas (Header with Instant Page-Load Animation) */}
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

      {/* SECTION 2: Rich Moving Blue Gradient (Pillars Grid) */}
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

    </main>
  );
}