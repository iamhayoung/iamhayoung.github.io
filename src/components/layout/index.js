import * as React from "react";
import Header from "../header";
import Footer from "../footer";
import "./style.scss";

const Layout = ({ title, children }) => {
  return (
    <>
      <Header siteTitle={title || `Title`} />
      <div className="global-wrapper">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
