import React from "react";
import "./TestimonialTrending.css";

const trendingArticles = [
  {
    id: 1,
    image: "/Skyline.png", // Replace with actual image URL
    title: "As The Real Estate Market Heats Up, Here’s How First-time Buyers Can Keep Their Cool",
    link: "#",
  },
  {
    id: 2,
    image: "/wave-img.png",
    title: "Real Estate Market Heats Up, Here’s How First-time Buyers Can Keep Their Cool",
    link: "#",
  },
  {
    id: 3,
    image: "/f1.jpg.png",
    title: "Here’s How First-time Buyers Can Keep Their Cool As The Real Estate Market Heats Up",
    link: "#",
  },
];

const TestimonialTrending = () => {
  return (
    <div className="testimonial-trending">
      {/* Testimonial Section */}
      <div className="testimonial">
        <h2>
          Finding My Dream Home Was Seamless With Mindestate. Their Expertise And Guidance
          Made The Process Stress-Free. Thank You!
        </h2>
        <div className="rating">
          <img src="/google1.png" alt="Google Rating" /> 
          {/* <p>Google Rating <span>4.8 ⭐⭐⭐⭐⭐</span></p> */}
          {/* <a href="#">See all our reviews</a> */}
        </div>
      </div>

      {/* Trending Articles Section */}
      <div className="trending">
        <div className="trending-header">
          <h2>What’s in Trending</h2>
          <a href="#" className="view-all">View All &gt;</a>
        </div>
        <div className="articles">
          {trendingArticles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} />
              <h3>{article.title}</h3>
              <a href={article.link} className="read-more">Read More &gt;</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialTrending;
