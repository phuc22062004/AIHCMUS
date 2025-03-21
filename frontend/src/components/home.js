import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";

const Home = ({ tk, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    onLogout();
    navigate("/login");
  };

  return (
    <div className="home-container">
    
      <div className="container content-container">
        <div className="row justify-content-center">
          <Card title="TEXT TRANSLATION" description="Translate text between languages with high accuracy, ensuring precise and natural-sounding translations." />
          <Card title="IMAGE TRANSLATION" description="Automatically extract and translate text from images while preserving the original formatting." />
          <Card title="DOCUMENT TRANSLATION" description="Translate entire documents while maintaining the original structure, formatting, tables, and images." />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, description }) => {
  return (
    <div className="col-md-4 d-flex justify-content-center">
      <Link to="#" className="text-decoration-none">
        <div className="card text-center text-white p-4 custom-card">
          <h4 className="fw-bold">{title}</h4>
          <p className="text-justify">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;

