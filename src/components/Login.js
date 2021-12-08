import React, { useState } from 'react';
import "./styles/Login.css";
import logo from "./images/img_avatar.png";


const Login = () => {
  const [RememberMe, setRememberMe] = useState(false);
  const handleOnCheckChange = () => {
    setRememberMe(!RememberMe)
  }


  return (
    <form>
      <div className="imgcontainer">
        <img src={logo} alt="Avatar" className="avatar" />
      </div>

      <label>
        <b>Username</b>
        <input type="text" placeholder="Enter Username" name="uname" className="login-user" required />
      </label>

      <label>
        <b>Password</b>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          className="login-psw"
          required
        />
      </label>

      <label>
        <input type="checkbox" checked={RememberMe} onChange={handleOnCheckChange} name="remember" /> Remember me
      </label>

      <div className="container">
        <button type="submit" className="loginbtn">
          Login
        </button>
          <button type="button" className="forgotPsw">Forget Password</button>
      </div>
    </form>
  );
};
export default Login;
