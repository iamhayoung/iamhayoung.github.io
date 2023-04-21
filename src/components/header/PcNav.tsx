import React from 'react';
import Link from 'next/link';
import './PcNav.scss';

function PcNav() {
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

export default PcNav;
