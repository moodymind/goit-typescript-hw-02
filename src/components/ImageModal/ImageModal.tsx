import React from "react";
import Modal from "react-modal";
import "./ImageModal.modules.css";
import { ImageModalProps } from "./ImageModal.types";

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="ImageModal"
      overlayClassName="ImageModalOverlay"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
