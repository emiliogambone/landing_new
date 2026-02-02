import React from "react";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import { trackEvent } from "../utils/gaEvents"; // import from your utils

const WorkWithMe = () => {
  const { t } = useTranslation();

  const services = t("workWithMe.servicesOverview.services", {
    returnObjects: true,
  });

  const trackClick = (action, label) => {
    ReactGA.event({
      category: "CTA",
      action,
      label,
    });
  };

  return (
    <section className="work-with-me">
      <div className="hero">
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

      <div className="services-overview">
        <h3>{t("workWithMe.servicesOverview.title")}</h3>
        <ul>
          {services.map((s, idx) => (
            <li key={idx}>
              <strong>{s.title}:</strong> {s.description}
            </li>
          ))}
        </ul>
      </div>

      <div id="contact" className="contact-cta">
        <h3>{t("workWithMe.contactCTA.title")}</h3>
        {/* <p>{t("workWithMe.contactCTA.description")}</p> */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a
            href="tel:+393493554864"
            className="cta-button"
            style={{ backgroundColor: "#F97316" }}
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
            className="cta-button"
            style={{ backgroundColor: "#F97316" }}
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
