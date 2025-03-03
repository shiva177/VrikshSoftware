import React from "react";
import "./UpcomingHomes.css";

const UpcomingHomes = () => {
  return (
    <div className="upcoming-homes-container">
      <div className="text-section">
        <h2>Your Gateway to Ahmedabad’s Best Upcoming Homes</h2>
        <p>
          Mindestate brings you the finest under-construction homes from
          Ahmedabad’s most reputed builders. With deep local market knowledge,
          expert insights, and personalized guidance, we make your property
          search effortless and rewarding. Invest in Ahmedabad’s growing future
          with confidence.
        </p>
      </div>
      <div className="gallery">
        <img
          src="/cta-1.jpg.png"
          alt="Building 1"
          className="large-image"
        />
        <img
          src="/cta-2.0.jpg.png"
          alt="Building 2"
          className="small-image"
        />
        <img
          src="/cta-3.jpg.png"
          alt="Building 3"
          className="small-image"
        />
        <img
          src="/cta-4.jpg.png"
          alt="Building 4"
          className="large-image"
        />
      </div>
    </div>
  );
};

export default UpcomingHomes;
