import React, { useState } from "react";
import { Search, User, Phone, IdCard, CheckCircle } from "lucide-react";

const SAMPLE_MEMBERS = [
  { id: "KDL-001", name: "Advocate Md. Rezaul Karim", district: "Khulna", year: "2005", status: "Active" },
  { id: "KDL-002", name: "Barrister Khadija Begum", district: "Satkhira", year: "2010", status: "Active" },
  { id: "KDL-003", name: "Advocate Shoaib Hasan", district: "Jessore", year: "2012", status: "Active" },
  { id: "KDL-004", name: "Advocate Monzurul Alam", district: "Kushtia", year: "2008", status: "Active" },
  { id: "KDL-005", name: "Advocate Fariha Karim", district: "Narail", year: "2015", status: "Active" },
  { id: "KDL-006", name: "Barrister Asadur Rahman", district: "Bagerhat", year: "2003", status: "Active" },
  { id: "KDL-007", name: "Advocate Tanvir Ahmed", district: "Jhenaidah", year: "2018", status: "Active" },
  { id: "KDL-008", name: "Advocate Rashida Begum", district: "Magura", year: "2011", status: "Active" },
  { id: "KDL-009", name: "Advocate Nazmul Haque", district: "Chuadanga", year: "2014", status: "Active" },
  { id: "KDL-010", name: "Advocate Taslima Khatun", district: "Meherpur", year: "2016", status: "Active" },
  { id: "KDL-011", name: "Advocate Jakir Hossain", district: "Khulna", year: "2007", status: "Active" },
  { id: "KDL-012", name: "Advocate Nur Alam", district: "Jessore", year: "2013", status: "Active" },
];

const DISTRICTS = ["All Districts", "Khulna", "Bagerhat", "Satkhira", "Jessore", "Narail", "Kushtia", "Jhenaidah", "Magura", "Meherpur", "Chuadanga"];

