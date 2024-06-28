import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
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
        <div className="buttons">
          <button className="signup_button" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
