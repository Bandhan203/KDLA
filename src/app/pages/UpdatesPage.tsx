import React, { useState } from "react";
import { ChevronRight, FileText, Image, Newspaper, Filter } from "lucide-react";

const NOTICES = [
  { date: "11 Jun", year: "2026", text: "জরুরী নোটিশ — সদস্যদের নবায়ন সংক্রান্ত নির্দেশিকা ও সময়সীমা", type: "Urgent", fullText: "সকল সম্মানিত সদস্যদের জানানো যাচ্ছে যে, চলতি বছরের সদস্যপদ নবায়নের শেষ তারিখ ৩০ জুন ২০২৬। নির্ধারিত তারিখের মধ্যে নবায়ন না করলে জরিমানা প্রযোজ্য হবে।" },
  { date: "02 Jun", year: "2026", text: "আইন সমিতি নির্বাচন এর চুড়ান্ত ফলাফল ও শপথ গ্রহণ অনুষ্ঠান", type: "Election", fullText: "২০২৬-২৭ মেয়াদের কেডিএলএ কার্যকরী কমিটির নির্বাচনের চূড়ান্ত ফলাফল ঘোষণা করা হয়েছে। শপথ গ্রহণ অনুষ্ঠান ১৫ জুন ২০২৬ তারিখে অনুষ্ঠিত হবে।" },
  { date: "28 May", year: "2026", text: "আবেদনপত্র, জরিমানা ও ওকালতনামা সংগ্রহ প্রসঙ্গে বিস্তারিত", type: "Admin", fullText: "আবেদনপত্র ও ওকালতনামা প্রতি কার্যদিবস সকাল ১০টা থেকে বিকাল ৫টার মধ্যে সমিতির অফিস থেকে সংগ্রহ করা যাবে।" },
  { date: "15 May", year: "2026", text: "বার্ষিক সাধারণ সভা (AGM) ২০২৬ এর নোটিশ ও আলোচ্যসূচি", type: "Event", fullText: "বার্ষিক সাধারণ সভা ২৫ মে ২০২৬ তারিখে বেলা ২টায় খুলনা বার সমিতি মিলনায়তনে অনুষ্ঠিত হবে। সকল সদস্যকে উপস্থিত থাকার অনুরোধ করা যাচ্ছে।" },
  { date: "01 May", year: "2026", text: "নতুন সদস্য ভর্তির নিয়মাবলী ও আবেদনের শেষ তারিখ", type: "Admin", fullText: "নতুন সদস্য ভর্তির জন্য আবেদন গ্রহণ শুরু হয়েছে। আবেদনের শেষ তারিখ ৩১ মে ২০২৬।" },
  { date: "20 Apr", year: "2026", text: "বিশেষ আইন সেমিনার — তথ্য প্রযুক্তি ও সাইবার আইন", type: "Event", fullText: "তথ্য প্রযুক্তি ও সাইবার আইন বিষয়ক বিশেষ সেমিনার ৫ মে ২০২৬ তারিখে অনুষ্ঠিত হবে। আগ্রহী সদস্যদের নিবন্ধন করতে অনুরোধ করা হচ্ছে।" },
];

const PRESS_RELEASES = [
  {
    date: "10 Jun 2026",
    title: "KDLA Welcomes New Election Commission Reforms",
    excerpt: "The Khulna Divisional Lawyers Association has officially welcomed the newly announced election commission reforms, calling them a significant step towards greater judicial independence and fair representation.",
  },
  {
    date: "25 May 2026",
    title: "KDLA Hosts National Legal Aid Awareness Day",
    excerpt: "Over 500 lawyers and citizens participated in the annual Legal Aid Awareness Day organised by KDLA, with free legal consultations provided to over 200 underprivileged citizens.",
  },
  {
    date: "12 May 2026",
    title: "KDLA Partners with Dhaka University Faculty of Law",
    excerpt: "A formal MOU was signed between KDLA and the Faculty of Law at the University of Dhaka to facilitate student internship programs and joint research initiatives.",
  },
  {
    date: "01 Apr 2026",
    title: "KDLA Annual Report 2025 Published",
    excerpt: "The KDLA Annual Report for 2025 has been published, highlighting key achievements including 1,200 new member registrations, 45 legal aid cases resolved, and library expansion.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop",
    caption: "KDLA Annual General Meeting 2025",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
    caption: "Legal Aid Camp — Bagerhat District",
    category: "Community",
  },
  {
    src: "https://images.unsplash.com/photo-1505664159851-f4d1ecef9760?q=80&w=600&auto=format&fit=crop",
    caption: "Executive Committee Swearing-In Ceremony",
    category: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=600&auto=format&fit=crop",
    caption: "KDLA Library — New Wing Inauguration",
    category: "Library",
  },
  {
    src: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=600&auto=format&fit=crop",
    caption: "Annual Sports Day & Cultural Program",
    category: "Community",
  },
  {
    src: "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=600&auto=format&fit=crop",
    caption: "International Law Seminar 2025",
    category: "Education",
  },
];

const NOTICE_TYPES = ["All", "Urgent", "Election", "Admin", "Event"];

