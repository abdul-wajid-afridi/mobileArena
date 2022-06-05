import React from "react";

const Gallary = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center my-10 gap-10">{children}</div>
  );
};

export default Gallary;
