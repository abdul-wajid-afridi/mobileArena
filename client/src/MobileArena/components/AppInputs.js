import React from "react";
const AppInputs = ({
  placeholder,
  type,
  onChange,
  value,
  size,
  bgColor,
  icon,
  bgHover,
}) => {
  return (
    <div
      className={`${size} ${bgColor} bg flex gap-1 items-center border pl-2 rounded-full ${bgHover} hover:text-blue-600`}
    >
      <span className="text-gray-600 ">
        {/* <FaUser /> */}
        {icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`border-none outline-none rounded-full h-full w-full bg-transparent`}
      />
    </div>
  );
};

export default AppInputs;
