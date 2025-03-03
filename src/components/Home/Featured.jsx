import React from "react";
import "./Featured.css";

const properties = [
  {
    id: 1,
    image: "/Link.png", // Replace with actual image URL
    title: "Home in Merrick Way",
    price: "$540,000",
    location: "Merrick Way, Miami, FL 33134, USA",
  },
  {
    id: 2,
    image: "/Link.png",
    title: "Home in Merrick Way",
    price: "$540,000",
    location: "Merrick Way, Miami, FL 33134, USA",
  },
  {
    id: 3,
    image: "/Link.png",
    title: "Home in Merrick Way",
    price: "$540,000",
    location: "Merrick Way, Miami, FL 33134, USA",
  },
];

const Featured = () => {
  return (
    <div className="featured-exclusives">
      <h2>Our featured exclusives</h2>
      <div className="filters">
        <span className="active">• All</span>
        <span>• For Rent</span>
        <span>• For Sale</span>
      </div>
      <div className="carousel">
        <button className="carousel-btn left">{"<"}</button>
        <div className="property-list">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.title} />
              <div className="property-info">
                <h3>{property.title}</h3>
                <span className="price">{property.price}</span>
                <p>{property.location}</p>
                <div className="buttons">
                  <button className="whatsapp">Whatsapp Us</button>
                  <button className="call">Get a Call</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn right">{">"}</button>
      </div>
    </div>
  );
};

export default Featured;
