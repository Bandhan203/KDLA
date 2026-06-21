import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CommitteePage from "./pages/CommitteePage";
import MembersPage from "./pages/MembersPage";
import UpdatesPage from "./pages/UpdatesPage";
import LibraryPage from "./pages/LibraryPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-28">
              <span className="font-serif font-bold text-[80px] md:text-[120px] text-[#F8FAFC] leading-none select-none">
                404
              </span>
              <h2 className="font-serif text-3xl font-semibold text-[#0F172A] mt-4 mb-4">
                Page Not Found
              </h2>
              <p className="text-[15px] text-slate-500 mb-8 max-w-md">
                The page you're looking for doesn't exist or has been moved. Please use the navigation above to find what you need.
              </p>
              <a
                href="/"
                className="bg-[#0F172A] text-white px-10 py-4 text-[12px] font-bold tracking-widest uppercase hover:bg-[#C5A880] transition-colors duration-300"
              >
                Return to Home
              </a>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}
