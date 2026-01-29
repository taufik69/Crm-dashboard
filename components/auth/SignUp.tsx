import Image from "next/image";
import auth from "@/public/auth1.png";
import Input from "../ui/Input";
import { user } from "@/libs/icons";
import SignupClientWrapper from "./SignupFrom";
import Oauth from "../ui/Oauth";
import SignupForm from "./SignupFrom";

const SignUp = () => {
  return (
    <div>
      <div className="h-screen grid  grid-cols-2">
        <div className="grid  place-content-center">
          <SignupForm />
          <div className="grid place-content-center">
            <Oauth />
          </div>
        </div>
        <div>
          <Image
            src={
              "https://assets-v2.lottiefiles.com/a/0f2e3502-117b-11ee-95f6-2f0d9642453f/cpQ4tiuVIK.gif"
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
  );
};

export default SignUp;
