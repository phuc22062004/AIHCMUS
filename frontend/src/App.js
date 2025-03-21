import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

const App = () => {
  const [tk, setTk] = useState(localStorage.getItem("tk") || "");

  useEffect(() => {
    if (tk) {
      localStorage.setItem("tk", tk);
    } else {
      localStorage.removeItem("tk");
    }
  }, [tk]);

  const handleLogout = () => {
    setTk("");
  };

  return (
    <Router>
      <Navbar tk={tk} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={tk ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/home" element={tk ? <Home tk={tk} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/login" element={tk ? <Navigate to="/home" /> : <Login setTk={setTk} />} />
        <Route path="/register" element={tk ? <Navigate to="/home" /> : <Register />} />
      </Routes>
    </Router>
  );
};

export default App;