export default function UpdatesPage() {
  const [activeSection, setActiveSection] = useState<"notices" | "press" | "gallery">("notices");
  const [filterType, setFilterType] = useState("All");
  const [expandedNotice, setExpandedNotice] = useState<number | null>(null);

  const filteredNotices = NOTICES.filter(
    (n) => filterType === "All" || n.type === filterType
  );

  return (
    <div className="bg-white">
      {/* ── PAGE HERO ── */}
      <div className="relative bg-[#0F172A] py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(-45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5A880]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#C5A880] mb-4 block">
            News & Media
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl">
            Updates & Media Centre
          </h1>
          <p className="text-[16px] text-slate-400 mt-6 max-w-2xl leading-relaxed">
            Stay informed with official notices, press releases, and a visual gallery of KDLA activities and events.
          </p>
        </div>
      </div>

      {/* ── SECTION TABS ── */}
      <div className="bg-white border-b border-slate-200 sticky top-24 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-0">
            {[
              { id: "notices" as const, icon: FileText, label: "Notices" },
              { id: "press" as const, icon: Newspaper, label: "Press Release" },
              { id: "gallery" as const, icon: Image, label: "Gallery" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center gap-2 px-8 py-5 text-[13px] font-bold tracking-widest uppercase transition-colors relative ${
                  activeSection === tab.id
                    ? "text-[#0F172A]"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <tab.icon className="size-4" />
                {tab.label}
                {activeSection === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* ── NOTICES ── */}
          {activeSection === "notices" && (
            <section id="notices">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">Official</span>
                  <h2 className="font-serif text-3xl font-semibold text-[#0F172A]">
                    Notices & Announcements
                  </h2>
                </div>
                {/* Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="size-4 text-slate-400" />
                  <div className="flex gap-2 flex-wrap">
                    {NOTICE_TYPES.map((type) => (
                      <button
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={`px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase transition-colors ${
                          filterType === type
                            ? "bg-[#0F172A] text-white"
                            : "border border-slate-200 text-slate-500 hover:border-[#C5A880] hover:text-[#C5A880]"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                {filteredNotices.map((notice, i) => (
                  <div
                    key={i}
                    className={`border-b border-slate-100 ${i === 0 ? "border-t" : ""}`}
                  >
                    <div
                      className="group flex items-start gap-6 py-7 cursor-pointer"
                      onClick={() => setExpandedNotice(expandedNotice === i ? null : i)}
                    >
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
                          <span className="text-[12px] text-slate-400 font-medium">{notice.year}</span>
                        </div>
                        <h3 className="text-[15px] font-medium text-[#0F172A] leading-snug group-hover:text-[#C5A880] transition-colors duration-200">
                          {notice.text}
                        </h3>
                      </div>
                      <button className="shrink-0 mt-2 size-9 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:border-[#C5A880] group-hover:text-[#C5A880] transition-all">
                        <ChevronRight className={`size-4 transition-transform ${expandedNotice === i ? "rotate-90" : ""}`} />
                      </button>
                    </div>
                    {expandedNotice === i && (
                      <div className="pb-8 pl-22 ml-[88px] text-[14px] text-slate-600 leading-relaxed border-l-2 border-[#C5A880] pl-6">
                        {notice.fullText}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── PRESS RELEASES ── */}
          {activeSection === "press" && (
            <section id="press">
              <div className="mb-12">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">Media</span>
                <h2 className="font-serif text-3xl font-semibold text-[#0F172A]">Press Releases</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PRESS_RELEASES.map((pr, idx) => (
                  <div
                    key={idx}
                    className="group relative border border-slate-200 p-8 hover:border-[#C5A880]/40 hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] transition-all duration-500 cursor-pointer"
                  >
                    <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C5A880] group-hover:w-full transition-all duration-500" />
                    <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A880] mb-3">
                      {pr.date}
                    </p>
                    <h3 className="font-serif text-xl font-semibold text-[#0F172A] leading-snug mb-4 group-hover:text-[#C5A880] transition-colors">
                      {pr.title}
                    </h3>
                    <p className="text-[14px] text-slate-500 leading-relaxed mb-6">{pr.excerpt}</p>
                    <button className="flex items-center gap-2 text-[12px] font-bold tracking-wider text-[#0F172A] hover:text-[#C5A880] transition-colors uppercase group/btn">
                      Read Full Release <ChevronRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── GALLERY ── */}
          {activeSection === "gallery" && (
            <section id="gallery">
              <div className="mb-12">
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3 block">Visual</span>
                <h2 className="font-serif text-3xl font-semibold text-[#0F172A]">Photo Gallery</h2>
                <p className="text-[14px] text-slate-500 mt-2">
                  A visual archive of KDLA events, programs, and activities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GALLERY_IMAGES.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#0F172A]/0 group-hover:bg-[#0F172A]/60 transition-colors duration-500" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C5A880] mb-1">
                          {img.category}
                        </span>
                        <p className="text-white font-medium text-[14px]">{img.caption}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="size-9 bg-white/20 backdrop-blur flex items-center justify-center">
                        <Image className="size-4 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
