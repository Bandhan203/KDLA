import { useState } from "react";
import { Search, Calendar, ChevronRight, MapPin, Phone, Mail, ArrowRight, UserCheck, Users, BookOpen } from "lucide-react";

import imgCarouselHero from "../imports/Html→Body/f92929bfb9d65a2f16b26bc6d3e37a5bc6cea4d5.png";
import imgPresident from "../imports/Html→Body/a983163fb3d1b34625c04175674b1f4f8c508679.png";
import imgGenSec from "../imports/Html→Body/c0927a8871bdf05a65b4b79bd5cb95a1a40ccbfb.png";
import imgMember from "../imports/Html→Body/d0243ec5dfeff5566ac4f4327ef651111dafdf13.png";
import imgKdla from "../imports/Html→Body/c4c5ab36957deca3b2d4974f1e71747b662a85ce.png";
import imgSslCommerz from "../imports/Html→Body/ce3fd63c5d82d68257cdcafbeb44f44b25a87e50.png";
import imgBKash from "../imports/Html→Body/1779fd8bafcaffea7c3fe34cd12ab593a8d7dc2d.png";
import imgAsadur from "../imports/team/asadur_rahman.png";
import imgKhadija from "../imports/team/khadija.png";
import imgMonzurul from "../imports/team/monzurul_alam.png";
import imgShoaib from "../imports/team/shoaib_hasan.png";

import PremiumCarousel from "./components/PremiumCarousel";
import AboutKDLA from "./components/AboutKDLA";
import Districts from "./components/Districts";
import Speeches from "./components/Speeches";

