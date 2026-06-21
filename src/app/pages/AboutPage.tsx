import React from "react";
import { Scale, BookOpen, Users, Award, FileText, ChevronRight } from "lucide-react";

const imgPresident = "/images/Screenshot 2026-06-18 194153.png";
const imgGenSec = "/images/Screenshot 2026-06-18 194259.png";

const TIMELINE = [
  {
    year: "1996",
    title: "Foundation",
    desc: "KDLA was formally established, uniting lawyers across the ten districts of Khulna Division under one professional body.",
  },
  {
    year: "2001",
    title: "Library Inauguration",
    desc: "The KDLA Legal Library was inaugurated, providing members access to thousands of legal texts and case references.",
  },
  {
    year: "2008",
    title: "Welfare Fund Established",
    desc: "A dedicated welfare fund was created to support members in need and provide scholarships for law students.",
  },
  {
    year: "2015",
    title: "Digital Initiative",
    desc: "KDLA launched its first digital member directory and online voter verification system.",
  },
  {
    year: "2020",
    title: "COVID Response",
    desc: "KDLA organized pro-bono legal aid camps and relief programs for members and underserved communities during the pandemic.",
  },
  {
    year: "2026",
    title: "New Leadership",
    desc: "Election of the new executive committee, with Md. Imam Hosaain as President and Mohammad Abul Kalam Khan as General Secretary.",
  },
];

