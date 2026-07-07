"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

const LANGUAGES = [
  { code: "en", label: "EN", flag: "gb" },
  { code: "it", label: "IT", flag: "it" },
  { code: "es", label: "ES", flag: "es" },
];

const Menu = () => {
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setLangOpen(false);
  };

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <div className="msuzan-main-menu one_page hidden-xs hidden-sm header--fixed headrooma full-width">
      <div className="msuzan_nav_area">
        <div className="container-fluid">
          <div className="row logo-left">
            <div className="col-md-3 col-sm-3 col-xs-4">
              <div className="logo">
                <Link
                  className="main_sticky_main_l"
                  href="/"
                  title="msuzan"
                >
                  <div style={{ position: "relative", width: 60, height: 60 }}>
                    <Image
                      src="/assets/images/Logo_bianco.png"
                      alt="logo"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </Link>
                <Link className="main_sticky_l" href="/#about" title="msuzan">
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
            </div>

            <div className="col-md-9 col-sm-9 col-xs-8">
              <nav className="msuzan_menu main-search-menu">
                <ul className="main-menu sub-menu nav_scroll">
                  <li>
                    <Link href="/">{t("menu.home")}</Link>
                  </li>
                  <li>
                    <Link href="/work-with-me">{t("menu.about")}</Link>
                  </li>
                  <li>
                    <Link href="/servizi">{t("menu.services")}</Link>
                  </li>
                  <li>
                    <Link href="/progetti">{t("progetti.pageTitle")}</Link>
                  </li>
                  <li>
                    <Link href="/#contact">{t("menu.contact")}</Link>
                  </li>
                  <li className="nav-language-item" ref={langRef}>
                    <button
                      type="button"
                      className="nav-lang-trigger"
                      onClick={() => setLangOpen(!langOpen)}
                      aria-haspopup="listbox"
                      aria-expanded={langOpen}
                    >
                      <img
                        src={`https://flagcdn.com/w40/${currentLang.flag}.png`}
                        alt={currentLang.label}
                        className="nav-lang-flag"
                      />
                      <span>{currentLang.label}</span>
<ChevronDown
                        className={` nav-lang-arrow ${
                          langOpen ? "is-open" : ""
                        }`}
                      ></ChevronDown>
                    </button>

                    {langOpen && (
                      <ul className="nav-lang-options" role="listbox">
                        {LANGUAGES.map((lang) => (
                          <li key={lang.code}>
                            <button
                              type="button"
                              className={`nav-lang-option ${
                                lang.code === i18n.language ? "is-active" : ""
                              }`}
                              onClick={() => selectLanguage(lang.code)}
                            >
                              <img
                                src={`https://flagcdn.com/w40/${lang.flag}.png`}
                                alt={lang.label}
                                className="nav-lang-flag"
                              />
                              <span>{lang.label}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
