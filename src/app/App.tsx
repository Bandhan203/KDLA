import { useState } from "react";
import { Search, Calendar, ChevronRight, MapPin, Phone, Mail, ArrowRight, UserCheck, Users, BookOpen } from "lucide-react";

import imgCarouselHero from "../imports/Html→Body/f92929bfb9d65a2f16b26bc6d3e37a5bc6cea4d5.png";
const imgPresident = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop";
const imgGenSec = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop";
const imgMember = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop";
import imgKdla from "../imports/Logo/kdla-logo-3.png";
import imgSslCommerz from "../imports/Html→Body/ce3fd63c5d82d68257cdcafbeb44f44b25a87e50.png";
import imgBKash from "../imports/Html→Body/1779fd8bafcaffea7c3fe34cd12ab593a8d7dc2d.png";
const imgAsadur = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop";
const imgKhadija = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop";
const imgMonzurul = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop";
const imgShoaib = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop";

import PremiumCarousel from "./components/PremiumCarousel";
import AboutKDLA from "./components/AboutKDLA";
import Districts from "./components/Districts";
import Speeches from "./components/Speeches";

const NAV_LINKS = [
  { name: "Home", sub: [] },
  { name: "About Us", sub: ["History", "Leadership", "Constitution"] },
  { name: "Committee", sub: ["Executive Committee", "Sub Committees"] },
  { name: "Members", sub: ["Member Directory", "Voter Information"] },
  { name: "Updates & Media", sub: ["Notices", "Press Release", "Gallery"] },
  { name: "Library", sub: [] },
  { name: "Contact", sub: [] },
];

const HERO_SLIDES = [
  {
    id: 1,
    image: imgCarouselHero,
    title: "UPHOLDING JUSTICE & EXCELLENCE",
    description: "Welcome to the Khulna Divisional Lawyers Association. A premier institution dedicated to fostering legal excellence and supporting the professional growth of the legal community.",
    ctaText: "Discover More",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2400&auto=format&fit=crop",
    title: "A LEGACY OF LEGAL BRILLIANCE",
    description: "Join a network of distinguished professionals committed to the rule of law and the advancement of the legal profession across the division.",
    ctaText: "Member Portal",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2400&auto=format&fit=crop",
    title: "EMPOWERING THE NEXT GENERATION",
    description: "Providing resources, mentorship, and continuous legal education to ensure our members stay at the forefront of legal developments.",
    ctaText: "View Events",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1505664159851-f4d1ecef9760?q=80&w=2400&auto=format&fit=crop",
    title: "ADVOCATING FOR YOUR RIGHTS",
    description: "We are committed to standing up for the rights and interests of our members, ensuring a fair and just legal environment.",
    ctaText: "Learn More",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2400&auto=format&fit=crop",
    title: "A COMMUNITY OF PROFESSIONALS",
    description: "Connect, collaborate, and grow with a supportive community of legal experts dedicated to mutual success.",
    ctaText: "Join Now",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2400&auto=format&fit=crop",
    title: "LEADERSHIP AND VISION",
    description: "Guided by visionary leadership, we aim to shape the future of the legal profession in Bangladesh and beyond.",
    ctaText: "Meet the Team",
  }
];

const STATS = [
  { value: "34,445", label: "Total Members", icon: Users },
  { value: "23", label: "Executive Council", icon: UserCheck },
  { value: "21,562", label: "Library Books", icon: BookOpen },
];

const NOTICES = [
  { date: "11 Jun", year: "2026", text: "জরুরী নোটিশ — সদস্যদের নবায়ন সংক্রান্ত নির্দেশিকা ও সময়সীমা", type: "Urgent" },
  { date: "02 Jun", year: "2026", text: "আইন সমিতি নির্বাচন এর চুড়ান্ত ফলাফল ও শপথ গ্রহণ অনুষ্ঠান", type: "Election" },
  { date: "28 May", year: "2026", text: "আবেদনপত্র, জরিমানা ও ওকালতনামা সংগ্রহ প্রসঙ্গে বিস্তারিত", type: "Admin" },
  { date: "15 May", year: "2026", text: "বার্ষিক সাধারণ সভা (AGM) ২০২৬ এর নোটিশ ও আলোচ্যসূচি", type: "Event" },
];

const EC_MAIN = [
  { name: "MD. IMAM HOSAAIN", role: "PRESIDENT", img: imgPresident },
  { name: "MOHAMMAD ABUL KALAM KHAN", role: "GENERAL SECRETARY", img: imgGenSec },
];

