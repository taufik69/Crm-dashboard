"use server";
import { SignupFormSchema } from "@/schemas/signup.schema";
import { redirect } from "next/navigation";

// types/form-state.ts
export type FormState =
  | {
      errors?: {
        fullName?: string[];
        email?: string[];
        password?: string[];
        agree?: string | boolean;
      };
      values?: {
        fullName?: string;
        email?: string;
        password?: string;
        agree?: boolean;
      };
      message?: string;
      status: string;
    }
  | undefined;

export const SignUpActions = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const values = {
    fullName: String(formData.get("fullName") || ""),
    email: String(formData.get("email") || ""),
    password: String(formData.get("password") || ""),
    agree: formData.get("agree") === "on" || formData.get("agree") === "true",
  };

  const validatedFields = SignupFormSchema.safeParse(values);

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;

    return {
      errors: {
        fullName: fieldErrors.fullName,
        email: fieldErrors.email,
        password: fieldErrors.password,
        agree: fieldErrors.agree?.[0],
      },
      values, //  MOST IMPORTANT LINE
      status: "Failed",
    };
  }

  redirect("/signin");
};
