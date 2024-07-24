import React from "react";
import Modal from "react-modal";
import "./ImageModal.modules.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <img src={image.urls.regular} alt={image.alt_description} />
    <p>Author: {image.user.name}</p>
    <p>Likes: {image.likes}</p>
    <button onClick={onRequestClose}>Close</button>
  </Modal>
);

export default ImageModal;
