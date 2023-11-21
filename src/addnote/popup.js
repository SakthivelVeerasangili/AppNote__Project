import React from "react";
import "./popup.css";

function Popup({ children, title, handleClose }) {
  return (
    <>
      <div className="popup__overlay" onClick={handleClose}></div>
      <div className="popup__contant">
        <div className="popup__header__left">
          <h1>{title || "title"}</h1>
          <button id="closebtn" onClick={handleClose} className="popup__header__close">
            X
          </button>
        </div>
        {children}
      </div>
      
    </>
  );
}

export default Popup;
