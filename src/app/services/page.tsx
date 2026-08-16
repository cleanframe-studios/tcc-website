import { BookOpen, ShieldCheck, Landmark } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Corporate Tax Advisory",
      description: "Comprehensive tax planning and structuring designed to optimize compliance and support sustainable corporate growth.",
      icon: Landmark,
    },
    {
      title: "Regulatory Compliance",
      description: "End-to-end guidance on corporate governance, seamless annual returns, and strategic entity registration structuring.",
      icon: ShieldCheck,
    },
    {
      title: "Tax Education Clinics",
      description: "High-impact training sessions and professional development workshops focused on navigating modern tax policies.",
      icon: BookOpen,
    }
  ];

  return (
    <main className="min-h-screen bg-transparent">
      
      {/* SECTION 1: Light Textured Canvas (Header with Instant Page-Load Animation) */}
      <section className="tcc-canvas pt-28 pb-20 px-6 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-xs mb-4 block animate-fade-in-up">
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
            Strategic Services for <br/> Modern Business.
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
            Delivering uncompromising clarity and regulatory excellence through our core service pillars.
          </p>
        </div>
      </section>

      {/* SECTION 2: Rich Moving Blue Gradient (Services Grid) */}
      <section className="py-28 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group p-10 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/20 shadow-2xl cursor-pointer"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}