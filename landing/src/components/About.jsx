import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about_area" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="single_about_area">
              <div className="single_about_content">
                <div className="single_about_title">
                  <h3>{t("about.greeting")}</h3>
                  <h2>{t("about.name")}</h2>
                </div>
                <div className="single_about_content_text about-text">
                  <p>{t("about.description")}</p>
                </div>
                <div className="single_about_btn">
                  <a className="active" href="#">
                    {t("about.cvButton")}
                  </a>
                  <a href="mailto:emilio.gambone@gmail.com">
                    {t("about.hireButton")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Skills section commented out */}
        </div>
      </div>
    </div>
  );
};

export default About;
