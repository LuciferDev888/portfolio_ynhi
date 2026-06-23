import { CTAFooterSectionProps } from "@/types/landing";
import { trackCTAClick } from "@/lib/analytics";

export function CTAFooterSection({ title, description, ctaText, ctaHref }: CTAFooterSectionProps) {
  const handleCTAClick = () => {
    trackCTAClick(ctaText, "footer");
  };

  return (
    <section className="py-20 px-4 text-center bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_60%)] pointer-events-none" />
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">{description}</p>}
        <a
          href={ctaHref}
          onClick={handleCTAClick}
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md text-slate-950 bg-white hover:bg-slate-100 transition-colors duration-200"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}

export default CTAFooterSection;
