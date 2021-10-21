import React from "react";
import MobileNav from "./MobileNav";
import MobileActionsMenu from "./MobileActionsMenu";
import "./MobileDrawer.scss";

function MobileDrawer() {
  return (
    <div className="mobile-drawer">
      <div className="mobile-drawer__inner">
        <MobileNav />
        <MobileActionsMenu />
      </div>
    </div>
  );
}

export default MobileDrawer;
