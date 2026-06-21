import React, { useState } from "react";
import { BookOpen, Search, ChevronRight } from "lucide-react";

const CATEGORIES = [
  { name: "Constitutional Law", count: 2840, color: "#C5A880" },
  { name: "Civil Procedure", count: 3210, color: "#C5A880" },
  { name: "Criminal Law", count: 4150, color: "#C5A880" },
  { name: "International Law", count: 1680, color: "#C5A880" },
  { name: "Family & Personal Law", count: 2200, color: "#C5A880" },
  { name: "Commercial & Company Law", count: 1930, color: "#C5A880" },
  { name: "Land & Property Law", count: 2750, color: "#C5A880" },
  { name: "Labour & Employment Law", count: 1102, color: "#C5A880" },
  { name: "Environmental Law", count: 890, color: "#C5A880" },
  { name: "Tax & Revenue Law", count: 810, color: "#C5A880" },
];

const FEATURED_BOOKS = [
  {
    title: "The Constitution of Bangladesh (Annotated)",
    author: "Justice Md. Abdul Matin",
    year: "2024",
    category: "Constitutional Law",
    accession: "LIB-0001",
  },
  {
    title: "Code of Civil Procedure with Commentary",
    author: "Advocate Kamaluddin Ahmed",
    year: "2023",
    category: "Civil Procedure",
    accession: "LIB-0045",
  },
  {
    title: "Evidence Act 1872 — A Practical Guide",
    author: "Barrister Shamsul Huda",
    year: "2022",
    category: "Criminal Law",
    accession: "LIB-0102",
  },
  {
    title: "International Commercial Arbitration",
    author: "Justice Syed Refaat Ahmed",
    year: "2023",
    category: "International Law",
    accession: "LIB-0218",
  },
  {
    title: "Land Registration Laws of Bangladesh",
    author: "Advocate Md. Reza Kabir",
    year: "2021",
    category: "Land & Property Law",
    accession: "LIB-0340",
  },
  {
    title: "Bangladesh Labour Act 2006 — Annotated",
    author: "Dr. Naila Kabir",
    year: "2024",
    category: "Labour & Employment Law",
    accession: "LIB-0412",
  },
];

