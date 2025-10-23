import { useTranslation } from "react-i18next";
import cvEn from "../assets/EMILIO_GAMBONE_en.pdf";
import cvIt from "../assets/EMILIO_GAMBONE_it.pdf";

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const cvFile = currentLang === "it" ? cvIt : cvEn;

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
                  <a className="active" href={cvFile} download>
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
