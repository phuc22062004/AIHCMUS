import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ tk, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">HCMUS-STONER</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/how-to-use">How to use</Link></li>
          </ul>

          {}
          {tk ? (
            <div className="d-flex align-items-center">
              <span className="navbar-text text-white me-3">Hello, <strong>{tk}</strong>!</span>
              <button className="btn btn-sm btn-light" onClick={onLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <Link to="/login" className="btn btn-sm btn-light me-2">Login</Link>
              <Link to="/register" className="btn btn-sm btn-light">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
