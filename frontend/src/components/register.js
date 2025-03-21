import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";

const Register = () => {
  const [tk, setUsername] = useState("");
  const [mk, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tk, mk }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      setError("Cannot connect to server");
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input type="text" className="form-control" required value={tk} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input type="password" className="form-control" required value={mk} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-light">Register</button>
        </form>
        <div className="register-container">
          <p>Already have an account?</p>
          <a href="/login" className="btn btn-sm btn-light">Login</a>
        </div>
        {error && <p className="text-danger text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
