"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactButton } from "@/components/ui/ContactButton";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export function TypewriterText({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetweenWords = 2000,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-flex items-center min-h-[1.5em]">
      <style>{`
        @keyframes typewriter-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      <span>{currentText}</span>
      <span
        className="w-[3px] h-[1em] bg-[#2D6A4F] ml-1.5 inline-block"
        style={{
          animation: "typewriter-blink 0.8s steps(2, start) infinite",
        }}
      />
    </span>
  );
}

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  ctaText: string;
  ctaHref: string;
  lang?: "vi" | "en";
  isMobile?: boolean;
  isMounted?: boolean;
}

// ---------------------------------------------------------
// DESKTOP LAYOUT (>= 1024px)
// ---------------------------------------------------------
function HeroSectionDesktop({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  lang = "vi",
  isMobile = false,
  isMounted = false,
}: HeroSectionProps) {
  const isEn = lang === "en";
  const displayIntro = isEn ? "Hi, I'm" : "Xin chào, tôi là";
  const displayHeadline = isEn ? "Yen Nhi" : headline;
  const displaySubheadline = isEn
    ? "Professional Logistics Supervision Specialist. Optimizing transportation, managing warehouse operations efficiently, and ensuring seamless supply chain flow."
    : subheadline;
  const displayCta = isEn ? "Contact Me" : ctaText;
  const displayViewProjects = isEn ? "View Projects ↗" : "Xem dự án ↗";
  
  const displayHeadlineSubPrefix = isEn
    ? "I supervise Logistics operations with "
    : "Tôi giám sát vận hành Logistics với ";

  const displayHeadlineSubWords = isEn
    ? ["Efficiency", "Precision", "Optimization"]
    : ["Hiệu quả", "Sự chính xác", "Sự tối ưu"];

  return (
    <section
      id="hero-desktop"
      className="relative h-screen min-h-[600px] flex flex-col justify-center overflow-hidden text-[#1A1A1A] z-10 pt-20"
    >
      {/* Background Video (Muted, highly optimized MP4 & WebM, only loaded if mounted & desktop) */}
      {isMounted && !isMobile ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/video_background_hero_banner/video_background_poster.jpg"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <source src="/video_background_hero_banner/video_background_optimized.webm" type="video/webm" />
          <source src="/video_background_hero_banner/video_background_optimized.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src="/video_background_hero_banner/video_background_poster.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover pointer-events-none"
          style={{ zIndex: 0 }}
        />
      )}

      {/* Split background overlay (Left half solid white fading out, right half video) */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[55%] pointer-events-none z-10"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.58) 75%, rgba(255,255,255,0.3) 88%, rgba(255,255,255,0) 100%)"
        }}
      />

      {/* Hero Content (Left-aligned) */}
      <div className="flex-grow flex items-center justify-start px-16 lg:px-24 z-20 relative w-full h-full">
        <div className="max-w-[700px] text-left flex flex-col gap-6">
          <FadeIn delay={0.1} y={30} duration={0.8} noExtraDelay>
            <span className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider text-[#2D6A4F] min-h-[1.5em] block">
              {displayIntro}
            </span>
          </FadeIn>

          <FadeIn delay={0.2} y={30} duration={0.8} noExtraDelay>
            <h1 className="hero-heading font-black leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight">
              <span className="text-[#2D6A4F]">{displayHeadline.split(" ")[0]}</span>{" "}
              <span className="text-[#1A1A1A]">
                {displayHeadline.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} y={30} duration={0.8} noExtraDelay>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-black leading-snug text-[#1A1A1A] tracking-tight min-h-[2.4em] sm:min-h-[auto]">
              {displayHeadlineSubPrefix}
              <span className="text-[#2D6A4F] inline-block font-black border-b-2 border-[#2D6A4F]/20">
                <TypewriterText words={displayHeadlineSubWords} />
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.4} y={30} duration={0.8} noExtraDelay>
            <p className="text-sm sm:text-base md:text-lg text-[#1A1A1A]/80 font-medium leading-relaxed max-w-lg">
              {displaySubheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={30} duration={0.8} className="flex gap-4 items-center flex-wrap mt-4" noExtraDelay>
            <ContactButton
              label={displayCta}
              href={ctaHref}
              variant="light"
              className="bg-[#2D6A4F] border-[#2D6A4F] hover:bg-[#1E4D2B] text-white px-8 py-3.5 shadow-lg"
            />
            <a
              href="#projects"
              className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border-2 border-[#1A1A1A] text-[#1A1A1A] bg-white/80 backdrop-blur-sm font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-[#1A1A1A]/5 transition-colors shadow-md"
            >
              {displayViewProjects}
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MOBILE / TABLET LAYOUT (< 1024px)
// ---------------------------------------------------------
function HeroSectionMobile({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  lang = "vi",
}: HeroSectionProps) {
  const isEn = lang === "en";
  const displayIntro = isEn ? "Hi, I'm" : "Xin chào, tôi là";
  const displayHeadline = isEn ? "Yen Nhi" : headline;
  const displaySubheadline = isEn
    ? "Professional Logistics Supervision Specialist. Optimizing transportation, managing warehouse operations efficiently, and ensuring seamless supply chain flow."
    : subheadline;
  const displayCta = isEn ? "Contact Me" : ctaText;
  const displayViewProjects = isEn ? "View Projects ↗" : "Xem dự án ↗";
  
  const displayHeadlineSubPrefix = isEn
    ? "I supervise Logistics operations with "
    : "Tôi giám sát vận hành Logistics với ";

  const displayHeadlineSubWords = isEn
    ? ["Efficiency", "Precision", "Optimization"]
    : ["Hiệu quả", "Sự chính xác", "Sự tối ưu"];

  return (
    <section
      id="hero-mobile"
      className="relative h-screen min-h-[560px] flex flex-col justify-center overflow-hidden text-[#1A1A1A] z-10 pt-16"
    >
      {/* Background Image instead of Video on Mobile to prevent lag & save CPU */}
      <Image
        src="/video_background_hero_banner/video_background_poster.jpg"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[78%_center] pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Mobile/Tablet background overlay - soft fade to make text highly legible on left while character on right is clear */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.65) 55%, rgba(255,255,255,0.2) 85%, rgba(255,255,255,0.05) 100%), linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)"
        }}
      />

      {/* Content Column (Responsive dimensions for mobile/tablet) */}
      <div className="flex-grow flex items-center justify-start px-6 sm:px-12 z-20 relative w-full h-full mt-4">
        <div className="max-w-[540px] text-left flex flex-col gap-3.5 sm:gap-4">
          <FadeIn delay={0.1} y={20} duration={0.6} noExtraDelay>
            <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#2D6A4F] min-h-[1.5em] block">
              {displayIntro}
            </span>
          </FadeIn>

          <FadeIn delay={0.2} y={20} duration={0.6} noExtraDelay>
            <h1 className="hero-heading font-black leading-none text-4xl sm:text-5xl tracking-tight">
              <span className="text-[#2D6A4F]">{displayHeadline.split(" ")[0]}</span>{" "}
              <span className="text-[#1A1A1A]">
                {displayHeadline.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} y={20} duration={0.6} noExtraDelay>
            <h2 className="text-base sm:text-xl font-black leading-snug text-[#1A1A1A] tracking-tight min-h-[2.4em] sm:min-h-[auto]">
              {displayHeadlineSubPrefix}
              <span className="text-[#2D6A4F] inline-block font-black border-b-2 border-[#2D6A4F]/20">
                <TypewriterText words={displayHeadlineSubWords} />
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.4} y={20} duration={0.6} noExtraDelay>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/85 font-medium leading-relaxed max-w-sm sm:max-w-md">
              {displaySubheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20} duration={0.6} className="flex gap-3 items-center flex-wrap mt-3" noExtraDelay>
            <ContactButton
              label={displayCta}
              href={ctaHref}
              variant="light"
              className="bg-[#2D6A4F] border-[#2D6A4F] hover:bg-[#1E4D2B] text-white px-6 py-3 text-xs sm:text-sm shadow-md"
            />
            <a
              href="#projects-mobile"
              className="px-6 py-3 rounded-full border-2 border-[#1A1A1A] text-[#1A1A1A] bg-white/85 backdrop-blur-sm font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-[#1A1A1A]/5 transition-colors shadow-sm"
            >
              {displayViewProjects}
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MAIN RESPONSIVE ROUTER
// ---------------------------------------------------------
export function HeroSection(props: HeroSectionProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Laptop / Desktop Version */}
      <div className="hidden lg:block">
        <HeroSectionDesktop {...props} isMobile={isMobile} isMounted={isMounted} />
      </div>

      {/* Mobile / Tablet (iPad) Version */}
      <div className="block lg:hidden">
        <HeroSectionMobile {...props} isMobile={isMobile} isMounted={isMounted} />
      </div>
    </>
  );
}

export default HeroSection;
