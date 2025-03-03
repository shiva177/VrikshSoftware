import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo & Contact */}
        <div className="footer-left">
          <img src="/logo.png" alt="Mindestate Logo" className="footer-logo" />
          <p className="footer-info">📍 1889 NW 79st St, Asheville, NC 98726</p>
          <p className="footer-info">📞 (800) 543 5432</p>
          <p className="footer-info">📧 inquiry@realhomes.com</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Properties Listing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Other Pages */}
        <div className="footer-links">
          <h3>Other Pages</h3>
          <ul>
            <li><a href="#">Agents</a></li>
            <li><a href="#">Agencies</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Talk to an Expert & Connect With Us */}
        <div className="footer-expert">
          <h3>Talk To An Expert</h3>
          <p>Get expert consultation regarding your Real Estate needs.</p>
          <button className="inquiry-btn">Make an Inquiry</button>

          {/* 🚀 SOCIAL MEDIA ICONS FIXED HERE */}
          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024 RealHomes. All Rights Reserved</p>
        <p className="footer-designer">Designed by Manas Agrawal</p>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FiArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
