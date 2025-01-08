import { z } from "zod";

export const userValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Name must be a string",
      required_error: "Name is required",
    }),
    macAddress: z.string({
      invalid_type_error: "MacAddress must be a string",
      required_error: "MacAddress is required",
    }),
    holdUp: z.string({
      invalid_type_error: "HoldUp must be a string",
      required_error: "HoldUp is required",
    }),
    date: z.string({
      invalid_type_error: "Date must be a string",
      required_error: "Date is required",
    }),
    status: z.string().optional(),
    profileImg: z.string().optional(),
    contactNumber: z.string().optional(),
  }),
});
