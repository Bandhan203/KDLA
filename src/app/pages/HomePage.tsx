import { useState } from "react";
import { Search, ChevronRight, UserCheck, Users, BookOpen } from "lucide-react";
import { Link } from "react-router";

import imgCarouselHero from "../../imports/Html→Body/f92929bfb9d65a2f16b26bc6d3e37a5bc6cea4d5.png";
import imgKdla from "../../imports/Logo/kdla-logo-3.png";

// Real local team images
import imgAsadur from "../../imports/team/asadur_rahman.png";
import imgKhadija from "../../imports/team/khadija.png";
import imgMonzurul from "../../imports/team/monzurul_alam.png";
import imgShoaib from "../../imports/team/shoaib_hasan.png";

// President = Screenshot 194153 (young lawyer in robe), Gen Sec = Screenshot 194259 (man in suit)
const imgPresident = "/images/Screenshot 2026-06-18 194153.png";
const imgGenSec = "/images/Screenshot 2026-06-18 194259.png";
// Sr VP = Screenshot 194245 (lawyer in white collar), VP = monzurul
const imgSrVP = "/images/Screenshot 2026-06-18 194245.png";

import PremiumCarousel from "../components/PremiumCarousel";
import AboutKDLA from "../components/AboutKDLA";
import Districts from "../components/Districts";
import Speeches from "../components/Speeches";

const HERO_SLIDES = [
  {
    id: 1,
    image: imgCarouselHero,
    title: "UPHOLDING JUSTICE & EXCELLENCE",
    description:
      "Welcome to the Khulna Divisional Lawyers Association. A premier institution dedicated to fostering legal excellence and supporting the professional growth of the legal community.",
    ctaText: "Discover More",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2400&auto=format&fit=crop",
    title: "A LEGACY OF LEGAL BRILLIANCE",
    description:
      "Join a network of distinguished professionals committed to the rule of law and the advancement of the legal profession across the division.",
    ctaText: "Member Portal",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2400&auto=format&fit=crop",
    title: "EMPOWERING THE NEXT GENERATION",
    description:
      "Providing resources, mentorship, and continuous legal education to ensure our members stay at the forefront of legal developments.",
    ctaText: "View Events",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1505664159851-f4d1ecef9760?q=80&w=2400&auto=format&fit=crop",
    title: "ADVOCATING FOR YOUR RIGHTS",
    description:
      "We are committed to standing up for the rights and interests of our members, ensuring a fair and just legal environment.",
    ctaText: "Learn More",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2400&auto=format&fit=crop",
    title: "A COMMUNITY OF PROFESSIONALS",
    description:
      "Connect, collaborate, and grow with a supportive community of legal experts dedicated to mutual success.",
    ctaText: "Join Now",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2400&auto=format&fit=crop",
    title: "LEADERSHIP AND VISION",
    description:
      "Guided by visionary leadership, we aim to shape the future of the legal profession in Bangladesh and beyond.",
    ctaText: "Meet the Team",
  },
];

const STATS = [
  { value: "34,445", label: "Total Members", icon: Users },
  { value: "23", label: "Executive Council", icon: UserCheck },
  { value: "21,562", label: "Library Books", icon: BookOpen },
];

const NOTICES = [
  {
    date: "11 Jun",
    year: "2026",
    text: "জরুরী নোটিশ — সদস্যদের নবায়ন সংক্রান্ত নির্দেশিকা ও সময়সীমা",
    type: "Urgent",
  },
  {
    date: "02 Jun",
    year: "2026",
    text: "আইন সমিতি নির্বাচন এর চুড়ান্ত ফলাফল ও শপথ গ্রহণ অনুষ্ঠান",
    type: "Election",
  },
  {
    date: "28 May",
    year: "2026",
    text: "আবেদনপত্র, জরিমানা ও ওকালতনামা সংগ্রহ প্রসঙ্গে বিস্তারিত",
    type: "Admin",
  },
  {
    date: "15 May",
    year: "2026",
    text: "বার্ষিক সাধারণ সভা (AGM) ২০২৬ এর নোটিশ ও আলোচ্যসূচি",
    type: "Event",
  },
];

const EC_MAIN = [
  { name: "MD. IMAM HOSAAIN", role: "PRESIDENT", img: imgPresident },
  { name: "MOHAMMAD ABUL KALAM KHAN", role: "GENERAL SECRETARY", img: imgGenSec },
];

