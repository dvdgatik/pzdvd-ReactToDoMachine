import React from "react";
import ReactDOM, { createPortal } from "react-dom";

export const Modal = ({ children }) => {
  return createPortal(
    <div className="Modal">{children}</div>,
    document.getElementById("modal")
  );
};
