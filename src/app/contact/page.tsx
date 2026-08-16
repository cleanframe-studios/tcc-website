import { Mail, Briefcase, GraduationCap } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-transparent">
      
      {/* SECTION 1: Light Textured Canvas (Header with Instant Page-Load Animation) */}
      <section className="tcc-canvas pt-28 pb-20 px-6 border-b border-slate-200/60">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-in-up">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
            Direct Access to <br/> Fiscal Intelligence.
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
            Reach out to our advisory team. We maintain a strict digital-first communication protocol to ensure every inquiry is routed to the correct specialist.
          </p>
        </div>
      </section>

      {/* SECTION 2: Rich Moving Blue Gradient (Cards & Fallback) */}
      <section className="py-28 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Advisory Card */}
            <a 
              href="mailto:advisory@taxcliniccorner.com"
              className="group block p-10 md:p-12 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/20 shadow-2xl text-center btn-shine"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-extrabold text-white mb-2">
                Corporate Advisory
              </h2>
              <p className="text-sm font-semibold text-blue-200 mb-6">
                advisory@taxcliniccorner.com
              </p>
              <p className="text-blue-100 leading-relaxed text-sm">
                For tax planning, regulatory compliance guidance, and corporate structuring consultations.
              </p>
            </a>

            {/* Clinics Card */}
            <a 
              href="mailto:info@taxcliniccorner.com"
              className="group block p-10 md:p-12 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/20 shadow-2xl text-center btn-shine"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-xl font-extrabold text-white mb-2">
                Clinics & Education
              </h2>
              <p className="text-sm font-semibold text-blue-200 mb-6">
                info@taxcliniccorner.com
              </p>
              <p className="text-blue-100 leading-relaxed text-sm">
                For information regarding upcoming tax training sessions, workshops, and general inquiries.
              </p>
            </a>

          </div>

          {/* Global Fallback - FIXED FOR MOBILE */}
          <div className="flex justify-center w-full">
            <a 
              href="mailto:hello@taxcliniccorner.com"
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-6 sm:px-8 py-5 sm:py-4 rounded-3xl sm:rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-linear-to-r hover:from-blue-800 hover:to-blue-900 hover:border-blue-700 w-full max-w-[90%] sm:max-w-fit group"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-blue-200 group-hover:text-blue-100 transition-colors">
                <Mail className="w-4 h-4" />
                <span>General Inbox:</span>
              </div>
              <span className="text-white font-extrabold break-word max-w-full text-center text-[15px] sm:text-base">
                hello@taxcliniccorner.com
              </span>
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}