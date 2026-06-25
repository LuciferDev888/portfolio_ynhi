"use client";

import { motion, Variants } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

interface ServiceItem {
  id: string;
  num: string;
  name: string;
  description: string;
}

interface ServicesSectionProps {
  heading: string;
  items: ServiceItem[];
  lang?: "vi" | "en";
}

const skillTranslations: Record<string, { name: string; description: string }> = {
  s1: {
    name: "Warehouse Operations Supervision",
    description: "Manage and control inbound/outbound warehouse processes, optimize layouts to maximize capacity and accelerate cargo handling speed.",
  },
  s2: {
    name: "Transport & Freight Dispatching",
    description: "Design smart delivery routing, supervise maritime and inland transport partners, and optimize container load factors.",
  },
  s3: {
    name: "Customs Clearance & Documentation",
    description: "Declare customs profiles, assign accurate HS codes, prepare essential import/export shipping documents (C/O, B/L, Invoice, Packing List).",
  },
  s4: {
    name: "Risk Management & Cargo Safety",
    description: "Supervise safety-compliant loading and lashing, handle cargo damage claims, and mitigate transport scheduling delays.",
  },
  s5: {
    name: "Logistics Cost Optimization",
    description: "Generate reports and evaluate logistical KPI efficiency, proposing options to trim off-budget operational costs.",
  },
};


const itemVariants: Variants = {
  hidden: { opacity: 0, x: -80, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
    },
  },
};

export function ServicesSection({ heading, items, lang = "vi" }: ServicesSectionProps) {
  const isEn = lang === "en";
  const displayHeading = isEn ? "Skills" : heading;

  return (
    <section
      id="skills"
      className="text-[#1A1A1A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 py-20 sm:py-24 md:py-32 relative z-20 -mt-10 sm:-mt-12 md:-mt-14 bg-transparent overflow-hidden"
    >
      {/* Background image stretched across the section */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-[position:right_-240px_center] bg-cover"
        style={{
          backgroundImage: "url('/images/background1.png')",
        }}
      />

      {/* Overlay on the left side where text is */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[42%] pointer-events-none z-10 hidden md:block"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0.28) 88%, rgba(255,255,255,0) 100%)"
        }}
      />

      {/* Mobile background overlay (full screen gradient for readability) */}
      <div 
        className="absolute inset-0 md:hidden pointer-events-none z-10"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.64) 60%, rgba(255,255,255,0.25) 100%)"
        }}
      />

      {/* Left Content Column */}
      <div className="w-full md:max-w-[40vw] md:ml-10 lg:ml-20 text-left relative z-20">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="text-[#1A1A1A] font-black uppercase text-left mb-16 sm:mb-20 md:mb-28 tracking-tight leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 120px)" }}
          >
            {displayHeading}
          </h2>
        </FadeIn>

        {/* Services Vertical List with individual slide-in scroll triggers */}
        <div 
          className="flex flex-col border-t border-[#1A1A1A]/15"
        >
          {items.map((item) => {
            const translated = isEn ? skillTranslations[item.id] : null;
            const displayName = translated ? translated.name : item.name;
            const displayDesc = translated ? translated.description : item.description;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                className="flex items-start justify-between gap-4 sm:gap-6 py-8 sm:py-10 border-b border-[#1A1A1A]/15 flex-row text-left hover:bg-[#2D6A4F]/5 px-2 rounded-xl transition-colors duration-200"
              >
                {/* Left Column: Number */}
                <div
                  className="font-black text-[#1A1A1A] select-none leading-none w-14 sm:w-20 md:w-24 flex-shrink-0"
                  style={{ fontSize: "clamp(2rem, 5vw, 70px)" }}
                >
                  {item.num}
                </div>

                {/* Right Column: Name + Description stacked */}
                <div className="flex-grow flex flex-col gap-2">
                  <h3
                    className="font-semibold text-[#1A1A1A] uppercase leading-tight"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
                  >
                    {displayName}
                  </h3>
                  <p
                    className="font-light text-[#1A1A1A] opacity-80 leading-relaxed"
                    style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.15rem)" }}
                  >
                    {displayDesc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

