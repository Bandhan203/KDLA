import React from 'react';
const imgPresident = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop";
const imgGenSec = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop";


const LEADERS = [
  {
    img: imgPresident,
    role: "President",
    name: "Md. Imam Hosaain",
    quote: "Justice is not a privilege — it is the foundation upon which every civilised society must stand and thrive.",
  },
  {
    img: imgGenSec,
    role: "General Secretary",
    name: "Mohammad Abul Kalam Khan",
    quote: "Our duty is to serve with integrity, to mentor with wisdom, and to unite our fraternity with purpose and honour.",
  },
];

export default function Speeches() {
  return (
    <section className="py-28 bg-white border-t border-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4">Leadership</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[#0F172A] leading-tight">
            Messages from Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {LEADERS.map((leader) => (
            <div
              key={leader.name}
              className="group relative border border-[#F8FAFC] hover:border-[#C5A880]/30 p-10 md:p-12 transition-all duration-500 bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.07)]"
            >
              {/* Gold top-bar accent */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C5A880] group-hover:w-full transition-all duration-500" />

              {/* Large decorative quote mark */}
              <div className="absolute top-8 right-10 font-serif text-[140px] leading-none text-[#F8FAFC] select-none pointer-events-none">
                "
              </div>

              <div className="flex items-center gap-5 mb-10 relative z-10">
                <div className="size-20 rounded-full overflow-hidden border-2 border-[#F8FAFC] shrink-0 shadow-md">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-1">{leader.role}</p>
                  <h3 className="font-serif text-xl font-semibold text-[#0F172A]">
                    {leader.name}
                  </h3>
                </div>
              </div>

              <blockquote className="relative z-10">
                <p className="font-google-sans text-xl md:text-2xl text-[#0F172A] leading-relaxed italic font-medium mb-8">
                  "{leader.quote}"
                </p>
              </blockquote>

              <a
                href="#"
                className="relative z-10 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wider text-[#0F172A] hover:text-[#C5A880] transition-colors uppercase group/link"
              >
                Read Full Message
                <span className="inline-block transition-transform group-hover/link:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
