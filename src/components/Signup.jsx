import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,16}$/;
    return regex.test(password);
  };
  async function submit(e) {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError(
        "Password must be 8-16 characters long, contain at least one uppercase letter, one lowercase letter, and one special symbol."
      );
      return;
    }
    try {
      const res = await axios.post("http://localhost:8000/Signup", {
        email,
        password,
      });
      if (res.data === "exist") {
        navigate("/Login", { state: { id: email } });
      }
    } catch (e) {
      alert("wrong details");
      console.log(e);
    }
  }

  return (
    <div className="box">
      <form onSubmit={submit}>
        <img src="SignUp-Logo.png" />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="buttons">
          <button className="signup_button" type="submit">
            Sign Up
          </button>
          <a href="/Login">Existing User?</a>
        </div>
      </form>
    </div>
  );
};
export default Signup;
