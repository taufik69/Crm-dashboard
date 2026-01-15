import { facebook, google, twitter } from "@/libs/icons";
import React from "react";

const Oauth = () => {
  return (
    <div className="mt-15.5">
      <h1 className="text-[14px]  text-center font-normal text-text-secondary">
        Or sign in with
      </h1>
      <div className="flex items-center gap-x-4 mt-2">
        <div className="border px-3.5 py-3 rounded border-[#ECECF2] cursor-pointer hover:bg-primary-grey group">
          {twitter({
            fill: "#8181A5",
            className: "w-5 h-5 mx-auto group-hover:fill-text-inverse",
          })}
        </div>
        <div className="border px-3.5 py-3 rounded border-[#ECECF2] cursor-pointer hover:bg-primary-grey group">
          {google({
            fill: "#8181A5",
            className: "w-5 h-5 mx-auto group-hover:fill-text-inverse",
          })}
        </div>
        <div className="border px-3.5 py-3 rounded border-[#ECECF2] cursor-pointer hover:bg-primary-grey group">
          {facebook({
            fill: "#8181A5",
            className: "w-5 h-5 mx-auto group-hover:fill-text-inverse",
          })}
        </div>
      </div>
    </div>
  );
};

export default Oauth;
