import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";

function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);

  return <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />;
}

export default MobileNav;
