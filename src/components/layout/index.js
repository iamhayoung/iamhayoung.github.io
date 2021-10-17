import * as React from "react";
import GlobalHeader from "../globalHeader";
import GlobalFooter from "../global-footer";
import "./style.scss";

const Layout = ({ title, children }) => {
  return (
    <>
      <GlobalHeader siteTitle={title || `Title`} />
      <div className="global-wrapper">
        <main>{children}</main>
        <GlobalFooter />
      </div>
    </>
  );
};

export default Layout;
