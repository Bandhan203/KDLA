import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const imgPresident = "/images/Screenshot 2026-06-18 194153.png";
const imgGenSec = "/images/Screenshot 2026-06-18 194259.png";
const imgSrVP = "/images/Screenshot 2026-06-18 194245.png";

import imgAsadur from "../../imports/team/asadur_rahman.png";
import imgKhadija from "../../imports/team/khadija.png";
import imgMonzurul from "../../imports/team/monzurul_alam.png";
import imgShoaib from "../../imports/team/shoaib_hasan.png";

const EC_MAIN = [
  { name: "MD. IMAM HOSAAIN", role: "PRESIDENT", img: imgPresident },
  { name: "MOHAMMAD ABUL KALAM KHAN", role: "GENERAL SECRETARY", img: imgGenSec },
];

const EC_ALL_TABS = {
  vp: {
    label: "Vice Presidents",
    members: [
      { name: "MD. REZAUL KARIM CHOWDHURY", role: "SR. VICE-PRESIDENT", img: imgSrVP },
      { name: "MD. ABUL KALAM AZAD", role: "VICE-PRESIDENT", img: imgMonzurul },
      { name: "MD. HABIBUR RAHMAN", role: "VICE-PRESIDENT", img: imgShoaib },
      { name: "SELINA BEGUM", role: "VICE-PRESIDENT", img: imgKhadija },
    ],
  },
  sec: {
    label: "Secretariat",
    members: [
      { name: "MOHAMMAD ANISUZZAMAN", role: "TREASURER", img: imgShoaib },
      { name: "MD. ELTUT MISH SAUDAGAR", role: "SR. ASST. G. SECRETARY", img: imgAsadur },
      { name: "MD. SALIM HOSSAIN", role: "ASST. G. SECRETARY", img: imgMonzurul },
      { name: "NUSRAT JAHAN", role: "ASST. G. SECRETARY", img: imgKhadija },
      { name: "FARID UDDIN", role: "OFFICE SECRETARY", img: imgSrVP },
    ],
  },
  exec: {
    label: "Executive Members",
    members: [
      { name: "BARRISTER MD ASADUR RAHMAN", role: "EXECUTIVE MEMBER", img: imgAsadur },
      { name: "BARRISTER KHADIJA", role: "EXECUTIVE MEMBER", img: imgKhadija },
      { name: "MD. MONZURUL ALAM", role: "EXECUTIVE MEMBER", img: imgMonzurul },
      { name: "SHOAIB HASAN", role: "EXECUTIVE MEMBER", img: imgShoaib },
      { name: "MD. NUR ALAM", role: "EXECUTIVE MEMBER", img: imgSrVP },
      { name: "FARIHA KARIM", role: "EXECUTIVE MEMBER", img: imgKhadija },
      { name: "MD. JAKIR HOSSAIN", role: "EXECUTIVE MEMBER", img: imgAsadur },
      { name: "TANVIR AHMED", role: "EXECUTIVE MEMBER", img: imgShoaib },
      { name: "RASHIDA BEGUM", role: "EXECUTIVE MEMBER", img: imgKhadija },
      { name: "KARIM UDDIN", role: "EXECUTIVE MEMBER", img: imgMonzurul },
      { name: "NAZMUL HAQUE", role: "EXECUTIVE MEMBER", img: imgAsadur },
      { name: "TASLIMA KHATUN", role: "EXECUTIVE MEMBER", img: imgKhadija },
    ],
  },
  sub: {
    label: "Sub-Committees",
    members: [
      { name: "MD. REZAUL KARIM", role: "LEGAL AID COMMITTEE CHAIR", img: imgMonzurul },
      { name: "BARRISTER ASADUR", role: "WELFARE COMMITTEE CHAIR", img: imgAsadur },
      { name: "SELINA BEGUM", role: "WOMEN LAWYERS COMMITTEE", img: imgKhadija },
      { name: "SHOAIB HASAN", role: "YOUNG LAWYERS COMMITTEE", img: imgShoaib },
      { name: "KARIM UDDIN", role: "LIBRARY COMMITTEE CHAIR", img: imgMonzurul },
      { name: "NUSRAT JAHAN", role: "PUBLICATION COMMITTEE", img: imgKhadija },
    ],
  },
};

