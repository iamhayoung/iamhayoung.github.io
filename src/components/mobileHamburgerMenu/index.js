import React, { useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import MobileDrawer from "./MobileDrawer";

function MobileHamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);

  const toggleKeyboardFocus = event => {
    // TODO: Accessibility를 고려해서 키보드로 메뉴 닫는 로직을 고도화 및 메뉴 선택 가능하도록 구현
    if (event.keyCode === 27) setOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("modal-open", isOpen);
  }, [isOpen]);

  return (
    <>
      <HamburgerButton
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        toggleKeyboardFocus={toggleKeyboardFocus}
      />
      {isOpen && <MobileDrawer />}
    </>
  );
}

export default MobileHamburgerMenu;
