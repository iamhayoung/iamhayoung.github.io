import React from 'react';
import Link from 'next/link';
import './Logo.scss';

function Logo({ siteTitle }) {
  return (
    <h1 className="logo">
      <Link to="/">{siteTitle}</Link>
    </h1>
  );
}

export default Logo;
