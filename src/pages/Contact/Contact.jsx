import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import AboutHero2 from "../../components/Contact/AboutHero2";
// import AboutHero from "../../components/About/AboutHero";
import GetStarted from "../../components/GetStarted/ContactForm"
import ContactInfo from "../../components/Contact/ContactInfo";
import Newsletter from "../../components/Contact/Newsletter.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="hero-section">
     <Navbar2/>
     <AboutHero2/>
     <GetStarted/>
     <ContactInfo/>
     <Newsletter/>
     <Footer/>

    </div>
  );
};

export default Contact;
