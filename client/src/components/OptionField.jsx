import React from "react";

const OptionField = ({
  label = "",
  name,
  error = "",
  errorMsg = "",
  colSize = "col-span-4",
  options,
  ...props
}) => {
  return (
    <div className={`${colSize} grid grid-flow-row gap-2`}>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        name={name}
        {...props}
        className="border border-black p-1 rounded-md h-10"
      >
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <div className="text-red-600">{errorMsg}</div>}
    </div>
  );
};

export default OptionField;
