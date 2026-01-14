import React from "react";

type ButtonProps = {
  btntype?: "submit" | "reset" | "button";
  children: React.ReactNode;
  className: string;
};

const Button = ({ btntype = "submit", children, className }: ButtonProps) => {
  return (
    <div>
      <button type={btntype} className={` ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
