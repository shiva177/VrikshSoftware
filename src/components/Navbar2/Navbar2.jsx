"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar2.css";
import { NavLink } from "react-router-dom"; // Import NavLink

const Navbar2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L40 20L30 30L20 20L10 30L0 20L20 0Z" fill="#4F46E5" />
              <path d="M20 40L0 20L10 10L20 20L30 10L40 20L20 40Z" fill="#818CF8" />
            </svg>
          </div>
          <h1 className="logo-text2">Mindestate</h1>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links desktop-menu">
          <NavLink to="/" className="nav-link2">Home</NavLink>
          <NavLink to="/about" className="nav-link2">About</NavLink>  {/* Changed "/About" to "/about" */}
          <NavLink to="/properties" className="nav-link2">Properties</NavLink>
          <NavLink to="/agents" className="nav-link2">Agents</NavLink>
          <NavLink to="/blog" className="nav-link2">Blog</NavLink>
        </div>

        {/* CTA Buttons */}
        <div className="navbar-cta">
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
