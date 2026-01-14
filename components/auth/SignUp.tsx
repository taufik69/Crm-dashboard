import Image from "next/image";
import auth from "@/public/auth1.png";
import Input from "../ui/Input";
import { user } from "@/libs/icons";

const SignUp = () => {
  return (
    <div>
      <div className="bg-red-500  h-screen grid  grid-cols-2">
        <div className="bg-blue-400">left</div>
        <div className="bg-pink-400">
          <Image
            src={auth}
            width={1000}
            height={100}
            alt="auth image"
            className="h-full w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
