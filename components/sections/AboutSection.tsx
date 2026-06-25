"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactButton } from "@/components/ui/ContactButton";

interface AboutSectionProps {
  heading: string;
  paragraph: string;
  lang?: "vi" | "en";
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const sentenceVariants = {
  hidden: { 
    opacity: 0, 
    x: -40,
    y: 10,
    filter: "blur(4px)",
  },
  visible: { 
    opacity: 1, 
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: { 
      type: "spring" as const,
      damping: 20,
      stiffness: 80,
      duration: 0.8,
    },
  },
};

export function AboutSection({
  lang = "vi",
}: AboutSectionProps) {
  const isEn = lang === "en";
  const displayHeading = isEn ? "About Me" : "Về tôi";
  
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
  const displayCta = isEn ? "Get in touch" : "Liên hệ hợp tác";

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-end justify-center text-left px-6 md:px-16 lg:px-24 py-20 overflow-hidden bg-transparent"
    >
      {/* Background image strictly on the left for desktop */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover"
        style={{
          backgroundImage: "url('/images/background2.png')",
        }}
      />

      {/* Overlay on the right side where text is */}
      <div 
        className="absolute inset-y-0 right-0 w-full md:w-[55%] pointer-events-none z-10 hidden md:block"
        style={{
          background: "linear-gradient(270deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0.28) 88%, rgba(255,255,255,0) 100%)"
        }}
      />
      
      {/* Mobile background overlay (full screen gradient for readability) */}
      <div 
        className="absolute inset-0 md:hidden pointer-events-none z-10"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.64) 60%, rgba(255,255,255,0.25) 100%)"
        }}
      />

      {/* Contents Container (Right-aligned in section, text left-aligned) */}
      <div className="max-w-[650px] w-full flex flex-col items-start justify-center relative z-20 text-left md:mr-6 lg:mr-12">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-left w-full"
            style={{ fontSize: "clamp(3rem, 10vw, 120px)" }}
          >
            {displayHeading}
          </h2>
        </FadeIn>

        {/* Sentence staggered animation sequence */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8 sm:mt-12 w-full flex flex-col items-start gap-5 max-w-[580px]"
        >
          {activeSentences.map((sentence, idx) => (
            <motion.p
              key={idx}
              variants={sentenceVariants}
              className={`text-[#1A1A1A] leading-relaxed select-none text-left ${
                idx === 0
                  ? "text-2xl sm:text-3xl font-black text-[#2D6A4F]"
                  : "text-sm sm:text-base md:text-lg font-medium opacity-90"
              }`}
            >
              {sentence}
            </motion.p>
          ))}
        </motion.div>

        {/* Contact Button */}
        <FadeIn delay={0.4} y={30} duration={0.8} className="mt-12 sm:mt-16 md:mt-20">
          <ContactButton
            label={displayCta}
            href="#contact"
            variant="light"
            className="bg-[#2D6A4F] border-[#2D6A4F] hover:bg-[#1E4D2B] text-white"
          />
        </FadeIn>
      </div>
    </section>
  );
}

export default AboutSection;

