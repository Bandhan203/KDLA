import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Search, MapPin, Phone, Mail, X, Menu } from "lucide-react";
import imgKdla from "../../imports/Logo/kdla-logo-3.png";
import imgSslCommerz from "../../imports/Html→Body/ce3fd63c5d82d68257cdcafbeb44f44b25a87e50.png";
import imgBKash from "../../imports/Html→Body/1779fd8bafcaffea7c3fe34cd12ab593a8d7dc2d.png";

const NAV_LINKS = [
  { name: "Home", path: "/", sub: [] },
  {
    name: "About Us",
    path: "/about",
    sub: [
      { label: "History", path: "/about#history" },
      { label: "Leadership", path: "/about#leadership" },
      { label: "Constitution", path: "/about#constitution" },
    ],
  },
  {
    name: "Committee",
    path: "/committee",
    sub: [
      { label: "Executive Committee", path: "/committee#executive" },
      { label: "Sub Committees", path: "/committee#sub" },
    ],
  },
  {
    name: "Members",
    path: "/members",
    sub: [
      { label: "Member Directory", path: "/members#directory" },
      { label: "Voter Information", path: "/members#voter" },
    ],
  },
  {
    name: "Updates & Media",
    path: "/updates",
    sub: [
      { label: "Notices", path: "/updates#notices" },
      { label: "Press Release", path: "/updates#press" },
      { label: "Gallery", path: "/updates#gallery" },
    ],
  },
  { name: "Library", path: "/library", sub: [] },
  { name: "Contact", path: "/contact", sub: [] },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#C5A880] selection:text-white">
      {/* ── TOP NAV ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 shrink-0">
            <img
              src={imgKdla}
              alt="KDLA Logo"
              className="h-16 w-auto object-contain scale-[1.5] origin-left mix-blend-multiply"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group shrink-0 py-8">
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-[14px] font-medium transition-colors whitespace-nowrap ${
                    isActive(link.path)
                      ? "text-[#C5A880]"
                      : "text-slate-600 hover:text-[#C5A880]"
                  }`}
                >
                  {link.name}
                  {link.sub.length > 0 && (
                    <svg
                      className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {link.sub.length > 0 && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-slate-100 shadow-[0_10px_40px_rgba(15,23,42,0.08)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
                    <div className="p-2 flex flex-col">
                      {link.sub.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          className="px-4 py-3 text-[13px] text-[#0F172A] hover:text-[#C5A880] hover:bg-[#F8FAFC] rounded-md transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-5 shrink-0">
            <button className="hidden sm:flex items-center justify-center size-10 rounded-full text-slate-500 hover:text-[#C5A880] hover:bg-slate-50 transition-colors">
              <Search className="size-5" />
            </button>
            <Link
              to="/members#portal"
              className="hidden sm:block bg-[#0F172A] text-white px-7 py-3.5 text-[12px] font-semibold tracking-widest uppercase hover:bg-[#C5A880] transition-colors duration-300 shadow-md"
            >
              MEMBER PORTAL
            </Link>
            {/* Hamburger */}
            <button
              className="xl:hidden flex items-center justify-center size-10 text-slate-600 hover:text-[#C5A880] transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE NAV DRAWER ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="relative ml-auto w-80 max-w-full h-full bg-white flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <img src={imgKdla} alt="KDLA" className="h-12 w-auto mix-blend-multiply" />
              <button
                onClick={() => setMobileOpen(false)}
                className="size-9 flex items-center justify-center text-slate-500 hover:text-[#C5A880] transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 text-[15px] font-semibold rounded-lg transition-colors ${
                      isActive(link.path)
                        ? "bg-[#F8FAFC] text-[#C5A880]"
                        : "text-[#0F172A] hover:bg-[#F8FAFC] hover:text-[#C5A880]"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.sub.length > 0 && (
                    <div className="ml-4 mt-1 flex flex-col gap-0.5">
                      {link.sub.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-[13px] text-slate-500 hover:text-[#C5A880] rounded-md transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="px-6 py-5 border-t border-slate-100">
              <Link
                to="/members#portal"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#0F172A] text-white py-4 text-[12px] font-bold tracking-widest uppercase hover:bg-[#C5A880] transition-colors"
              >
                MEMBER PORTAL
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── PAGE CONTENT ── */}
      <main>{children}</main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0F172A] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Gold gradient accent line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-[#C5A880] via-white/10 to-transparent mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <img
                src={imgKdla}
                alt="KDLA"
                className="h-16 w-auto mb-6 object-contain scale-[1.5] origin-left invert mix-blend-screen opacity-90"
              />
              <p className="text-[14px] text-slate-400 leading-[1.9] max-w-xs">
                Dedicated to upholding justice and supporting the professional
                growth of the legal community since 1996.
              </p>
              <div className="flex gap-3 mt-8">
                {[imgSslCommerz, imgBKash].map((img, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 px-3 py-2 flex items-center justify-center"
                  >
                    <img
                      src={img}
                      alt="Payment Partner"
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-[15px] text-white mb-8">
                Navigation
              </h4>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "About Association", path: "/about" },
                  { label: "Executive Committee", path: "/committee" },
                  { label: "Member Directory", path: "/members" },
                  { label: "Notices & Circulars", path: "/updates" },
                  { label: "Library", path: "/library" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-[14px] text-slate-400 hover:text-[#C5A880] transition-colors"
                    >
                      {item.label}
                    </Link>
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
                  <span>
                    4, Court House Street
                    <br />
                    Khulna 9100, Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-[#C5A880]" />
                  <span>+880-41-123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-[#C5A880]" />
                  <a
                    href="mailto:contact@kdla.org.bd"
                    className="hover:text-[#C5A880] transition-colors"
                  >
                    contact@kdla.org.bd
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-semibold text-[15px] text-white mb-8">
                Member Portal
              </h4>
              <p className="text-[14px] text-slate-400 leading-[1.9] mb-6">
                Access your membership dashboard, pay dues, and manage your
                profile securely online.
              </p>
              <Link
                to="/members#portal"
                className="inline-block bg-[#C5A880] text-[#0F172A] px-8 py-4 text-[12px] font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300"
              >
                Login / Register
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[13px] text-slate-500">
              &copy; {new Date().getFullYear()} Khulna Divisional Lawyers
              Association. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-[13px] text-slate-500">
              <Link to="/contact" className="hover:text-[#C5A880] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-[#C5A880] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
