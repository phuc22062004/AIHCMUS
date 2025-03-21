import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";

const Login = ({ setTk }) => {
  const [tk, setUsername] = useState("");
  const [mk, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tk, mk }),
      });
      const data = await response.json();
      if (response.ok) {
        setTk(tk);
        navigate("/home");
      } else {
        setError(data.error || "Login unsuccessfully");
      }
    } catch (err) {
      setError("Cant connect to server");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input 
              type="text" 
              className="form-control" 
              required 
              value={tk} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input 
              type="password" 
              className="form-control" 
              required 
              value={mk} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="btn btn-light">Login</button>
        </form>
        <div className="register-container">
            <p>Don't have an account?</p>
            <a href="/register" className="btn btn-sm btn-light">Register</a>
        </div>
        {error && <p className="text-danger text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
