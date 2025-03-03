import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <img
          src="/heroImage.png"
          alt="About Us"
          className="about-image"
        />
        <h1 className="about-title">About Us</h1>
      </div>

      <div className="about-content">
        <h2>Your Trusted Gateway to Ahmedabad’s Finest Homes</h2>
        <p>
          Mindestate is more than just a real estate consultancy—it’s your trusted partner in discovering
          Ahmedabad’s most promising under-construction residential projects. We bring you exclusive access to
          handpicked developments from top builders, ensuring you invest in a future-ready home. With deep
          market expertise, personalized guidance, and a data-driven approach.
        </p>
        <p>
          We transform the complex home-buying journey into a seamless and rewarding experience. From selecting
          the perfect property to understanding the city’s evolving infrastructure, we empower you with insights
          that go beyond just square footage—helping you invest smartly and confidently.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;

