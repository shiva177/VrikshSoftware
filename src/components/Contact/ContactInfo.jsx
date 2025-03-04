import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="container">
        {/* Left Section */}
        <div className="contact-text">
          <h4>Contact Info</h4>
          <h1>
            We are always <br /> happy to assist you
          </h1>
        </div>

        {/* Right Section (No Box, Just Text & Underline) */}
        <div className="contact-details">
          <div className="contact-item">
            <h3>Email Address</h3>
            <div className="underline"></div>
            <div className="contact-content">
              <p>help@info.com</p>
            </div>
            <span>Assistance hours:</span>
            <p>Monday - Friday 6 am to 8 pm EST</p>
          </div>

          <div className="contact-item">
            <h3>Number</h3>
            <div className="underline"></div>
            <div className="contact-content">
              <p>(808) 998-34256</p>
            </div>
            <span>Assistance hours:</span>
            <p>Monday - Friday 6 am to 8 pm EST</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
