"use client";

import Input from "../ui/Input";
import { email, lock, user } from "@/libs/icons";
import Button from "../ui/Button";
import { SignUpActions } from "@/actions/auth";
import { useActionState, useEffect, useState } from "react";
import Link from "next/link";

const SignupForm = () => {
  const [state, action, pending] = useActionState(SignUpActions, undefined);

  // local error state
  const [errors, setErrors] = useState<Record<string, string>>({});

  //  server error → local error sync
  useEffect(() => {
    if (state?.errors) {
      const normalizedErrors: Record<string, string> = {};
      for (const [key, value] of Object.entries(state.errors)) {
        normalizedErrors[key] = Array.isArray(value) ? value[0] : String(value);
      }
      setErrors(normalizedErrors);
    }
  }, [state]);

  // input change handler
  const handleChange = (name: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  return (
    <form action={action} className="flex flex-col gap-y-5.75">
      {/* Full name */}
      <div className="w-full">
        <Input
          type="text"
          label="Full name *"
          placeholder="Craft UI"
          className="w-93.25 pt-1"
          id="fullName"
          defaultValue={state?.values?.fullName}
          name="fullName"
          onChange={() => handleChange("fullName")}
          righticons={user({ fill: "#8181a5", className: "w-5 h-5" })}
        />
        <div className="min-h-6 mt-1">
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="w-full">
        <Input
          type="email"
          label="Email *"
          placeholder="support@craftui.com"
          className="w-93.25 pt-1"
          id="email"
          name="email"
          defaultValue={state?.values?.email}
          onChange={() => handleChange("email")}
          righticons={email({ fill: "#8181a5", className: "w-5 h-5" })}
        />
        <div className="min-h-6 mt-1">
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
      </div>

      {/* Password */}
      <div className="w-full">
        <Input
          label="Password *"
          type="password"
          placeholder="Start typing…"
          className="w-93.25 pt-1"
          id="password"
          name="password"
          defaultValue={state?.values?.password}
          onChange={() => handleChange("password")}
          righticons={lock({ fill: "#8181a5", className: "w-5 h-5" })}
        />
        <div className="min-h-6 mt-1">
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
      </div>

      {/* Agree */}
      <div className="flex items-center gap-x-2.5 mt-3.5">
        <input
          type="checkbox"
          id="agree"
          name="agree"
          className="w-5 h-5"
          defaultChecked={state?.values?.agree}
          onChange={() => handleChange("agree")}
        />
        <label htmlFor="agree" className="font-bold">
          I agree with terms & conditions
        </label>
        <br />
      </div>
      <div className="min-h-6 ">
        {errors.agree && <p className="text-red-500">{errors.agree}</p>}
      </div>

      {/* Buttons */}
      <div className="flex gap-x-2.25 mt-7">
        <Button
          btntype="submit"
          disabled={pending}
          className="bg-primary w-44.5 py-3 rounded text-white font-bold"
        >
          {pending ? "loading..." : "Sign Up"}
        </Button>

        <Link
          href="/signin"
          className="bg-primary/10 px-16 py-3 rounded text-primary font-bold"
        >
          Sign In
        </Link>
      </div>

      {state?.message && <p>{state.message}</p>}
    </form>
  );
};

export default SignupForm;
