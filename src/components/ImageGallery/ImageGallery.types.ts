import Image from "../ImageCard/ImageCard.types";

export type ImageGalleryProps = {
  images: Image[];
  onClick: (image: Image) => void;
};