const PILLARS = [
  {
    icon: Scale,
    title: "Uphold Justice",
    desc: "Protecting the professional rights, dignity, and welfare of every member while championing equal access to justice for all citizens of the division.",
  },
  {
    icon: BookOpen,
    title: "Foster Excellence",
    desc: "Elevating the legal profession through continuous education, research, training, and the promotion of cutting-edge legal tools.",
  },
  {
    icon: Users,
    title: "Build Community",
    desc: "Strengthening unity among Khulna Division lawyers through professional solidarity, cultural engagement, and humanitarian service.",
  },
  {
    icon: Award,
    title: "Ensure Integrity",
    desc: "Upholding the highest standards of professional ethics and conduct, setting benchmarks for legal practice in Bangladesh.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* ── PAGE HERO ── */}
      <div className="relative bg-[#0F172A] py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5A880]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C5A880] mb-4 block">
            About KDLA
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl">
            A Legacy of Legal Excellence in Bangladesh
          </h1>
          <p className="text-[16px] text-slate-400 mt-6 max-w-2xl leading-relaxed">
            The Khulna Divisional Lawyers Association has served the legal community of southern Bangladesh since 1996 — fostering justice, unity, and professional growth.
          </p>
        </div>
      </div>

      {/* ── HISTORY SECTION ── */}
      <section id="history" className="py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
                Our History
              </span>
              <h2 className="font-serif text-4xl font-semibold text-[#0F172A] leading-tight">
                Three Decades of Serving the Legal Fraternity
              </h2>
            </div>
            <div>
              <p className="text-[16px] text-slate-600 leading-[1.9] mb-6">
                The Khulna Divisional Lawyers Association (KDLA) is a distinguished professional body representing lawyers from the ten districts of Khulna Division, established in 1996. We have consistently worked to uphold the dignity, integrity, and excellence of the legal profession across southern Bangladesh.
              </p>
              <p className="text-[16px] text-slate-600 leading-[1.9]">
                Since our founding, KDLA has grown to represent over 34,000 registered members — making it one of the largest regional bar associations in the country. Our work spans legal education, welfare programs, member services, and advocacy for the rule of law.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-slate-200 lg:left-1/2 lg:-ml-px" />
            <div className="flex flex-col gap-12">
              {TIMELINE.map((item, idx) => (
                <div
                  key={item.year}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                    idx % 2 === 0 ? "" : ""
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-5 size-10 bg-white border-2 border-[#C5A880] flex items-center justify-center z-10 lg:left-1/2 lg:-ml-5">
                    <span className="size-3 rounded-none bg-[#C5A880]" />
                  </div>

                  {/* Content — alternating */}
                  {idx % 2 === 0 ? (
                    <>
                      <div className="pl-16 lg:pl-0 lg:pr-16 lg:text-right">
                        <span className="font-serif font-bold text-[32px] text-[#C5A880] leading-none">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-xl font-semibold text-[#0F172A] mt-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[15px] text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <div className="pl-16 lg:pl-16">
                        <span className="font-serif font-bold text-[32px] text-[#C5A880] leading-none">
                          {item.year}
                        </span>
                        <h3 className="font-serif text-xl font-semibold text-[#0F172A] mt-1 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[15px] text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SECTION ── */}
      <section id="leadership" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
              Leadership
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#0F172A]">
              Our Key Leaders
            </h2>
            <p className="text-[15px] text-slate-500 mt-3 max-w-xl mx-auto">
              Committed to serving the legal fraternity with integrity and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                img: imgPresident,
                role: "President",
                name: "Md. Imam Hosaain",
                bio: "Serving as the 2026–27 President of KDLA, Md. Imam Hosaain brings over two decades of legal experience and a deep commitment to the advancement of the legal profession in Khulna Division.",
              },
              {
                img: imgGenSec,
                role: "General Secretary",
                name: "Mohammad Abul Kalam Khan",
                bio: "As General Secretary, Mohammad Abul Kalam Khan oversees the day-to-day administrative functions of KDLA, ensuring seamless operations and effective communication across all member districts.",
              },
            ].map((leader) => (
              <div
                key={leader.name}
                className="group relative border border-slate-200 p-10 hover:border-[#C5A880]/40 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                <div className="flex items-center gap-6 mb-6">
                  <div className="size-24 rounded-full overflow-hidden border-2 border-slate-100 shadow-md shrink-0">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-1">
                      {leader.role}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-[#0F172A]">
                      {leader.name}
                    </h3>
                  </div>
                </div>
                <p className="text-[15px] text-slate-500 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION PILLARS ── */}
      <section className="py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
              Our Mission
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#0F172A]">
              The Four Pillars of KDLA
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="group bg-white p-10 hover:bg-[#0F172A] transition-colors duration-500 cursor-default"
              >
                <div className="size-14 bg-[#F8FAFC] group-hover:bg-white/10 flex items-center justify-center mb-8 transition-colors duration-500">
                  <pillar.icon className="size-6 text-[#C5A880]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#0F172A] group-hover:text-white mb-4 transition-colors duration-500">
                  {pillar.title}
                </h3>
                <p className="text-[14px] text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors duration-500">
                  {pillar.desc}
                </p>
                <div className="mt-8 w-8 h-[2px] bg-[#C5A880] group-hover:w-16 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSTITUTION SECTION ── */}
      <section id="constitution" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
                Governance
              </span>
              <h2 className="font-serif text-4xl font-semibold text-[#0F172A] leading-tight mb-6">
                The KDLA Constitution & Bylaws
              </h2>
              <p className="text-[16px] text-slate-600 leading-[1.9] mb-6">
                The KDLA Constitution serves as the foundational document governing the operations, membership, and objectives of the Association. It outlines the rights and responsibilities of all members, the structure of the executive committee, and the procedures for elections, amendments, and dissolution.
              </p>
              <p className="text-[16px] text-slate-600 leading-[1.9] mb-10">
                All member lawyers are bound by the Constitution and the Code of Professional Conduct. Compliance ensures the continued integrity and reputation of the KDLA and the legal profession at large.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 bg-[#0F172A] text-white px-8 py-4 text-[12px] font-bold tracking-widest uppercase hover:bg-[#C5A880] transition-colors duration-300">
                  <FileText className="size-4" />
                  Download Constitution (PDF)
                </button>
                <button className="flex items-center gap-3 border-[2px] border-slate-200 text-[#0F172A] px-8 py-4 text-[12px] font-bold tracking-widest uppercase hover:border-[#C5A880] hover:text-[#C5A880] transition-colors duration-300">
                  <ChevronRight className="size-4" />
                  View Online
                </button>
              </div>
            </div>

            {/* Constitution highlights */}
            <div className="flex flex-col gap-4">
              {[
                { title: "Chapter I", desc: "Name, Objectives & Jurisdiction of the Association" },
                { title: "Chapter II", desc: "Membership Categories, Rights & Obligations" },
                { title: "Chapter III", desc: "Executive Committee Structure & Powers" },
                { title: "Chapter IV", desc: "Elections, Voting Procedures & Term Limits" },
                { title: "Chapter V", desc: "Meetings, Quorum & Decision-Making Processes" },
                { title: "Chapter VI", desc: "Finance, Accounts & Audit Procedures" },
                { title: "Chapter VII", desc: "Disciplinary Procedures & Code of Ethics" },
                { title: "Chapter VIII", desc: "Amendment & Dissolution Procedures" },
              ].map((ch, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-5 p-5 border border-slate-100 hover:border-[#C5A880]/30 hover:bg-[#F8FAFC] transition-all duration-300 cursor-default"
                >
                  <div className="size-10 bg-[#0F172A] group-hover:bg-[#C5A880] flex items-center justify-center shrink-0 transition-colors duration-300">
                    <span className="text-[10px] font-bold text-white tracking-wider">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A880] mb-0.5">
                      {ch.title}
                    </p>
                    <p className="text-[14px] text-[#0F172A] font-medium">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="relative overflow-hidden bg-[#0F172A] py-24">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="w-10 h-[2px] bg-[#C5A880] mb-8 mx-auto" />
          <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed italic font-medium mb-8">
            "KDLA envisions a united, empowered, and highly respected legal fraternity — serving as a catalyst for the socio-economic, legal, and cultural advancement of southern Bangladesh."
          </p>
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880]">
            Our Vision
          </span>
        </div>
      </section>
    </div>
  );
}
