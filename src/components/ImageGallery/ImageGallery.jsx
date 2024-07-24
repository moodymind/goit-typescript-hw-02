import React from "react";
import ImageCard from "./ImageCard";
import "./ImageGallery.css";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
