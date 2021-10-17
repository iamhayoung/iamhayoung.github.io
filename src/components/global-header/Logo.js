import React from "react";
import { Link } from "gatsby";
import "./Logo.scss";

function Logo({ siteTitle }) {
  return (
    <h1 className="logo">
      <Link to="/">{siteTitle}</Link>
    </h1>
  );
}

export default Logo;
