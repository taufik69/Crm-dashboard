import Button from "@/components/ui/Button";
import PasswordKey from "@/components/ui/PasswordKey";
import { EmailIcon, PasswordIcon } from "@/utils/iconsprovider";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <div>
      <div>
        <div className="h-screen grid  grid-cols-2">
          <div className="grid  place-content-center">
            {/* heading */}
            <h1 className="h1 text-primary-dark">
              Welcome to our CRM. <br /> Sign In to see latest <br /> updates.
            </h1>
            <p className="text-primary-grey text-[14px] mt-2.75 font-normal">
              Enter your details to proceed further
            </p>
            {/* form action */}
            <form action="" className="mt-18 flex flex-col gap-y-6">
              <div className="flex flex-col">
                <label
                  htmlFor="Email"
                  className="text-[14px] font-normal text-primary-grey"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="john.doe@gmail.com"
                    className={` w-91.25 mt-1 pt-0.75 pb-3.25  focus:outline-0 placeholder:text-[14px] placeholder:font-bold  placeholder:text-primary-dark border-b border-b-[#ECECF2]`}
                  />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2">
                    <EmailIcon />
                  </span>
                </div>
              </div>
              {/* password */}
              <div>
                <PasswordKey />
              </div>

              <div className="flex gap-x-2.25 mt-7">
                <Button
                  btntype="submit"
                  className="bg-primary w-44.5 py-3 rounded text-white font-bold"
                >
                  Sign In
                </Button>

                <Link
                  href="/signin"
                  className="bg-primary/10 px-16 py-3 rounded text-primary font-bold"
                >
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
          <div>
            <Image
              src={
                "https://assets-v2.lottiefiles.com/a/6beb774c-1166-11ee-a6f1-4788c8724adf/E9TtaYgKZu.gif"
              }
              width={100}
              height={100}
              alt="auth image"
              className="h-full w-fit"
            />
          </div>
          {/* oauth */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
