import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/App");
  };
  const handleSignup = () => {
    navigate("/Signup");
  };
  return (
    <div className="box">
      <form onSubmit={handleClick}>
        <div className="logo">
          <img src="movie-icon.webp" className="movie_logo" />
          <img src="login-logo.jpg" className="login_logo" />
        </div>

        <input
          type="email"
          className="login_email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="login_password"
          placeholder="Password"
          required
        />

        <div className="buttons">
          <button type="submit" className="login_button">
            Login
          </button>
          <button
            type="button"
            className="signup_button"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