const EC_SECONDARY = [
  { name: "MD. REZAUL KARIM CHOWDHURY", role: "SR. VICE-PRESIDENT", img: imgMember },
  { name: "MD. ABUL KALAM AZAD", role: "VICE-PRESIDENT", img: imgMember },
  { name: "MOHAMMAD ANISUZZAMAN", role: "TREASURER", img: imgMember },
  { name: "MD. ELTUT MISH SAUDAGAR", role: "SR. ASST. G. SECRETARY", img: imgMember },
  { name: "BARRISTER MD ASADUR RAHMAN", role: "EXECUTIVE MEMBER", img: imgAsadur },
  { name: "BARRISTER KHADIJA", role: "EXECUTIVE MEMBER", img: imgKhadija },
  { name: "MD. MONZURUL ALAM", role: "EXECUTIVE MEMBER", img: imgMonzurul },
  { name: "SHOAIB HASAN", role: "EXECUTIVE MEMBER", img: imgShoaib },
];

const EVENTS = [
  { day: "20", month: "Aug", title: "International Law on Access & Benefit-Sharing", time: "10:00 AM - 2:00 PM" },
  { day: "05", month: "Sep", title: "Monthly Executive Council Meeting", time: "4:00 PM - 6:00 PM" },
];

export default function App() {
  const [activeSearchTab, setActiveSearchTab] = useState<'member' | 'voter'>('member');
  const [activeEcTab, setActiveEcTab] = useState('vp');

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

      {/* ── TOP NAV ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between gap-8">
          <div className="flex items-center gap-4 shrink-0 cursor-pointer">
            <div><img src={imgKdla} alt="KDLA Logo" className="h-16 w-auto object-contain scale-[1.5] origin-left mix-blend-multiply" /></div>
            {/* <span className="font-serif font-bold text-[16px] tracking-wide text-[#0F172A] leading-tight hidden md:block">
              Khulna Divisional<br />Lawyers Association
            </span> */}
          </div>

          <nav className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group shrink-0 py-8">
                <a
                  href="#"
                  className="flex items-center gap-1 text-[14px] font-medium text-slate-600 hover:text-[#C5A880] transition-colors whitespace-nowrap"
                >
                  {link.name}
                  {link.sub.length > 0 && (
                    <svg className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {link.sub.length > 0 && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-[#F8FAFC] shadow-[0_10px_40px_rgba(15,23,42,0.08)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
                    <div className="p-2 flex flex-col">
                      {link.sub.map(subItem => (
                        <a key={subItem} href="#" className="px-4 py-3 text-[13px] text-[#0F172A] hover:text-[#C5A880] hover:bg-[#F8FAFC] rounded-md transition-colors">
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-5 shrink-0">
            <button className="hidden sm:flex items-center justify-center size-10 rounded-full text-slate-500 hover:text-[#C5A880] hover:bg-slate-50 transition-colors">
              <Search className="size-5" />
            </button>
            <a
              href="#"
              className="bg-[#0F172A] text-white px-7 py-3.5 rounded-none text-[12px] font-semibold tracking-widest uppercase hover:bg-[#C5A880] transition-colors duration-300 shadow-md"
            >
              MEMBER PORTAL
            </a>
          </div>
        </div>
      </header>

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

          {/* Executive Committee — Top 3 Leaders */}
          <div>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">Leadership</span>
                <h2 className="font-serif text-3xl font-semibold text-[#0F172A]">Executive Committee</h2>
                <p className="text-[14px] text-slate-500 mt-2">Primary leadership for the 2026–27 session</p>
              </div>
              <a href="#" className="hidden sm:flex items-center gap-2 text-[13px] font-semibold tracking-wider text-[#0F172A] hover:text-[#C5A880] transition-colors uppercase group">
                Full Council <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Top 3 Luxury Profile Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[...EC_MAIN, { name: "MD. REZAUL KARIM CHOWDHURY", role: "SR. VICE-PRESIDENT", img: imgMember }].map((m, idx) => (
                <div key={m.name} className={`group relative bg-white border border-slate-200 shadow-sm hover:border-[#C5A880]/60 p-8 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)] ${idx === 0 ? 'md:col-span-1' : ''}`}>
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                  <div className="size-24 rounded-full overflow-hidden border-2 border-slate-100 mb-6 shadow-sm">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-2">{m.role}</p>
                  <h3 className="font-serif text-lg font-semibold text-[#0F172A] leading-snug">
                    {m.name.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
                  </h3>
                </div>
              ))}
            </div>

            {/* Committee Tabs */}
            <div className="border-t border-[#F8FAFC] pt-10">
              <div className="flex overflow-x-auto gap-8 border-b border-[#F8FAFC] mb-8">
                {[
                  { id: 'vp', label: 'Vice Presidents' },
                  { id: 'sec', label: 'Secretariat' },
                  { id: 'exec', label: 'Executive Members' },
                  { id: 'sub', label: 'Sub-Committees' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveEcTab(tab.id)}
                    className={`pb-4 text-[13px] font-semibold tracking-wide whitespace-nowrap transition-colors relative uppercase ${activeEcTab === tab.id ? 'text-[#0F172A]' : 'text-slate-400 hover:text-slate-700'
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
                {EC_SECONDARY.map((m) => (
                  <div key={m.name} className="group relative bg-white border border-slate-200 shadow-sm p-6 cursor-pointer hover:border-[#C5A880]/60 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                    <div className="size-16 rounded-full overflow-hidden mb-3 ring-2 ring-slate-100 group-hover:ring-[#C5A880]/40 transition-all">
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A880] mb-1">{m.role}</p>
                    <h4 className="text-[13px] font-semibold text-[#0F172A] leading-tight">
                      {m.name.split(' ').slice(0, 3).map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
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
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">Official</span>
                <h2 className="font-google-sans text-3xl font-semibold text-[#0F172A]">Notices & Announcements</h2>
                <p className="text-[14px] text-slate-500 mt-2">Latest updates and official circulars</p>
              </div>
              <a href="#" className="hidden sm:flex items-center gap-2 text-[13px] font-semibold tracking-wider text-[#0F172A] hover:text-[#C5A880] transition-colors uppercase group">
                View All <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <div className="flex flex-col">
              {NOTICES.map((notice, i) => (
                <div
                  key={i}
                  className={`group flex items-start gap-6 py-7 ${i !== NOTICES.length - 1 ? 'border-b border-[#F8FAFC]' : ''}`}
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
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">Directory</span>
            <h3 className="font-serif text-2xl font-semibold text-[#0F172A] mb-8">Directory Services</h3>

            {/* Tab Toggle */}
            <div className="flex border-[2px] border-slate-200 mb-8">
              <button
                onClick={() => setActiveSearchTab('member')}
                className={`flex-1 py-3 text-[12px] font-bold tracking-widest uppercase transition-all duration-200 ${activeSearchTab === 'member'
                  ? 'bg-[#0F172A] text-white'
                  : 'text-slate-500 hover:text-[#0F172A] bg-white'
                  }`}
              >
                Member Search
              </button>
              <button
                onClick={() => setActiveSearchTab('voter')}
                className={`flex-1 py-3 text-[12px] font-bold tracking-widest uppercase transition-all duration-200 ${activeSearchTab === 'voter'
                  ? 'bg-[#0F172A] text-white'
                  : 'text-slate-500 hover:text-[#0F172A] bg-white'
                  }`}
              >
                Voter Verify
              </button>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-4">
              {activeSearchTab === 'member' ? (
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
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">Schedule</span>
            <h3 className="font-serif text-2xl font-semibold text-[#0F172A] mb-8">Upcoming Events</h3>

            <div className="flex flex-col">
              {EVENTS.map((evt, idx) => (
                <div key={idx} className={`group flex gap-6 py-6 ${idx !== EVENTS.length - 1 ? 'border-b-[2px] border-slate-100' : ''}`}>
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

      {/* ── FOOTER ── */}
      <footer className="bg-[#0F172A] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Gold gradient accent line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-[#C5A880] via-white/10 to-transparent mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            <div className="lg:col-span-1">
              <img src={imgKdla} alt="KDLA" className="h-16 w-auto mb-6 object-contain scale-[1.5] origin-left invert mix-blend-screen opacity-90" />
              <p className="text-[14px] text-slate-400 leading-[1.9] max-w-xs">
                Dedicated to upholding justice and supporting the professional growth of the legal community since 1996.
              </p>
              <div className="flex gap-3 mt-8">
                {[imgSslCommerz, imgBKash].map((img, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 px-3 py-2 flex items-center justify-center">
                    <img src={img} alt="Payment Partner" className="h-5 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-[15px] text-white mb-8">
                Navigation
              </h4>
              <ul className="flex flex-col gap-4">
                {["About Association", "Executive Committee", "Member Directory", "Notices & Circulars", "Library"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[14px] text-slate-400 hover:text-[#C5A880] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-[15px] text-white mb-8">
                Contact Office
              </h4>
              <ul className="flex flex-col gap-5 text-[14px] text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="size-5 shrink-0 text-[#C5A880] mt-0.5" />
                  <span>4, Court House Street<br />Khulna 9100, Bangladesh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-[#C5A880]" />
                  <span>+880-41-123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-[#C5A880]" />
                  <a href="mailto:contact@kdla.org.bd" className="hover:text-[#C5A880] transition-colors">contact@kdla.org.bd</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-[15px] text-white mb-8">
                Member Portal
              </h4>
              <p className="text-[14px] text-slate-400 leading-[1.9] mb-6">
                Access your membership dashboard, pay dues, and manage your profile securely online.
              </p>
              <a
                href="#"
                className="inline-block bg-[#C5A880] text-[#0F172A] px-8 py-4 text-[12px] font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
              >
                Login / Register
              </a>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-slate-500">
              &copy; {new Date().getFullYear()} Khulna Divisional Lawyers Association. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-[13px] text-slate-500">
              <a href="#" className="hover:text-[#C5A880] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#C5A880] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
