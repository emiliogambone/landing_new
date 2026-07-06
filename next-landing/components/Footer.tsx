"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Footer = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("i18nextLng", selectedLang);
  };

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
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/emilio-gambone-41624458/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>

          <div className="language-selector mt-3">
            <select
              value={i18n.language}
              onChange={handleLanguageChange}
              className="form-select form-select-sm modern-language-select"
            >
              <option value="en">English</option>
              <option value="it">Italiano</option>
              <option value="es">Espanol</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
