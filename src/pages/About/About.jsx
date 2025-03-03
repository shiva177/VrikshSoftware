import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import AboutHero from "../../components/About/AboutHero";
import ExpertGuidance from "../../components/About/ExpertGuidance";
import ImageGallery from "../../components/About/ImageGallery";
import UpcomingHomes from "../../components/About/UpcomingHomes";
import Footer from "../../components/Footer/Footer";
import "./About.css";
const About = () => {
  return (
    <div className="hero-section">
     <Navbar2/>
     <AboutHero/>
     <ExpertGuidance/>
     <ImageGallery/>
     <UpcomingHomes/>
     <Footer/>


    </div>
  );
};

export default About;
