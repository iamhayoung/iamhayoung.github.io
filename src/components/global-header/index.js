import React from "react";
import { Link } from "gatsby";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import "./style.scss";

function GlobalHeader({ siteTitle }) {
  return (
    <header className="global-header">
      <div className="global-header__inner">
        <nav className="nav">
          <Link className="nav__link" to="/about">
            about
          </Link>
          <Link className="nav__link" to="/posts">
            posts
          </Link>
        </nav>
        <h1 className="global-header__site-title">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className="actions">
          <a className="actions__link" href="https://github.com/iamhayoung">
            <BsGithub />
          </a>
          <a className="actions__link" href="mailto:hahhyoung@gmail.com">
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </header>
  );
}

export default GlobalHeader;
