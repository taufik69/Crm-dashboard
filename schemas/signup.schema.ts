// schemas/signup.schema.ts
import * as z from "zod";

export const SignupFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),

  email: z.string().email({ message: "Please enter a valid email." }).trim(),

  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long." })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter." })
    .regex(/[0-9]/, { message: "Contain at least one number." })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character.",
    }),
  agree: z
    .boolean({
      message: "You must agree to the terms and conditions.",
    })
    .refine((val) => val === true, {
      message: "You must agree to the terms and conditions.",
    }),
});

export type SignupFormInput = z.infer<typeof SignupFormSchema>;
