import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setRole }) => {
  const [role, setLocalRole] = useState("User");
  const navigate = useNavigate();

  const handleLogin = () => {
    setRole(role);
    navigate("/product-entry");
  };

  return (
    <div className="login-container">
      <h2 className="text-xl font-bold mb-4 text-white">Login</h2>

      <div className="input-container">
        <img src="/email.png" alt="Email" className="input-icon" />
        <input type="email" placeholder="Email" className="input-field" />
      </div>

      <div className="input-container">
        <img src="/user.png" alt="User" className="input-icon" />
        <input type="text" placeholder="Username" className="input-field" />
      </div>

      <div className="input-container">
        <img src="/padlock.png" alt="Password" className="input-icon" />
        <input type="password" placeholder="Password" className="input-field" />
      </div>

      <select className="input-field" onChange={(e) => setLocalRole(e.target.value)}>
        <option>Admin</option>
        <option>Manager</option>
        <option>Worker</option>
        <option>User</option>
      </select>

      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
