import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
      {/* Logo with image */}
      <Link to="/" className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/logo2.png`}
          alt="Logo"
          className="logo-img"
        />
      </Link>
      
      {/* Hamburger menu icon for mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      
      {/* Navigation links */}
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;