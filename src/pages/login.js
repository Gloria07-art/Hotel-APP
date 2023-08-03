import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/login.css";
import Img from "./assets/img.png";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToHomePage = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Logged in successfully");
        navigate("/home");
      })
      .catch((error) => {});
  };

  return (
    <div className="main-box">
      <center>
        {" "}
        <img
          src={Img}
          alt=""
          style={{ marginTop: "-35px", width: "200px" }}
        />{" "}
      </center>
      <h1></h1>
      <input
        type="email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      {""}
      <br></br> <br></br> <ul></ul>
      <input
        type="text"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      {""}
      <br></br> <ul></ul>
      <Link to="/signUp">Forgot Password</Link>
      <ul></ul>
      <button className="loginbut" onClick={goToHomePage}>
        Login
      </button>
      <button className="adminbt" onClick={goToHomePage}>
        Admin
      </button>
    </div>
  );
};