export default function MembersPage() {
  const [activeTab, setActiveTab] = useState<"directory" | "voter">("directory");
  const [searchName, setSearchName] = useState("");
  const [searchId, setSearchId] = useState("");
  const [searchDistrict, setSearchDistrict] = useState("All Districts");
  const [voterIdInput, setVoterIdInput] = useState("");
  const [voterSearched, setVoterSearched] = useState(false);
  const [searched, setSearched] = useState(false);

  const filteredMembers = SAMPLE_MEMBERS.filter((m) => {
    const matchName = !searchName || m.name.toLowerCase().includes(searchName.toLowerCase());
    const matchId = !searchId || m.id.toLowerCase().includes(searchId.toLowerCase());
    const matchDistrict = searchDistrict === "All Districts" || m.district === searchDistrict;
    return matchName && matchId && matchDistrict;
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
            Member Services
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl">
            Member Directory & Voter Information
          </h1>
          <p className="text-[16px] text-slate-400 mt-6 max-w-2xl leading-relaxed">
            Search our directory of over 34,000 registered members and verify voter registration across all ten districts of Khulna Division.
          </p>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            {[
              { value: "34,445", label: "Total Members" },
              { value: "10", label: "Districts Covered" },
              { value: "23", label: "Executive Council" },
              { value: "1996", label: "Year Founded" },
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

      {/* ── TABS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Switcher */}
          <div className="flex border-b border-slate-200 mb-12">
            {[
              { id: "directory" as const, label: "Member Directory" },
              { id: "voter" as const, label: "Voter Information" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-[13px] font-bold tracking-widest uppercase transition-colors relative ${
                  activeTab === tab.id
                    ? "text-[#0F172A]"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A880]" />
                )}
              </button>
            ))}
          </div>

          {/* ── MEMBER DIRECTORY ── */}
          {activeTab === "directory" && (
            <div id="directory">
              {/* Search Form */}
              <div className="bg-[#F8FAFC] border border-slate-200 p-8 mb-12">
                <h3 className="font-serif text-2xl font-semibold text-[#0F172A] mb-6">
                  Search Member Directory
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Member Name"
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                      className="w-full pl-11 pr-5 py-4 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all placeholder-slate-400"
                    />
                  </div>
                  <div className="relative">
                    <IdCard className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Member ID (e.g. KDL-001)"
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      className="w-full pl-11 pr-5 py-4 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all placeholder-slate-400"
                    />
                  </div>
                  <select
                    value={searchDistrict}
                    onChange={(e) => setSearchDistrict(e.target.value)}
                    className="w-full px-5 py-4 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all appearance-none cursor-pointer"
                  >
                    {DISTRICTS.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => setSearched(true)}
                  className="flex items-center gap-3 bg-[#0F172A] text-white px-8 py-4 text-[12px] font-bold tracking-widest uppercase hover:bg-[#C5A880] transition-colors duration-300"
                >
                  <Search className="size-4" /> Search Records
                </button>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl font-semibold text-[#0F172A]">
                    {searched ? `${filteredMembers.length} Results Found` : "Member Listing"}
                  </h3>
                  <span className="text-[12px] text-slate-400 font-medium">
                    Showing sample records · Full database requires authentication
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#0F172A] text-white">
                        {["Member ID", "Full Name", "District", "Member Since", "Status"].map((h) => (
                          <th key={h} className="px-6 py-4 text-left text-[11px] font-bold tracking-[0.2em] uppercase">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMembers.map((m, idx) => (
                        <tr
                          key={m.id}
                          className={`border-b border-slate-100 hover:bg-[#F8FAFC] transition-colors group cursor-pointer ${
                            idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                          }`}
                        >
                          <td className="px-6 py-4 text-[13px] font-mono font-bold text-[#C5A880]">
                            {m.id}
                          </td>
                          <td className="px-6 py-4 text-[14px] font-medium text-[#0F172A] group-hover:text-[#C5A880] transition-colors">
                            {m.name}
                          </td>
                          <td className="px-6 py-4 text-[13px] text-slate-500">{m.district}</td>
                          <td className="px-6 py-4 text-[13px] text-slate-500">{m.year}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1">
                              <span className="size-1.5 rounded-full bg-emerald-500" />
                              {m.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-center text-[13px] text-slate-400 mt-8 py-4 border-t border-slate-100">
                  Showing {filteredMembers.length} of 34,445 registered members · <button className="text-[#C5A880] font-semibold hover:underline">Login to view full directory</button>
                </p>
              </div>
            </div>
          )}

          {/* ── VOTER INFORMATION ── */}
          {activeTab === "voter" && (
            <div id="voter">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
                    Voter Verification
                  </span>
                  <h2 className="font-serif text-3xl font-semibold text-[#0F172A] mb-6">
                    Verify Your Voter Registration
                  </h2>
                  <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                    Use your KDLA Member ID or NID Number to verify your voter registration status for KDLA elections. All registered members in good standing are eligible to vote in annual elections.
                  </p>

                  <div className="bg-[#F8FAFC] border border-slate-200 p-8">
                    <div className="relative mb-4">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Enter Member ID or NID Number"
                        value={voterIdInput}
                        onChange={(e) => setVoterIdInput(e.target.value)}
                        className="w-full pl-11 pr-5 py-4 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all placeholder-slate-400"
                      />
                    </div>
                    <button
                      onClick={() => setVoterSearched(true)}
                      className="w-full flex items-center justify-center gap-3 bg-[#0F172A] text-white py-4 text-[12px] font-bold tracking-widest uppercase hover:bg-[#C5A880] transition-colors duration-300"
                    >
                      <Search className="size-4" /> Verify Registration
                    </button>

                    {voterSearched && voterIdInput && (
                      <div className="mt-6 p-6 border-[2px] border-emerald-200 bg-emerald-50">
                        <div className="flex items-center gap-3 mb-4">
                          <CheckCircle className="size-6 text-emerald-600 shrink-0" />
                          <h4 className="font-serif text-lg font-semibold text-emerald-800">
                            Registration Verified
                          </h4>
                        </div>
                        <div className="flex flex-col gap-2 text-[14px]">
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-medium">Member ID</span>
                            <span className="font-bold text-[#0F172A]">{voterIdInput}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-medium">Status</span>
                            <span className="font-bold text-emerald-700">✓ Eligible to Vote</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500 font-medium">Voting Booth</span>
                            <span className="font-bold text-[#0F172A]">Khulna Bar Association Hall</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {voterSearched && !voterIdInput && (
                      <div className="mt-6 p-6 border-[2px] border-red-200 bg-red-50">
                        <p className="text-[14px] text-red-700 font-medium">
                          Please enter a valid Member ID or NID Number to verify.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Voter Info Guide */}
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#0F172A] mb-8">
                    Voter Eligibility & Guidelines
                  </h3>
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        num: "01",
                        title: "Membership in Good Standing",
                        desc: "You must be a registered KDLA member with all dues paid and no pending disciplinary actions.",
                      },
                      {
                        num: "02",
                        title: "Minimum 1 Year Membership",
                        desc: "Members must have been registered for at least one full year before the election date to be eligible to vote.",
                      },
                      {
                        num: "03",
                        title: "Bring Valid Photo ID",
                        desc: "On election day, bring your KDLA Member ID card and a valid government-issued photo identification.",
                      },
                      {
                        num: "04",
                        title: "Vote in Your District",
                        desc: "Members must vote at the designated polling booth for their registered district within Khulna Division.",
                      },
                      {
                        num: "05",
                        title: "One Vote Per Member",
                        desc: "Each registered member is entitled to one vote. Proxy or multiple voting is strictly prohibited.",
                      },
                    ].map((item) => (
                      <div
                        key={item.num}
                        className="flex gap-5 p-5 border border-slate-100 hover:border-[#C5A880]/30 hover:bg-[#F8FAFC] transition-all"
                      >
                        <div className="size-10 bg-[#0F172A] flex items-center justify-center shrink-0">
                          <span className="text-[11px] font-bold text-white">{item.num}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[14px] text-[#0F172A] mb-1">{item.title}</h4>
                          <p className="text-[13px] text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── MEMBER PORTAL CTA ── */}
      <section id="portal" className="py-24 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-10 h-[2px] bg-[#C5A880] mb-8 mx-auto" />
          <h2 className="font-serif text-4xl font-semibold text-white mb-6">
            Access the Member Portal
          </h2>
          <p className="text-[16px] text-slate-400 leading-relaxed mb-10">
            Log in to your member account to pay dues, update your profile, access legal resources, and participate in KDLA governance.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-[#C5A880] text-[#0F172A] px-10 py-5 text-[13px] font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300">
              Login to Portal
            </button>
            <button className="border-2 border-white/20 text-white px-10 py-5 text-[13px] font-bold tracking-widest uppercase hover:border-[#C5A880] hover:text-[#C5A880] transition-colors duration-300">
              Register as Member
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
