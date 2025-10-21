import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/Logo_bianco.png";

const Footer = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("i18nextLng", selectedLang);
  };

  return (
    <div className="footer_area minimal" style={{ zIndex: 99 }}>
      <div className="container">
        <div className="coppyright">
          <div className="footer_logo">
            <img src={logo} alt="msuzan" />
          </div>

          {/* <div className="copy-right-text">
            <p>{t("footer_text")}</p>
          </div> */}

          <div className="footer_social_icon">
            <a
              href="https://github.com/emiliogambone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/emilio-gambone-41624458/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>

          <div className="language-selector mt-3">
            <select
              value={i18n.language}
              onChange={handleLanguageChange}
              className="form-select form-select-sm"
              style={{
                background: "transparent",
                color: "#fff",
                border: "3px solid #fff",
                borderRadius: "0",
                padding: "10px 10px",
                marginTop: "8px",
              }}
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
