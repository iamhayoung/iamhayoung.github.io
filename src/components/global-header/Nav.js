import React from "react";
import { Link } from "gatsby";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/about">
        about
      </Link>
      <Link className="nav__link" to="/posts">
        posts
      </Link>
    </nav>
  );
}

export default Nav;
