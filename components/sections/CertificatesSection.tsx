"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

interface CertificatesSectionProps {
  heading: string;
  items: CertificateItem[];
  lang?: "vi" | "en";
}

const issuerTranslations: Record<string, { title: string; issuer: string }> = {
  c1: {
    title: "FIATA Higher Diploma in Supply Chain Management",
    issuer: "International Federation of Freight Forwarders Associations (FIATA)",
  },
  c2: {
    title: "Certified Logistics Operations & Warehouse Supervisor",
    issuer: "Vietnam Logistics Association (VLA)",
  },
  c3: {
    title: "Customs Brokerage Professional License",
    issuer: "General Department of Vietnam Customs",
  },
  c4: {
    title: "IATA Dangerous Goods Regulations (DGR) Certification",
    issuer: "International Air Transport Association (IATA)",
  },
};

const issuerTranslationsVi: Record<string, { title: string; issuer: string }> = {
  c1: {
    title: "Chứng chỉ Chuỗi cung ứng Quốc tế FIATA",
    issuer: "Liên đoàn các Hiệp hội Giao nhận Vận tải Quốc tế",
  },
  c2: {
    title: "Giám sát Vận hành Kho hàng & Logistics",
    issuer: "Hiệp hội Doanh nghiệp Dịch vụ Logistics Việt Nam (VLA)",
  },
  c3: {
    title: "Chứng chỉ Nghiệp vụ Khai báo Hải quan",
    issuer: "Tổng cục Hải quan Việt Nam",
  },
  c4: {
    title: "Chứng chỉ Vận chuyển Hàng hóa Nguy hiểm IATA",
    issuer: "Hiệp hội Vận tải Hàng không Quốc tế (IATA)",
  },
};

