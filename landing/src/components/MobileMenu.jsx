import React from 'react';

const MobileMenu = () => {
  return (
    <div className="mbm hidden-md hidden-lg header_area main-menu-area one_page">
      <div className="menu_area mobile-menu">
        <nav className="msuzan_menu main-search-menu">
          <ul className="main-menu sub-menu clearfix nav_scroll">
            <li>
              <a href="index-3.html">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            {/* <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
