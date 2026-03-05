import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { trackEvent } from "../utils/gaEvents"; // import from your utils

const WorkWithMe = () => {
  const { t } = useTranslation();

  const services = t("workWithMe.servicesOverview.services", {
    returnObjects: true,
  });

  return (
    <section className="work-with-me">
      <div className="work-with-me-top-nav">
        <Link to="/" className="work-with-me-back" aria-label="Back to home">
          <span className="work-with-me-back-arrow">←</span>
          <span>{t("menu.home")}</span>
        </Link>
      </div>

      <div className="work-with-me-hero">
        <h1>{t("workWithMe.hero.title")}</h1>
        <h2>{t("workWithMe.hero.subtitle")}</h2>
        <p>{t("workWithMe.hero.description")}</p>
        <a
          href="#contact"
          className="cta-button"
          onClick={() =>
            trackEvent({
              category: "CTA",
              action: "Scroll to Contact",
              label: "WorkWithMe Hero CTA",
            })
          }
        >
          {t("workWithMe.hero.ctaButton")}
        </a>
      </div>

      <div className="work-with-me-how">
        <h3>{t("workWithMe.howIWork.title")}</h3>
        <div className="work-with-me-how-grid">
          <article className="work-with-me-how-card">
            <p>{t("workWithMe.howIWork.description1")}</p>
          </article>
          <article className="work-with-me-how-card">
            <p>{t("workWithMe.howIWork.description2")}</p>
          </article>
        </div>
      </div>

      <div className="services-overview">
        <h3>{t("workWithMe.servicesOverview.title")}</h3>
        <ul className="work-with-me-services-list">
          {services.map((s, idx) => (
            <li key={idx} className="work-service-item">
              <p className="work-service-title">{s.title}</p>
              <p className="work-service-description">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div id="contact" className="contact-cta">
        <h3>{t("workWithMe.contactCTA.title")}</h3>
        {/* <p>{t("workWithMe.contactCTA.description")}</p> */}
        <div className="work-with-me-contact-actions">
          <a
            href="tel:+393493554864"
            className="cta-button contact-primary"
            onClick={() =>
              trackEvent({
                category: "CTA",
                action: "Call Button Click",
                label: "WorkWithMe Contact",
              })
            }
          >
            {t("workWithMe.contactCTA.callButton")}
          </a>
          <a
            href="mailto:emilio.gambone@gmail.com"
            className="cta-button contact-ghost"
            onClick={() =>
              trackEvent({
                category: "CTA",
                action: "Email Button Click",
                label: "WorkWithMe Contact",
              })
            }
          >
            {t("workWithMe.contactCTA.emailButton")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
