"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollCueRef.current?.classList.toggle("is-hidden", window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=250%", 
          scrub: 1,      
          pin: true,     
          anticipatePin: 1,
        },
      });

      // 1. Text Reveal Animation (Left to Right)
      // कवर की चौड़ाई कम होगी, जिससे नीचे का वाइट टेक्स्ट दिखेगा
      tl.to(coverRef.current, { width: "0%", ease: "none" }, 0);

      // 2. Metrics Reveal Animation
      tl.to(
        ".metric-box",
        { opacity: 1, y: 0, scale: 1, stagger: 0.15, ease: "power2.out" },
        0 
      );

    }, containerRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <main className="bg-[#1a1a1a] min-h-[350vh] text-white font-sans overflow-x-hidden selection:bg-yellow-500/30">
      
      {/* Pinned Hero Section with Golden Background */}
      <section
        ref={containerRef}
        className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#F3E5AB] via-[#D4AF37] to-[#AA7C11] flex flex-col justify-between py-12 md:py-20"
      >
        
        {/* TOP METRICS (Unique Premium Colors) */}
        <div className="w-full flex justify-center gap-6 md:gap-24 px-4 z-20">
          {/* Deep Ruby / Maroon Box */}
          <div className="metric-box opacity-0 translate-y-10 scale-95 bg-gradient-to-br from-[#3E1115] to-[#1A0709] border border-red-900/40 p-6 md:p-8 rounded-xl w-44 md:w-64 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            <h3 className="text-4xl md:text-5xl font-bold text-[#F3E5AB]">58%</h3>
            <p className="text-xs md:text-sm text-neutral-300 mt-2 font-medium tracking-wide uppercase">Engagement</p>
          </div>
          {/* Midnight Sapphire / Dark Blue Box */}
          <div className="metric-box opacity-0 translate-y-10 scale-95 bg-gradient-to-br from-[#0F2027] to-[#050B0E] border border-blue-900/40 p-6 md:p-8 rounded-xl w-44 md:w-64 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            <h3 className="text-4xl md:text-5xl font-bold text-[#F3E5AB]">27%</h3>
            <p className="text-xs md:text-sm text-neutral-300 mt-2 font-medium tracking-wide uppercase">Load Times</p>
          </div>
        </div>

        {/* CENTER TEXT TRACK (The "Road" - Deep Black) */}
        <div className="relative w-full h-40 md:h-56 flex items-center bg-[#070707] border-y border-[#1a1a1a] shadow-[0_15px_50px_rgba(0,0,0,0.5)] overflow-hidden my-auto">
          
          {/* Background Text (Pure White) */}
          <h1 className="absolute left-4 md:left-16 text-[10vw] md:text-[8vw] font-black uppercase tracking-[0.1em] text-white whitespace-nowrap z-0">
            WELCOME ITZFIZZ
          </h1>

          {/* Black Cover with Golden Blade */}
          <div
            ref={coverRef}
            className="absolute top-0 right-0 h-full w-full bg-[#070707] z-10 flex"
          >
            {/* The Golden Blade / Revealer */}
            <div className="h-full w-2 md:w-3 bg-gradient-to-b from-[#F3E5AB] via-[#D4AF37] to-[#F3E5AB] shadow-[0_0_30px_10px_rgba(212,175,55,0.6)] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-8 bg-white blur-xl opacity-70 rounded-full" />
            </div>
            {/* Solid Black Background to hide text */}
            <div className="h-full flex-1 bg-[#070707]" />
          </div>

        </div>

        {/* BOTTOM METRICS (Unique Premium Colors) */}
        <div className="w-full flex justify-center gap-6 md:gap-24 px-4 z-20">
          {/* Dark Amethyst / Deep Purple Box */}
          <div className="metric-box opacity-0 translate-y-10 scale-95 bg-gradient-to-br from-[#231536] to-[#0D0714] border border-purple-900/40 p-6 md:p-8 rounded-xl w-44 md:w-64 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            <h3 className="text-4xl md:text-5xl font-bold text-[#F3E5AB]">23%</h3>
            <p className="text-xs md:text-sm text-neutral-300 mt-2 font-medium tracking-wide uppercase">Bounce Rate</p>
          </div>
          {/* Rich Bronze / Dark Espresso Box */}
          <div className="metric-box opacity-0 translate-y-10 scale-95 bg-gradient-to-br from-[#2C1E16] to-[#120C09] border border-orange-900/40 p-6 md:p-8 rounded-xl w-44 md:w-64 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            <h3 className="text-4xl md:text-5xl font-bold text-[#F3E5AB]">40%</h3>
            <p className="text-xs md:text-sm text-neutral-300 mt-2 font-medium tracking-wide uppercase">Conversion</p>
          </div>
        </div>

        <div ref={scrollCueRef} className="scroll-cue" aria-hidden="true">
          <span>Scroll to reveal</span>
          <span className="scroll-cue-arrow">↓</span>
          <span className="scroll-cue-line" />
        </div>

      </section>

    </main>
  );
}