const NAV_LINKS = [
  { name: "HOME", sub: [] },
  { name: "About Us", sub: [] },
  { name: "News and events", sub: ["Press release", "Notice", "KDLA past events"] },
  { name: "Member", sub: [] },
  { name: "Executive Committee", sub: [] },
  { name: "President Speech", sub: [] },
  { name: "Secretary Speech", sub: [] },
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
    <div className="min-h-screen bg-white text-slate-900 font-['Inter',sans-serif] selection:bg-blue-600 selection:text-white">
      
      {/* ── TOP NAV ── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <div className="flex items-center gap-4 shrink-0 cursor-pointer">
            {/* Using brightness-0 to make logo solid black/navy */}
            <img src={imgKdla} alt="KDLA Logo" className="h-10 w-auto object-contain brightness-0 opacity-90" />
            <span className="font-['Barlow_Condensed',sans-serif] font-medium text-[14px] tracking-[0.2em] uppercase text-slate-900 leading-tight hidden md:block">
              Khulna Divisional<br />Lawyers Association
            </span>
          </div>
          
          <nav className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href="#"
                  className="text-[13px] font-medium tracking-wide text-slate-500 hover:text-blue-600 transition-colors uppercase"
                >
                  {link.name}
                </a>
                {link.sub.length > 0 && (
                  <div className="absolute top-full left-0 mt-4 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                    {link.sub.map(subItem => (
                      <a key={subItem} href="#" className="block px-5 py-3 text-[13px] text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors">
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="flex items-center gap-4 shrink-0">
            <button className="hidden sm:flex items-center justify-center size-10 rounded-full border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-colors">
              <Search className="size-4" />
            </button>
            <a
              href="#"
              className="bg-slate-900 text-white px-6 py-3 rounded-full text-[12px] font-semibold tracking-[0.1em] uppercase hover:bg-blue-600 transition-colors duration-300 shadow-[0_4px_14px_rgba(15,23,42,0.15)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.3)]"
            >
              Member Portal
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO CAROUSEL SECTION ── */}
      <section className="px-4 md:px-6 pt-6 pb-24 max-w-[1400px] mx-auto">
        <PremiumCarousel slides={HERO_SLIDES} />
        
        {/* Floating Stats */}
        <div className="max-w-5xl w-full mx-auto bg-white rounded-3xl p-4 md:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10 translate-y-16">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center text-center px-4 w-full">
              <div className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-4">
                <stat.icon className="size-5" />
              </div>
              <span className="font-['Barlow_Condensed',sans-serif] font-medium text-[40px] md:text-[48px] leading-none text-slate-900 tabular-nums mb-2">
                {stat.value}
              </span>
              <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-slate-400">
                {stat.label}
              </span>
              {idx !== STATS.length - 1 && (
                <div className="hidden md:block absolute w-px h-24 bg-slate-100 right-[33%] last:right-[66%]" style={{ right: `${(idx + 1) * 33.33}%` }} />
              )}
            </div>
          ))}
        </div>
      </section>

      <Speeches />
      <AboutKDLA />
      <Districts />

      {/* ── TWO-COLUMN MAIN LAYOUT ── */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
        
        {/* LEFT COLUMN: Main Content Area */}
        <div className="flex flex-col gap-20 min-w-0">
          
          {/* Executive Committee Showcase */}
          <div>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-[24px] font-semibold text-slate-900 tracking-tight">Executive Committee</h2>
                <p className="text-[14px] text-slate-500 mt-1">Primary Leadership for 2026–27 Session</p>
              </div>
              <a href="#" className="hidden sm:flex items-center gap-2 text-[13px] font-medium text-blue-600 hover:text-slate-900 transition-colors">
                View Full Council <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EC_MAIN.map((m) => (
                <div key={m.name} className="bg-slate-50 rounded-3xl p-8 flex flex-col items-center text-center border border-slate-100 hover:shadow-md transition-shadow duration-300">
                  <div className="size-32 rounded-full p-2 bg-white shadow-sm mb-6">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  <h3 className="font-['Barlow_Condensed',sans-serif] font-medium text-[20px] tracking-[0.05em] uppercase text-slate-900 mb-1">
                    {m.name}
                  </h3>
                  <div className="inline-flex px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[11px] font-bold tracking-[0.1em] uppercase">
                    {m.role}
                  </div>
                </div>
              ))}
            </div>

            {/* Committee Tabs */}
            <div className="mt-12">
              <div className="flex overflow-x-auto hide-scrollbar border-b border-slate-200 gap-8">
                {[
                  { id: 'vp', label: 'Vice Presidents' },
                  { id: 'sec', label: 'Secretariat' },
                  { id: 'exec', label: 'Executive Members' },
                  { id: 'sub', label: 'Sub-Committees' },
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveEcTab(tab.id)}
                    className={`pb-4 text-[14px] font-medium transition-colors relative whitespace-nowrap ${
                      activeEcTab === tab.id ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                    {activeEcTab === tab.id && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-t-full" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {EC_SECONDARY.map((m) => (
                  <div key={m.name} className="group cursor-pointer">
                    <div className="size-16 rounded-full overflow-hidden mb-4 ring-2 ring-slate-100 group-hover:ring-blue-600/30 transition-all">
                      <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <h4 className="font-['Barlow_Condensed',sans-serif] font-medium text-[14px] tracking-wide uppercase text-slate-900 leading-tight">
                      {m.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider">{m.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notices & Announcements Feed */}
          <div>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-[24px] font-semibold text-slate-900 tracking-tight">Notices & Announcements</h2>
                <p className="text-[14px] text-slate-500 mt-1">Latest updates and official circulars</p>
              </div>
              <a href="#" className="hidden sm:flex items-center gap-2 text-[13px] font-medium text-blue-600 hover:text-slate-900 transition-colors">
                View All <ArrowRight className="size-4" />
              </a>
            </div>

            <div className="flex flex-col">
              {NOTICES.map((notice, i) => (
                <div 
                  key={i} 
                  className={`group flex items-start gap-6 py-6 ${i !== NOTICES.length - 1 ? 'border-b border-slate-100' : ''}`}
                >
                  <div className="shrink-0 w-[72px] bg-slate-900 rounded-2xl p-3 flex flex-col items-center justify-center text-center shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                    <span className="font-['Barlow_Condensed',sans-serif] font-medium text-[18px] text-white leading-none">
                      {notice.date.split(" ")[0]}
                    </span>
                    <span className="text-[10px] font-medium tracking-widest uppercase text-white/80 mt-1">
                      {notice.date.split(" ")[1]}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] font-bold tracking-wider uppercase">
                        {notice.type}
                      </span>
                      <span className="text-[12px] text-slate-400 font-medium">
                        {notice.year}
                      </span>
                    </div>
                    <h3 className="text-[16px] text-slate-900 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                      {notice.text}
                    </h3>
                  </div>
                  
                  <button className="shrink-0 mt-2 size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* RIGHT COLUMN: Sidebar Widgets */}
        <aside className="flex flex-col gap-8">
          
          {/* Unified Search Hub */}
          <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
            <h3 className="text-[18px] font-semibold text-slate-900 mb-6">Directory Services</h3>
            
            {/* Tab Toggle Switch */}
            <div className="flex p-1.5 bg-slate-200/50 rounded-2xl mb-8">
              <button
                onClick={() => setActiveSearchTab('member')}
                className={`flex-1 py-2.5 text-[13px] font-semibold rounded-xl transition-all duration-200 ${
                  activeSearchTab === 'member' 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Member Search
              </button>
              <button
                onClick={() => setActiveSearchTab('voter')}
                className={`flex-1 py-2.5 text-[13px] font-semibold rounded-xl transition-all duration-200 ${
                  activeSearchTab === 'voter' 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Voter Verify
              </button>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-4">
              {activeSearchTab === 'member' ? (
                <>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Member Name" 
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Member ID" 
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Phone Number" 
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Enter Voter ID No." 
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                    />
                  </div>
                </>
              )}
              
              <button className="w-full mt-2 bg-slate-900 text-white rounded-2xl py-4 text-[13px] font-bold tracking-[0.05em] uppercase hover:bg-blue-600 shadow-md hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300 flex items-center justify-center gap-2">
                <Search className="size-4" /> Search Records
              </button>
            </div>
          </div>

          {/* Upcoming Events Calendar Block */}
          <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <Calendar className="size-5" />
              </div>
              <h3 className="text-[18px] font-semibold text-slate-900">Upcoming Events</h3>
            </div>
            
            <div className="flex flex-col gap-6">
              {EVENTS.map((evt, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <span className="font-['Barlow_Condensed',sans-serif] font-medium text-[24px] text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                      {evt.day}
                    </span>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mt-1">
                      {evt.month}
                    </span>
                  </div>
                  <div className="flex-1 border-l-2 border-slate-100 pl-4">
                    <h4 className="text-[14px] font-medium text-slate-900 leading-snug mb-1">
                      {evt.title}
                    </h4>
                    <p className="text-[12px] text-slate-500">
                      {evt.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-8 py-3 rounded-xl border-2 border-slate-100 text-[13px] font-semibold text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-all">
              View Full Calendar
            </button>
          </div>

        </aside>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="lg:col-span-1">
              <img src={imgKdla} alt="KDLA" className="h-12 w-auto mb-6 brightness-0 invert opacity-90" />
              <p className="text-[14px] text-slate-400 leading-relaxed max-w-sm">
                Dedicated to upholding justice and supporting the professional growth of the legal community since inception.
              </p>
            </div>

            <div>
              <h4 className="font-['Barlow_Condensed',sans-serif] font-medium text-[16px] tracking-widest uppercase text-white mb-6">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3">
                {["About Association", "Executive Committee", "Notices & Circulars", "Member Directory"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[14px] text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-['Barlow_Condensed',sans-serif] font-medium text-[16px] tracking-widest uppercase text-white mb-6">
                Contact Office
              </h4>
              <ul className="flex flex-col gap-4 text-[14px] text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="size-5 shrink-0 text-blue-500" />
                  <span>4, Court House Street<br/>Khulna 9100, Bangladesh</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-blue-500" />
                  <span>+880-41-123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-blue-500" />
                  <a href="mailto:contact@kdla.org.bd" className="hover:text-white transition-colors">contact@kdla.org.bd</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-['Barlow_Condensed',sans-serif] font-medium text-[16px] tracking-widest uppercase text-white mb-6">
                Payment Partners
              </h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {[imgSslCommerz, imgBKash].map((img, i) => (
                  <div key={i} className="bg-white px-3 py-2 rounded-lg flex items-center justify-center">
                    <img src={img} alt="Payment Partner" className="h-6 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-slate-500">
              &copy; {new Date().getFullYear()} Khulna Divisional Lawyers Association. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-[13px] text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}