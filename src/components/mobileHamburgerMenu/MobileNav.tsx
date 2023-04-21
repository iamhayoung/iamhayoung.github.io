import React from 'react';
import Link from 'next/link';
import './MobileNav.scss';

function MobileNav() {
  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav__list">
        <li className="mobile-nav__item">
          <Link className="mobile-nav__link" to="/about">
            about
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link className="mobile-nav__link" to="/posts">
            posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
