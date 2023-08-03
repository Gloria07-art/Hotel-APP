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
          marginTop: "-20px",
          width: "100px",
          height: "10px",
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
          <div>
            <h1 class="topstyle">Choose your cozy room </h1>
            <p className="style">
              There are many variations of elegant<br></br>rooms of Light Studio
              Creations <br></br> available, but the majority have<br></br>{" "}
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
          </div>
        </div>
      </div>
    </>
  );
};