const EC_SECONDARY = [
  { name: "MD. REZAUL KARIM CHOWDHURY", role: "SR. VICE-PRESIDENT", img: imgSrVP },
  { name: "MD. ABUL KALAM AZAD", role: "VICE-PRESIDENT", img: imgMonzurul },
  { name: "MOHAMMAD ANISUZZAMAN", role: "TREASURER", img: imgShoaib },
  { name: "MD. ELTUT MISH SAUDAGAR", role: "SR. ASST. G. SECRETARY", img: imgAsadur },
  { name: "BARRISTER MD ASADUR RAHMAN", role: "EXECUTIVE MEMBER", img: imgAsadur },
  { name: "BARRISTER KHADIJA", role: "EXECUTIVE MEMBER", img: imgKhadija },
  { name: "MD. MONZURUL ALAM", role: "EXECUTIVE MEMBER", img: imgMonzurul },
  { name: "SHOAIB HASAN", role: "EXECUTIVE MEMBER", img: imgShoaib },
];

const EC_TABS = {
  vp: [
    { name: "MD. REZAUL KARIM CHOWDHURY", role: "SR. VICE-PRESIDENT", img: imgSrVP },
    { name: "MD. ABUL KALAM AZAD", role: "VICE-PRESIDENT", img: imgMonzurul },
    { name: "MD. HABIBUR RAHMAN", role: "VICE-PRESIDENT", img: imgShoaib },
    { name: "SELINA BEGUM", role: "VICE-PRESIDENT", img: imgKhadija },
  ],
  sec: [
    { name: "MOHAMMAD ANISUZZAMAN", role: "TREASURER", img: imgShoaib },
    { name: "MD. ELTUT MISH SAUDAGAR", role: "SR. ASST. G. SECRETARY", img: imgAsadur },
    { name: "MD. SALIM HOSSAIN", role: "ASST. G. SECRETARY", img: imgMonzurul },
    { name: "NUSRAT JAHAN", role: "ASST. G. SECRETARY", img: imgKhadija },
  ],
  exec: [
    { name: "BARRISTER MD ASADUR RAHMAN", role: "EXECUTIVE MEMBER", img: imgAsadur },
    { name: "BARRISTER KHADIJA", role: "EXECUTIVE MEMBER", img: imgKhadija },
    { name: "MD. MONZURUL ALAM", role: "EXECUTIVE MEMBER", img: imgMonzurul },
    { name: "SHOAIB HASAN", role: "EXECUTIVE MEMBER", img: imgShoaib },
    { name: "MD. NUR ALAM", role: "EXECUTIVE MEMBER", img: imgSrVP },
    { name: "FARIHA KARIM", role: "EXECUTIVE MEMBER", img: imgKhadija },
    { name: "MD. JAKIR HOSSAIN", role: "EXECUTIVE MEMBER", img: imgAsadur },
    { name: "TANVIR AHMED", role: "EXECUTIVE MEMBER", img: imgShoaib },
  ],
  sub: [
    { name: "MD. REZAUL KARIM", role: "LEGAL AID COMMITTEE CHAIR", img: imgMonzurul },
    { name: "BARRISTER ASADUR", role: "WELFARE COMMITTEE CHAIR", img: imgAsadur },
    { name: "SELINA BEGUM", role: "WOMEN LAWYERS COMMITTEE", img: imgKhadija },
    { name: "SHOAIB HASAN", role: "YOUNG LAWYERS COMMITTEE", img: imgShoaib },
  ],
};

const EVENTS = [
  {
    day: "20",
    month: "Aug",
    title: "International Law on Access & Benefit-Sharing",
    time: "10:00 AM - 2:00 PM",
  },
  {
    day: "05",
    month: "Sep",
    title: "Monthly Executive Council Meeting",
    time: "4:00 PM - 6:00 PM",
  },
];

