import React from "react";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="mbm hidden-md hidden-lg header_area main-menu-area one_page mobile-menu-sticky">
      <div className="menu_area mobile-menu">
        <nav className="msuzan_menu main-search-menu">
          <ul className="main-menu sub-menu clearfix nav_scroll">
            <li>
              <a href="index-3.html">{t("menu.home")}</a>
            </li>
            <li>
              <a href="#about">{t("menu.about")}</a>
            </li>
            <li>
              <a href="#service">{t("menu.services")}</a>
            </li>
            <li>
              <a href="#contact">{t("menu.contact")}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
