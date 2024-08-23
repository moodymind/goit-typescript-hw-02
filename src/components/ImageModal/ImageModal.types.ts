import Image from "../ImageCard/ImageCard.types";

export type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  image?: Image | null;
};
