"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface HeaderProps {
  lang: "vi" | "en";
  setLang: (lang: "vi" | "en") => void;
}

export function Header({ lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeAsset, setActiveAsset] = useState<"globe" | "truck">("globe");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAsset((prev) => (prev === "globe" ? "truck" : "globe"));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
    { vi: "Chứng chỉ", en: "Certificates", href: "#certificates" },
    { vi: "Dự án", en: "Project", href: "#projects" },
    { vi: "Liên hệ", en: "Contact", href: "#contact" },
  ];

  // Motion variants for entrance animation
  const headerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const leftColumnContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const leftItemVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const rightColumnContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const rightItemVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const navContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const navLinkVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF9F6]/90 backdrop-blur-md py-3 shadow-md border-b border-[#2D6A4F]/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Column: Logo & Branding with motion (Slide In left-to-right staggered) */}
        <motion.div 
          variants={leftColumnContainerVariants}
          className="flex items-center gap-3 sm:gap-4 z-50 cursor-pointer group"
        >
          <motion.div 
            variants={leftItemVariants}
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#2D6A4F] bg-white shadow-md flex items-center justify-center"
            whileHover={{ 
              scale: 1.08,
              rotate: 5,
              borderColor: "#1E4D2B",
              boxShadow: "0 10px 25px -5px rgba(45, 106, 79, 0.4), 0 8px 10px -6px rgba(45, 106, 79, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <AnimatePresence mode="wait">
              {activeAsset === "globe" ? (
                <motion.div
                  key="globe"
                  initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 p-1.5"
                >
                  <Image
                    src="/images/cartoon_globe.png"
                    alt="Globe"
                    fill
                    priority
                    className="object-contain"
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="truck"
                  initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 p-1.5"
                >
                  <Image
                    src="/images/cartoon_truck.png"
                    alt="Container Truck"
                    fill
                    priority
                    className="object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            variants={leftItemVariants}
            className="flex flex-col text-left"
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="font-black text-[#2D6A4F] leading-tight text-base sm:text-lg group-hover:text-[#1E4D2B] transition-colors duration-200">
              Yến Nhi
            </span>
            <span className="text-[10px] sm:text-xs text-[#4F5E6B] font-bold leading-none mt-1 uppercase tracking-wider">
              {lang === "vi" ? "Chuyên viên giám sát logistics" : "Logistics Supervisor"}
            </span>
          </motion.div>
        </motion.div>

        {/* Center Column: Navigation Links (Desktop) (Slide In top-to-bottom staggered, whitespace-nowrap) */}
        <motion.nav 
          variants={navContainerVariants}
          className="hidden md:flex items-center justify-center gap-4 lg:gap-6 bg-white/50 backdrop-blur-md border border-[#2D6A4F]/10 rounded-full py-2 px-4 shadow-sm relative overflow-hidden"
        >
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.span
                layoutId="hoverBg"
                className="absolute inset-0 bg-[#2D6A4F]/10 rounded-full -z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                style={{
                  margin: "6px",
                  height: "calc(100% - 12px)"
                }}
              />
            )}
          </AnimatePresence>

          {navLinks.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              variants={navLinkVariants}
              className="relative text-[#1A1A1A] font-bold uppercase tracking-wider text-xs lg:text-sm py-2 px-3 lg:px-4 z-10 whitespace-nowrap block"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={`transition-colors duration-200 ${hoveredIndex === idx ? "text-[#2D6A4F]" : "text-[#1A1A1A]"}`}>
                {lang === "vi" ? link.vi : link.en}
              </span>
            </motion.a>
          ))}
        </motion.nav>

        {/* Right Column: Language Switcher + Let's Talk Button (Slide In right-to-left staggered) */}
        <motion.div 
          variants={rightColumnContainerVariants}
          className="hidden md:flex items-center gap-4"
        >
          {/* Language Selector */}
          <motion.div 
            variants={rightItemVariants}
            className="flex items-center gap-1 bg-[#2D6A4F]/10 p-1 rounded-full border border-[#2D6A4F]/20 text-xs font-bold"
          >
            <motion.button
              onClick={() => setLang("vi")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                lang === "vi"
                  ? "bg-[#2D6A4F] text-white shadow-sm"
                  : "text-[#2D6A4F] hover:bg-[#2D6A4F]/5"
              }`}
            >
              VI
            </motion.button>
            <motion.button
              onClick={() => setLang("en")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                lang === "en"
                  ? "bg-[#2D6A4F] text-white shadow-sm"
                  : "text-[#2D6A4F] hover:bg-[#2D6A4F]/5"
              }`}
            >
              EN
            </motion.button>
          </motion.div>

          {/* Let's Talk Button */}
          <motion.a
            href="#contact"
            variants={rightItemVariants}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#1E4D2B",
              boxShadow: "0 10px 20px -5px rgba(45, 106, 79, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="bg-[#2D6A4F] text-white font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-full shadow-md transition-colors"
          >
            {lang === "vi" ? "Liên hệ ngay" : "Let's Talk"}
          </motion.a>
        </motion.div>

        {/* Mobile Menu Actions */}
        <div className="flex md:hidden items-center gap-3 z-50">
          {/* Simple Language Switcher for Mobile */}
          <motion.button
            onClick={() => setLang(lang === "vi" ? "en" : "vi")}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2D6A4F]/10 border border-[#2D6A4F]/20 text-xs font-black text-[#2D6A4F]"
          >
            {lang === "vi" ? "EN" : "VI"}
          </motion.button>

          {/* Burger Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
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
          </motion.button>
        </div>

      </div>
      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#FAF9F6]/98 backdrop-blur-lg z-40 md:hidden flex flex-col items-center justify-center gap-8 overflow-hidden"
          >
            <motion.nav 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 }
                }
              }}
              className="flex flex-col items-center gap-6"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                  }}
                  whileHover={{ scale: 1.1, color: "#2D6A4F" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="text-[#1A1A1A] font-black uppercase tracking-widest text-xl transition-colors"
                >
                  {lang === "vi" ? link.vi : link.en}
                </motion.a>
              ))}
            </motion.nav>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="bg-[#2D6A4F] text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#1E4D2B] transition-all shadow-lg text-sm mt-4"
            >
              {lang === "vi" ? "Liên hệ ngay" : "Let's Talk"}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}

export default Header;
