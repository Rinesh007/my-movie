import { useNavigate } from "react-router-dom";
import "./Login.css";
const Signup = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Login");
  };
  return (
    <div className="box">
      <form onSubmit={handleClick}>
        <img src="SignUp-Logo.png" />
        <input
          type="text"
          className="login_username"
          placeholder="Username"
          required
        />
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
          <button className="signup_button" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
