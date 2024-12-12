import React from 'react';
import logo from '../assets/images/Logo_bianco.png';

const MainMenu = () => {
  return (
    <div className="msuzan-main-menu one_page hidden-xs hidden-sm header--fixed headrooma header_transparent full-width">
      <div className="msuzan_nav_area">
        <div className="container-fluid">
          <div className="row logo-left">
            {/* LOGO */}
            <div className="col-md-3 col-sm-3 col-xs-4">
              <div className="logo">
                <a className="main_sticky_main_l" href="index.html" title="msuzan">
                <img src={logo} alt="msuzan" />
                </a>
                <a className="main_sticky_l" href="index.html" title="msuzan">
                <img src={logo} alt="msuzan" />
                </a>
              </div>
            </div>

            {/* MAIN MENU */}
            <div className="col-md-9 col-sm-9 col-xs-8">
              <nav className="msuzan_menu main-search-menu">
                <ul className="main-menu sub-menu nav_scroll">
                  <li>
                    <a href="index-3.html">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#service">Servizi</a>
                  </li>
                  {/* <li>
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="#blog">Blog</a>
                  </li> */}
                  <li>
                    <a href="#contact">Contatti</a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-bars"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* END MAIN MENU */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
