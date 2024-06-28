import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/", {
        email,
        password,
      });

      if (res.data === "exist") {
        navigate("/App", { state: { id: email } });
      } else if (res.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (e) {
      alert("wrong details");
      console.log(e);
    }
  }

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login_email"
          placeholder="Email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
}

export default Login;
