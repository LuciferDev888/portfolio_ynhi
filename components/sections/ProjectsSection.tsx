"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { LiveProjectButton } from "@/components/ui/LiveProjectButton";
import { FadeIn } from "@/components/ui/FadeIn";

interface ProjectItem {
  id: string;
  num: string;
  category: string;
  name: string;
  liveUrl: string;
  images: {
    col1_1: string;
    col1_2: string;
    col2: string;
  };
}

interface ProjectsSectionProps {
  heading: string;
  items: ProjectItem[];
  lang?: "vi" | "en";
}

const projectTranslationsVi: Record<string, { category: string; name: string }> = {
  p1: {
    category: "Tối ưu Kho bãi",
    name: "Tối ưu hóa Sơ đồ Kho vận 10,000m²",
  },
  p2: {
    category: "Vận hành Đội xe",
    name: "Tái cấu trúc Tuyến đường Phân phối Hàng hóa",
  },
  p3: {
    category: "Phát triển Bền vững",
    name: "Chuỗi Cung ứng Xanh & Không phát thải Carbon",
  },
};

const projectTranslationsEn: Record<string, { category: string; name: string }> = {
  p1: {
    category: "Warehouse Optimization",
    name: "10,000m² Warehouse Layout Optimization",
  },
  p2: {
    category: "Fleet Operations",
    name: "Distribution Route Re-engineering",
  },
  p3: {
    category: "Sustainability",
    name: "Green & Zero-Carbon Supply Chain",
  },
};

export function ProjectsSection({ heading, items, lang = "vi" }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";
  const displayHeading = isEn ? "Projects" : heading;

  return (
    <section
      ref={containerRef}
      id="projects"
      className="text-[#1A1A1A] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-32 px-5 sm:px-8 md:px-10 z-30 relative"
      style={{
        background: "linear-gradient(180deg, #FAF9F6 0%, rgba(250,249,246,0.65) 20%, rgba(250,249,246,0.65) 80%, #FAF9F6 100%), url('/images/background1.png') center center / cover no-repeat",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 tracking-tight leading-none"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            {displayHeading}
          </h2>
        </FadeIn>

        {/* Stacking Sticky Cards List */}
        <div className="flex flex-col gap-12 sm:gap-24 md:gap-32">
          {items.map((project, index) => {
            const trans = isEn ? projectTranslationsEn[project.id] : projectTranslationsVi[project.id];
            const translatedProject = {
              ...project,
              category: trans ? trans.category : project.category,
              name: trans ? trans.name : project.name,
            };

            return (
              <ProjectCard
                key={project.id}
                project={translatedProject}
                index={index}
                total={items.length}
                lang={lang}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  total,
  lang,
}: {
  project: ProjectItem;
  index: number;
  total: number;
  lang: "vi" | "en";
}) {
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const isEn = lang === "en";

  // Track the scroll of this specific card container to scale it down
  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ["start start", "end end"],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardContainerRef}
      className="min-h-[85vh] md:h-[100vh] relative flex flex-col items-center justify-start w-full"
    >
      <motion.div
        style={{
          scale,
          top: `calc(6rem + ${index * 28}px)`, // accounts for Navbar spacing
          willChange: "transform",
        }}
        className="sticky w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] border-2 border-[#1A1A1A] bg-white p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 shadow-2xl"
      >
        {/* Top Row: Info & Button */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number */}
            <span
              className="font-black text-[#1A1A1A]/15 leading-none select-none"
              style={{ fontSize: "clamp(2rem, 6vw, 90px)" }}
            >
              {project.num}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-widest text-[#1A1A1A]/60 font-semibold mb-1">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase text-[#1A1A1A] leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton 
            href={project.liveUrl} 
            variant="light" 
            label={isEn ? "Details" : "Chi tiết"} 
          />
        </div>

        {/* Bottom Row: Image Grid */}
        <div className="grid grid-cols-10 gap-4 sm:gap-6 items-stretch flex-grow">
          {/* Left Column (40% width) - 2 stacked images */}
          <div className="col-span-10 md:col-span-4 flex flex-col gap-4 sm:gap-6">
            <div
              className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-slate-950 border border-slate-900"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            >
              <Image
                src={project.images.col1_1}
                alt={`${project.name} preview 1`}
                fill
                priority
                className="object-cover"
                sizes="(max-w-768px) 100vw, 40vw"
              />
            </div>
            <div
              className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-slate-950 border border-slate-900"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            >
              <Image
                src={project.images.col1_2}
                alt={`${project.name} preview 2`}
                fill
                priority
                className="object-cover"
                sizes="(max-w-768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column (60% width) - 1 tall image */}
          <div className="col-span-10 md:col-span-6 relative min-h-[220px] md:min-h-auto rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden bg-slate-950 border border-slate-900">
            <Image
              src={project.images.col2}
              alt={`${project.name} main showcase`}
              fill
              priority
              className="object-cover"
              sizes="(max-w-768px) 100vw, 60vw"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectsSection;
