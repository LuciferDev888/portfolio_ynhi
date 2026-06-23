import { BenefitsSectionProps } from "@/types/landing";

export function BenefitsSection({ title, subtitle, items }: BenefitsSectionProps) {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
      {subtitle && <p className="text-slate-400 text-center mb-12">{subtitle}</p>}
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BenefitsSection;
