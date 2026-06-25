"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ImageMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the container during the actual pinning duration
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to horizontal translation (Row 1 slides left, Row 2 slides right)
  // Starts with a brief initial pause, slides smoothly during pinning, and stops just before unpinning
  const x1 = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], ["5%", "5%", "-30%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], ["-30%", "-30%", "5%", "5%"]);

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

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-transparent">
      {/* Sticky container that remains pinned during scrolling */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center gap-6 sm:gap-10 md:gap-14 bg-white/65 z-20">
        
        {/* Row 1: Translating Left */}
        <div className="w-full flex overflow-hidden">
          <motion.div
            style={{ x: x1, willChange: "transform" }}
            className="flex gap-4 sm:gap-6 md:gap-8 flex-shrink-0"
          >
            {row1Images.map((src, idx) => (
              <div
                key={`row1-${idx}`}
                className="relative w-52 h-32 sm:w-72 sm:h-44 md:w-[400px] md:h-[250px] rounded-[30px] overflow-hidden shadow-xl flex-shrink-0 border-2 border-[#2D6A4F]/10 hover:scale-[1.03] transition-transform duration-300"
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
                className="relative w-52 h-32 sm:w-72 sm:h-44 md:w-[400px] md:h-[250px] rounded-[30px] overflow-hidden shadow-xl flex-shrink-0 border-2 border-[#2D6A4F]/10 hover:scale-[1.03] transition-transform duration-300"
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

      </div>
    </div>
  );
}

export default ImageMarquee;
