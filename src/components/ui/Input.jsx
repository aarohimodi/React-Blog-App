import React from "react";

function Input({ lebel, type, ...props }) {
  return (
    <div>
      <label></label>
      <input
        type={type}
        {...props}
        className="rounded-lg py-2 px-10 w-full bg-white border border-gray-100"
      />
    </div>
  );
}

export default Input;
