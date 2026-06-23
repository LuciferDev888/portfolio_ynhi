"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ContactButton } from "@/components/ui/ContactButton";

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  ctaText: string;
  ctaHref: string;
  lang?: "vi" | "en";
}

export function HeroSection({
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
  
  const displayHeadlineSub = isEn ? (
    <>
      I supervise <span className="text-[#2D6A4F]">Logistics</span> operations with <span className="text-[#2D6A4F]">Efficiency</span> & <span className="text-[#2D6A4F]">Precision</span>
    </>
  ) : (
    <>
      Tôi giám sát vận hành <span className="text-[#2D6A4F]">Logistics</span> với <span className="text-[#2D6A4F]">Hiệu quả</span> & <span className="text-[#2D6A4F]">Sự chính xác</span>
    </>
  );

  return (
    <section
      className="relative h-screen min-h-[600px] flex flex-col justify-center overflow-hidden text-[#1A1A1A] z-10 pt-20"
      style={{
        background: "linear-gradient(90deg, rgba(250,249,246,0.65) 0%, rgba(250,249,246,0.5) 45%, rgba(250,249,246,0) 70%), url('/images/hero_banner.png') center right 30% / cover no-repeat",
      }}
    >
      {/* Hero Content (Left-aligned) */}
      <div className="flex-grow flex items-center justify-start px-6 md:px-16 lg:px-24 z-20 relative w-full h-full mt-6 sm:mt-0">
        <div className="max-w-[700px] text-left flex flex-col gap-4 sm:gap-5 md:gap-6">
          <FadeIn delay={0.1} y={30} duration={0.8}>
            <span className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider text-[#2D6A4F]">
              {displayIntro}
            </span>
          </FadeIn>

          <FadeIn delay={0.2} y={30} duration={0.8}>
            <h1 className="hero-heading font-black leading-none text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight">
              <span className="text-[#2D6A4F]">{displayHeadline.split(" ")[0]}</span>{" "}
              <span className="text-[#1A1A1A]">
                {displayHeadline.split(" ").slice(1).join(" ")}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} y={30} duration={0.8}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-black leading-snug text-[#1A1A1A] tracking-tight">
              {displayHeadlineSub}
            </h2>
          </FadeIn>

          <FadeIn delay={0.4} y={30} duration={0.8}>
            <p className="text-sm sm:text-base md:text-lg text-[#1A1A1A]/80 font-medium leading-relaxed max-w-lg">
              {displaySubheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={30} duration={0.8} className="flex gap-4 items-center flex-wrap mt-4">
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

      {/* Spacer to balance layout */}
      <div className="pb-8" />
    </section>
  );
}

export default HeroSection;


