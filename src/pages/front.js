import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

import Pic from "./assets/front.jpg";

import "./styles/front.css";
import NavBar from "./NavBar";
import Img from "./assets/img.png";

export const Front = () => {
  const navigate = useNavigate();
  return (
    <>
      <img
        src={Img}
        alt=""
        style={{
          marginRight: "90%",
          marginBottom: "-2.5%",
          marginTop: "5px",
          width: "190px",
          height: "90px",
        }}
      />
      <NavBar />

      <div className="main-section">
        <div>
          <img
            className="Pic"
            src={Pic}
            alt=""
            style={{ marginLeft: "35px" }}
          />
        </div>
        <div className="content">
          <div >
            <h1 class="topstyle">Choose your cozy room </h1>
            
            <p className="style" style={{marginLeft: '20%'}} >
              There are many variations of elegant rooms<br></br>
               of the Light Studio Creations <br></br> 
              available, but the majority have<br></br>
              aromata in sweet bohemian perfumes.
            </p>

            <button
              class="Sbut"
              type="submit"
              onClick={() => navigate("/SignUp")}
            >
              Sign Up
            </button>
            <button
              class="Rbut"
              type="submit"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

<div > 
  <table class= "bar" style={{background:'rgba(255, 255, 255, 0.90)', width: '1120px' ,
  dropShadow:'(0px 4px 4px rgba(200, 219, 190, 0.50))',
height: '151px',flexShrink: '0', marginTop:'10%'}}>


    <input 
    type="date"
    placeholder="Checkin"
    style={{width: '200px'}}
    />
    
    <input
    type="date"
    style={{width: '200px'}}
    />
    <input
    type="number"
    style={{width: '200px'}}
    />
  <button class="bookNow" type="submit">Book Now</button></table>  </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
