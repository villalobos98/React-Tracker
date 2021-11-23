import React from "react";
import "./styles/Navbar.css";
import logo from "./images/Socialite.png";

const Navbar = () => {
  return (
    <div className="topnav">
      <ul>
        <a href="#Home">
          <img src={logo} alt="Socialite"></img>
        </a>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Pricing">Pricing</a>
        </li>
        <li>
          <a href="#Login">Login</a>
        </li>
        <li>
          <a href="#SignOut">Sign Out</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
