import { PricingSectionProps } from "@/types/landing";

export function PricingSection({ title, subtitle, plans }: PricingSectionProps) {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>
      {subtitle && <p className="text-slate-400 text-center mb-12">{subtitle}</p>}
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-8 bg-slate-900 border rounded-2xl flex flex-col justify-between ${
              plan.isFeatured ? "border-white ring-2 ring-white/10" : "border-slate-800"
            }`}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              {plan.description && <p className="text-slate-400 text-sm mb-6">{plan.description}</p>}
              <div className="text-3xl font-extrabold mb-6">
                {plan.price}
                {plan.period && <span className="text-sm font-normal text-slate-400">/{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="text-emerald-500">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={plan.ctaHref}
              className={`w-full py-2.5 px-4 text-center text-sm font-semibold rounded-lg transition-colors duration-200 ${
                plan.isFeatured
                  ? "bg-white text-slate-950 hover:bg-slate-100"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              }`}
            >
              {plan.ctaText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
