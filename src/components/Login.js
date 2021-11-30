import React from "react";
import "./styles/Login.css";
import logo from "./images/logo192.png";
const Login = () => {
  return (
    <form>
      <div className="imgcontainer">
        <img src={logo} alt="Avatar" className="avatar" />
      </div>

      <label for="uname">
        <b>Username</b>
        <input type="text" placeholder="Enter Username" name="uname" required />
      </label>

      <label for="psw">
        <b>Password</b>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
      </label>

      <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember" /> Remember me
      </label>

      <div className="container">
        <button type="button" className="cancelbtn">
          Cancel
        </button>
          <button type="button" className="forgotPsw">Forget Password ?</button>
      </div>
    </form>
  );
};
export default Login;
