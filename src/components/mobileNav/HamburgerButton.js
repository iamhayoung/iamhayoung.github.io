import React, { useState } from "react";
import "./HamburgerButton.scss";

function HamburgerButton() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => (isOpen ? setOpen(false) : setOpen(true));

  return (
    <div
      className={`hamburger-button ${isOpen ? "burger--active" : ""}`}
      onClick={toggleMenu}
    >
      <div className="hamburger-button__inner">
        <div className="top-bun"></div>
        <div className="bottom-bun"></div>
      </div>
    </div>
  );
}

export default HamburgerButton;
