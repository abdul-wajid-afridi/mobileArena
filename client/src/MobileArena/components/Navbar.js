import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaHamburger } from "react-icons/fa";

import logo from "../images/concept1.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const users = localStorage.getItem("user");

  const [icon, seticon] = useState(false);
  return (
    <section className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} className="h-[70px] w-[70px]" />
        </Link>
      </div>

      {/* buncth of bugs were found in it */}
      <div
        onClick={() => seticon(!icon)}
        className={icon ? "navbar__menu actives" : "navbar__menu"}
      >
        <Link className="nav__link" to={"/"}>
          Home
        </Link>

        <Link className="nav__link" to={"/allproducts"}>
          Products
        </Link>

        <Link className="nav__link" to={"/compare"}>
          Compare
        </Link>

        <Link className="nav__link" to={"/contact"}>
          Contact us
        </Link>

        <Link className="nav__link" to={"/about"}>
          About us
        </Link>
      </div>

      <div className="menu__sidebar">
        <span className="menu__icon" onClick={() => seticon(!icon)}>
          {icon ? <FaTimes /> : <FaHamburger />}
        </span>

        <Link className="menu__login" to={"/login"}>
          Login
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
