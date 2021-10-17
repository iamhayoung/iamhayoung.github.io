import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";

function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);

  const toggleKeyboardFocus = event => {
    // TODO: Accessibility를 고려해서 키보드로 메뉴 닫는 로직을 고도화 및 메뉴 선택 가능하도록 구현
    if (event.keyCode === 27) setOpen(false);
  };

  return (
    <HamburgerButton
      isOpen={isOpen}
      toggleMenu={toggleMenu}
      toggleKeyboardFocus={toggleKeyboardFocus}
    />
  );
}

export default MobileNav;
