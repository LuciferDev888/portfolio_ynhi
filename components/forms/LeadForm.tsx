"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema } from "@/lib/validations";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { LeadFormValues, LeadFormProps } from "@/types/form";
import { cn } from "@/lib/utils";

export function LeadForm({ campaignName, className, lang = "vi" }: LeadFormProps & { lang?: "vi" | "en" }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { submitForm, isSubmitting, isSuccess, error } = useFormSubmit({
    campaignName,
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    await submitForm(data);
  };

  const isEn = lang === "en";

  return (
    <div className={cn("max-w-md mx-auto p-6 bg-white border-2 border-[#1A1A1A] rounded-[30px] shadow-xl", className)}>
      <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
        {isEn ? "Contact Registration" : "Đăng ký liên hệ"}
      </h3>
      <p className="text-sm text-[#1A1A1A]/75 mb-6">
        {isEn ? "Leave your info below, I will reply to you as soon as possible." : "Để lại thông tin bên dưới, tôi sẽ phản hồi lại bạn sớm nhất."}
      </p>

      {isSuccess && (
        <div className="p-4 mb-6 text-sm text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-xl text-left">
          {isEn ? "Message sent successfully! Thank you for your interest." : "Gửi thông tin thành công! Cảm ơn bạn đã quan tâm."}
        </div>
      )}

      {error && (
        <div className="p-4 mb-6 text-sm text-rose-800 bg-rose-50 border border-rose-300 rounded-xl text-left">
          {isEn ? "An error occurred. Please try again." : error.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#1A1A1A] mb-1">
            {isEn ? "Full Name" : "Họ và tên"} <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className={cn(
              "w-full px-4 py-2 bg-white border-2 rounded-xl text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-[#1A1A1A] transition-all",
              errors.name ? "border-rose-500" : "border-[#1A1A1A]"
            )}
            placeholder={isEn ? "John Doe" : "Nguyễn Văn A"}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-rose-500">
              {isEn ? "Name must contain at least 2 characters." : errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] mb-1">
            {isEn ? "Email Address" : "Email"} <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={cn(
              "w-full px-4 py-2 bg-white border-2 rounded-xl text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-[#1A1A1A] transition-all",
              errors.email ? "border-rose-500" : "border-[#1A1A1A]"
            )}
            placeholder="nhi.yen@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-500">
              {isEn ? "Please enter a valid email address." : errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#1A1A1A] mb-1">
            {isEn ? "Phone Number" : "Số điện thoại"}
          </label>
          <input
            id="phone"
            type="tel"
            className={cn(
              "w-full px-4 py-2 bg-white border-2 rounded-xl text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-[#1A1A1A] transition-all",
              errors.phone ? "border-rose-500" : "border-[#1A1A1A]"
            )}
            placeholder="0912345678"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-rose-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#1A1A1A] mb-1">
            {isEn ? "Message" : "Lời nhắn"}
          </label>
          <textarea
            id="message"
            rows={3}
            className={cn(
              "w-full px-4 py-2 bg-white border-2 rounded-xl text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:border-[#1A1A1A] transition-all resize-none",
              errors.message ? "border-rose-500" : "border-[#1A1A1A]"
            )}
            placeholder={isEn ? "I would like to discuss..." : "Tôi muốn trao đổi công việc liên quan đến..."}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-2.5 px-4 bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90 disabled:bg-slate-350 disabled:text-slate-500 font-bold rounded-xl transition-colors duration-200"
        >
          {isSubmitting ? (isEn ? "Sending..." : "Đang gửi...") : (isEn ? "Send Information" : "Gửi thông tin")}
        </button>
      </form>
    </div>
  );
}

export default LeadForm;
