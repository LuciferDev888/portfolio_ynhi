import { FAQSectionProps } from "@/types/landing";

export function FAQSection({ title, subtitle, items }: FAQSectionProps) {
  return (
    <section className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">{title || "Câu hỏi thường gặp"}</h2>
        {subtitle && <p className="text-slate-400 text-center mb-12">{subtitle}</p>}
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-2">{item.question}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
