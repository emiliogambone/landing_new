import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/Logo_bianco.png";

const MobileMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="mbm hidden-md hidden-lg header_area main-menu-area one_page mobile-menu-sticky">
      <div
        className="menu_area mobile-menu"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 20px",
          position: "relative",
          background: "#073B42", // header background
        }}
      >
        {/* Logo on the left */}
        <div className="mobile-logo">
          <a href="index-3.html">
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
          </a>
        </div>

        {/* Hamburger icon on the right */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <i
            className="fa fa-bars"
            style={{ fontSize: "28px", color: "#fff", cursor: "pointer" }}
          ></i>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <nav
            className="msuzan_menu main-search-menu"
            style={{
              position: "absolute",
              top: "60px",
              left: 0,
              width: "100%",
              background: "#073B42",
              zIndex: 999,
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)", // subtle shadow
            }}
          >
            <ul
              className="main-menu sub-menu clearfix nav_scroll"
              style={{
                display: "flex",
                flexDirection: "column",
                listStyle: "none",
                margin: 0,
                padding: "5px 0", // reduce top/bottom padding for the list
              }}
            >
              <li style={{ padding: "6px 20px" }}>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {t("menu.home")}
                </a>
              </li>
              <li style={{ padding: "6px 20px" }}>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {t("menu.about")}
                </a>
              </li>
              <li style={{ padding: "6px 20px" }}>
                <a
                  href="#service"
                  onClick={() => setIsOpen(false)}
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  {t("menu.services")}
                </a>
              </li>
              <li style={{ padding: "6px 20px" }}>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  style={{ color: "#fff", textDecoration: "none" }}
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
