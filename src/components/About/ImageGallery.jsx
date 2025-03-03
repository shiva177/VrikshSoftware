import React from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  const images = [
    "/g1.png.png",
    "/g2.png.png",
    "/g3.png.svg",
    "/g4.png.png",
    "/g5.png.png",
    "/g6.png.png",
    "/g7.png.png",
    "/g8.png.png",
    "/g9.png.png",
    "/g10.png.png",
  ];

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default ImageGallery;
