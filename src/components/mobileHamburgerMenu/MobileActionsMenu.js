import React from "react";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./MobileActionsMenu.scss";

function MobileActionsMenu() {
  return (
    <div className="mobile-actions-menu">
      <a
        className="mobile-actions-menu__link"
        href="https://github.com/iamhayoung"
      >
        <BsGithub />
      </a>
      <a
        className="mobile-actions-menu__link"
        href="mailto:hahhyoung@gmail.com"
      >
        <HiOutlineMail />
      </a>
    </div>
  );
}

export default MobileActionsMenu;
