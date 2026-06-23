"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

interface CertificatesSectionProps {
  heading: string;
  items: CertificateItem[];
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
};

export function CertificatesSection({ items, lang = "vi" }: CertificatesSectionProps) {
  const isEn = lang === "en";
  const displayHeading = isEn ? "Sertificastes" : "Chứng chỉ";

  return (
    <section
      id="certificates"
      className="text-[#1A1A1A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 py-20 sm:py-24 md:py-32 relative z-20 -mt-10 sm:-mt-12 md:-mt-14"
      style={{
        background: "linear-gradient(270deg, rgba(250,249,246,0.65) 0%, rgba(250,249,246,0.5) 45%, rgba(250,249,246,0) 70%), url('/images/background2.png') center left / cover no-repeat",
      }}
    >
      <div className="w-full md:max-w-[55vw] md:mr-10 lg:mr-20 md:ml-auto text-right flex flex-col items-end">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full">
          <h2
            className="text-[#1A1A1A] font-black uppercase text-right mb-16 sm:mb-20 md:mb-28 tracking-tight leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 120px)" }}
          >
            {displayHeading}
          </h2>
        </FadeIn>

        {/* Certificates Grid (2 columns on desktop to fit cleanly in half-page layout) */}
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

export default CertificatesSection;
