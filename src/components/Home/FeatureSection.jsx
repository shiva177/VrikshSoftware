import React from "react";
import "./FeatureSection.css"; // Import the CSS file

const FeatureSection = () => {
  return (
    <section className="feature-section">
      {/* Left Side */}
      <div className="content">
        <h2>Your Trusted Gateway to <br /> Ahmedabad’s Finest Homes</h2>
        <p>
          Mindestate is a dedicated real estate consultancy focused on bringing 
          Ahmedabad’s most promising under-construction residential projects to 
          discerning homebuyers. We simplify the home-buying process with expert 
          market insights, personalized assistance, and a commitment to transparency.
        </p>
        <button className="read-more">Read More &rarr;</button>
      </div>

      {/* Right Side - Image Grid */}
      <div className="image-grid">
        <img src="/cta-1.jpg.png" alt="Building 1" />
        <img src="/cta-3.jpg.png" alt="Building 2" />
        <img src="/cta-2.0.jpg.png" alt="Building 3" />
        <img src="/cta-4.jpg.png" alt="Building 4" />
      </div>
    </section>
  );
};

export default FeatureSection;
