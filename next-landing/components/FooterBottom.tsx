"use client";
import { useTranslation } from "react-i18next";

const FooterBottom = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="copy-right-content"></div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="footer-menu">
              {/* <ul className="text-right">
                <li>
                  <a href="#">{t("menu.home")}</a>
                </li>
                <li>
                  <a href="#about">{t("menu.about")}</a>
                </li>
                <li>
                  <a href="/servizi">{t("menu.services")}</a>
                </li>
                                <li>
                  <a href="/progetti">{t("progetti.pageTitle")}</a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;