import { useState } from "react";
import { trackFormSubmit } from "@/lib/analytics";
import { LeadFormValues } from "@/types/form";

interface UseFormSubmitOptions {
  campaignName: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function useFormSubmit({ campaignName, onSuccess, onError }: UseFormSubmitOptions) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const submitForm = async (values: LeadFormValues) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setError(null);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          campaignName,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Gửi thông tin thất bại. Vui lòng thử lại sau.");
      }

      setIsSuccess(true);
      trackFormSubmit(campaignName, true);
      if (onSuccess) onSuccess();
    } catch (err: any) {
      const errorInstance = err instanceof Error ? err : new Error(err?.message || "Lỗi không xác định");
      setError(errorInstance);
      trackFormSubmit(campaignName, false);
      if (onError) onError(errorInstance);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    isSuccess,
    error,
  };
}
