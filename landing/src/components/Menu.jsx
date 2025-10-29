import React from "react";
import logo from "../assets/images/Logo_bianco.png";
import { useTranslation } from "react-i18next";

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="msuzan-main-menu one_page hidden-xs hidden-sm header--fixed headrooma full-width">
      <div className="msuzan_nav_area" style={{ backgroundColor: "#073B42" }}>
        <div className="container-fluid">
          <div className="row logo-left">
            {/* LOGO */}
            <div className="col-md-3 col-sm-3 col-xs-4">
              <div className="logo">
                <a className="main_sticky_main_l" href="#about" title="msuzan">
                  <img src={logo} alt="msuzan" />
                </a>
                <a className="main_sticky_l" href="#about" title="msuzan">
                  <img src={logo} alt="msuzan" />
                </a>
              </div>
            </div>

            {/* MAIN MENU */}
            <div className="col-md-9 col-sm-9 col-xs-8">
              <nav className="msuzan_menu main-search-menu">
                <ul className="main-menu sub-menu nav_scroll">
                  <li>
                    <a href="#about">{t("menu.home")}</a>
                  </li>
                  <li>
                    <a href="#about">{t("menu.about")}</a>
                  </li>
                  <li>
                    <a href="#service">{t("menu.services")}</a>
                  </li>
                  <li>
                    <a href="#blog">{t("menu.blog")}</a>
                  </li>
                  <li>
                    <a href="#contact">{t("menu.contact")}</a>
                  </li>
                  {/* <li>
                    <a href="">
                      <i className="fa fa-bars"></i>
                    </a>
                  </li> */}
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
