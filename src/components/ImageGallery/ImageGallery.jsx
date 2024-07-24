import react from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGallery.modules.css";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
