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
        <p className="work-section-eyebrow">{t("workWithMe.hero.eyebrow")}</p>
        <h1>{t("workWithMe.hero.title")}</h1>
        <h2>{t("workWithMe.hero.subtitle")}</h2>
        <p className="work-section-lead">{t("workWithMe.hero.description")}</p>
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
        <p className="work-section-eyebrow">{t("workWithMe.howIWork.eyebrow")}</p>
        <h3>{t("workWithMe.howIWork.title")}</h3>
        <p className="work-section-lead">{t("workWithMe.howIWork.intro")}</p>
        <div className="work-with-me-how-grid">
          {t("workWithMe.howIWork.steps", { returnObjects: true }).map(
            (step, idx) => (
              <article className="work-with-me-how-card" key={step.title}>
                <p className="work-step-index">0{idx + 1}</p>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </article>
            )
          )}
        </div>
      </div>

      <div className="services-overview">
        <p className="work-section-eyebrow">
          {t("workWithMe.servicesOverview.eyebrow")}
        </p>
        <h3>{t("workWithMe.servicesOverview.title")}</h3>
        <p className="work-section-lead">
          {t("workWithMe.servicesOverview.subtitle")}
        </p>
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
        <p className="work-section-eyebrow">{t("workWithMe.contactCTA.eyebrow")}</p>
        <h3>{t("workWithMe.contactCTA.title")}</h3>
        <p className="work-section-lead">{t("workWithMe.contactCTA.description")}</p>
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
