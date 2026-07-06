"use client";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/utils/gaEvents";

const CV_PATHS = {
  it: "/assets/EMILIO_GAMBONE_it.pdf",
  en: "/assets/EMILIO_GAMBONE_en.pdf",
};

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const [showCv, setShowCv] = useState(false);
  const router = useRouter();

  const cvFile = currentLang === "it" ? CV_PATHS.it : CV_PATHS.en;

  const goToWorkWithMe = () => {
    trackEvent({
      category: "About Page",
      action: "Click Work With Me",
      label: "About Section Button",
    });
    router.push("/work-with-me");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="about_area" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="single_about_area">
              <div className="single_about_content">
                <div className="single_about_title">
                  <h3>{t("about.name")}</h3>
                </div>
                <div
                  className="single_about_content_text about-text"
                  dangerouslySetInnerHTML={{ __html: t("about.description") }}
                ></div>

                <div className="single_about_btn">
                  <a
                    className="active"
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
                  <button
                    type="button"
                    className="active about-action-btn"
                    onClick={goToWorkWithMe}
                  >
                    {t("about.workWithMeButton") || "Work With Me"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
