import React from "react";
import "./styles/Navbar.css";
import logo from "./images/Logo.jpg";

const Navbar = () => {
  return (
    <div className="topnav">
      <ul>
        <a href="/">
          <img src={logo} alt="Socialite"></img>
        </a>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
