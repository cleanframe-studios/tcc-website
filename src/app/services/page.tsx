"use client";

import { FileText, Heart, MessageSquare, Mic, Presentation } from 'lucide-react';

const services = [
  {
    icon: Presentation,
    title: "Educational Conferences & Hybrid Events",
    description: "Hosting national symposiums, public seminars, and high-level panel discussions, including our annual anniversary symposium, featuring key policymakers, industry leaders, and guest experts."
  },
  {
    icon: Mic,
    title: "TCC Insight Hour & Media Broadcasts",
    description: "Producing digital research broadcasts, live webinars, podcasts, and streams dedicated to demystifying direct assessment, presumptive tax, e-commerce taxation, and national fiscal policy."
  },
  {
    icon: FileText,
    title: "Tax Clarity Cards & Publications",
    description: "Creating bite-sized educational assets, visual slide summaries, and deep-dive research materials that break down dense statutory updates into clear, digestible public guides."
  },
  {
    icon: MessageSquare,
    title: "Community Learning Hubs",
    description: "Operating structured, interactive digital communities across platforms, with dedicated technical Q&A channels and networking lounges for continuous policy discourse."
  },
  {
    icon: Heart,
    title: "CSR & Educational Outreach",
    description: "Executing community initiatives, including student supply distribution campaigns and educational mini-documentaries, to drive tangible social impact alongside civic literacy."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* AMBIENT LIQUID BACKGROUND WITH DEBACLED ANIMATION */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes move-blob-1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes move-blob-2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-50px, 30px) scale(0.95); }
            66% { transform: translate(40px, -20px) scale(1.05); }
          }
          .animate-blob-1 { animation: move-blob-1 12s infinite ease-in-out; }
          .animate-blob-2 { animation: move-blob-2 15s infinite ease-in-out; }
        `}} />
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-300/30 to-blue-600/10 blur-[100px] animate-blob-1" />
        <div className="absolute top-[20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-amber-300/20 to-orange-400/10 blur-[120px] animate-blob-2" />
        <div className="absolute bottom-[-10%] left-[20%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-400/20 to-cyan-300/10 blur-[130px] animate-blob-1" style={{ animationDelay: '-5s' }} />
      </div>

      {/* HEADER SECTION */}
      <section className="relative z-10 pt-32 pb-16 px-6 border-b border-white/40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-white/60 backdrop-blur-md border border-white shadow-sm">
            <span className="text-blue-700 font-extrabold tracking-[0.2em] uppercase text-xs">
              Core Activities
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 mt-2 mb-6 tracking-tight animate-fade-in-up">
            Bridging the Knowledge Gap
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
            Explore how TCC Educational Media delivers actionable tax intelligence through high-impact media, interactive events, and community-driven platforms.
          </p>
        </div>
      </section>

      {/* LIQUID GLASS SERVICES LIST */}
      <section className="relative z-10 px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article 
                key={service.title} 
                className="group relative flex flex-col md:flex-row gap-6 md:gap-8 p-8 rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-700 ease-out hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_24px_56px_rgba(30,58,138,0.08)] hover:border-blue-100 overflow-hidden"
              >
                {/* Subtle internal gradient wash that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-blue-50/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />

                {/* Icon Container */}
                <div className="relative z-10 shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-white/40 border border-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-700 ease-out group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(245,158,11,0.15)]">
                    <Icon className="h-8 w-8 text-amber-500 transition-colors duration-700 group-hover:text-blue-700" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col justify-center min-w-0">
                  <h2 className="mb-3 break-words text-2xl font-extrabold text-slate-900 tracking-tight transition-colors duration-500 group-hover:text-blue-950">
                    {service.title}
                  </h2>
                  <p className="break-words leading-relaxed text-slate-600 font-medium transition-colors duration-500 group-hover:text-slate-700">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      
    </main>
  );
}