"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface MarqueeSectionProps {
  row1: string[];
  row2: string[];
}

export function MarqueeSection({ row1, row2 }: MarqueeSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    // Use passive listener for best scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Triple arrays for seamless looping
  const tripledRow1 = [...row1, ...row1, ...row1];
  const tripledRow2 = [...row2, ...row2, ...row2];

  const xRow1 = offset - 200;
  const xRow2 = -(offset - 200);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3 w-full"
    >
      {/* Row 1: Moves RIGHT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3"
          style={{
            transform: `translate3d(${xRow1}px, 0, 0)`,
            willChange: "transform",
          }}
        >
          {tripledRow1.map((url, index) => (
            <div
              key={`r1-${index}`}
              className="flex-shrink-0 w-[420px] h-[270px] relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-900"
            >
              <Image
                src={url}
                alt={`Marquee Row 1 GIF ${index}`}
                fill
                loading="lazy"
                className="object-cover"
                sizes="420px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Moves LEFT on scroll */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-3"
          style={{
            transform: `translate3d(${xRow2}px, 0, 0)`,
            willChange: "transform",
          }}
        >
          {tripledRow2.map((url, index) => (
            <div
              key={`r2-${index}`}
              className="flex-shrink-0 w-[420px] h-[270px] relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-900"
            >
              <Image
                src={url}
                alt={`Marquee Row 2 GIF ${index}`}
                fill
                loading="lazy"
                className="object-cover"
                sizes="420px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarqueeSection;
