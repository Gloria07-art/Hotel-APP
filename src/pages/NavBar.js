import React from "react";
import { NavLink } from "react-router-dom";
import Img from "./assets/img.png";

const NavBar = () => {
  return (
    <div>
        <div className="nav-bar"> </div>
      <nav>
        <div> <ul></ul>
        <NavLink to="/"> Contact Us</NavLink><ul></ul>
        <NavLink to="login"> Reviews</NavLink><ul></ul>
        <NavLink to="login"> Rooms</NavLink><ul></ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
