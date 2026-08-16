export default function Hero() {
  return (
    <section className="py-20 px-6 text-center bg-white">
      <div className="max-w-3xl mx-auto">
        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
          Tax Clinic Corner
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight">
          Master Tax Compliance with Clarity.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          Professional tax education and regulatory guidance designed for the modern business landscape.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition">
            Join the Clinic
          </button>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium border border-slate-200 hover:border-slate-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}