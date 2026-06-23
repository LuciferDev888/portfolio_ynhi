"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { YenNhiLandingPageContent } from "@/types/landing";

interface YenNhiLandingPageClientProps {
  content: YenNhiLandingPageContent;
}

export function YenNhiLandingPageClient({ content }: YenNhiLandingPageClientProps) {
  const [lang, setLang] = useState<"vi" | "en">("vi");

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans overflow-x-clip relative">
      {/* Centered Fixed Sticky Header */}
      <Header lang={lang} setLang={setLang} />

      {/* Landing Page Sections */}
      <HeroSection lang={lang} {...content.hero} />
      <AboutSection lang={lang} {...content.about} />
      
      <ServicesSection 
        lang={lang} 
        heading={content.services.heading} 
        items={content.services.items} 
      />
      
      <CertificatesSection 
        lang={lang} 
        heading={content.certificates.heading} 
        items={content.certificates.items} 
      />
      
      <ProjectsSection lang={lang} {...content.projects} />
      
      <ContactSection 
        lang={lang} 
        {...content.contact} 
        campaignName={content.campaignName} 
      />
    </main>
  );
}

export default YenNhiLandingPageClient;
