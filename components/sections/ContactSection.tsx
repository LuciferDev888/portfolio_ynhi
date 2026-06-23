"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { LeadForm } from "@/components/forms/LeadForm";

interface ContactSectionProps {
  title: string;
  description?: string;
  campaignName: string;
  lang?: "vi" | "en";
}

export function ContactSection({ title, description, campaignName, lang = "vi" }: ContactSectionProps) {
  const isEn = lang === "en";
  const displayTitle = isEn ? "Connect with Me" : title;
  const displayDesc = isEn
    ? "Looking for ways to optimize your supply chain or supervise warehouse processes? Leave your details below, and I will get back to you shortly."
    : description;
  
  const displayEmailLabel = isEn ? "Contact Email" : "Email liên hệ";
  const displayLocationLabel = isEn ? "Work Location" : "Khu vực làm việc";
  const displayLocationVal = isEn 
    ? "Ho Chi Minh City & neighboring industrial parks" 
    : "TP. Hồ Chí Minh & Các khu công nghiệp lân cận";

  return (
    <section
      id="contact"
      className="text-[#1A1A1A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 py-20 sm:py-24 md:py-32 relative z-20 -mt-10 sm:-mt-12 md:-mt-14"
      style={{
        background: "linear-gradient(90deg, rgba(250,249,246,0.65) 0%, rgba(250,249,246,0.5) 45%, rgba(250,249,246,0) 70%), url('/images/background1.png') center right / cover no-repeat",
      }}
    >
      <div className="w-full md:max-w-[50vw] md:ml-10 lg:ml-20 text-left flex flex-col gap-10">
        
        {/* Info Text */}
        <div className="flex flex-col text-left">
          <FadeIn delay={0} y={30} duration={0.8}>
            <h2
              className="text-[#1A1A1A] font-black uppercase tracking-tight leading-none mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 80px)" }}
            >
              {displayTitle}
            </h2>
          </FadeIn>

          <FadeIn delay={0.15} y={30} duration={0.8}>
            <p
              className="font-light text-[#1A1A1A]/80 leading-relaxed max-w-lg"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
            >
              {displayDesc}
            </p>
          </FadeIn>
        </div>

        {/* Lead Form (Stacked on left to prevent overlapping with character on the right) */}
        <div className="w-full max-w-xl">
          <FadeIn delay={0.2} y={30} duration={0.8}>
            <LeadForm 
              campaignName={campaignName} 
              lang={lang}
              className="bg-white border-2 border-[#1A1A1A] shadow-xl rounded-[30px] p-6 sm:p-8" 
            />
          </FadeIn>
        </div>

        {/* Quick Contact Info Block */}
        <FadeIn delay={0.3} y={30} duration={0.8} className="space-y-4 max-w-lg">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-1">
              {displayEmailLabel}
            </span>
            <a
              href="mailto:nhi.yen.logistics@gmail.com"
              className="text-base sm:text-lg font-semibold text-[#1A1A1A] hover:underline"
            >
              nhi.yen.logistics@gmail.com
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/50 font-bold mb-1">
              {displayLocationLabel}
            </span>
            <span className="text-base sm:text-lg font-semibold text-[#1A1A1A] leading-snug">
              {displayLocationVal}
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

export default ContactSection;
