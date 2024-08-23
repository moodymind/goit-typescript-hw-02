import React from "react";
import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div style={{ textAlign: "center", color: "red" }}>{message}</div>
);

export default ErrorMessage;
