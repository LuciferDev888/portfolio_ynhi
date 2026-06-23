import { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { getLandingPageContent } from "@/lib/content";
import { JackLandingPageContent, YenNhiLandingPageContent } from "@/types/landing";
import { YenNhiLandingPageClient } from "@/components/YenNhiLandingPageClient";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const content = await getLandingPageContent(params.slug);

  if (!content) return {};

  return {
    title: content.seoTitle,
    description: content.seoDescription,
    openGraph: {
      title: content.seoTitle,
      description: content.seoDescription,
      images: [{ url: `/og/${params.slug}.png` }],
    },
  };
}

export default async function LandingPage({
  params,
}: {
  params: { slug: string };
}) {
  const content = await getLandingPageContent(params.slug);

  if (!content) notFound();

  // If this is Yen Nhi's portfolio slug
  if (params.slug === "yen-nhi") {
    const yenNhiContent = content as unknown as YenNhiLandingPageContent;
    return <YenNhiLandingPageClient content={yenNhiContent} />;
  }

  // If this is Jack's portfolio slug
  if (params.slug === "jack") {
    const jackContent = content as unknown as JackLandingPageContent;
    return (
      <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip relative">
        <HeroSection {...jackContent.hero} />
        <MarqueeSection {...jackContent.marquee} />
        <AboutSection {...jackContent.about} />
        <ServicesSection {...jackContent.services} />
        <ProjectsSection {...jackContent.projects} />
      </main>
    );
  }

  // Fallback generic template
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] font-sans">
      <HeroSection {...content.hero} />
    </main>
  );
}

