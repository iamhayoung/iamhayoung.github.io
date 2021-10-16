import * as React from "react";
import GlobalHeader from "../global-header";
import PageHeader from "../page-header";
import GlobalFooter from "../global-footer";
import "./style.scss";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper">
      {isRootPath ? (
        <GlobalHeader siteTitle={title || `Title`} />
      ) : (
        <PageHeader siteTitle={title || `Title`} />
      )}
      <main>{children}</main>
      <GlobalFooter />
    </div>
  );
};

export default Layout;
