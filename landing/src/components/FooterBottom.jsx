import React from "react";
import { useTranslation } from "react-i18next";

const FooterBottom = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="copy-right-content">
              {/* FOOTER COPYRIGHT TEXT */}
              {/* <p>{t("footer.copyright")}</p> */}
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="footer-menu">
              <ul className="text-right">
                <li>
                  <a href="#">{t("menu.home")}</a>
                </li>
                <li>
                  <a href="#about">{t("menu.about")}</a>
                </li>
                <li>
                  <a href="#service">{t("menu.services")}</a>
                </li>
                {/* <li><a href="#portfolio">{t("menu.portfolio")}</a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
