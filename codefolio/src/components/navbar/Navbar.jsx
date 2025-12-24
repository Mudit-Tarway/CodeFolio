import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p className="navbar-brand">Mudit Tarway</p>
      </div>
      <div className="navbar-links">
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About</Link>
        <Link to="/skills" className={location.pathname === "/skills" ? "active" : ""}>Skills</Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
        <Link to="/experience" className={location.pathname === "/experience" ? "active" : ""}>Experience</Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

