import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Home/Hero";
import FeatureSection from "../../components/Home/FeatureSection";
import Featured from "../../components/Home/Featured";
import TestimonialTrending from "../../components/Home/TestimonialTrending";
import GetStarted from "../../components/GetStarted/ContactForm"
import ContactForm from "../../components/GetStarted/ContactForm";
import Faq from "../../components/Home/FaQ";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
const Home = () => {
  return (
    <div className="hero-section">
     <Navbar/>
     <Hero/>
<FeatureSection/>
<Featured/>
<TestimonialTrending/>
<ContactForm/>
<Faq/>
<Footer/>

    </div>
  );
};

export default Home;
