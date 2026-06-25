"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export function ImageMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the container as it passes through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create a spring-smoothed progress to add smooth inertia (continues moving after scroll stops)
  // and a 1s catch-up lag/delay
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 18,
    damping: 14,
    mass: 2.2,
    restDelta: 0.001
  });

  // Map the smooth progress to horizontal translations
  const x1 = useTransform(smoothProgress, [0, 1], ["15%", "-35%"]);
  const x2 = useTransform(smoothProgress, [0, 1], ["-35%", "15%"]);
  const xText = useTransform(smoothProgress, [0, 1], ["0%", "-40%"]);

  const row1Images = [
    "/part_2/1.jpg",
    "/part_2/2.jpg",
    "/part_2/3.jpg",
    "/part_2/4.jpg",
    "/part_2/1.jpg",
    "/part_2/2.jpg",
    "/part_2/3.jpg",
    "/part_2/4.jpg",
  ];

  const row2Images = [
    "/part_2/5.jpg",
    "/part_2/6.jpg",
    "/part_2/7.jpg",
    "/part_2/8.jpg",
    "/part_2/5.jpg",
    "/part_2/6.jpg",
    "/part_2/7.jpg",
    "/part_2/8.jpg",
  ];

  // Repeat the string to make a long continuous banner
  const textRepeats = "YEN NHI ✦ LOGISTICS & SUPPLY CHAIN ✦ CHAMPION 2025 ✦ ";
  const marqueeText = `${textRepeats}${textRepeats}${textRepeats}${textRepeats}`;

  return (
    <div 
      ref={containerRef} 
      className="relative py-16 sm:py-20 md:py-24 bg-[#0C0C0C] z-20 overflow-hidden flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 shadow-inner"
    >
      {/* Row 1: Translating Left */}
      <div className="w-full flex overflow-hidden">
        <motion.div
          style={{ x: x1, willChange: "transform" }}
          className="flex gap-4 sm:gap-6 md:gap-8 flex-shrink-0"
        >
          {row1Images.map((src, idx) => (
            <div
              key={`row1-${idx}`}
              className="relative w-52 h-32 sm:w-72 sm:h-44 md:w-[400px] md:h-[250px] rounded-[30px] overflow-hidden shadow-2xl flex-shrink-0 border-2 border-white/5 hover:scale-[1.03] transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Logistics operation showcase ${idx}`}
                fill
                sizes="(max-width: 640px) 208px, (max-width: 768px) 288px, 400px"
                className="object-cover"
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Translating Right */}
      <div className="w-full flex overflow-hidden">
        <motion.div
          style={{ x: x2, willChange: "transform" }}
          className="flex gap-4 sm:gap-6 md:gap-8 flex-shrink-0"
        >
          {row2Images.map((src, idx) => (
            <div
              key={`row2-${idx}`}
              className="relative w-52 h-32 sm:w-72 sm:h-44 md:w-[400px] md:h-[250px] rounded-[30px] overflow-hidden shadow-2xl flex-shrink-0 border-2 border-white/5 hover:scale-[1.03] transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Logistics detail showcase ${idx}`}
                fill
                sizes="(max-width: 640px) 208px, (max-width: 768px) 288px, 400px"
                className="object-cover"
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 3: Scroll-linked massive text */}
      <div className="w-full overflow-hidden leading-none select-none py-2 border-t border-white/5 bg-transparent mt-2">
        <motion.div
          style={{ x: xText, willChange: "transform" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-[110px] sm:text-[160px] md:text-[250px] font-black italic uppercase tracking-tighter text-[#FAF9F6] font-sans opacity-90 leading-none">
            {marqueeText}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default ImageMarquee;
