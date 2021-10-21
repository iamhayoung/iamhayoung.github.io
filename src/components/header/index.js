import React from "react";
import { useMediaQuery } from "react-responsive";
import PcNav from "./PcNav";
import Logo from "./Logo";
import PcActionsMenu from "./PcActionsMenu";
import MobileHamburgerMenu from "../mobileHamburgerMenu";
import { BREAKPOINTS } from "../../constants/constants";
import "./index.scss";

function Header({ siteTitle }) {
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.sm });

  return (
    <header className="header">
      <div className="header__inner">
        <div className="left-section">
          {!isMobile && <PcNav />}
          {isMobile && <Logo siteTitle={siteTitle} />}
        </div>
        {!isMobile && <Logo siteTitle={siteTitle} />}
        <div className="right-section">
          {!isMobile && <PcActionsMenu />}
          {isMobile && <MobileHamburgerMenu />}
        </div>
      </div>
    </header>
  );
}

export default Header;