export default function HomePage() {
  const [activeSearchTab, setActiveSearchTab] = useState<"member" | "voter">("member");
  const [activeEcTab, setActiveEcTab] = useState("vp");

  const currentTabMembers = EC_TABS[activeEcTab as keyof typeof EC_TABS] || EC_TABS.vp;

  return (
    <>
      {/* ── HERO CAROUSEL SECTION ── */}
      <section className="w-full">
        <PremiumCarousel slides={HERO_SLIDES} />

        {/* Floating Stats Bar */}
        <div className="border-b border-[#F8FAFC]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F8FAFC]">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-6 px-8 md:px-12 py-10">
                  <div className="size-14 flex items-center justify-center border border-[#F8FAFC] bg-[#F8FAFC] shrink-0">
                    <stat.icon className="size-6 text-[#C5A880]" />
                  </div>
                  <div>
                    <span className="font-serif font-semibold text-[36px] leading-none text-[#0F172A] tabular-nums block">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Speeches />
      <AboutKDLA />
      <Districts />

      {/* ── TWO-COLUMN MAIN LAYOUT ── */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
        {/* LEFT COLUMN: Main Content Area */}
        <div className="flex flex-col gap-20 min-w-0">
          {/* Executive Committee */}
          <div>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">
                  Leadership
                </span>
                <h2 className="font-serif text-3xl font-semibold text-[#0F172A]">
                  Executive Committee
                </h2>
                <p className="text-[14px] text-slate-500 mt-2">
                  Primary leadership for the 2026–27 session
                </p>
              </div>
              <Link
                to="/committee"
                className="hidden sm:flex items-center gap-2 text-[13px] font-semibold tracking-wider text-[#0F172A] hover:text-[#C5A880] transition-colors uppercase group"
              >
                Full Council{" "}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Top 3 Luxury Profile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                ...EC_MAIN,
                {
                  name: "MD. REZAUL KARIM CHOWDHURY",
                  role: "SR. VICE-PRESIDENT",
                  img: imgSrVP,
                },
              ].map((m, idx) => (
                <div
                  key={m.name + idx}
                  className="group relative bg-white border border-slate-200 shadow-sm hover:border-[#C5A880]/60 p-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
                >
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                  <div className="size-24 rounded-full overflow-hidden border-2 border-slate-100 mb-6 shadow-sm">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-2">
                    {m.role}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-[#0F172A] leading-snug">
                    {m.name
                      .split(" ")
                      .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
                      .join(" ")}
                  </h3>
                </div>
              ))}
            </div>

            {/* Committee Tabs */}
            <div className="border-t border-[#F8FAFC] pt-10">
              <div className="flex overflow-x-auto gap-8 border-b border-[#F8FAFC] mb-8">
                {[
                  { id: "vp", label: "Vice Presidents" },
                  { id: "sec", label: "Secretariat" },
                  { id: "exec", label: "Executive Members" },
                  { id: "sub", label: "Sub-Committees" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveEcTab(tab.id)}
                    className={`pb-4 text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors relative uppercase ${
                      activeEcTab === tab.id
                        ? "text-[#0F172A]"
                        : "text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    {tab.label}
                    {activeEcTab === tab.id && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880]" />
                    )}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {currentTabMembers.map((m) => (
                  <div
                    key={m.name}
                    className="group relative bg-white border border-slate-200 shadow-sm p-6 cursor-pointer hover:border-[#C5A880]/60 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                    <div className="size-16 rounded-full overflow-hidden mb-3 ring-2 ring-slate-100 group-hover:ring-[#C5A880]/40 transition-all">
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

          {/* Notices & Announcements Feed */}
          <div>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">
                  Official
                </span>
                <h2 className="font-serif text-3xl font-semibold text-[#0F172A]">
                  Notices & Announcements
                </h2>
                <p className="text-[14px] text-slate-500 mt-2">
                  Latest updates and official circulars
                </p>
              </div>
              <Link
                to="/updates"
                className="hidden sm:flex items-center gap-2 text-[13px] font-semibold tracking-wider text-[#0F172A] hover:text-[#C5A880] transition-colors uppercase group"
              >
                View All{" "}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="flex flex-col">
              {NOTICES.map((notice, i) => (
                <div
                  key={i}
                  className={`group flex items-start gap-6 py-7 ${
                    i !== NOTICES.length - 1 ? "border-b border-[#F8FAFC]" : ""
                  }`}
                >
                  {/* Date badge */}
                  <div className="shrink-0 w-16 bg-[#0F172A] group-hover:bg-[#C5A880] flex flex-col items-center justify-center text-center py-4 transition-colors duration-300">
                    <span className="font-serif font-semibold text-[22px] text-white leading-none">
                      {notice.date.split(" ")[0]}
                    </span>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/70 mt-1">
                      {notice.date.split(" ")[1]}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A880] border border-[#C5A880]/30 px-2 py-1">
                        {notice.type}
                      </span>
                      <span className="text-[12px] text-slate-400 font-medium">
                        {notice.year}
                      </span>
                    </div>
                    <h3 className="text-[15px] font-medium text-[#0F172A] leading-snug group-hover:text-[#C5A880] transition-colors duration-200">
                      {notice.text}
                    </h3>
                  </div>

                  <button className="shrink-0 mt-2 size-9 border border-[#F8FAFC] flex items-center justify-center text-slate-400 group-hover:border-[#C5A880] group-hover:text-[#C5A880] transition-all">
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar Widgets */}
        <aside className="flex flex-col gap-8">
          {/* Directory Services Widget */}
          <div className="border-[2px] border-slate-200 p-8 shadow-sm hover:border-[#C5A880]/30 transition-colors duration-500">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">
              Directory
            </span>
            <h3 className="font-serif text-2xl font-semibold text-[#0F172A] mb-8">
              Directory Services
            </h3>

            {/* Tab Toggle */}
            <div className="flex border-[2px] border-slate-200 mb-8">
              <button
                onClick={() => setActiveSearchTab("member")}
                className={`flex-1 py-3 text-[12px] font-bold tracking-widest uppercase transition-all duration-200 ${
                  activeSearchTab === "member"
                    ? "bg-[#0F172A] text-white"
                    : "text-slate-500 hover:text-[#0F172A] bg-white"
                }`}
              >
                Member Search
              </button>
              <button
                onClick={() => setActiveSearchTab("voter")}
                className={`flex-1 py-3 text-[12px] font-bold tracking-widest uppercase transition-all duration-200 ${
                  activeSearchTab === "voter"
                    ? "bg-[#0F172A] text-white"
                    : "text-slate-500 hover:text-[#0F172A] bg-white"
                }`}
              >
                Voter Verify
              </button>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-4">
              {activeSearchTab === "member" ? (
                <>
                  <input
                    type="text"
                    placeholder="Member Name"
                    className="w-full px-5 py-4 text-[14px] text-[#0F172A] focus:outline-none border-[2px] border-[#0F172A]/30 bg-white placeholder-slate-400 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Member ID"
                    className="w-full px-5 py-4 text-[14px] text-[#0F172A] focus:outline-none border-[2px] border-[#0F172A]/30 bg-white placeholder-slate-400 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 text-[14px] text-[#0F172A] focus:outline-none border-[2px] border-[#0F172A]/30 bg-white placeholder-slate-400 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all"
                  />
                </>
              ) : (
                <input
                  type="text"
                  placeholder="Enter Voter ID No."
                  className="w-full px-5 py-4 text-[14px] text-[#0F172A] focus:outline-none border-[2px] border-[#0F172A]/30 bg-white placeholder-slate-400 focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all"
                />
              )}

              <button className="w-full mt-2 bg-[#0F172A] text-white py-4 text-[12px] font-bold tracking-widest uppercase hover:bg-[#C5A880] transition-colors duration-300 flex items-center justify-center gap-3">
                <Search className="size-4" /> Search Records
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="border-[2px] border-slate-200 p-8 shadow-sm hover:border-[#C5A880]/30 transition-colors duration-500">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">
              Schedule
            </span>
            <h3 className="font-serif text-2xl font-semibold text-[#0F172A] mb-8">
              Upcoming Events
            </h3>

            <div className="flex flex-col">
              {EVENTS.map((evt, idx) => (
                <div
                  key={idx}
                  className={`group flex gap-6 py-6 ${
                    idx !== EVENTS.length - 1 ? "border-b-[2px] border-slate-100" : ""
                  }`}
                >
                  <div className="shrink-0 w-14 bg-[#F8FAFC] group-hover:bg-[#C5A880] flex flex-col items-center justify-center py-4 transition-colors duration-300">
                    <span className="font-serif font-semibold text-[22px] text-[#0F172A] group-hover:text-white leading-none transition-colors">
                      {evt.day}
                    </span>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-400 group-hover:text-white/80 mt-1 transition-colors">
                      {evt.month}
                    </span>
                  </div>
                  <div className="flex-1 border-l-[2px] border-slate-200 pl-5">
                    <h4 className="text-[14px] font-medium text-[#0F172A] leading-snug mb-2 group-hover:text-[#C5A880] transition-colors">
                      {evt.title}
                    </h4>
                    <p className="text-[12px] text-slate-400 font-medium">{evt.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-4 border-[2px] border-slate-200 hover:border-[#C5A880] text-[12px] font-bold tracking-widest uppercase text-slate-500 hover:text-[#C5A880] transition-all">
              View Full Calendar
            </button>
          </div>
        </aside>
      </section>
    </>
  );
}
