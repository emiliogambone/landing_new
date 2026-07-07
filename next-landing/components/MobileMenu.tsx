"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  X,
  Menu,
  ChevronDown
} from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "English", flag: "gb" },
  { code: "it", label: "Italiano", flag: "it" },
  { code: "es", label: "Español", flag: "es" },
];

const MobileMenu = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setLangOpen(false);
  };

  const selectLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setLangOpen(false);
  };

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const menuPortal = mounted
    ? createPortal(
        <>
          <div
            className={`side-menu-overlay ${isOpen ? "is-open" : ""}`}
            onClick={closeMenu}
          />
          <nav className={`side-menu-panel ${isOpen ? "is-open" : ""}`}>
            <button
              className="side-menu-close"
              onClick={closeMenu}
              aria-label="Chiudi menu"
            >
<X size={20} />
            </button>

            <ul className="side-menu-list">
              <li>
                <Link href="/" onClick={closeMenu}>
                  {t("menu.home")}
                </Link>
              </li>
              <li>
                <Link href="/work-with-me" onClick={closeMenu}>
                  {t("menu.about")}
                </Link>
              </li>
              <li>
                <Link href="/servizi" onClick={closeMenu}>
                  {t("menu.services")}
                </Link>
              </li>
              <li>
                <Link href="/progetti" onClick={closeMenu}>
                  Progetti
                </Link>
              </li>
              <li>
                <Link href="/#contact" onClick={closeMenu}>
                  {t("menu.contact")}
                </Link>
              </li>
            </ul>

            <div className="side-menu-lang-select" ref={langRef}>
              <button
                type="button"
                className="side-menu-lang-trigger"
                onClick={() => setLangOpen(!langOpen)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <img
                  src={`https://flagcdn.com/w40/${currentLang.flag}.png`}
                  alt={currentLang.label}
                  className="side-menu-flag"
                />
                <span>{currentLang.label}</span>
                <ChevronDown
                  className={` side-menu-lang-arrow ${
                    langOpen ? "is-open" : ""
                  }`}
                ></ChevronDown>
              </button>

              {langOpen && (
                <ul className="side-menu-lang-options" role="listbox">
                  {LANGUAGES.map((lang) => (
                    <li key={lang.code}>
                      <button
                        type="button"
                        className={`side-menu-lang-option ${
                          lang.code === i18n.language ? "is-active" : ""
                        }`}
                        onClick={() => selectLanguage(lang.code)}
                      >
                        <img
                          src={`https://flagcdn.com/w40/${lang.flag}.png`}
                          alt={lang.label}
                          className="side-menu-flag"
                        />
                        <span>{lang.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>
        </>,
        document.body,
      )
    : null;

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
<Menu size={24} />        </div>
      </div>

      {menuPortal}
    </div>
  );
};

export default MobileMenu;
