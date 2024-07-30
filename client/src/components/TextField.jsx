import React from "react";

const TextField = ({
  label = "",
  type,
  colSize = "col-span-4",
  name,
  error = "",
  errorMsg = "",
  ...props
}) => {
  return (
    <div className={`${colSize} grid grid-flow-row gap-2`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        {...props}
        className="border border-black p-1 rounded-md h-10"
      />
      {error && <div className="text-red-600">{errorMsg}</div>}
    </div>
  );
};

export default TextField;
