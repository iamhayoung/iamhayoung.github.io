import React from "react";
import { useMediaQuery } from "react-responsive";
import Nav from "./Nav";
import Logo from "./Logo";
import ActionsMenu from "./ActionsMenu";
import MobileNav from "../mobileNav";
import { BREAKPOINTS } from "../../constants/constants";
import "./index.scss";

function GlobalHeader({ siteTitle }) {
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.sm });

  return (
    <header className="global-header">
      <div className="global-header__inner">
        <div className="left-section">
          {!isMobile && <Nav />}
          {isMobile && <Logo siteTitle={siteTitle} />}
        </div>
        {!isMobile && <Logo siteTitle={siteTitle} />}
        <div className="right-section">
          {!isMobile && <ActionsMenu />}
          {isMobile && <MobileNav />}
        </div>
      </div>
    </header>
  );
}

export default GlobalHeader;
