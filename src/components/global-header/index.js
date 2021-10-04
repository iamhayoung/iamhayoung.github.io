import React from "react";
import { Link } from "gatsby";
import "./style.scss";

function GlobalHeader({ siteTitle }) {
  return (
    <header className="global-header">
      <h1 className="main-heading">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav className="main-header-nav">
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

export default GlobalHeader;
