import { JSX } from "react";

type Svg = ({
  fill,
  className,
}: {
  fill?: string;
  className?: string;
}) => JSX.Element;

export const user: Svg = ({ fill = "#8e8e8e", className }) => {
  return (
    <svg
      className={`w-5 h-5 ${className || "fill-[#8e8e8e]"}`}
      viewBox="0 0 448 512"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z"></path>
    </svg>
  );
};

export const error: Svg = ({ fill = "#8e8e8e", className = "" }) => {
  return (
    <svg
      className={`w-5 h-5 fill-[${fill}] ${className || ""}`}
      viewBox="0 0 512 512"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path>
    </svg>
  );
};

export const email: Svg = ({ fill = "#8e8e8e", className = "" }) => {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      viewBox="0 0 512 512"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M502.3 190.8L327.4 338.3c-16.4 13.8-40.3 13.8-56.7 0L9.7 190.8C3.9 186.1 0 179 0 171.4V432c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V171.4c0-7.6-3.9-14.7-9.7-19.6zM256 320L48 176h416L256 320zM48 144l208 160 208-160H48z"></path>
    </svg>
  );
};

export const lock: Svg = ({ fill = "#8e8e8e", className = "" }) => {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      viewBox="0 0 448 512"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M224 64c-44.2 0-80 35.8-80 80v48H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80V144C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1 .8-42.6-15.2C283.4 82.6 255.9 64 224 64zm32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h64z" />
    </svg>
  );
};
