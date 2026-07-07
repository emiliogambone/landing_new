"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import {
  ChevronDown
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const LANGUAGES = [
  { code: "en", label: "EN", flag: "gb" },
  { code: "it", label: "IT", flag: "it" },
  { code: "es", label: "ES", flag: "es" },
];

const Footer = () => {
  const { i18n } = useTranslation();

  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectLanguage = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    setLangOpen(false);
  };

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <div className="footer_area minimal">
      <div className="container">
        <div className="coppyright">
          <div className="footer_logo">
            <div style={{ position: "relative", width: 60, height: 60 }}>
              <Image
                src="/assets/images/Logo_bianco.png"
                alt="logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="footer_social_icon">
            <a
              href="https://github.com/emiliogambone"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
<FaGithub size={20} />            </a>

            <a
              href="https://www.linkedin.com/in/emilio-gambone-41624458/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
<FaLinkedin size={20} />            </a>
          </div>

          <div className="footer-language-selector mt-3" ref={langRef}>
            <button
              type="button"
              className="footer-lang-trigger"
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
              <ul className="footer-lang-options" role="listbox">
                {LANGUAGES.map((lang) => (
                  <li key={lang.code}>
                    <button
                      type="button"
                      className={`footer-lang-option ${
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
