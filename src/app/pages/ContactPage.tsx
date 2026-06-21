import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const OFFICES = [
  {
    name: "KDLA Head Office",
    address: "4, Court House Street, Khulna 9100",
    phone: "+880-41-123-4567",
    email: "contact@kdla.org.bd",
    hours: "Sat–Thu: 9:00 AM – 5:00 PM",
    type: "Head Office",
  },
  {
    name: "Jessore District Office",
    address: "District Judge Court Complex, Jessore 7400",
    phone: "+880-421-67890",
    email: "jessore@kdla.org.bd",
    hours: "Sat–Thu: 9:00 AM – 4:00 PM",
    type: "District Office",
  },
  {
    name: "Satkhira District Office",
    address: "Bar Association Building, Satkhira 9400",
    phone: "+880-471-63412",
    email: "satkhira@kdla.org.bd",
    hours: "Sat–Thu: 9:00 AM – 4:00 PM",
    type: "District Office",
  },
];

const FAQ = [
  {
    q: "How do I renew my KDLA membership?",
    a: "Membership can be renewed online through the Member Portal or in person at the KDLA head office. The renewal fee varies based on membership category.",
  },
  {
    q: "How can I verify my voter registration?",
    a: "Visit the Members section and use the Voter Verification tool to check your registration status using your Member ID or NID number.",
  },
  {
    q: "How do I access the KDLA legal library?",
    a: "All registered members in good standing can access the library during opening hours with their member ID card. Apply online for a library card.",
  },
  {
    q: "How can I file a complaint against a member?",
    a: "Formal complaints regarding professional conduct should be submitted in writing to the Disciplinary Committee via email or at the head office.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "General Inquiry",
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

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
            Get in Touch
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white leading-tight max-w-3xl">
            Contact KDLA
          </h1>
          <p className="text-[16px] text-slate-400 mt-6 max-w-2xl leading-relaxed">
            Reach out to us for membership inquiries, legal assistance, media requests, or any other matter related to the Khulna Divisional Lawyers Association.
          </p>
        </div>
      </div>

      {/* ── QUICK CONTACT INFO ── */}
      <div className="bg-[#F8FAFC] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {[
              { icon: Phone, label: "Phone", value: "+880-41-123-4567", sub: "Sat–Thu, 9AM–5PM" },
              { icon: Mail, label: "Email", value: "contact@kdla.org.bd", sub: "We reply within 1–2 business days" },
              { icon: Clock, label: "Office Hours", value: "Sat–Thu: 9AM – 5PM", sub: "Friday & Public Holidays: Closed" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 px-8 py-8">
                <div className="size-12 bg-[#0F172A] flex items-center justify-center shrink-0">
                  <item.icon className="size-5 text-[#C5A880]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A880] mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-[15px] font-semibold text-[#0F172A]">{item.value}</p>
                  <p className="text-[12px] text-slate-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTACT FORM + OFFICE MAP ── */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16">
            {/* Contact Form */}
            <div>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
                Send a Message
              </span>
              <h2 className="font-serif text-3xl font-semibold text-[#0F172A] mb-8">
                Write to Us
              </h2>

              {submitted ? (
                <div className="p-12 border-[2px] border-emerald-200 bg-emerald-50 text-center">
                  <CheckCircle className="size-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-semibold text-emerald-800 mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-[15px] text-emerald-700">
                    Thank you for contacting KDLA. We will respond to your inquiry within 1–2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "", type: "General Inquiry" }); }}
                    className="mt-6 text-[13px] font-bold tracking-wider text-[#C5A880] hover:underline uppercase"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#0F172A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-5 py-4 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#0F172A] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#0F172A] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880-XXXXXXXXXX"
                        className="w-full px-5 py-4 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all placeholder-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#0F172A] mb-2">
                        Inquiry Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-5 py-4 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all appearance-none cursor-pointer"
                      >
                        {["General Inquiry", "Membership", "Legal Aid", "Library", "Media / Press", "Complaint", "Other"].map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#0F172A] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief subject of your message"
                      className="w-full px-5 py-4 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.2em] uppercase text-[#0F172A] mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-5 py-4 text-[14px] text-[#0F172A] border-[2px] border-slate-200 bg-white focus:outline-none focus:border-[#0F172A] transition-all placeholder-slate-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-start flex items-center gap-3 bg-[#0F172A] text-white px-10 py-5 text-[12px] font-bold tracking-widest uppercase hover:bg-[#C5A880] transition-colors duration-300"
                  >
                    <Send className="size-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar: Head Office + Map */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
                  Head Office
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#0F172A] mb-6">
                  Find Us
                </h3>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-56 bg-[#F8FAFC] border border-slate-200 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <MapPin className="size-10 text-[#C5A880] mx-auto mb-2" />
                  <p className="text-[13px] font-semibold text-[#0F172A]">KDLA Head Office</p>
                  <p className="text-[12px] text-slate-400">4, Court House Street, Khulna</p>
                  <a
                    href="https://maps.google.com/?q=Khulna+Court+House+Street+Bangladesh"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-[12px] font-bold text-[#C5A880] hover:underline tracking-wider uppercase"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 p-6">
                <div className="flex flex-col gap-4">
                  {[
                    { icon: MapPin, label: "Address", value: "4, Court House Street\nKhulna 9100, Bangladesh" },
                    { icon: Phone, label: "Phone", value: "+880-41-123-4567" },
                    { icon: Mail, label: "Email", value: "contact@kdla.org.bd" },
                    { icon: Clock, label: "Hours", value: "Sat–Thu: 9:00 AM – 5:00 PM\nFriday: Closed" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <item.icon className="size-4 text-[#C5A880] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold tracking-wider uppercase text-slate-400 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[14px] text-[#0F172A] whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISTRICT OFFICES ── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
              Across the Division
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#0F172A]">
              Our Offices
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200 p-8 hover:border-[#C5A880]/40 hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C5A880] group-hover:w-full transition-all duration-500 relative" />
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-3">
                  {office.type}
                </p>
                <h3 className="font-serif text-xl font-semibold text-[#0F172A] mb-5">
                  {office.name}
                </h3>
                <div className="flex flex-col gap-3 text-[13px] text-slate-500">
                  <div className="flex gap-2">
                    <MapPin className="size-4 shrink-0 text-[#C5A880] mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex gap-2">
                    <Phone className="size-4 shrink-0 text-[#C5A880]" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex gap-2">
                    <Mail className="size-4 shrink-0 text-[#C5A880]" />
                    <a href={`mailto:${office.email}`} className="hover:text-[#C5A880] transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <Clock className="size-4 shrink-0 text-[#C5A880]" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#C5A880] mb-4 block">
              Help Centre
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#0F172A]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-slate-100">
            {FAQ.map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                >
                  <h3 className="font-semibold text-[15px] text-[#0F172A] group-hover:text-[#C5A880] transition-colors">
                    {item.q}
                  </h3>
                  <div
                    className={`shrink-0 size-8 border border-slate-200 flex items-center justify-center transition-all group-hover:border-[#C5A880] group-hover:text-[#C5A880] ${
                      expandedFaq === idx ? "bg-[#C5A880] border-[#C5A880] text-white rotate-45" : "text-slate-400"
                    }`}
                  >
                    <span className="text-xl leading-none mb-0.5">+</span>
                  </div>
                </button>
                {expandedFaq === idx && (
                  <div className="pb-6 text-[14px] text-slate-500 leading-relaxed pl-0 border-l-2 border-[#C5A880] pl-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
