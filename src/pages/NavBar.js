import React from "react";
import { NavLink } from "react-router-dom";
import Img from "./assets/img.png";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <div style={{display:'flex' , width:"100%", justifyContent:'space-between', margin:'0'}}>
      <div className="nav-bar">
        <div className="Logo">
        <img
          src={Img}
          alt=""
          style={{
            
            marginRight: "90%",
            marginBottom: "1%",
             marginTop: "2px",
            width: "180px",
            height: "70px",
          }}
        />
        </div>
      </div>

      <div style={{width:'50%'}} >
        <NavLink to="/" className="navLink"> Contact Us</NavLink>
        <NavLink to="login" className="navLink" > Reviews</NavLink>
        <NavLink to="login" className="navLink"> Rooms</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
