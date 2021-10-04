import React from "react";
import { Link } from "gatsby";
import "./style.scss";

function PageHeader({ siteTitle }) {
  return (
    <header className="page-header">
      <div className="front-section">
        <Link className="link-home" to="/">
          {siteTitle}
        </Link>
      </div>
      <nav className="page-header-nav">
        <Link className="link" to="/about">
          about
        </Link>
        <Link className="link" to="/posts">
          posts
        </Link>
      </nav>
    </header>
  );
}

export default PageHeader;
