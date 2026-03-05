import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/Logo_bianco.png";

const MobileMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="mbm hidden-md hidden-lg header_area main-menu-area one_page mobile-menu-sticky">
      <div className="menu_area mobile-menu">
        {/* Logo on the left */}
        <div className="mobile-logo">
          <a href="#about">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* Hamburger icon on the right */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <nav className="msuzan_menu main-search-menu mobile-dropdown">
            <ul className="main-menu sub-menu clearfix nav_scroll">
              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                >
                  {t("menu.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                >
                  {t("menu.about")}
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  onClick={() => setIsOpen(false)}
                >
                  {t("menu.services")}
                </a>
              </li>
              {/* <li style={{ padding: "6px 20px" }}>
                <a
                  href="#blog"
                  onClick={() => setIsOpen(false)}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {t("menu.blog")}
                </a>
              </li> */}
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                >
                  {t("menu.contact")}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
