"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ContactButton } from "@/components/ui/ContactButton";

interface AboutSectionProps {
  heading: string;
  paragraph: string;
  lang?: "vi" | "en";
}

// ---------------------------------------------------------
// DESKTOP VERSION (Sticky Pinning & Storytelling, >= 1024px)
// ---------------------------------------------------------
function AboutSectionDesktop({ lang = "vi" }: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";
  const displayHeading = isEn ? "About Me" : "Về tôi";
  const displayCta = isEn ? "Get in touch" : "Liên hệ hợp tác";

  const [activeStep, setActiveStep] = useState(0);

  // Track the scroll progress of the AboutSection container on desktop
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Update active phase indicators based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.28) {
      setActiveStep(0);
    } else if (latest < 0.66) {
      setActiveStep(1);
    } else {
      setActiveStep(2);
    }
  });

  const sentencesVi = [
    "Tôi là Yến Nhi!",
    "Hiện là sinh viên năm 3 chuyên ngành Kinh doanh Quốc tế tại Đại học Ngân hàng TP.HCM (HUB) và là Quán quân cuộc thi HUB Young Logistics Talents 2025.",
    "Với nền tảng kiến thức vững chắc về Incoterms, thủ tục hải quan, thanh toán quốc tế cùng tư duy phân tích số liệu nhạy bén, mình luôn mong muốn tìm kiếm giải pháp tối ưu cho dòng chảy hàng hóa và chứng từ."
  ];

  const sentencesEn = [
    "I am Yen Nhi!",
    "Currently a 3rd-year student majoring in International Business at Ho Chi Minh City University of Banking (HUB) and the Champion of the HUB Young Logistics Talents 2025 competition.",
    "With a solid foundation of knowledge in Incoterms, customs procedures, international payments, and sharp data analysis thinking, I always desire to find optimal solutions for the flow of goods and documentation."
  ];

  const activeSentences = isEn ? sentencesEn : sentencesVi;

  // Handle timeline indicator dot clicks
  const handleTimelineClick = (step: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY + rect.top;
      let targetProgress = 0;
      if (step === 0) targetProgress = 0;
      else if (step === 1) targetProgress = 0.45;
      else targetProgress = 0.85;

      window.scrollTo({
        top: scrollPosition + rect.height * targetProgress,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative h-[300vh] bg-transparent"
    >
      {/* Sticky Container (pins on desktop) */}
      <div className="relative sticky top-0 h-screen overflow-hidden flex flex-col items-end justify-center px-16 lg:px-24 text-left">
        
        {/* Background image strictly on the left for desktop */}
        <div 
          className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover"
          style={{
            backgroundImage: "url('/images/background2.png')",
          }}
        />

        {/* Overlay on the right side where text is */}
        <div 
          className="absolute inset-y-0 right-0 w-full md:w-[55%] pointer-events-none z-10"
          style={{
            background: "linear-gradient(270deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0.28) 88%, rgba(255,255,255,0) 100%)"
          }}
        />

        {/* Contents Container (Right-aligned in section, text left-aligned) */}
        <div className="max-w-[650px] w-full flex flex-col items-start justify-center relative z-20 text-left mr-16 lg:mr-24 min-h-[480px]">
          
          <div className="relative w-full min-h-[480px]">
            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                <motion.div
                  key="about-me"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ position: "absolute", top: 0, left: 0 }}
                  className="w-full flex flex-col items-start text-left"
                >
                  <h2
                    className="hero-heading font-black uppercase leading-none tracking-tight text-left w-full mb-8"
                    style={{ fontSize: "clamp(3rem, 7vw, 90px)" }}
                  >
                    {displayHeading}
                  </h2>
                  <div className="flex flex-col gap-5 max-w-[580px]">
                    {activeSentences.map((sentence, idx) => (
                      <p
                        key={idx}
                        className={`text-[#1A1A1A] leading-relaxed select-none text-left ${
                          idx === 0
                            ? "text-xl sm:text-2xl font-black text-[#2D6A4F]"
                            : "text-sm sm:text-base md:text-lg font-medium opacity-90"
                        }`}
                      >
                        {sentence}
                      </p>
                    ))}
                  </div>
                  <div className="mt-10">
                    <ContactButton
                      label={displayCta}
                      href="#contact"
                      variant="light"
                      className="bg-[#2D6A4F] border-[#2D6A4F] hover:bg-[#1E4D2B] text-white"
                    />
                  </div>
                </motion.div>
              )}

              {activeStep === 1 && (
                <motion.div
                  key="short-term"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ position: "absolute", top: 0, left: 0 }}
                  className="w-full flex flex-col items-start text-left"
                >
                  <div className="px-3 py-1 bg-[#2D6A4F]/10 text-[#2D6A4F] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                    {isEn ? "Career Objectives" : "Hành trình sự nghiệp"}
                  </div>
                  <h2
                    className="hero-heading font-black uppercase leading-none tracking-tight text-left w-full mb-8"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 75px)" }}
                  >
                    {isEn ? "Short-term" : "Mục tiêu ngắn hạn"}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-medium text-[#1A1A1A] leading-relaxed max-w-[580px]">
                    {isEn 
                      ? "Apply academic knowledge and data analysis skills to assist businesses in inspecting and processing documentation (Bill of Lading, Invoice, Packing List...) accurately and rapidly; while learning actual operational workflows in the company."
                      : "Áp dụng kiến thức học thuật và kỹ năng phân tích dữ liệu để hỗ trợ doanh nghiệp kiểm tra, xử lý chứng từ (Bill of Lading, Invoice, Packing List...) một cách chính xác, nhanh chóng; đồng thời học hỏi quy trình vận hành thực tế tại doanh nghiệp."
                    }
                  </p>
                </motion.div>
              )}

              {activeStep === 2 && (
                <motion.div
                  key="long-term"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ position: "absolute", top: 0, left: 0 }}
                  className="w-full flex flex-col items-start text-left"
                >
                  <div className="px-3 py-1 bg-[#2D6A4F]/10 text-[#2D6A4F] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                    {isEn ? "Career Objectives" : "Hành trình sự nghiệp"}
                  </div>
                  <h2
                    className="hero-heading font-black uppercase leading-none tracking-tight text-left w-full mb-8"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 75px)" }}
                  >
                    {isEn ? "Long-term" : "Mục tiêu dài hạn"}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl font-medium text-[#1A1A1A] leading-relaxed max-w-[580px] mb-8">
                    {isEn
                      ? "Develop professional capabilities to become a Document Specialist or Logistics Specialist managing major international transport routes."
                      : "Phát triển năng lực chuyên môn để trở thành Chuyên viên Chứng từ (Document Specialist) hoặc Chuyên viên Logistics (Logistics Specialist) quản lý các tuyến vận tải quốc tế lớn."
                    }
                  </p>
                  <ContactButton
                    label={displayCta}
                    href="#contact"
                    variant="light"
                    className="bg-[#2D6A4F] border-[#2D6A4F] hover:bg-[#1E4D2B] text-white"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Timeline Navigation Dots */}
        <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30 items-center">
          {/* Connecting vertical timeline line */}
          <div className="absolute top-2 bottom-2 w-0.5 bg-[#1A1A1A]/10 pointer-events-none" />

          {[0, 1, 2].map((step) => {
            const titles = isEn
              ? ["About Me", "Short-term Goal", "Long-term Goal"]
              : ["Về tôi", "Mục tiêu ngắn hạn", "Mục tiêu dài hạn"];
            const isActive = activeStep === step;
            return (
              <div 
                key={step} 
                className="flex items-center justify-end gap-4 group cursor-pointer relative"
                onClick={() => handleTimelineClick(step)}
              >
                <span className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${isActive ? "text-[#2D6A4F] opacity-100 scale-100" : "text-[#1A1A1A]/40 opacity-0 group-hover:opacity-60 scale-95"}`}>
                  {titles[step]}
                </span>
                <div className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 relative z-10 ${isActive ? "bg-[#2D6A4F] border-[#2D6A4F] scale-125 shadow-md shadow-[#2D6A4F]/20" : "border-[#1A1A1A]/30 bg-white group-hover:border-[#1A1A1A]/60"}`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MOBILE / TABLET VERSION (Stacked Layout, < 1024px)
// ---------------------------------------------------------
function AboutSectionMobile({ lang = "vi" }: AboutSectionProps) {
  const isEn = lang === "en";
  const displayHeading = isEn ? "About Me" : "Về tôi";
  const displayCta = isEn ? "Get in touch" : "Liên hệ hợp tác";

  const sentencesVi = [
    "Tôi là Yến Nhi!",
    "Hiện là sinh viên năm 3 chuyên ngành Kinh doanh Quốc tế tại Đại học Ngân hàng TP.HCM (HUB) và là Quán quân cuộc thi HUB Young Logistics Talents 2025.",
    "Với nền tảng kiến thức vững chắc về Incoterms, thủ tục hải quan, thanh toán quốc tế cùng tư duy phân tích số liệu nhạy bén, mình luôn mong muốn tìm kiếm giải pháp tối ưu cho dòng chảy hàng hóa và chứng từ."
  ];

  const sentencesEn = [
    "I am Yen Nhi!",
    "Currently a 3rd-year student majoring in International Business at Ho Chi Minh City University of Banking (HUB) and the Champion of the HUB Young Logistics Talents 2025 competition.",
    "With a solid foundation of knowledge in Incoterms, customs procedures, international payments, and sharp data analysis thinking, I always desire to find optimal solutions for the flow of goods and documentation."
  ];

  const activeSentences = isEn ? sentencesEn : sentencesVi;

  return (
    <section
      id="about-mobile"
      className="relative h-auto bg-[#FAF9F6] px-6 py-12 md:py-16 text-left"
    >
      {/* Mobile/Tablet background overlay (full screen gradient for readability) */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.64) 60%, rgba(255,255,255,0.25) 100%)"
        }}
      />

      <div className="w-full flex flex-col items-start gap-12 relative z-20">
        {/* Block 1: About Me */}
        <div className="w-full flex flex-col items-start text-left">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-left w-full mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 60px)" }}
          >
            {displayHeading}
          </h2>
          <div className="flex flex-col gap-4">
            {activeSentences.map((sentence, idx) => (
              <p
                key={idx}
                className={`text-[#1A1A1A] leading-relaxed select-none text-left ${
                  idx === 0
                    ? "text-xl sm:text-2xl font-black text-[#2D6A4F]"
                    : "text-sm sm:text-base font-medium opacity-90"
                }`}
              >
                {sentence}
              </p>
            ))}
          </div>
          <div className="mt-6">
            <ContactButton
              label={displayCta}
              href="#contact"
              variant="light"
              className="bg-[#2D6A4F] border-[#2D6A4F] hover:bg-[#1E4D2B] text-white"
            />
          </div>
        </div>

        {/* Block 2: Short-term Goal */}
        <div className="w-full flex flex-col items-start text-left pt-8 border-t border-[#2D6A4F]/10">
          <div className="px-3 py-1 bg-[#2D6A4F]/10 text-[#2D6A4F] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            {isEn ? "Career Objectives" : "Hành trình sự nghiệp"}
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-left w-full mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 45px)" }}
          >
            {isEn ? "Short-term" : "Mục tiêu ngắn hạn"}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-[#1A1A1A] leading-relaxed">
            {isEn 
              ? "Apply academic knowledge and data analysis skills to assist businesses in inspecting and processing documentation (Bill of Lading, Invoice, Packing List...) accurately and rapidly; while learning actual operational workflows in the company."
              : "Áp dụng kiến thức học thuật và kỹ năng phân tích dữ liệu để hỗ trợ doanh nghiệp kiểm tra, xử lý chứng từ (Bill of Lading, Invoice, Packing List...) một cách chính xác, nhanh chóng; đồng thời học hỏi quy trình vận hành thực tế tại doanh nghiệp."
            }
          </p>
        </div>

        {/* Block 3: Long-term Goal */}
        <div className="w-full flex flex-col items-start text-left pt-8 border-t border-[#2D6A4F]/10">
          <div className="px-3 py-1 bg-[#2D6A4F]/10 text-[#2D6A4F] text-xs font-bold uppercase tracking-widest rounded-full mb-3">
            {isEn ? "Career Objectives" : "Hành trình sự nghiệp"}
          </div>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-left w-full mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 45px)" }}
          >
            {isEn ? "Long-term" : "Mục tiêu dài hạn"}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium text-[#1A1A1A] leading-relaxed">
            {isEn
              ? "Develop professional capabilities to become a Document Specialist or Logistics Specialist managing major international transport routes."
              : "Phát triển năng lực chuyên môn để trở thành Chuyên viên Chứng từ (Document Specialist) hoặc Chuyên viên Logistics (Logistics Specialist) quản lý các tuyến vận tải quốc tế lớn."
            }
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MAIN RESPONSIVE ROUTER
// ---------------------------------------------------------
export function AboutSection(props: AboutSectionProps) {
  return (
    <>
      {/* Renders for screens >= 1024px */}
      <div className="hidden lg:block">
        <AboutSectionDesktop {...props} />
      </div>

      {/* Renders for screens < 1024px */}
      <div className="block lg:hidden">
        <AboutSectionMobile {...props} />
      </div>
    </>
  );
}

export default AboutSection;
