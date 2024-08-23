import React from "react";
import "./LoadMoreBtn.modules.css";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => (
  <button onClick={onClick}>Load More...</button>
);

export default LoadMoreBtn;
