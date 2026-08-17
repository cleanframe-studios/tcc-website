"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import HeroCursor from '@/app/components/HeroCursor';
import { Search } from 'lucide-react';

function AnimatedCounter({ end, suffix = "", duration = 2000, label }: { end: number, suffix?: string, duration?: number, label: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-5xl md:text-6xl font-extrabold text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.5)] mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs sm:text-sm font-bold text-blue-100 uppercase tracking-widest text-center">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const [bgState, setBgState] = useState<'video' | 'image'>('video');
  const [searchQuery, setSearchQuery] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (bgState === 'image') {
      const timer = setTimeout(() => {
        setBgState('video');
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [bgState]);

  const flyers = [
    "/TIH0.png", "/TIH1.png", "/TIH2.png", "/TIH3.png", 
    "/TIH4.png", "/TIH5.png", "/TIH6.png", "/TIH7.png", 
    "/TIH8.png", "/TIH9.png", "/TIH10.png", "/TIH11.png"
  ]; 
  
  const speakers = [
    { name: "Toluwalogo Odutayo", title: "Partner", role: "Deloitte", image: "/1.png" },
    { name: "Dr. Tolu Adegbie", title: "Former Exec. Chairman", role: "ODIRS", image: "/2.png" },
    { name: "Mallam Haruna Yahaya", title: "61st President", role: "ICAN", image: "/3.png" },
    { name: "Mr. Segun Tijani", title: "Head, HNWI Unit", role: "LIRS", image: "/4.png" },
    { name: "Dr. Oluwashola Ganiyu", title: "Managing Partner", role: "KJB Professional Services", image: "/5.png" },
    { name: "Amb. O. Ogunsanya", title: "Tax Official", role: "Ekiti State IRS", image: "/6.png" },
    { name: "Mr. Olumide E. Bewaji", title: "Tax Professional", role: "AIS Professional Services", image: "/7.png" },
    { name: "Prof. A. Adedokun", title: "Professor of Accounting", role: "Yavapai College, USA", image: "/8.png" },
    { name: "Mr. Samuel Agbeluyi", title: "16th President", role: "CITN", image: "/9.png" },
    { name: "Prof. Ishola Akintoye", title: "Prof. of Accounting", role: "Strategic Financial Mgt.", image: "/10.png" },
    { name: "Prof. Godwin Oyedokun", title: "Professor of Accounting", role: "Lead City University", image: "/11.png" },
    { name: "Dr. Zaid Abubakar", title: "Executive Chairman", role: "Kano State IRS", image: "/12.png" },
    { name: "Dr. Razak Jaiyeola", title: "54th President", role: "ICAN", image: "/13.png" },
    { name: "Mr. Olufemi Olarinde", title: "Head of Fiscal Reforms", role: "NRS", image: "/14.png" },
    { name: "Dr. John C. Nwabueze", title: "Chief Executive", role: "Nigeria Tax Ombud", image: "/15.png" },
    { name: "Dr. Mark Abani", title: "Coordinating Dean", role: "CITN", image: "/16.png" },
    { name: "Mr. Nosa Uwaifo", title: "Subject Matter Expert", role: "NRS", image: "/17.png" },
    { name: "Dr. Oladeji Akinyele", title: "CEO", role: "CSDC Consulting Nigeria", image: "/18.png" }
  ];

  const filteredSpeakers = speakers.filter(speaker =>
    speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    speaker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    speaker.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="relative min-h-screen bg-transparent">
      
      <HeroCursor />

      {/* FIXED PARALLAX CROSS-FADING BACKGROUND */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-blue-950">
        <img 
          src="/nrs.jpg" 
          alt="Tax Clinic Background" 
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${bgState === 'image' ? 'opacity-60' : 'opacity-0'}`}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={() => setBgState('image')}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${bgState === 'video' ? 'opacity-60' : 'opacity-0'}`}
        >
          <source src="/tcc-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10 pt-7 pb-12">
        <span className="text-blue-300 font-bold tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in-up shimmer-brand">
          Tax Clinic Corner
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 drop-shadow-2xl animate-fade-in-up animation-delay-200 opacity-0 [animation-fill-mode:forwards]">
          Master Tax Compliance <br/> with Clarity.
        </h1>
        <p className="text-lg md:text-xl text-blue-50 max-w-2xl leading-relaxed mb-12 drop-shadow-md animate-fade-in-up animation-delay-400 opacity-0 [animation-fill-mode:forwards]">
          Professional tax education and regulatory guidance designed for the modern business landscape.
        </p>
        <div className="flex gap-6 flex-col sm:flex-row animate-fade-in-up opacity-0 [animation-fill-mode:forwards]" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://forms.gle/gVJT1HFsKJQW8dtc6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-blue-900 text-base font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-linear-to-r hover:from-blue-800 hover:to-blue-900 hover:text-white text-center shadow-xl btn-shine"
          >
            Join the Clinic
          </a>
          <Link 
            href="/about"
            className="px-10 py-4 bg-transparent border-2 border-white text-white text-base font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-white/15 hover:border-blue-200 text-center btn-shine"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* SCROLLING CONTENT */}
      <div className="relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.25)]">
        
        <section className="py-24 px-6 tcc-canvas border-b border-slate-200/60">
          <div className="max-w-4xl mx-auto scroll-fade">
            <div className="p-10 md:p-14 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/80 shadow-xl text-center">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-3">
                About The Institution
              </h2>
              <p className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Defining Fiscal Intelligence
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Tax Clinic Corner is a national think-tank dedicated to the modernization and simplification of the Nigerian tax landscape through authoritative insights. We lead by the law, ensuring every strategy provided is rooted in absolute fiscal compliance and integrity.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white border-b border-blue-900/50">
          <div className="text-center mb-12 px-6 scroll-fade">
            <h2 className="text-2xl font-bold text-white">TCC Insight Hour</h2>
            <p className="text-blue-200 mt-2">Explore our past educational sessions</p>
          </div>
          <div className="overflow-hidden w-full scroll-fade">
            <div className="animate-marquee">
              {[...flyers, ...flyers].map((item, index) => (
                <div key={`${item}-${index}`} className="w-80 h-80 shrink-0 mx-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex items-center justify-center overflow-hidden shadow-lg">
                  <img src={item} alt={`TCC Insight Hour Flyer ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DISTINGUISHED SPEAKERS SECTION - NON-LOOPING GALLERY WITH SEARCH */}
        <section className="py-20 tcc-canvas border-b border-slate-200/60">
          <div className="max-w-6xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 scroll-fade">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Our Distinguished Speakers</h2>
              <p className="text-slate-500 mt-1">Industry leaders who have shared their expertise at TCC</p>
            </div>
            
            {/* Search Filter Bar */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text"
                placeholder="Search speakers or roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:border-blue-700 transition-colors"
              />
            </div>
          </div>
          
          {/* Non-Looping Horizontal Scroll Gallery with Fused Rectangular Cards */}
          <div className="max-w-6xl mx-auto px-6">
            {filteredSpeakers.length === 0 ? (
              <div className="text-center py-16 text-slate-500 font-medium">
                No speakers found matching &quot;{searchQuery}&quot;.
              </div>
            ) : (
              <div className="flex gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth scrollbar-thin">
                {filteredSpeakers.map((speaker, index) => (
                  <div 
                    key={`${speaker.name}-${index}`} 
                    className="w-72 shrink-0 bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Rectangular Image Box */}
                    <div className="w-full h-72 bg-slate-100 overflow-hidden relative">
                      <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                    </div>
                    {/* Fused Name & Title Box */}
                    <div className="p-5 bg-white flex flex-col justify-between grow text-center">
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                        {speaker.name}
                      </h3>
                      <div className="mt-2">
                        <p className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                          {speaker.title}
                        </p>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">
                          {speaker.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ELITE NETWORK SECTION */}
        <section className="py-24 px-6 bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 animate-moving-gradient text-white text-center">
          <div className="max-w-4xl mx-auto scroll-fade">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.581 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.205.534 1.292.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z"/></svg>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              The Elite Network
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
              Join our exclusive WhatsApp community. It is the premier space to ask complex tax questions, network with industry professionals, and stay instantly updated on regulatory shifts.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-32 mb-14">
              <AnimatedCounter end={15} suffix="+" label="High-Level Professionals" duration={2000} />
              <AnimatedCounter end={1000} suffix="+" label="Active Members" duration={2500} />
            </div>

            <a 
              href="https://forms.gle/gVJT1HFsKJQW8dtc6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-white text-blue-900 font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-blue-50 shadow-xl btn-shine"
            >
              Apply to Join the Community
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}