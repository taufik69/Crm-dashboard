"use client";
import React from "react";
import Input from "../ui/Input";
import { email, lock, user } from "@/libs/icons";
import Button from "../ui/Button";

const SignupClientWrapper = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <div>
      <form action="" className="flex flex-col gap-y-5.75">
        <div className=" w-full ">
          <Input
            type="text"
            label="Full name"
            placeholder="Craft UI"
            className=" w-93.25 pt-1"
            onChange={handleChange}
            righticons={user({
              fill: "#8181a5",
              className: "w-5 h-5",
            })}
          />
        </div>
        {/* email */}
        <div className="w-full ">
          <Input
            type="email"
            label="Email"
            placeholder="support@craftui.com"
            className=" w-93.25 pt-1"
            onChange={handleChange}
            righticons={email({
              fill: "#8181a5",
              className: "w-5 h-5",
            })}
          />
        </div>
        {/* password */}
        <div className=" w-full ">
          <Input
            label="Password"
            type="password"
            placeholder="Start typing…"
            className=" w-93.25 pt-1"
            onChange={handleChange}
            righticons={lock({
              fill: "#8181a5",
              className: "w-5 h-5",
            })}
          />
        </div>
        {/* agree  */}
        <div className="flex items-center  gap-x-2.5  text-14 mt-3.5">
          <input type="radio" id="agree" name="agree" className="w-5 h-5" />
          <label htmlFor="agree" className=" text-text-primary  font-bold ">
            I agree with terms & conditions
          </label>
        </div>

        {/* button */}
        <div className="flex  items-center gap-x-2.25 mt-7">
          <Button className="btn-text-lg bg-primary py-[14.5px] px-[64.5px] rounded text-text-inverse cursor-pointer font-bold hover:bg-[#475eab] transition-all">
            Sign Up
          </Button>

          <Button className="btn-text-lg hover:bg-primary hover:text-text-inverse transition-all bg-primary/10 py-[14.5px] px-[64.5px] rounded text-primary cursor-pointer font-bold">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupClientWrapper;