const SUB_COMMITTEES = [
  {
    title: "Legal Aid Committee",
    chair: "Md. Rezaul Karim",
    desc: "Provides pro-bono legal assistance to underprivileged citizens and manages the KDLA Legal Aid Cell.",
    members: 8,
  },
  {
    title: "Welfare Committee",
    chair: "Barrister Md. Asadur Rahman",
    desc: "Manages member welfare funds, emergency assistance programs, and healthcare benefits for members and their families.",
    members: 6,
  },
  {
    title: "Women Lawyers Committee",
    chair: "Selina Begum",
    desc: "Advocates for gender equality in the legal profession and provides support and mentorship to women lawyers across the division.",
    members: 10,
  },
  {
    title: "Young Lawyers Committee",
    chair: "Shoaib Hasan",
    desc: "Supports new members entering the legal profession with training, mentorship programs, and career development resources.",
    members: 15,
  },
  {
    title: "Library Committee",
    chair: "Karim Uddin",
    desc: "Oversees the acquisition, maintenance, and digitisation of the KDLA legal library collection of over 21,000 books.",
    members: 5,
  },
  {
    title: "Publication Committee",
    chair: "Nusrat Jahan",
    desc: "Manages the KDLA Bulletin, official circulars, press releases, and digital communications on behalf of the association.",
    members: 7,
  },
];

export default function CommitteePage() {
  const [activeTab, setActiveTab] = useState("vp");

  const currentTab = EC_ALL_TABS[activeTab as keyof typeof EC_ALL_TABS];

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
            Governance
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl">
            Executive Committee
          </h1>
          <p className="text-[16px] text-slate-400 mt-6 max-w-2xl leading-relaxed">
            The executive body of KDLA for the 2026–27 session, elected by the full membership to lead, govern, and serve the association.
          </p>
        </div>
      </div>

      {/* ── EXECUTIVE COMMITTEE — TOP LEADERS ── */}
      <section id="executive" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
              Primary Leadership
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#0F172A]">
              President & General Secretary
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            {EC_MAIN.map((m) => (
              <div
                key={m.name}
                className="group relative bg-white border border-slate-200 shadow-sm hover:border-[#C5A880]/60 p-10 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                <div className="flex items-center gap-6 mb-6">
                  <div className="size-28 rounded-full overflow-hidden border-2 border-slate-100 shadow-md shrink-0">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-2">
                      {m.role}
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-[#0F172A] leading-snug">
                      {m.name
                        .split(" ")
                        .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
                        .join(" ")}
                    </h3>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[13px] font-semibold text-[#0F172A] hover:text-[#C5A880] transition-colors uppercase tracking-wider group/btn">
                  View Full Profile{" "}
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            ))}
          </div>

          {/* Tabbed Committee Members */}
          <div className="border-t border-slate-100 pt-16">
            <div className="flex overflow-x-auto gap-8 border-b border-slate-100 mb-12">
              {Object.entries(EC_ALL_TABS).map(([id, tab]) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`pb-4 text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors relative uppercase ${
                    activeTab === id
                      ? "text-[#0F172A]"
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  {tab.label}
                  {activeTab === id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880]" />
                  )}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentTab.members.map((m, idx) => (
                <div
                  key={m.name + idx}
                  className="group relative bg-white border border-slate-200 shadow-sm p-6 cursor-pointer hover:border-[#C5A880]/60 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                  <div className="size-20 rounded-full overflow-hidden mb-4 ring-2 ring-slate-100 group-hover:ring-[#C5A880]/40 transition-all">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A880] mb-1">
                    {m.role}
                  </p>
                  <h4 className="text-[13px] font-semibold text-[#0F172A] leading-tight">
                    {m.name
                      .split(" ")
                      .slice(0, 3)
                      .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
                      .join(" ")}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUB COMMITTEES ── */}
      <section id="sub" className="py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
              Sub-Committees
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#0F172A]">
              Standing Committees of KDLA
            </h2>
            <p className="text-[15px] text-slate-500 mt-3 max-w-xl mx-auto">
              Specialized committees working in dedicated areas to serve members and the public.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUB_COMMITTEES.map((committee, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200 p-8 hover:border-[#C5A880]/40 hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C5A880] group-hover:w-full transition-all duration-500 relative" />
                <div className="flex items-start justify-between mb-5">
                  <h3 className="font-serif text-xl font-semibold text-[#0F172A] leading-snug pr-4">
                    {committee.title}
                  </h3>
                  <span className="shrink-0 size-10 bg-[#F8FAFC] group-hover:bg-[#C5A880]/10 flex items-center justify-center text-[12px] font-bold text-[#C5A880] transition-colors">
                    {committee.members}
                  </span>
                </div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A880] mb-3">
                  Chair: {committee.chair}
                </p>
                <p className="text-[14px] text-slate-500 leading-relaxed mb-6">{committee.desc}</p>
                <button className="flex items-center gap-2 text-[12px] font-bold tracking-wider text-[#0F172A] hover:text-[#C5A880] transition-colors uppercase group/btn">
                  View Members <ChevronRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
