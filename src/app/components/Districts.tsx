import React from 'react';
import { MapPin } from 'lucide-react';

const DISTRICTS = [
  "Khulna", "Bagerhat", "Satkhira", "Jessore", "Narail",
  "Kushtia", "Jhenaidah", "Magura", "Meherpur", "Chuadanga"
];

export default function Districts() {
  return (
    <section className="w-full bg-white border-t border-[#F8FAFC]">
      
      {/* ── Full-Width Jurisdiction Banner ── */}
      <div className="relative overflow-hidden bg-[#0F172A] py-20 md:py-28">
        {/* Subtle diagonal line pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(-45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '30px 30px'
          }}
        />
        {/* Gold left border accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5A880]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
              Jurisdiction
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Serving 10 Distinct Districts<br className="hidden md:block" /> of Khulna Division
            </h2>
          </div>

          <a
            href="#"
            className="shrink-0 group inline-flex items-center gap-3 border border-white/20 hover:border-[#C5A880] text-white px-8 py-5 text-[13px] font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-[#C5A880]/10"
          >
            <MapPin className="size-4" />
            Explore Map
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* ── District Pills Strip ── */}
      <div className="bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-3 items-center">
          {DISTRICTS.map((district, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-slate-600 hover:text-[#C5A880] hover:border-[#C5A880] border border-slate-200 transition-colors duration-200 cursor-default"
            >
              <span className="size-1.5 rounded-full bg-[#C5A880] shrink-0" />
              {district}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
