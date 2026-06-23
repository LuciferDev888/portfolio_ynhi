"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeaderProps {
  lang: "vi" | "en";
  setLang: (lang: "vi" | "en") => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { vi: "Trang chủ", en: "Home", href: "#" },
    { vi: "Giới thiệu", en: "About", href: "#about" },
    { vi: "Kỹ năng", en: "Skill", href: "#skills" },
    { vi: "Chứng chỉ", en: "Sertificastes", href: "#certificates" },
    { vi: "Dự án", en: "Project", href: "#projects" },
    { vi: "Liên hệ", en: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F6]/90 backdrop-blur-md py-3 shadow-md border-b border-[#2D6A4F]/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Column: Logo & Branding */}
        <div className="flex items-center gap-3 sm:gap-4 z-50">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#2D6A4F] bg-white shadow-md transition-all duration-300">
            <Image
              src="/images/avatar.jpg"
              alt="Yến Nhi Avatar"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-black text-[#2D6A4F] leading-tight text-base sm:text-lg">
              Yến Nhi
            </span>
            <span className="text-[10px] sm:text-xs text-[#4F5E6B] font-bold leading-none mt-1 uppercase tracking-wider">
              {lang === "vi" ? "Chuyên viên giám sát logistics" : "Logistics Supervisor"}
            </span>
          </div>
        </div>

        {/* Center Column: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8 bg-white/40 backdrop-blur-sm border border-[#1A1A1A]/5 rounded-full py-2.5 px-6 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#1A1A1A] font-bold uppercase tracking-wider text-xs lg:text-sm hover:text-[#2D6A4F] transition-colors duration-200"
            >
              {lang === "vi" ? link.vi : link.en}
            </a>
          ))}
        </nav>

        {/* Right Column: Language Switcher + Let's Talk Button */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-1 bg-[#2D6A4F]/10 p-1 rounded-full border border-[#2D6A4F]/20 text-xs font-bold">
            <button
              onClick={() => setLang("vi")}
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                lang === "vi"
                  ? "bg-[#2D6A4F] text-white shadow-sm"
                  : "text-[#2D6A4F] hover:bg-[#2D6A4F]/5"
              }`}
            >
              VI
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                lang === "en"
                  ? "bg-[#2D6A4F] text-white shadow-sm"
                  : "text-[#2D6A4F] hover:bg-[#2D6A4F]/5"
              }`}
            >
              EN
            </button>
          </div>

          {/* Let's Talk Button */}
          <a
            href="#contact"
            className="bg-[#2D6A4F] text-white font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-full hover:bg-[#1E4D2B] transition-all duration-200 shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            {lang === "vi" ? "Liên hệ ngay" : "Let's Talk"}
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex md:hidden items-center gap-3 z-50">
          {/* Simple Language Switcher for Mobile */}
          <button
            onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 text-xs font-black text-[#2D6A4F]"
          >
            {lang === "vi" ? "EN" : "VI"}
          </button>

          {/* Burger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF9F6] border-2 border-[#1A1A1A] shadow-md focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col justify-between w-5 h-3">
              <span
                className={`h-0.5 w-full bg-[#1A1A1A] rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "rotate-45 translate-y-[1px]" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#1A1A1A] rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-[#1A1A1A] rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-45 -translate-y-[1px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-[#FAF9F6]/95 backdrop-blur-lg z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#1A1A1A] font-black uppercase tracking-widest text-xl hover:text-[#2D6A4F] transition-colors"
            >
              {lang === "vi" ? link.vi : link.en}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="bg-[#2D6A4F] text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#1E4D2B] transition-all shadow-lg text-sm mt-4"
        >
          {lang === "vi" ? "Liên hệ ngay" : "Let's Talk"}
        </a>
      </div>

    </header>
  );
}

export default Header;
