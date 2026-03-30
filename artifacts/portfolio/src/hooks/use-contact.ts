import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactInput) => {
      // Simulate API call for portfolio
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true, data });
        }, 1500);
      });
    },
  });
}
