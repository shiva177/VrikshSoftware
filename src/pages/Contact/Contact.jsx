import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import AboutHero2 from "../../components/Contact/AboutHero2";
// import GetStarted from "../../components/GetStarted/ContactForm"
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-section">
     <Navbar2/>
     <AboutHero2/>
     {/* <GetStarted/> */}

    </div>
  );
};

export default Contact;
