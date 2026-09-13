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
              <article key={service.title} className="group flex flex-col md:flex-row gap-5 md:gap-8 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                <div className="shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 break-words">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed break-words">{service.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
