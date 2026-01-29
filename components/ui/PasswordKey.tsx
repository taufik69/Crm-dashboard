"use client";
import { PasswordIcon } from "@/utils/iconsprovider";
import React from "react";

const PasswordKey = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleEyeOnClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col">
      <label
        htmlFor="Email"
        className="text-[14px] font-normal text-primary-grey"
      >
        Password <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Start typing…"
          className={` w-91.25 mt-1 pt-0.75 pb-3.25  focus:outline-0 placeholder:text-[14px] placeholder:font-bold  placeholder:text-primary-dark border-b border-b-[#ECECF2]`}
        />
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2"
          onClick={handleEyeOnClick}
        >
          <PasswordIcon />
        </span>
      </div>
    </div>
  );
};

export default PasswordKey;
