import React from "react";

const Button = ({ type, title, ...props }) => {
  return (
    <button
      type={type}
      className={`${
        type == "button"
          ? "bg-white text-color-[#153c63] border border-[#153c63]"
          : "bg-[#153c63] text-white"
      } p-1 w-56 rounded-lg h-8`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
