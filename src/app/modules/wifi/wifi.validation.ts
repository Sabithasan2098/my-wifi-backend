import { z } from "zod";

export const userValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Name must be a string",
      required_error: "Name is required",
    }),
    macAddress: z
      .string({
        invalid_type_error: "MacAddress must be a string",
        required_error: "MacAddress is required",
      })
      .length(17, "Length must be 17 characters"),
    holdUp: z.string({
      invalid_type_error: "HoldUp must be a string",
      required_error: "HoldUp is required",
    }),
    date: z.string({
      invalid_type_error: "Date must be a string",
      required_error: "Date is required",
    }),
    payment: z.string().optional(),
    profileImg: z.string().optional(),
    contactNumber: z.string().optional(),
    isDeleted: z.boolean().optional().default(false),
  }),
});
export const userValidationUpdate = z.object({
  body: z.object({
    name: z.string().optional(),
    macAddress: z.string().optional(),
    holdUp: z.string().optional(),
    date: z.string().optional(),
    payment: z.string().optional(),
    profileImg: z.string().optional(),
    contactNumber: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});
