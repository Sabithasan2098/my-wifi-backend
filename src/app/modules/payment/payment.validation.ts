import { z } from "zod";

export const paymentValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    january: z.string().optional(),
    february: z.string().optional(),
    march: z.string().optional(),
    april: z.string().optional(),
    may: z.string().optional(),
    june: z.string().optional(),
    july: z.string().optional(),
    august: z.string().optional(),
    september: z.string().optional(),
    october: z.string().optional(),
    november: z.string().optional(),
    december: z.string().optional(),
  }),
});
