import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src="your-logo-url.png" alt="Veridian Logo" className="logo-image" />
          <span className="logo-text">VERIDIAN</span>&nbsp;
          <span className="logo-subtext">HEALTHCARE</span>
        </div>
        <div className="menu">
          <a href="#" className="menu-item">Specialties</a>
          <a href="#" className="menu-item">Locations</a>
        </div>
      </div>
      <div className="navbar-right">
        <a href="#" className="nav-link">FOR MEDICAL PROVIDERS</a>
        <a href="#" className="nav-link">CAREERS</a>
        <a href="#" className="nav-link">DONATE</a>
        <a href="#" className="nav-link">PAY BILL</a>
        <button className="button button-outline">Schedule Appointment</button>
        <button className="button button-filled">Find a Provider</button>
      </div>
    </nav>
  );
};

export default Navbar;
