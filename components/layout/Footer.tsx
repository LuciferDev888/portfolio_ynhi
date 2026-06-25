"use client";

interface FooterProps {
  lang?: "vi" | "en";
}

function FooterDesktop({ lang = "vi" }: FooterProps) {
  const isEn = lang === "en";
  return (
    <footer className="w-full bg-[#0C0C0C] text-white py-8 px-6 border-t border-white/5 relative z-20 text-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm font-light text-white/90">
          &copy; {new Date().getFullYear()} Yen Nhi. {isEn ? "All rights reserved." : "Tất cả các quyền được bảo lưu."}
        </p>
        <p className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-[#2D6A4F]">
          {isEn ? "Designed with passion & precision" : "Thiết kế với đam mê và sự chính xác"}
        </p>
      </div>
    </footer>
  );
}

function FooterMobile({ lang = "vi" }: FooterProps) {
  const isEn = lang === "en";
  return (
    <footer className="w-full bg-[#FAF9F6] text-[#1A1A1A] py-6 px-6 border-t border-[#1A1A1A]/10 relative z-20 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-3">
        <p className="text-xs font-light text-[#1A1A1A]/85">
          &copy; {new Date().getFullYear()} Yen Nhi. {isEn ? "All rights reserved." : "Tất cả các quyền được bảo lưu."}
        </p>
        <p className="text-[9px] font-semibold tracking-widest uppercase text-[#2D6A4F]">
          {isEn ? "Designed with passion & precision" : "Thiết kế với đam mê và sự chính xác"}
        </p>
      </div>
    </footer>
  );
}

export function Footer(props: FooterProps) {
  return (
    <>
      {/* Laptop / Desktop Version */}
      <div className="hidden lg:block">
        <FooterDesktop {...props} />
      </div>

      {/* Mobile / Tablet Version */}
      <div className="block lg:hidden">
        <FooterMobile {...props} />
      </div>
    </>
  );
}

export default Footer;
