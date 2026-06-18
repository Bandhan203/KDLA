import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const MISSION_POINTS = [
  "Protecting and advancing professional rights, interests, and welfare of members.",
  "Promoting access to justice with free/affordable legal aid to the underprivileged.",
  "Enhancing professional excellence through continuous legal education and training.",
  "Encouraging legal research, publications, and intellectual discourse.",
  "Responding to regional needs with humanitarian assistance during natural disasters.",
  "Supporting holistic development by promoting sports, literature, culture, and history.",
  "Strengthening unity among Khulna Division lawyers in Dhaka through reunions and events.",
  "Building relationships with national and international legal/academic institutions.",
  "Promoting the use of technology and modern legal tools for efficiency.",
  "Encouraging pro bono work and legal awareness for citizens' rights.",
  "Promoting equality, inclusiveness, and a supportive environment for all members.",
  "Developing welfare programs like healthcare and emergency aid for members."
];

export default function AboutKDLA() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* About Us */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="font-['Barlow_Condensed',sans-serif] text-4xl md:text-5xl font-medium text-slate-900 mb-6 uppercase tracking-wide">
            About KDLA
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-8 rounded-full" />
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            The Khulna Divisional Lawyers Association (KDLA) is a distinguished professional body representing lawyers practicing in Dhaka who trace their roots to the Khulna Division. The Association brings together members from the ten districts of the region—Khulna, Bagerhat, Satkhira, Jessore, Narail, Kushtia, Jhenaidah, Magura, Meherpur, and Chuadanga—fostering a strong sense of regional identity, unity, and professional solidarity.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Established in 1996, KDLA has consistently worked to uphold the dignity, integrity, and excellence of the legal profession. Over the years, it has grown into a vibrant and respected platform that supports its members through professional collaboration, mentorship, and welfare initiatives. KDLA is committed not only to the advancement of its members but also to broader social responsibility. The Association actively promotes access to justice, engages in humanitarian efforts, and contributes to the legal, social, and cultural development of the Khulna Division.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            With a legacy of dedication and a vision for the future, KDLA continues to strengthen professional bonds among its members while making meaningful contributions to the legal community and society at large.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Vision */}
          <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 flex flex-col">
            <div className="size-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="size-7" />
            </div>
            <h3 className="font-['Barlow_Condensed',sans-serif] text-3xl font-medium text-slate-900 mb-6 uppercase tracking-wide">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              The Khulna Divisional Lawyers Association (KDLA) envisions a united, empowered, and highly respected legal fraternity representing all ten districts of Khulna Division. We aspire to build a professional community where lawyers uphold the highest standards of excellence, ethical integrity, and social responsibility. As a model professional body, KDLA aims to foster unwavering solidarity among its members, champion access to justice for all, and serve as a catalyst for the socio-economic, legal, and cultural advancement of southern Bangladesh. Through enduring regional bonds and collaborative spirit, KDLA seeks to nurture visionary leadership within the legal community and continuously enhance the dignity, credibility, and effectiveness of the legal profession both at the national level and beyond.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#0D0D0D] p-10 rounded-3xl shadow-[0_8px_30px_rgba(15,23,42,0.08)] border border-slate-800 flex flex-col relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-3xl rounded-full pointer-events-none" />
            
            <div className="size-14 bg-white/10 text-[#D4AF37] rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
              <Target className="size-7" />
            </div>
            <h3 className="font-['Barlow_Condensed',sans-serif] text-3xl font-medium text-white mb-8 uppercase tracking-wide">
              Our Mission
            </h3>
            <ul className="flex flex-col gap-4">
              {MISSION_POINTS.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-300 text-sm md:text-base">
                  <div className="shrink-0 mt-1 size-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    <ShieldCheck className="size-3 text-[#D4AF37]" />
                  </div>
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
