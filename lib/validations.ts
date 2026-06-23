import * as z from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, {
    message: "Tên phải chứa ít nhất 2 ký tự.",
  }),
  email: z.string().email({
    message: "Địa chỉ email không hợp lệ.",
  }),
  phone: z.string().optional().or(z.literal("")),
  message: z.string().optional(),
});
