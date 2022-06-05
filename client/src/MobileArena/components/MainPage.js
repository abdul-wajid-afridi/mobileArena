import React from "react";
import ReactTyped from "react-typed";

import "../styles/MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <ReactTyped
        className="main__strings"
        strings={[
          "hello People",

          "Mobile Arena offering the best mobile store",
          "lets get it now",
        ]}
        typeSpeed={50}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default MainPage;
