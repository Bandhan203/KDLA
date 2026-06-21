import React from 'react';
import { Scale, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router';

const PILLARS = [
  {
    icon: Scale,
    title: "Uphold Justice",
    description: "Protecting the professional rights, dignity, and welfare of every member while championing equal access to justice for all.",
  },
  {
    icon: BookOpen,
    title: "Foster Excellence",
    description: "Elevating the legal profession through continuous education, research, training, and the promotion of cutting-edge legal tools.",
  },
  {
    icon: Users,
    title: "Build Community",
    description: "Strengthening unity among Khulna Division lawyers through professional solidarity, cultural engagement, and humanitarian service.",
  },
];

export default function AboutKDLA() {
  return (
    <section className="py-28 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* About Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-24">
          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">About KDLA</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0F172A] leading-tight">
              A Century of Legal<br />Excellence in Bangladesh
            </h2>
          </div>
          <div>
            <p className="text-[16px] text-slate-600 leading-[1.9] mb-6">
              The Khulna Divisional Lawyers Association (KDLA) is a distinguished professional body representing lawyers from the ten districts of Khulna Division, established in 1996. We have consistently worked to uphold the dignity, integrity, and excellence of the legal profession.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wider text-[#0F172A] hover:text-[#C5A880] transition-colors uppercase group">
              Our Full Story <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* 3-Pillar Mission Grid */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">Our Mission</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
            {PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="group bg-white p-10 md:p-12 hover:bg-[#0F172A] transition-colors duration-500 cursor-default"
              >
                <div className="size-14 rounded-none bg-[#F8FAFC] group-hover:bg-white/10 flex items-center justify-center mb-8 transition-colors duration-500">
                  <pillar.icon className="size-6 text-[#C5A880]" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#0F172A] group-hover:text-white mb-4 transition-colors duration-500">
                  {pillar.title}
                </h3>
                <p className="text-[15px] text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors duration-500">
                  {pillar.description}
                </p>
                <div className="mt-8 w-8 h-[2px] bg-[#C5A880] group-hover:w-16 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Vision Quote Block */}
        <div className="mt-24 relative overflow-hidden bg-[#0F172A] p-12 md:p-20">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)'
          }} />
          <div className="relative z-10 max-w-3xl">
            <div className="w-10 h-[2px] bg-[#C5A880] mb-8" />
            <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed italic font-medium mb-8">
              "KDLA envisions a united, empowered, and highly respected legal fraternity — serving as a catalyst for the socio-economic, legal, and cultural advancement of southern Bangladesh."
            </p>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880]">Our Vision</span>
          </div>
        </div>

      </div>
    </section>
  );
}
