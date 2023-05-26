import React from "react";

const Checkbox = ({ label, showCircle, circleColor  }) => {
  return (
    <div className="mt-2">
      {showCircle && (
        <span
          className={`inline-block rounded-full h-3 w-3 ${circleColor} ml-2`}
        />
      )}
      <label className="px-1">{label}</label>
      <input
        type="checkbox"
        className="float-left hover:cursor-pointer bg-gray-50 top-1 h-4 w-4"
      />
    </div>
  );
};

export default Checkbox;
