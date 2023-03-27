import React from "react";

const InputField = ({ label, inputProps, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-start mx-36 py-3">{label}</label>
      <input
        className="w-7/12 text-white py-2 mx-auto"
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputField;
