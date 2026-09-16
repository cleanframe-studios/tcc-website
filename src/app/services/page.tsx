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
    <main className="min-h-screen bg-transparent">
      <section className="tcc-canvas pt-28 pb-20 px-6 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-blue-700 font-bold tracking-[0.3em] uppercase text-xs mb-4 block animate-fade-in-up">
            Core Activities
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
            Bridging the Knowledge Gap
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
            Explore how TCC Educational Media delivers actionable tax intelligence through high-impact media, interactive events, and community-driven platforms.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-blue-300/25 bg-linear-to-br from-blue-800/95 via-blue-900/95 to-slate-950 p-6 shadow-[0_24px_70px_rgba(2,12,48,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-300/55 hover:shadow-[0_28px_80px_rgba(2,12,48,0.42)] sm:p-8 md:flex-row md:gap-8">
                <div className="shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-300/35 bg-linear-to-br from-amber-300/25 via-white/10 to-blue-950/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_10px_30px_rgba(2,12,48,0.25)] transition-all duration-500 group-hover:border-amber-200/75 group-hover:from-amber-300/40 group-hover:to-blue-900/50 sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 text-amber-300 transition-colors duration-300 group-hover:text-amber-100 sm:h-8 sm:w-8" />
                  </div>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h2 className="mb-3 break-words text-xl font-bold text-white sm:text-2xl">{service.title}</h2>
                  <p className="break-words leading-relaxed text-blue-100/90">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
