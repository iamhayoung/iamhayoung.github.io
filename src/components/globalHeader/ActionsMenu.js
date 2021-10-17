import React from "react";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./ActionsMenu.scss";

function ActionsMenu() {
  return (
    <div className="actions-menu">
      <a className="actions-menu__link" href="https://github.com/iamhayoung">
        <BsGithub />
      </a>
      <a className="actions-menu__link" href="mailto:hahhyoung@gmail.com">
        <HiOutlineMail />
      </a>
    </div>
  );
}

export default ActionsMenu;
