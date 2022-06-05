import React from "react";

import "../styles/AppButtons.css";
const AppButton = ({ name, onClick, type, size, bgColor, color }) => {
  return (
    <button
      className={`${size} ${bgColor} ${color} font-bold tracking-wide text-lg`}
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default AppButton;
