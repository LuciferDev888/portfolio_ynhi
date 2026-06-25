"use client";

import { FadeIn } from "@/components/ui/FadeIn";

interface ContactSectionProps {
  title: string;
  description?: string;
  campaignName: string;
  lang?: "vi" | "en";
}

// ---------------------------------------------------------
// DESKTOP LAYOUT (>= 1024px)
// ---------------------------------------------------------
function ContactSectionDesktop({ title, description, lang = "vi" }: ContactSectionProps) {
  const isEn = lang === "en";
  const displayTitle = isEn ? "Connect with Me" : title;
  const displayDesc = isEn
    ? "Looking for ways to optimize your supply chain or supervise warehouse processes? Leave your details below, and I will get back to you shortly."
    : description;
  
  const displayLocationVal = isEn 
    ? "Ho Chi Minh City & neighboring industrial parks" 
    : "TP. Hồ Chí Minh & Các khu công nghiệp lân cận";

  return (
    <section
      id="contact-desktop"
      className="text-[#1A1A1A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 py-20 sm:py-24 md:py-32 relative z-20 -mt-10 sm:-mt-12 md:-mt-14 bg-transparent overflow-hidden"
    >
      {/* Background image strictly on the right */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-right bg-cover"
        style={{
          backgroundImage: "url('/images/background6.png')",
        }}
      />

      {/* Overlay on the left side where text is */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[55%] pointer-events-none z-10 hidden md:block"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.55) 75%, rgba(255,255,255,0.28) 88%, rgba(255,255,255,0) 100%)"
        }}
      />

      {/* Mobile background overlay (fallback, just in case) */}
      <div 
        className="absolute inset-0 md:hidden pointer-events-none z-10"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.64) 60%, rgba(255,255,255,0.25) 100%)"
        }}
      />

      <div className="w-full max-w-[50vw] ml-10 lg:ml-20 text-left flex flex-col gap-10 relative z-20">
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

        {/* Contact details box */}
        <div className="w-full max-w-xl">
          <FadeIn delay={0.2} y={30} duration={0.8} className="bg-white border-2 border-[#1A1A1A] shadow-xl rounded-[30px] p-8 sm:p-10 flex flex-col gap-6">
            
            {/* Email Row */}
            <a 
              href="mailto:nhi.yen.logistics@gmail.com" 
              className="flex items-center gap-4 text-[#1A1A1A] hover:text-[#2D6A4F] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#2D6A4F]/5 flex items-center justify-center text-[#2D6A4F] group-hover:bg-[#2D6A4F]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="text-lg font-semibold">nhi.yen.logistics@gmail.com</span>
            </a>

            {/* Location Row */}
            <div className="flex items-center gap-4 text-[#1A1A1A]">
              <div className="w-10 h-10 rounded-full bg-[#2D6A4F]/5 flex items-center justify-center text-[#2D6A4F]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">{displayLocationVal}</span>
            </div>

            {/* Phone Row */}
            <a 
              href="tel:+84901234567" 
              className="flex items-center gap-4 text-[#1A1A1A] hover:text-[#2D6A4F] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#2D6A4F]/5 flex items-center justify-center text-[#2D6A4F] group-hover:bg-[#2D6A4F]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 15h9M12 18.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <span className="text-lg font-semibold">(+84) 90 123 4567</span>
            </a>

            {/* Action button */}
            <div className="pt-6 border-t border-[#1A1A1A]/10 mt-2">
              <a
                href="mailto:nhi.yen.logistics@gmail.com"
                className="bg-[#2D6A4F] border-2 border-[#2D6A4F] hover:bg-[#1E4D2B] text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm inline-flex items-center gap-3 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                <span>{isEn ? "Say Hello" : "Say Hello"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MOBILE / TABLET LAYOUT (< 1024px)
// ---------------------------------------------------------
function ContactSectionMobile({ title, description, lang = "vi" }: ContactSectionProps) {
  const isEn = lang === "en";
  const displayTitle = isEn ? "Connect with Me" : title;
  const displayDesc = isEn
    ? "Looking for ways to optimize your supply chain or supervise warehouse processes? Leave your details below, and I will get back to you shortly."
    : description;
  
  const displayLocationVal = isEn 
    ? "Ho Chi Minh City & neighboring industrial parks" 
    : "TP. Hồ Chí Minh & Các khu công nghiệp lân cận";

  return (
    <section
      id="contact-mobile"
      className="text-[#1A1A1A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 py-12 relative z-20 -mt-10 bg-[#FAF9F6] overflow-hidden"
    >
      {/* Mobile/Tablet background overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.64) 60%, rgba(255,255,255,0.25) 100%)"
        }}
      />

      <div className="w-full text-left flex flex-col gap-6 relative z-20">
        {/* Info Text */}
        <div className="flex flex-col text-left">
          <FadeIn delay={0} y={20} duration={0.6}>
            <h2
              className="text-[#1A1A1A] font-black uppercase tracking-tight leading-none mb-4 text-3xl sm:text-4xl"
            >
              {displayTitle}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={20} duration={0.6}>
            <p
              className="font-light text-[#1A1A1A]/80 leading-relaxed text-sm sm:text-base max-w-lg"
            >
              {displayDesc}
            </p>
          </FadeIn>
        </div>

        {/* Contact details box (more compact padding & gaps for mobile) */}
        <div className="w-full">
          <FadeIn delay={0.15} y={20} duration={0.6} className="bg-white border-2 border-[#1A1A1A] shadow-md rounded-[24px] p-6 sm:p-8 flex flex-col gap-5">
            
            {/* Email Row */}
            <a 
              href="mailto:nhi.yen.logistics@gmail.com" 
              className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#2D6A4F] transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-[#2D6A4F]/5 flex items-center justify-center text-[#2D6A4F] group-hover:bg-[#2D6A4F]/10 transition-colors flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-semibold truncate">nhi.yen.logistics@gmail.com</span>
            </a>

            {/* Location Row */}
            <div className="flex items-center gap-3 text-[#1A1A1A]">
              <div className="w-9 h-9 rounded-full bg-[#2D6A4F]/5 flex items-center justify-center text-[#2D6A4F] flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-semibold">{displayLocationVal}</span>
            </div>

            {/* Phone Row */}
            <a 
              href="tel:+84901234567" 
              className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#2D6A4F] transition-colors group"
            >
              <div className="w-9 h-9 rounded-full bg-[#2D6A4F]/5 flex items-center justify-center text-[#2D6A4F] group-hover:bg-[#2D6A4F]/10 transition-colors flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4.5 h-4.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 15h9M12 18.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-semibold">(+84) 90 123 4567</span>
            </a>

            {/* Action button */}
            <div className="pt-4 border-t border-[#1A1A1A]/10 mt-1">
              <a
                href="mailto:nhi.yen.logistics@gmail.com"
                className="bg-[#2D6A4F] border-2 border-[#2D6A4F] hover:bg-[#1E4D2B] text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-xs inline-flex items-center gap-2.5 transition-colors shadow-md w-full justify-center"
              >
                <span>{isEn ? "Say Hello" : "Say Hello"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MAIN RESPONSIVE ROUTER
// ---------------------------------------------------------
export function ContactSection(props: ContactSectionProps) {
  return (
    <>
      {/* Laptop / Desktop Version */}
      <div className="hidden lg:block">
        <ContactSectionDesktop {...props} />
      </div>

      {/* Mobile / Tablet (iPad) Version */}
      <div className="block lg:hidden">
        <ContactSectionMobile {...props} />
      </div>
    </>
  );
}

export default ContactSection;
