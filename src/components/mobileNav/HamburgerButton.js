import React from "react";
import "./HamburgerButton.scss";

function HamburgerButton({ isOpen, toggleMenu, toggleKeyboardFocus }) {
  return (
    <div
      onClick={toggleMenu}
      onKeyDown={toggleKeyboardFocus}
      className={`hamburger-button ${isOpen ? "burger--active" : ""}`}
    >
      <div className="hamburger-button__inner">
        <div className="top-bun"></div>
        <div className="bottom-bun"></div>
      </div>
    </div>
  );
}

export default HamburgerButton;
