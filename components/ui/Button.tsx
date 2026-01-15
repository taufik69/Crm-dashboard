import React from "react";

type ButtonProps = {
  btntype?: "submit" | "reset" | "button";
  children: React.ReactNode;
  className: string;
  disabled?: boolean | undefined;
};

const Button = ({
  btntype = "submit",
  children,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <div>
      <button type={btntype} disabled={disabled} className={` ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