// ---------------------------------------------------------
// DESKTOP LAYOUT (>= 1024px)
// ---------------------------------------------------------
function CertificatesSectionDesktop({ items, lang = "vi" }: CertificatesSectionProps) {
  const isEn = lang === "en";
  const displayHeading = isEn ? "Certificates" : "Chứng chỉ";

  return (
    <section
      id="certificates-desktop"
      className="text-[#1A1A1A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 py-20 sm:py-24 md:py-32 relative z-20 -mt-10 sm:-mt-12 md:-mt-14 bg-transparent overflow-hidden"
    >
      {/* Background image strictly on the left */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-left bg-cover"
        style={{
          backgroundImage: "url('/images/background4.png')",
        }}
      />

      {/* Overlay on the right side where text is */}
      <div 
        className="absolute inset-y-0 right-0 w-full md:w-[55%] pointer-events-none z-10 hidden md:block"
        style={{
          background: "linear-gradient(270deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0.28) 88%, rgba(255,255,255,0) 100%)"
        }}
      />

      {/* Mobile background overlay (fallback, just in case) */}
      <div 
        className="absolute inset-0 md:hidden pointer-events-none z-10"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.64) 60%, rgba(255,255,255,0.25) 100%)"
        }}
      />

      <div className="w-full md:max-w-[55vw] mr-10 lg:mr-20 ml-auto text-right flex flex-col items-end relative z-20">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full flex flex-col items-end">
          <h2
            className="font-black uppercase text-right tracking-tight leading-none mb-4"
            style={{ 
              fontSize: "clamp(3rem, 8vw, 120px)",
              background: "linear-gradient(135deg, #2D6A4F 0%, #1A1A1A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {displayHeading}
          </h2>
          {/* Animated decorative accent line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="h-1.5 bg-[#2D6A4F] rounded-full mb-16 sm:mb-20 md:mb-28"
          />
        </FadeIn>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {items.map((item, index) => {
            const trans = isEn ? issuerTranslations[item.id] : issuerTranslationsVi[item.id];
            const displayTitle = trans ? trans.title : item.title;
            const displayIssuer = trans ? trans.issuer : item.issuer;

            return (
              <FadeIn
                key={item.id}
                delay={index * 0.15}
                y={30}
                duration={0.8}
                as="div"
                className="bg-white/90 backdrop-blur-sm border-2 border-[#1A1A1A] p-6 sm:p-8 rounded-[24px] sm:rounded-[30px] flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white text-right items-end w-full"
              >
                <div className="w-full flex flex-col items-end">
                  <span className="inline-block px-3 py-1 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {item.date}
                  </span>
                  <h3 className="font-bold text-[#1A1A1A] leading-tight text-base sm:text-lg uppercase mb-3 w-full">
                    {displayTitle}
                  </h3>
                </div>
                <p className="font-light text-xs text-[#1A1A1A]/70 italic mt-auto w-full">
                  {isEn ? "Issued by:" : "Cấp bởi:"} {displayIssuer}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MOBILE / TABLET LAYOUT (< 1024px)
// ---------------------------------------------------------
function CertificatesSectionMobile({ items, lang = "vi" }: CertificatesSectionProps) {
  const isEn = lang === "en";
  const displayHeading = isEn ? "Certificates" : "Chứng chỉ";

  return (
    <section
      id="certificates-mobile"
      className="text-[#1A1A1A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 py-10 sm:py-16 relative z-20 -mt-10 sm:-mt-12 md:-mt-14 bg-[#FAF9F6] overflow-hidden"
    >
      {/* Mobile/Tablet background overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.64) 60%, rgba(255,255,255,0.25) 100%)"
        }}
      />

      <div className="w-full text-right flex flex-col items-end relative z-20">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full flex flex-col items-end">
          <h2
            className="font-black uppercase text-right tracking-tight leading-none mb-3"
            style={{ 
              fontSize: "clamp(2.5rem, 6vw, 60px)",
              background: "linear-gradient(135deg, #2D6A4F 0%, #1A1A1A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {displayHeading}
          </h2>
          {/* Animated decorative accent line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "90px" }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="h-1.2 bg-[#2D6A4F] rounded-full mb-8 sm:mb-12"
          />
        </FadeIn>

        {/* Certificates Grid - Hardcoded grid-cols-2 for mobile/tablet */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 w-full">
          {items.map((item, index) => {
            const trans = isEn ? issuerTranslations[item.id] : issuerTranslationsVi[item.id];
            const displayTitle = trans ? trans.title : item.title;
            const displayIssuer = trans ? trans.issuer : item.issuer;

            return (
              <FadeIn
                key={item.id}
                delay={index * 0.15}
                y={30}
                duration={0.8}
                as="div"
                className="bg-white/90 backdrop-blur-sm border-2 border-[#1A1A1A] p-3 sm:p-4 rounded-[16px] sm:rounded-[20px] flex flex-col justify-between min-h-[120px] sm:min-h-[150px] transition-all duration-300 hover:shadow-lg hover:bg-white text-right items-end w-full"
              >
                <div className="w-full flex flex-col items-end">
                  <span className="inline-block px-2 py-0.5 bg-[#1A1A1A] text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full mb-2.5">
                    {item.date}
                  </span>
                  <h3 className="font-bold text-[#1A1A1A] leading-tight text-[10px] sm:text-xs md:text-sm uppercase mb-1.5 w-full">
                    {displayTitle}
                  </h3>
                </div>
                <p className="font-light text-[8px] sm:text-[10px] text-[#1A1A1A]/70 italic mt-auto w-full">
                  {isEn ? "Issued by:" : "Cấp bởi:"} {displayIssuer}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MAIN RESPONSIVE ROUTER
// ---------------------------------------------------------
export function CertificatesSection(props: CertificatesSectionProps) {
  return (
    <>
      {/* Laptop / Desktop Version */}
      <div className="hidden lg:block">
        <CertificatesSectionDesktop {...props} />
      </div>

      {/* Mobile / Tablet (iPad) Version */}
      <div className="block lg:hidden">
        <CertificatesSectionMobile {...props} />
      </div>
    </>
  );
}

export default CertificatesSection;
