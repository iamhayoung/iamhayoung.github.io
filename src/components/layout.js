import * as React from "react";
import GlobalHeader from "./global-header";
import PageHeader from "./page-header";

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
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
