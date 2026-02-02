import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- add this
import { trackEvent } from "../utils/gaEvents"; // <-- import helper

import cvEn from "../assets/EMILIO_GAMBONE_en.pdf";
import cvIt from "../assets/EMILIO_GAMBONE_it.pdf";

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [showCv, setShowCv] = useState(false);
  const navigate = useNavigate(); // <-- add this

  const cvFile = currentLang === "it" ? cvIt : cvEn;

  const goToWorkWithMe = () => {
    trackEvent({
      category: "About Page",
      action: "Click Work With Me",
      label: "About Section Button",
    });
    navigate("/work-with-me");
    window.scrollTo({ top: 0, behavior: "smooth" }); // <-- scroll to top
  };

  return (
    <div className="about_area" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="single_about_area">
              <div className="single_about_content">
                <div className="single_about_title">
                  {/* <h3>{t("about.greeting")}</h3> */}
                  <h3>{t("about.name")}</h3>
                </div>
                <div
                  className="single_about_content_text about-text"
                  style={{ textAlign: "left", color: "white" }}
                  dangerouslySetInnerHTML={{ __html: t("about.description") }}
                ></div>
                {/* {showCv && (
                  <iframe
                    src={cvFile}
                    title="CV Preview"
                    width="100%"
                    height="600px"
                    style={{ border: "none", marginTop: "20px" }}
                  ></iframe>
                )} */}

                {/* <div className="single_about_btn">
                  <a
                    className="active"
                    onClick={() => setShowCv(!showCv)}
                    style={{ cursor: "pointer" }}
                  >
                    {showCv
                      ? t("about.hideCvButton") || "Hide CV"
                      : t("about.showCvButton") || "View CV"}
                  </a>
                </div> */}
                <div className="single_about_btn">
                  <a
                    // className="active"
                    href={cvFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      trackEvent({
                        category: "About Page",
                        action: "Click CV",
                        label: `CV ${currentLang.toUpperCase()}`,
                      });
                    }}
                  >
                    {t("about.cvButton")}
                  </a>
                  {/* <a href="mailto:emilio.gambone@gmail.com">
                    {t("about.hireButton")}
                  </a> */}
                  <a
                    // className="active"
                    onClick={goToWorkWithMe}
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                  >
                    {t("about.workWithMeButton") || "Work With Me"}
                  </a>
                </div>
                {/* <div className="single_about_btn"></div> */}
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
