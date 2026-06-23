import { SocialProofSectionProps } from "@/types/landing";

export function SocialProofSection({ title, subtitle, testimonials }: SocialProofSectionProps) {
  return (
    <section className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
        {subtitle && <p className="text-slate-400 text-center mb-12">{subtitle}</p>}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
              <p className="text-slate-300 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <h4 className="font-semibold">{t.author}</h4>
                <p className="text-slate-400 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProofSection;