const HOURS = [
  { day: "Saturday – Thursday", time: "9:00 AM – 5:00 PM" },
  { day: "Friday", time: "Closed" },
  { day: "Public Holidays", time: "Closed" },
];

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState("All Categories");

  const filteredBooks = FEATURED_BOOKS.filter((b) => {
    const matchQuery =
      !searchQuery ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = searchCategory === "All Categories" || b.category === searchCategory;
    return matchQuery && matchCat;
  });

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
            Knowledge Centre
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl">
            KDLA Legal Library
          </h1>
          <p className="text-[16px] text-slate-400 mt-6 max-w-2xl leading-relaxed">
            One of the largest legal libraries in southern Bangladesh, housing over 21,000 volumes of legal texts, case references, journals, and digests.
          </p>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            {[
              { value: "21,562", label: "Total Books" },
              { value: "10", label: "Subject Categories" },
              { value: "340+", label: "Journals & Digests" },
              { value: "1,200", label: "Monthly Visitors" },
            ].map((stat, idx) => (
              <div key={idx} className="px-8 py-8 text-center">
                <span className="font-serif font-bold text-[32px] text-[#0F172A] block leading-none">
                  {stat.value}
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SEARCH SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
              Library Catalogue
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#0F172A]">
              Search the Collection
            </h2>
          </div>

          {/* Search Form */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="flex gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by title, author, or accession number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-5 py-5 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all placeholder-slate-400"
                />
              </div>
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="px-5 py-5 text-[13px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all appearance-none cursor-pointer min-w-[200px]"
              >
                <option>All Categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <button className="w-full flex items-center justify-center gap-3 bg-[#0F172A] text-white py-4 text-[12px] font-bold tracking-widest uppercase hover:bg-[#C5A880] transition-colors duration-300">
              <Search className="size-4" /> Search Library Catalogue
            </button>
          </div>

          {/* Results */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-[#0F172A] mb-6">
              {searchQuery || searchCategory !== "All Categories"
                ? `${filteredBooks.length} Books Found`
                : "Featured Collection"}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0F172A] text-white">
                    {["Accession No.", "Title", "Author", "Category", "Year"].map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-[11px] font-bold tracking-[0.2em] uppercase">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.map((book, idx) => (
                    <tr
                      key={book.accession}
                      className={`border-b border-slate-100 hover:bg-[#F8FAFC] transition-colors group cursor-pointer ${
                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                      }`}
                    >
                      <td className="px-6 py-4 text-[12px] font-mono font-bold text-[#C5A880]">
                        {book.accession}
                      </td>
                      <td className="px-6 py-4 text-[14px] font-medium text-[#0F172A] group-hover:text-[#C5A880] transition-colors max-w-xs">
                        {book.title}
                      </td>
                      <td className="px-6 py-4 text-[13px] text-slate-500">{book.author}</td>
                      <td className="px-6 py-4">
                        <span className="text-[10px] font-bold tracking-wider text-[#C5A880] border border-[#C5A880]/30 px-2 py-1 uppercase">
                          {book.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[13px] text-slate-500">{book.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-[13px] text-slate-400 mt-6 py-4 border-t border-slate-100">
              Showing {filteredBooks.length} of 21,562 titles · <button className="text-[#C5A880] font-semibold hover:underline">Login to access full catalogue</button>
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
              Browse by Subject
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#0F172A]">
              Library Categories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-4">
            {CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="group flex items-center justify-between p-5 bg-white border border-slate-200 hover:border-[#C5A880]/40 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="size-10 bg-[#F8FAFC] group-hover:bg-[#C5A880]/10 flex items-center justify-center transition-colors">
                    <BookOpen className="size-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0F172A] group-hover:text-[#C5A880] transition-colors">
                      {cat.name}
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {cat.count.toLocaleString()} volumes
                    </p>
                  </div>
                </div>
                <ChevronRight className="size-4 text-slate-300 group-hover:text-[#C5A880] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIBRARY INFO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
                Visit Us
              </span>
              <h2 className="font-serif text-3xl font-semibold text-[#0F172A] mb-6">
                Library Information
              </h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                The KDLA Legal Library is open to all registered members and is located at the KDLA head office in Khulna. Members may borrow up to 3 books at a time for a period of 14 days.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  { label: "Location", value: "4, Court House Street, Khulna 9100" },
                  { label: "Phone", value: "+880-41-123-4567 (Ext. 204)" },
                  { label: "Email", value: "library@kdla.org.bd" },
                  { label: "Librarian", value: "Md. Karim Uddin" },
                ].map((info) => (
                  <div key={info.label} className="flex gap-4">
                    <span className="text-[12px] font-bold tracking-wider uppercase text-[#C5A880] w-24 shrink-0 mt-0.5">
                      {info.label}
                    </span>
                    <span className="text-[14px] text-slate-600">{info.value}</span>
                  </div>
                ))}
              </div>
              <button className="flex items-center gap-3 bg-[#0F172A] text-white px-8 py-4 text-[12px] font-bold tracking-widest uppercase hover:bg-[#C5A880] transition-colors">
                Apply for Library Card
              </button>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#0F172A] mb-6">
                Opening Hours
              </h3>
              <div className="border border-slate-200">
                {HOURS.map((h, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center px-6 py-5 ${
                      idx !== HOURS.length - 1 ? "border-b border-slate-100" : ""
                    } ${h.time === "Closed" ? "bg-slate-50 opacity-60" : ""}`}
                  >
                    <span className="text-[14px] font-medium text-[#0F172A]">{h.day}</span>
                    <span
                      className={`text-[13px] font-bold ${
                        h.time === "Closed" ? "text-red-400" : "text-[#C5A880]"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-6 bg-[#0F172A]">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A880] mb-2">
                  Borrowing Rules
                </p>
                <ul className="text-[13px] text-slate-400 flex flex-col gap-1.5">
                  <li>• Maximum 3 books at a time per member</li>
                  <li>• Loan period: 14 calendar days</li>
                  <li>• Late return: BDT 5/- per book per day</li>
                  <li>• Journals & digests: Reference use only (non-circulating)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
