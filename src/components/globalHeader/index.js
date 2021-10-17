import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import ActionsMenu from "./ActionsMenu";
import "./index.scss";

function GlobalHeader({ siteTitle }) {
  return (
    <header className="global-header">
      <div className="global-header__inner">
        <div className="left-section">
          <Nav />
        </div>
        <div className="middle-section">
          <Logo siteTitle={siteTitle} />
        </div>
        <div className="right-section">
          <ActionsMenu />
        </div>
      </div>
    </header>
  );
}

export default GlobalHeader;
