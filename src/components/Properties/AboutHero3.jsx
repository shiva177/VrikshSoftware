import React from "react";
import "./AboutHero3.css";

const AboutHero3 = () => {
  return (
    <div className="about-container3">
      <div className="about-banner3">
        <img src="/contact-image.png" alt="About Us" className="about-image3" />
        <h1 className="about-title3">Thaltej / Ahmedabad</h1>

        {/* Search Bar Container */}
        <div className="search-bar">
          <select className="search-dropdown dropdown-status">
            <option>All Status</option>
          </select>
          <select className="search-dropdown dropdown-location">
            <option>All Main Locations</option>
          </select>
          <select className="search-dropdown dropdown-types">
            <option>All Types</option>
          </select>
          <button className="search-button">🔍 Search</button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero3;
