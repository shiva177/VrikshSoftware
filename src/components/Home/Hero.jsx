import React from "react";
import "./Hero.css";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Find. Invest. Thrive.</h1>
        <p className="hero-subtitle">
          Find Your Perfect Home in Ahmedabad – Effortless, Reliable, and Made for You!
        </p>
      </div>
      <SearchBar /> 
    </div>
  );
};

export default Hero;
