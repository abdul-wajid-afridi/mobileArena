import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/Header.css";

const Header = () => {
  const Navigation = useNavigate();
  const LogOut = () => {
    localStorage.removeItem("user");
    Navigation("/");
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__logo">
          <img src="../../../../concept2.png" alt="logo" />
        </div>
        <div className="dashboard__menu">
          <Link className="dashboard__link" to={"manageproducts"}>
            Manage Products
          </Link>

          <Link className="dashboard__link" to={"postproducts"}>
            Post Products
          </Link>

          <Link className="dashboard__link" to={"managereviews"}>
            Manage Reviews
          </Link>

          <button className="logout__btn" onClick={LogOut}>
            Log Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
