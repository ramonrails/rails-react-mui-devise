import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LogIn from "../components/auth/Login";
import Register from "../components/auth/Register";
import Navbar from "../components/Navbar"

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Home />} />
      <Route path="/start" element={<Navbar />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </Router>
);
