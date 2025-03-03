import React from "react";
import "./PropertyCard.css"; // Import the CSS file

const PropertyCard = () => {
  return (
    <div className="property-card">
      {/* Property Image */}
      <img
        className="property-image"
        src="https://via.placeholder.com/400"
        alt="Home in Merrick Way"
      />

      {/* Property Details */}
      <div className="property-details">
        <div className="property-header">
          <h2>Home in Merrick Way</h2>
          <span className="property-price">$540,000</span>
        </div>
        <p className="property-location">Merrick Way, Miami, FL 33134, USA</p>

        {/* Buttons */}
        <div className="property-actions">
          <button className="whatsapp-button">Whatsapp Us</button>
          <button className="call-button">Get a Call</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
