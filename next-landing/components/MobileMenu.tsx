"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  return (
    <div className="mbm hidden-md hidden-lg header_area main-menu-area one_page mobile-menu-sticky">
      <div className="menu_area mobile-menu">
        <div className="mobile-logo">
          <Link href="/#about">
            <div style={{ position: "relative", width: 60, height: 60 }}>
              <Image
                src="/assets/images/Logo_bianco.png"
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {isOpen && (
          <nav className="msuzan_menu main-search-menu mobile-dropdown">
            <ul className="main-menu sub-menu clearfix nav_scroll">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  {t("menu.home")}
                </Link>
              </li>
              <li>
                <Link href="/#about" onClick={() => setIsOpen(false)}>
                  {t("menu.about")}
                </Link>
              </li>
              <li>
                <Link href="/servizi" onClick={() => setIsOpen(false)}>
                  {t("menu.services")}
                </Link>
              </li>
              <li>
                <Link href="/progetti" onClick={() => setIsOpen(false)}>
                  Progetti
                </Link>
              </li>
              <li>
                <Link href="/#contact" onClick={() => setIsOpen(false)}>
                  {t("menu.contact")}
                </Link>
              </li>
            </ul>
            <div className="mobile-language-switch">
              <select
                value={i18n.language}
                onChange={handleLanguageChange}
                aria-label="Select language"
              >
                <option value="en">🇬🇧 English</option>
                <option value="it">🇮🇹 Italiano</option>
                <option value="es">🇪🇸 Español</option>
              </select>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
