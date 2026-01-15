"use Client";
import { error, user } from "@/libs/icons";
import { InputProps } from "@/types/type";

const Input = ({
  label = "First Name",
  errorSign = false,
  lefticons = false,
  placeholder = "First Name",
  sucess = false,
  righticons = true,
  className = "",
  onChange,
  type = "text",
  id,
  name,
  defaultValue,
}: InputProps) => {
  return (
    <div className="flex flex-col items-start">
      <label
        htmlFor={label.split(" ").join("_")}
        className="text-14  text-text-secondary"
      >
        {label}
      </label>
      <div className="relative">
        {lefticons && (
          <div className="absolute left-0 top-1/3 -translate-y-1/2 ml-2.5">
            {lefticons}
          </div>
        )}

        <input
          id={id}
          name={name}
          type={type}
          defaultValue={defaultValue}
          className={`border-b ${
            sucess ? "w-full border-b-secondary-green" : "border-b-outline"
          } mt-1 pt-0.75 pb-3.25  focus:outline-0 placeholder:text-[14px] placeholder:font-bold w-64 placeholder:text-primary-dark ${className} `}
          placeholder={placeholder}
          onChange={onChange}
          {...(lefticons && { style: { paddingLeft: "2.5rem" } })}
        />

        {/* right icons */}
        {righticons && typeof righticons !== "boolean" && (
          <div className="mt-1 absolute right-0 top-1/3 -translate-y-1/2">
            {righticons}
          </div>
        )}
        {/* error icons */}
        {errorSign && (
          <div className="mt-1 absolute right-0 top-1/3 -translate-y-1/2">
            {error({ fill: "#ff0000", className: "h-5 w-5" })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
