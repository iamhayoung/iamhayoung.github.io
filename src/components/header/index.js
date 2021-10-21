import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import PcNav from "./PcNav";
import Logo from "./Logo";
import PcActionsMenu from "./PcActionsMenu";
import { BREAKPOINTS } from "../../constants/constants";
import "./index.scss";

function Header({ siteTitle }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.sm });

  const updateScrollPosition = () => setScrollPosition(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, [scrollPosition]);

  return (
    <header className={`header ${scrollPosition > 10 ? "blur" : ""}`}>
      <div className="header__inner">
        <div className="left-section">
          {!isMobile && <PcNav />}
          {isMobile && <Logo siteTitle={siteTitle} />}
        </div>
        {!isMobile && <Logo siteTitle={siteTitle} />}
        <div className="right-section">{!isMobile && <PcActionsMenu />}</div>
      </div>
    </header>
  );
}

export default Header;
