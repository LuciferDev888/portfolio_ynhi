# CHANGELOG

## [1.0.0] - 2026-06-22

### Added
- Khởi tạo cấu trúc dự án Next.js 14 (App Router) với TypeScript và Tailwind CSS 3.x.
- Thiết lập cấu hình `components.json` cho `shadcn-ui`.
- Tạo cấu trúc thư mục tiêu chuẩn theo `ARCHITECTURE.md`.
- Tạo các kiểu dữ liệu (`types/landing.ts`, `types/form.ts`).
- Cấu hình helper logic (`lib/utils.ts`, `lib/analytics.ts`, `lib/content.ts`, `lib/validations.ts`).
- Triển khai custom hooks (`hooks/useFormSubmit.ts`, `hooks/useIntersectionObserver.ts`).
- Tạo các boilerplate section components (`HeroSection`, `BenefitsSection`, `SocialProofSection`, `PricingSection`, `FAQSection`, `CTAFooterSection`).
- Tạo form đăng ký lead `LeadForm` tích hợp validate Zod + React Hook Form và tracking sự kiện.
- Tạo route dynamic `app/(landing)/[slug]/page.tsx` và mock dữ liệu `content/yen-nhi.json`.
- Thêm file mẫu môi trường `.env.example`.
